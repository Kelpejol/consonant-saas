import { CodeBlock } from "@/components/ui/code-block"

export default function HowItWorksPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">How It Works</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-200">
        Understand the architecture and flow of Consonant's real-time cost tracking.
      </p>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Architecture Overview</h2>
        <p className="text-gray-600 dark:text-gray-200">
          Consonant sits as a <strong>control layer</strong> between your application and AI providers:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
          Your App → Consonant SDK → AI Provider (OpenAI, Anthropic, etc.)<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Consonant Backend<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Real-time Dashboard
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">The Request Flow</h2>
        
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">1. Pre-flight Check</h3>
        <p className="text-gray-600 dark:text-gray-200">Before any AI request, the SDK performs a <strong>balance check</strong>:</p>
        <CodeBlock
          language="typescript"
          filename="flow.ts"
          code={`// Happens automatically when you call the wrapped client
const response = await trackedAI.chat.completions.create({...})

// Under the hood:
// 1. SDK estimates worst-case cost (max_tokens × output_price)
// 2. SDK calls Consonant backend: "Can customer X afford $0.50?"
// 3. Backend checks balance, reserves grains, returns approval
// 4. If approved, request proceeds; if not, throws error`}
        />

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">2. Streaming Deductions</h3>
        <p className="text-gray-600 dark:text-gray-200">For streaming responses, the SDK deducts costs <strong>in real-time</strong>:</p>
        <CodeBlock
          language="text"
          filename="stream_log"
          code={`Token 1-50:   Deduct $0.02  → Balance: $4.98
Token 51-100: Deduct $0.02  → Balance: $4.96
Token 101+:   ...continues until stream ends`}
        />
        <p className="text-gray-600 dark:text-gray-200">
          If the balance hits zero mid-stream, the SDK <strong>kills the stream</strong> and notifies your application.
        </p>

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">3. Final Reconciliation</h3>
        <p className="text-gray-600 dark:text-gray-200">When the AI provider returns final usage data:</p>
        <CodeBlock
          language="typescript"
          filename="reconcile.ts"
          code={`// AI provider reports: 847 prompt tokens, 312 completion tokens
// SDK tells Consonant backend the exact numbers
// Backend calculates precise cost and refunds any over-reservation`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Cost Attribution</h2>
        <p className="text-gray-600 dark:text-gray-200">Every request is attributed to a specific customer using your <code>customerIdExtractor</code>:</p>
        <CodeBlock
          language="typescript"
          filename="extractor.ts"
          code={`customerIdExtractor: (context) => {
  // Return whatever identifies your customer
  return context.userId       // Simple user ID
  return context.orgId        // Organization-level tracking
  return context.stripeId     // Stripe customer ID
}`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Data Storage</h2>
        <p className="text-gray-600 dark:text-gray-200">Consonant stores:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-200">
          <li><strong>Balances</strong> — Current grain balance per customer (Redis for speed)</li>
          <li><strong>Transactions</strong> — Append-only ledger of all cost movements (Postgres)</li>
          <li><strong>Requests</strong> — Detailed log of each AI request for analytics (TimescaleDB)</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-200 mt-4">We <strong>never store</strong>:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-200">
            <li>Prompt content</li>
            <li>AI-generated responses</li>
            <li>Any PII beyond customer IDs</li>
        </ul>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Latency</h2>
        <p className="text-gray-600 dark:text-gray-200">
          The pre-flight balance check adds approximately <strong>3-5ms</strong> to each request. This is achieved through:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-200">
            <li>Redis for balance lookups (sub-millisecond)</li>
            <li>Lua scripts for atomic operations</li>
            <li>Global edge deployment</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-200">
            For a typical AI request that takes 2-5 seconds, this overhead is imperceptible.
        </p>
      </div>
    </div>
  )
}
