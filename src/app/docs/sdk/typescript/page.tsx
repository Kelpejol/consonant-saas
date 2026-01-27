import Link from "next/link"
import { CodeBlock } from "@/components/ui/code-block"

export default function TypeScriptSDKPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">TypeScript SDK</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-200">
        Complete reference for the Consonant TypeScript SDK.
      </p>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Installation</h2>
        <CodeBlock language="bash" code="npm install @consonant/sdk" />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Basic Usage</h2>
        <CodeBlock
          language="typescript"
          filename="usage.ts"
          code={`import { Consonant } from '@consonant/sdk'
import OpenAI from 'openai'

const consonant = new Consonant({
  apiKey: process.env.CONSONANT_API_KEY!,
  customerIdExtractor: (ctx) => ctx.userId,
})

const openai = new OpenAI()
const trackedAI = consonant.wrap(openai)`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Configuration Options</h2>
        <CodeBlock
          language="typescript"
          filename="config.ts"
          code={`interface ConsonantConfig {
  // Required: Your Consonant API key
  apiKey: string
  
  // Required: Function to extract customer ID from request context
  customerIdExtractor: (context: RequestContext) => string
  
  // Optional: Buffer multiplier for cost estimation (default: 1.2)
  bufferMultiplier?: number
  
  // Optional: Fallback behavior when Consonant is unreachable
  fallbackMode?: 'allow' | 'block' // default: 'allow'
  
  // Optional: Custom endpoint (for self-hosted)
  endpoint?: string
  
  // Optional: Request timeout in milliseconds (default: 5000)
  timeout?: number
}`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Supported AI Clients</h2>
        
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">OpenAI</h3>
        <CodeBlock
          language="typescript"
          filename="openai.ts"
          code={`import OpenAI from 'openai'

const openai = new OpenAI()
const tracked = consonant.wrap(openai)

await tracked.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Hello!' }]
}, { userId: 'customer_123' })`}
        />

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">Anthropic</h3>
        <CodeBlock
          language="typescript"
          filename="anthropic.ts"
          code={`import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic()
const tracked = consonant.wrap(anthropic)

await tracked.messages.create({
  model: 'claude-3-opus-20240229',
  max_tokens: 1024,
  messages: [{ role: 'user', content: 'Hello!' }]
}, { userId: 'customer_123' })`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Error Handling</h2>
        <CodeBlock
          language="typescript"
          filename="errors.ts"
          code={`import { ConsonantError, InsufficientBalanceError } from '@consonant/sdk'

try {
  const response = await trackedAI.chat.completions.create({...})
} catch (error) {
  if (error instanceof InsufficientBalanceError) {
    // Customer ran out of credits
    console.log('Customer balance exhausted:', error.customerId)
  } else if (error instanceof ConsonantError) {
    // Other Consonant-specific errors
    console.log('Consonant error:', error.message)
  } else {
    // AI provider errors pass through unchanged
    throw error
  }
}`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Manual Tracking</h2>
        <p className="text-gray-600 dark:text-gray-200">For advanced use cases, you can track requests manually:</p>
        <CodeBlock
          language="typescript"
          filename="manual.ts"
          code={`// Start tracking
const tracker = await consonant.startRequest({
  customerId: 'customer_123',
  model: 'gpt-4',
  estimatedTokens: 1000,
})

// Make your AI call directly
const response = await openai.chat.completions.create({...})

// Finalize with actual usage
await tracker.finalize({
  promptTokens: response.usage.prompt_tokens,
  completionTokens: response.usage.completion_tokens,
})`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">TypeScript Types</h2>
        <CodeBlock
          language="typescript"
          filename="types.ts"
          code={`import type {
  ConsonantConfig,
  RequestContext,
  TrackingResult,
  CustomerBalance,
} from '@consonant/sdk'`}
        />
      </div>
    </div>
  )
}
