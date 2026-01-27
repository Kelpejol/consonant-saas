import { CodeBlock } from "@/components/ui/code-block"

export default function BalanceCheckPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Balance Check API</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-200">
        Programmatically check a customer's balance or reserve funds.
      </p>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Endpoint</h2>
        <div className="flex items-center gap-3">
             <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 font-mono px-2 py-1 rounded text-sm font-bold">POST</span>
             <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-900 dark:text-gray-200 font-mono">https://api.consonant.ai/v1/balance/check</code>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Request</h2>
        <CodeBlock
          language="json"
          filename="request.json"
          code={`{
  "customer_id": "cust_12345",
  "requested_grains": 500
}`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Response</h2>
        <CodeBlock
          language="json"
          filename="response.json"
          code={`{
  "allowed": true,
  "remaining_balance": 24500,
  "reservation_id": "res_abc789"
}`}
        />
        <p className="text-gray-600 dark:text-gray-200">
            If <code>allowed</code> is false, you should block the request.
        </p>
      </div>
    </div>
  )
}
