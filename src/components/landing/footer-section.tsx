import Image from "next/image"
import Link from "next/link"

export default function FooterSection() {
  return (
    <div className="w-full bg-[#0a0a0a] flex flex-col justify-start items-start">
      {/* Main Footer Content */}
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-10">
        <div className="h-auto p-6 md:p-10 flex flex-col justify-start items-start gap-6">
          {/* Brand Section */}
          <div className="self-stretch flex justify-start items-center gap-3">
            <Image 
              src="/consonant.png" 
              alt="Consonant" 
              width={120} 
              height={32}
              className="h-8 w-auto"
            />
          </div>
          <div className="text-white/70 text-sm font-medium leading-[18px] font-sans max-w-[240px]">
            One AI account. Every app.
            <span className="block mt-2 text-white/50">The unified AI access layer for platform developers.</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start items-start gap-4">
            {/* Twitter/X Icon */}
            <Link href="https://twitter.com" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="white"
                />
              </svg>
            </Link>

            {/* LinkedIn Icon */}
            <Link href="https://linkedin.com" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                  fill="white"
                />
              </svg>
            </Link>

            {/* GitHub Icon */}
            <Link href="https://github.com" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.374-12-12-12z"
                  fill="white"
                />
              </svg>
            </Link>

            {/* Discord Icon */}
            <Link href="https://discord.com" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="self-stretch p-6 md:p-10 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-end items-start gap-8 md:gap-12">
          {/* Product Column */}
          <div className="flex flex-col justify-start items-start gap-4 min-w-[140px]">
            <div className="text-white/40 text-xs font-semibold uppercase tracking-wider font-sans">
              Product
            </div>
            <div className="flex flex-col justify-end items-start gap-3">
              <Link href="#features" className="text-white/80 text-sm font-normal leading-5 font-sans hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/docs" className="text-white/80 text-sm font-normal leading-5 font-sans hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="#" className="text-white/80 text-sm font-normal leading-5 font-sans hover:text-white transition-colors">
                SDK Reference
              </Link>
              <Link href="#" className="text-white/80 text-sm font-normal leading-5 font-sans hover:text-white transition-colors">
                Changelog
              </Link>
            </div>
          </div>

          {/* Developers Column */}
          <div className="flex flex-col justify-start items-start gap-4 min-w-[140px]">
            <div className="text-white/40 text-xs font-semibold uppercase tracking-wider font-sans">
              Developers
            </div>
            <div className="flex flex-col justify-center items-start gap-3">
              <Link href="#" className="text-white/80 text-sm font-normal leading-5 font-sans hover:text-white transition-colors">
                Quick Start
              </Link>
              <Link href="#" className="text-white/80 text-sm font-normal leading-5 font-sans hover:text-white transition-colors">
                API Reference
              </Link>
              <Link href="#" className="text-white/80 text-sm font-normal leading-5 font-sans hover:text-white transition-colors">
                Examples
              </Link>
              <Link href="#" className="text-white/80 text-sm font-normal leading-5 font-sans hover:text-white transition-colors">
                GitHub
              </Link>
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col justify-start items-start gap-4 min-w-[140px]">
            <div className="text-white/40 text-xs font-semibold uppercase tracking-wider font-sans">
              Company
            </div>
            <div className="flex flex-col justify-center items-start gap-3">
              <Link href="#" className="text-white/80 text-sm font-normal leading-5 font-sans hover:text-white transition-colors">
                About
              </Link>
              <Link href="#" className="text-white/80 text-sm font-normal leading-5 font-sans hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="#" className="text-white/80 text-sm font-normal leading-5 font-sans hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col justify-start items-start gap-4 min-w-[140px]">
            <div className="text-white/40 text-xs font-semibold uppercase tracking-wider font-sans">
              Legal
            </div>
            <div className="flex flex-col justify-center items-start gap-3">
              <Link href="#" className="text-white/80 text-sm font-normal leading-5 font-sans hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/80 text-sm font-normal leading-5 font-sans hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/80 text-sm font-normal leading-5 font-sans hover:text-white transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="self-stretch px-6 md:px-10 py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-white/40 text-sm font-normal font-sans">
          © 2026 Consonant. All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-white/40 text-sm font-normal font-sans">
          <span>Built with</span>
          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span>for developers</span>
        </div>
      </div>
    </div>
  )
}
