import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
      <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

      <div className="fixed left-1/2 top-3 sm:top-3 md:top-4 lg:top-[42px] transform -translate-x-1/2 w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-black backdrop-blur-sm ring-1 ring-white/10 shadow-none overflow-hidden rounded-[50px] flex justify-between items-center z-50 text-white">
        <div className="flex justify-center items-center">
          <div className="flex justify-start items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-black p-1 rounded-md">
                <Image src="/consonant.png" alt="Consonant logo" width={98} height={48} className="block" />
              </div>
            </Link>
          </div>
          <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 flex justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
            <Link href="#products" className="flex justify-start items-center">
              <div className="flex flex-col justify-center text-white/90 text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-white transition-colors">
                Products
              </div>
            </Link>
            <Link href="#pricing" className="flex justify-start items-center">
              <div className="flex flex-col justify-center text-white/90 text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-white transition-colors">
                Pricing
              </div>
            </Link>
            <Link href="/docs" className="flex justify-start items-center">
              <div className="flex flex-col justify-center text-white/90 text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-white transition-colors">
                Docs
              </div>
            </Link>
          </div>
        </div>
        <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
          <Link href="/login" className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center">
            <div className="flex flex-col justify-center text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans">
              Log in
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
