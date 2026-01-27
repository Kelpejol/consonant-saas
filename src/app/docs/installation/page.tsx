import Link from "next/link"
import { CodeBlock } from "@/components/ui/code-block"

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Installation</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-200">
        This guide covers all installation options for Consonant SDKs.
      </p>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">TypeScript / JavaScript</h2>
        
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">npm</h3>
        <CodeBlock language="bash" code="npm install @consonant/sdk" />

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">yarn</h3>
        <CodeBlock language="bash" code="yarn add @consonant/sdk" />

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">pnpm</h3>
        <CodeBlock language="bash" code="pnpm add @consonant/sdk" />

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">Requirements</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-200">
            <li>Node.js 18.0.0 or higher</li>
            <li>TypeScript 5.0+ (optional, but recommended)</li>
        </ul>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Python</h2>
        
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">pip</h3>
        <CodeBlock language="bash" code="pip install consonant-sdk" />

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">poetry</h3>
        <CodeBlock language="bash" code="poetry add consonant-sdk" />

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">Requirements</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-200">
            <li>Python 3.9 or higher</li>
            <li>Compatible with pip, poetry, pipenv, and uv</li>
        </ul>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Environment Variables</h2>
        <p className="text-gray-600 dark:text-gray-200">After installation, set up your environment variables:</p>
        
        <CodeBlock 
          language="bash" 
          filename=".env.local" 
          code="CONSONANT_API_KEY=your_api_key_here" 
        />
        
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">Vercel</h3>
        <p className="text-gray-600 dark:text-gray-200">
            In your Vercel dashboard, add <code>CONSONANT_API_KEY</code> to your environment variables.
        </p>

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">Docker</h3>
        <CodeBlock 
            language="dockerfile" 
            filename="Dockerfile"
            code="ENV CONSONANT_API_KEY=your_api_key_here" 
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Verify Installation</h2>
        <p className="text-gray-600 dark:text-gray-200">Test that everything is working:</p>
        
        <CodeBlock
          language="typescript"
          filename="verify.ts"
          code={`import { Consonant } from '@consonant/sdk'

const consonant = new Consonant({
  apiKey: process.env.CONSONANT_API_KEY!,
  customerIdExtractor: () => 'test-customer',
})

// Check connection
const health = await consonant.healthCheck()
console.log('Connected:', health.ok)`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Next Steps</h2>
        <ul className="list-disc pl-6 space-y-2 text-blue-600 dark:text-blue-400">
          <li><Link href="/docs/quickstart">Quick Start Guide</Link></li>
          <li><Link href="/docs/sdk/typescript">TypeScript SDK Reference</Link></li>
          <li><Link href="/docs/sdk/python">Python SDK Reference</Link></li>
        </ul>
      </div>
    </div>
  )
}
