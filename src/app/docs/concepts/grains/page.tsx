import { CodeBlock } from "@/components/ui/code-block"

export default function GrainsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Grains & Pricing</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-200">
        Understanding Consonant's unified currency system.
      </p>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">What are Grains?</h2>
        <p className="text-gray-600 dark:text-gray-200">
          <strong>Grains</strong> are Consonant's internal currency unit. They provide a consistent way to measure costs across different AI providers and models.
        </p>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
          <p className="text-emerald-800 dark:text-emerald-200 text-lg font-bold text-center">
             1 million grains = $1.00 USD
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Why Grains?</h2>
        <p className="text-gray-600 dark:text-gray-200">
          AI providers price tokens differently:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-200">
            <li>OpenAI GPT-4: $0.03/1K input, $0.06/1K output</li>
            <li>Anthropic Claude: $0.015/1K input, $0.075/1K output</li>
            <li>Google Gemini: $0.00025/1K input, $0.0005/1K output</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-200 mt-4">
          Converting to grains normalizes everything:
        </p>
        
        <div className="overflow-hidden bg-white dark:bg-gray-900 shadow ring-1 ring-black ring-opacity-5 rounded-lg my-4">
            <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6">Model</th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">Input (grains/1K)</th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">Output (grains/1K)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900">
                    <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">GPT-4</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-200">30,000</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-200">60,000</td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">Claude 3 Opus</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-200">15,000</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-200">75,000</td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">Gemini Pro</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-200">250</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-200">500</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Setting Customer Budgets</h2>
        <p className="text-gray-600 dark:text-gray-200">Assign grain budgets to customers:</p>
        
        <CodeBlock
          language="typescript"
          filename="budget.ts"
          code={`// Via API
await consonant.setCustomerBudget({
  customerId: 'customer_123',
  monthlyGrains: 50_000_000, // $50/month
})

// Or in the dashboard under Customers → Budget`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Pricing Conversion Examples</h2>
        
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">Example 1: Conservative SaaS</h3>
        <p className="text-gray-600 dark:text-gray-200">You charge $50/month per user. You want each user to have a $10 AI budget.</p>
        <CodeBlock language="text" code="Budget: 10,000,000 grains ($10)" />
        <p className="text-gray-600 dark:text-gray-200">If a user exceeds their budget, Consonant blocks further requests.</p>

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4">Example 2: Usage-Based</h3>
        <p className="text-gray-600 dark:text-gray-200">You want to match customer revenue to their AI spend (1:1 margin).</p>
        <CodeBlock language="text" code="Customer pays $100/month → 100,000,000 grain budget" />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Monitoring Grain Usage</h2>
        <p className="text-gray-600 dark:text-gray-200">View real-time grain consumption in the dashboard:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-200">
            <li><strong>Customer List</strong>: Sort by grain balance, usage, or margin</li>
            <li><strong>Customer Detail</strong>: See daily/weekly/monthly trends</li>
            <li><strong>Alerts</strong>: Get notified when customers hit thresholds</li>
        </ul>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Automatic Top-ups</h2>
        <p className="text-gray-600 dark:text-gray-200">For usage-based models, configure automatic top-ups:</p>
        <CodeBlock
          language="typescript"
          filename="topups.ts"
          code={`await consonant.configureTopup({
  customerId: 'customer_123',
  topupGrains: 10_000_000, // Add 10M grains
  triggerThreshold: 1_000_000, // When balance drops below 1M
  maxMonthlyTopups: 10, // Safety limit
})`}
        />
      </div>
    </div>
  )
}
