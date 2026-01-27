export default function RealTimeEnforcementPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Real-time Enforcement</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Stop overages before they happen. Consonant enforces budget limits in real-time, even during streaming responses.
      </p>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Pre-flight Checks</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Before any request is sent to the LLM provider (OpenAI, Anthropic, etc.), the Consonant SDK checks the customer's balance.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li><strong>Latency:</strong> Our global edge network ensures checks complete in under 5ms.</li>
            <li><strong>Decision:</strong> If the balance is insufficient, the request is blocked immediately, and an error is thrown.</li>
        </ul>
      </div>

       <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Mid-stream Kill Switch</h2>
        <p className="text-gray-600 dark:text-gray-400">
          For streaming responses, checking usage only at the end is too late. A single run-away query can drain a customer's entire monthly budget.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
            Consonant monitors token usage <strong>as chunks arrive</strong>.
        </p>
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900 p-4 rounded-lg my-4">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">How it works</h4>
            <ol className="list-decimal pl-5 space-y-1 text-amber-700 dark:text-amber-300 text-sm">
                <li>SDK receives a chunk from the LLM provider.</li>
                <li>It estimates the cost of that chunk.</li>
                <li>It deducts from the user's reserved balance locally.</li>
                <li>If the reservation is exhausted, it attempts to renew the reservation with the Consonant API.</li>
                <li>If the renewal fails (insufficient funds), the stream is <strong>immediately aborted</strong>.</li>
            </ol>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Hard vs Soft Limits</h2>
        <p className="text-gray-600 dark:text-gray-400">
          You can configure limits to behave differently:
        </p>
         <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li><strong>Hard Limit:</strong> Strictly block requests when budget is 0. Ideal for free tiers.</li>
            <li><strong>Soft Limit:</strong> Allow requests but trigger webhooks/alerts. Ideal for enterprise tiers where you want to upsell, not block.</li>
        </ul>
      </div>
    </div>
  )
}
