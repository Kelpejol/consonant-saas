import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-700 dark:text-gray-300">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-gray-700 dark:text-gray-300">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-blue-500 pl-6 italic text-gray-600 dark:text-gray-400">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="relative rounded bg-gray-100 dark:bg-gray-800 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-gray-950 py-4">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        {children}
      </a>
    ),
    table: ({ children }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">{children}</table>
      </div>
    ),
    tr: ({ children }) => (
      <tr className="m-0 border-t p-0 even:bg-gray-50 dark:even:bg-gray-800/50">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
        {children}
      </td>
    ),
    ...components,
  }
}
