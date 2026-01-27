"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-50 px-6 sm:px-8 md:px-12 lg:px-0">
      <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

      <div className="fixed left-1/2 top-3 sm:top-3 md:top-4 lg:top-[32px] transform -translate-x-1/2 w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[800px] lg:w-[800px] h-12 sm:h-14 md:h-16 py-2 px-4 sm:px-6 md:px-6 pr-3 sm:pr-4 bg-black backdrop-blur-md ring-1 ring-white/10 shadow-xl overflow-visible rounded-[50px] flex justify-between items-center z-50 text-white transition-all duration-300">
        <div className="flex justify-center items-center">
          <div className="flex justify-start items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-black p-1 rounded-md">
                <Image src="/consonant.png" alt="Consonant logo" width={120} height={56} className="block w-auto h-8 sm:h-10" />
              </div>
            </Link>
          </div>
          <div className="pl-6 md:pl-8 lg:pl-10 hidden md:flex flex-row gap-5 lg:gap-6">
            <Link href="#features" className="flex justify-start items-center group">
              <div className="flex flex-col justify-center text-white/80 text-[13px] lg:text-[14px] font-medium leading-[14px] font-sans group-hover:text-white transition-colors">
                Features
              </div>
            </Link>
            <Link href="#use-cases" className="flex justify-start items-center group">
              <div className="flex flex-col justify-center text-white/80 text-[13px] lg:text-[14px] font-medium leading-[14px] font-sans group-hover:text-white transition-colors">
                Use Cases
              </div>
            </Link>
            <Link href="#open-source" className="flex justify-start items-center group">
              <div className="flex flex-col justify-center text-white/80 text-[13px] lg:text-[14px] font-medium leading-[14px] font-sans group-hover:text-white transition-colors">
                Open Source
              </div>
            </Link>
            <Link href="/docs" className="flex justify-start items-center group cursor-pointer">
              <div className="flex flex-col justify-center text-white/80 text-[13px] lg:text-[14px] font-medium leading-[14px] font-sans group-hover:text-white transition-colors">
                Docs
              </div>
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
             {/* Mobile Hamburger */}
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
            >
                {isMobileMenuOpen ? (
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
            </button>

            <div className="hidden md:flex h-8 sm:h-9 md:h-10 justify-start items-start gap-2 sm:gap-3">
            <a 
              href="https://tally.so/r/eqaogj"  
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-4 py-2 bg-white hover:bg-slate-100 transition-colors shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center">
                <div className="flex flex-col justify-center text-[#37322F] text-[13px] md:text-14px font-semibold leading-5 font-sans">
                Join waitlist
                </div>
            </a>

            
            </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full mt-2 p-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl md:hidden flex flex-col gap-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
                <Link 
                    href="#features" 
                    className="p-3 text-center text-white/90 hover:bg-white/10 rounded-xl transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Features
                </Link>
                 <Link 
                    href="#use-cases" 
                    className="p-3 text-center text-white/90 hover:bg-white/10 rounded-xl transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Use Cases
                </Link>
                 <Link 
                    href="#open-source" 
                    className="p-3 text-center text-white/90 hover:bg-white/10 rounded-xl transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Open Source
                </Link>
                 <Link 
                    href="/docs" 
                    className="p-3 text-center text-white/90 hover:bg-white/10 rounded-xl transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Docs
                </Link>
                <div className="h-[1px] bg-white/10 my-1 mx-4" />
                <a
                  href="https://tally.so/r/eqaogj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer p-3 m-2 text-center bg-white text-black font-semibold rounded-xl hover:bg-slate-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join waitlist
                </a>
            </div>
        )}
      </div>
    </div>
  )
}
