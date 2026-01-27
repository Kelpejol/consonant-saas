import Link from "next/link"
import { CodeBlock } from "@/components/ui/code-block"

export default function QuickStartPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Quick Start</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Get Consonant up and running in your application in under 5 minutes.
      </p>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Prerequisites</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
          <li>Node.js 18+ or Python 3.9+</li>
          <li>An existing application using OpenAI, Anthropic, or Google AI</li>
          <li>A Consonant account (<Link href="/signup" className="text-blue-600 dark:text-blue-400 hover:underline">sign up here</Link>)</li>
        </ul>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Step 1: Install the SDK</h2>
        <p className="text-gray-600 dark:text-gray-400">Choose your language:</p>
        
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">TypeScript / JavaScript</h3>
        <CodeBlock
          language="bash"
          filename="install.sh"
          code={`npm install @consonant/sdk
# or
yarn add @consonant/sdk
# or
pnpm add @consonant/sdk`}
        />

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">Python</h3>
        <CodeBlock
          language="bash"
          filename="install.sh"
          code={`pip install consonant-sdk
# or
poetry add consonant-sdk`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Step 2: Get Your API Key</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-600 dark:text-gray-400">
          <li>Log in to the <Link href="/dashboard" className="text-blue-600 dark:text-blue-400 hover:underline">Consonant Dashboard</Link></li>
          <li>Navigate to <strong>Settings → API Keys</strong></li>
          <li>Click <strong>Generate New Key</strong></li>
          <li>Copy the key and save it securely</li>
        </ol>
        
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mt-4">
          <p className="text-amber-800 dark:text-amber-200 text-sm font-medium">
             ⚠️ Important: API keys are only shown once. Store it in your environment variables.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Step 3: Initialize the SDK</h2>
        <CodeBlock
          language="typescript"
          filename="init.ts"
          code={`import { Consonant } from '@consonant/sdk'
import OpenAI from 'openai'

// Initialize Consonant
const consonant = new Consonant({
  apiKey: process.env.CONSONANT_API_KEY!,
  
  // Tell Consonant how to identify customers
  customerIdExtractor: (context) => {
    return context.userId // or however you identify customers
  },
})

// Create your AI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

// Wrap it with Consonant
const trackedAI = consonant.wrap(openai)`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Step 4: Use the Wrapped Client</h2>
        <p className="text-gray-600 dark:text-gray-400">Replace your existing AI client with the wrapped version:</p>
        
        <CodeBlock
          language="typescript"
          filename="usage.ts"
          code={`// Before (untracked)
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Hello!' }]
})

// After (tracked by Consonant)
const response = await trackedAI.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Hello!' }]
}, {
  userId: 'customer_123' // Context passed to customerIdExtractor
})`}
        />
        <p className="text-gray-600 dark:text-gray-400">
          That's it! Every request is now tracked and attributed to the customer.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Step 5: View Your Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Head to the <Link href="/dashboard" className="text-blue-600 dark:text-blue-400 hover:underline">Dashboard</Link> to see:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
          <li>Real-time cost tracking per customer</li>
          <li>Margin calculations</li>
          <li>Usage analytics</li>
          <li>Alert configurations</li>
        </ul>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">What's Next?</h2>
        <ul className="list-disc pl-6 space-y-2 text-blue-600 dark:text-blue-400">
          <li><Link href="/docs/concepts/enforcement">Set up spending limits</Link></li>
          <li><Link href="/docs/api/configuration">Configure model switching</Link></li>
          <li><Link href="/docs/concepts/grains">Understand grains and pricing</Link></li>
        </ul>
      </div>
    </div>
  )
}
