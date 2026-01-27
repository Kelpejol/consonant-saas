import Link from "next/link"
import { CodeBlock } from "@/components/ui/code-block"

export default function PythonSDKPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Python SDK</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Complete reference for the Consonant Python SDK.
      </p>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Installation</h2>
        <CodeBlock language="bash" code="pip install consonant-sdk" />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Basic Usage</h2>
        <CodeBlock
          language="python"
          filename="app.py"
          code={`from consonant import Consonant
from openai import OpenAI

consonant = Consonant(
    api_key=os.environ["CONSONANT_API_KEY"],
    customer_id_extractor=lambda ctx: ctx["user_id"]
)

client = OpenAI()
tracked_client = consonant.wrap(client)`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Configuration Options</h2>
        <CodeBlock
          language="python"
          filename="config.py"
          code={`consonant = Consonant(
    # Required: Your Consonant API key
    api_key="your_api_key",
    
    # Required: Function to extract customer ID from context
    customer_id_extractor=lambda ctx: ctx["user_id"],
    
    # Optional: Buffer multiplier (default: 1.2)
    buffer_multiplier=1.2,
    
    # Optional: Fallback when unreachable (default: "allow")
    fallback_mode="allow",  # or "block"
    
    # Optional: Custom endpoint
    endpoint="https://api.consonant.dev",
    
    # Optional: Timeout in seconds (default: 5)
    timeout=5,
)`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Using with OpenAI</h2>
        <CodeBlock
          language="python"
          filename="openai_example.py"
          code={`from consonant import Consonant
from openai import OpenAI

consonant = Consonant(
    api_key=os.environ["CONSONANT_API_KEY"],
    customer_id_extractor=lambda ctx: ctx["user_id"]
)

client = OpenAI()
tracked = consonant.wrap(client)

response = tracked.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Hello!"}],
    consonant_context={"user_id": "customer_123"}
)`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Using with Anthropic</h2>
        <CodeBlock
          language="python"
          filename="anthropic_example.py"
          code={`from consonant import Consonant
from anthropic import Anthropic

consonant = Consonant(
    api_key=os.environ["CONSONANT_API_KEY"],
    customer_id_extractor=lambda ctx: ctx["user_id"]
)

client = Anthropic()
tracked = consonant.wrap(client)

response = tracked.messages.create(
    model="claude-3-opus-20240229",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello!"}],
    consonant_context={"user_id": "customer_123"}
)`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Error Handling</h2>
        <CodeBlock
          language="python"
          filename="errors.py"
          code={`from consonant import ConsonantError, InsufficientBalanceError

try:
    response = tracked.chat.completions.create(...)
except InsufficientBalanceError as e:
    print(f"Customer {e.customer_id} ran out of credits")
except ConsonantError as e:
    print(f"Consonant error: {e}")
except Exception as e:
    # AI provider errors pass through unchanged
    raise`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Async Support</h2>
        <CodeBlock
          language="python"
          filename="async_example.py"
          code={`from consonant import AsyncConsonant
from openai import AsyncOpenAI

consonant = AsyncConsonant(
    api_key=os.environ["CONSONANT_API_KEY"],
    customer_id_extractor=lambda ctx: ctx["user_id"]
)

client = AsyncOpenAI()
tracked = consonant.wrap(client)

response = await tracked.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Hello!"}],
    consonant_context={"user_id": "customer_123"}
)`}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Type Hints</h2>
        <p className="text-gray-600 dark:text-gray-400">The SDK is fully typed and works with mypy and pyright:</p>
        <CodeBlock
            language="python"
            code="from consonant import Consonant, ConsonantConfig, CustomerBalance"
        />
      </div>
    </div>
  )
}
