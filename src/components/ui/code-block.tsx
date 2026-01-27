"use client"

import React from "react"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps {
  language?: string
  filename?: string
  code: string
}

export function CodeBlock({ language = "typescript", filename = "example.ts", code }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Simple syntax highlighting that works for JS/TS
  const highlightCode = (line: string) => {
    // Escape HTML first
    let escaped = line
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
      
    // Colors roughly matching VS Code / Dracular
    // Keywords (purple)
    escaped = escaped.replace(
      /\b(const|let|var|function|return|import|from|export|default|class|interface|new|try|catch|if|else|await|async|throw|typeof|void)\b/g, 
      '<span class="text-[#c792ea]">$1</span>'
    )
    
    // Strings (green)
    escaped = escaped.replace(
      /(&quot;.*?&quot;|&#039;.*?&#039;|`.*?`)/g, 
      '<span class="text-[#c3e88d]">$1</span>'
    )

    // Numbers (orange)
    escaped = escaped.replace(
      /\b(\d+)\b/g, 
      '<span class="text-[#f78c6c]">$1</span>'
    )
    
    // Comments (grey) - safe simple match for single line
    escaped = escaped.replace(
      /(\/\/.*)/g, 
      '<span class="text-[#676e95] italic">$1</span>'
    )
    
    // Function calls (blue)
    escaped = escaped.replace(
      /(\w+)(?=\()/g, 
      '<span class="text-[#82aaff]">$1</span>'
    )

    return escaped
  }

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-gray-800 bg-[#0f111a] shadow-2xl tab-size-2">
      {/* Header with macOS dots and filename */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#13151f] border-b border-white/5">
        <div className="flex items-center gap-4">
           <div className="flex gap-1.5">
             <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
             <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
             <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
           </div>
           {filename && (
             <span className="text-xs font-mono text-gray-500">{filename}</span>
           )}
        </div>
        <button
          onClick={copyToClipboard}
          className="text-gray-500 hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
        </button>
      </div>
      
      {/* Code Area */}
      <div className="p-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        <code className="font-mono text-[13px] leading-6">
            {code.split('\n').map((line, i) => (
                <div key={i} className="table-row">
                    <span className="table-cell select-none text-gray-700 text-right pr-4 w-8">{i + 1}</span>
                    <span 
                        className="table-cell text-[#a6accd]" 
                        dangerouslySetInnerHTML={{ __html: highlightCode(line) || ' ' }} 
                    />
                </div>
            ))}
        </code>
      </div>
    </div>
  )
}
