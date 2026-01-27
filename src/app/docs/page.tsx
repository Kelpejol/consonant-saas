import Link from "next/link"
import { CodeBlock } from "@/components/ui/code-block"

export default function IntroductionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Introduction to Consonant</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-200">
        Consonant is a <strong>real-time AI cost enforcement platform</strong> designed for B2B SaaS companies. It sits between your application and AI providers, tracking costs per customer and enforcing spending limits in real-time.
      </p>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">The Problem We Solve</h2>
        <p className="text-gray-600 dark:text-gray-200">
          When you add AI features to your SaaS product, you typically charge customers a flat monthly rate (e.g., $50/user). But AI API costs are <strong>completely variable</strong>—some customers cost 10x or even 100x more than others.
        </p>
        <p className="text-gray-600 dark:text-gray-200">
          Without Consonant, you discover these "vampire customers" 30 days later when your AI bill arrives. By then, you've already lost money.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">How Consonant Works</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-600 dark:text-gray-200">
          <li><strong>Install our SDK</strong> — Wrap your AI client with 3 lines of code</li>
          <li><strong>Track automatically</strong> — Every request is attributed to a customer</li>
          <li><strong>Enforce limits</strong> — Block requests when customers exceed their budget</li>
        </ol>

        <CodeBlock
          language="typescript"
          filename="example.ts"
          code={`import { Consonant } from '@consonant/sdk'

const consonant = new Consonant({
  apiKey: process.env.CONSONANT_KEY,
  customerIdExtractor: (ctx) => ctx.userId
})

// Wrap your AI client
const ai = consonant.wrap(openaiClient)

// Now all requests are tracked & enforced
const response = await ai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: prompt }]
})`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Key Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-200">
          <li><strong>Per-customer profitability</strong> — See exactly which customers are profitable</li>
          <li><strong>Real-time enforcement</strong> — Block requests when budgets run out</li>
          <li><strong>Automated model switching</strong> — Downgrade expensive users to cheaper models</li>
          <li><strong>Smart alerts</strong> — Get notified about anomalies and threshold violations</li>
          <li><strong>Sub-5ms latency</strong> — Balance checks complete in under 5 milliseconds</li>
        </ul>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Next Steps</h2>
        <ul className="list-disc pl-6 space-y-2 text-blue-600 dark:text-blue-400">
          <li><Link href="/docs/quickstart">Quick Start Guide</Link> — Get up and running in 5 minutes</li>
          <li><Link href="/docs/sdk/typescript">TypeScript SDK</Link> — Full SDK documentation</li>
          <li><Link href="/docs/concepts/how-it-works">Core Concepts</Link> — Understand the system architecture</li>
        </ul>
      </div>
    </div>
  )
}
