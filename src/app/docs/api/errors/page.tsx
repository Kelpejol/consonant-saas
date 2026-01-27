import { CodeBlock } from "@/components/ui/code-block"

export default function ErrorsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Error Handling</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-200">
        How to handle errors returned by the Consonant SDK or API.
      </p>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Standard Errors</h2>
        
        <div className="space-y-6">
            <div className="border border-red-200 dark:border-red-900/50 rounded-lg p-4 bg-red-50 dark:bg-red-900/10">
                <h3 className="font-mono text-red-800 dark:text-red-300 font-bold mb-2">InsufficientBalanceError</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Thrown when a customer does not have enough grains to proceed with a request. You should catch this and show a "Quota Exceeded" message to the user.
                </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-gray-900">
                <h3 className="font-mono text-gray-900 dark:text-gray-100 font-bold mb-2">AuthenticationError</h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm">
                    Thrown if your API Key is invalid. Check your environment variables.
                </p>
            </div>

             <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-gray-900">
                <h3 className="font-mono text-gray-900 dark:text-gray-100 font-bold mb-2">RateLimitExceededError</h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm">
                    Thrown if you are hitting the Consonant API too fast (unlikely for standard usage).
                </p>
            </div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Handling in Code</h2>
        <CodeBlock
          language="typescript"
          filename="error-handling.ts"
          code={`try {
  await client.chat.completions.create({...});
} catch (error) {
  if (error.code === 'insufficient_balance') {
    // Show upgrade modal
    return res.status(402).json({ error: 'Please upgrade your plan' });
  }
  throw error;
}`}
        />
      </div>
    </div>
  )
}
