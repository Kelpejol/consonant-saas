import { CodeBlock } from "@/components/ui/code-block"

export default function CustomerTrackingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Customer Tracking</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Consonant links every AI request to a specific customer identity, allowing you to track usage, set limits, and analyze profitability at the user or organization level.
      </p>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">How it works</h2>
        <p className="text-gray-600 dark:text-gray-400">
          When you initialize the Consonant SDK, you provide a <code>customerIdExtractor</code> function. This function runs for every request and extracts a unique identifier for the customer (e.g., user ID, org ID, API key).
        </p>

        <CodeBlock 
          language="typescript"
          filename="initialization.ts"
          code={`const consonant = new Consonant({
  apiKey: process.env.CONSONANT_API_KEY,
  // Extract customer ID from your request context
  customerIdExtractor: (ctx) => ctx.user.id
})`}
        />

        <p className="text-gray-600 dark:text-gray-400">
          This ID is used to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Fetch the customer's current balance from the Consonant API.</li>
            <li>Deduct grains (cost currency) as tokens are streamed.</li>
            <li>Enforce limits specific to that customer.</li>
        </ul>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Hierarchical Tracking</h2>
        <p className="text-gray-600 dark:text-gray-400">
          You can track usage at multiple levels by using composite IDs. For example, to track per-user usage within an organization:
        </p>
        <CodeBlock 
           language="typescript" 
           filename="hierarchical.ts"
           code={`customerIdExtractor: (ctx) => \`\${ctx.org.id}:\${ctx.user.id}\``}
        />
        <p className="text-gray-600 dark:text-gray-400">
            This effectively creates a separate ledger for every user in every organization.
        </p>
      </div>

       <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Privacy</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Consonant only stores the customer ID string and the aggregate usage statistics. We never see or store the content of your prompts or completions.
        </p>
      </div>
    </div>
  )
}
