import { CodeBlock } from "@/components/ui/code-block"

export default function ConfigurationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">SDK Configuration</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Reference guide for configuring the Consonant SDK.
      </p>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Initialization</h2>
        <CodeBlock
          language="typescript"
          filename="config.ts"
          code={`import { Consonant } from '@consonant/sdk';

const consonant = new Consonant({
  apiKey: string,           // Your Consonant API Key
  service?: string,         // Logical service name (default: "default")
  timeout?: number,         // Request timeout in ms (default: 1000)
  customerIdExtractor?: (ctx: any) => string // Function to resolve Customer ID
});`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Options</h2>
        
        <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 font-medium">
                <tr>
                <th scope="col" className="px-6 py-4">Option</th>
                <th scope="col" className="px-6 py-4">Type</th>
                <th scope="col" className="px-6 py-4">Required</th>
                <th scope="col" className="px-6 py-4">Description</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                    <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-200">apiKey</td>
                    <td className="px-6 py-4 font-mono text-purple-600 dark:text-purple-400">string</td>
                    <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium">Yes</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">Secret key from your dashboard.</td>
                </tr>
                <tr>
                    <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-200">service</td>
                    <td className="px-6 py-4 font-mono text-purple-600 dark:text-purple-400">string</td>
                    <td className="px-6 py-4 text-gray-400 dark:text-gray-600">No</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">Identify this service in logs.</td>
                </tr>
                 <tr>
                    <td className="px-6 py-4 font-mono text-gray-900 dark:text-gray-200">debug</td>
                    <td className="px-6 py-4 font-mono text-purple-600 dark:text-purple-400">boolean</td>
                    <td className="px-6 py-4 text-gray-400 dark:text-gray-600">No</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">Enable verbose logging.</td>
                </tr>
            </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}
