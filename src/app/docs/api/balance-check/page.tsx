export default function BalanceCheckPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Balance Check API</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-400">
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
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm text-gray-100 font-mono my-4">
          <pre>{`{
  "customer_id": "cust_12345",
  "requested_grains": 500
}`}</pre>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Response</h2>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm text-gray-100 font-mono my-4">
          <pre>{`{
  "allowed": true,
  "remaining_balance": 24500,
  "reservation_id": "res_abc789"
}`}</pre>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
            If <code>allowed</code> is false, you should block the request.
        </p>
      </div>
    </div>
  )
}
