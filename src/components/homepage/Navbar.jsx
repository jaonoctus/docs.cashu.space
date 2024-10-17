import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative z-10 mx-auto flex h-full max-w-[1056px] flex-col items-center justify-between gap-2 py-4 lg:flex-row">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="px-4 py-2.5">
          <Image
            src="/homepage/nut-logo.png"
            alt="Cashu Logo"
            width={48}
            height={48}
            className="cursor-pointer"
          />
        </Link>
        <button
          className="flex items-center rounded border border-white px-4 py-3 lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="h-5 w-5 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>{isOpen ? 'Close' : 'Menu'}</title>
            <path
              d={
                isOpen
                  ? 'M10 8.586l5.657-5.657 1.414 1.414L11.414 10l5.657 5.657-1.414 1.414L10 11.414l-5.657 5.657-1.414-1.414L8.586 10 2.929 4.343 4.343 2.929 10 8.586z'
                  : 'M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'
              }
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? 'hidden ' : 'hidden'
          } w-full flex-col items-center gap-y-4 lg:flex lg:flex-row lg:pl-[40px]`}
        >
          <a
            href="#features"
            className="duration-20 px-4 py-2.5 font-roboto-mono text-base font-medium"
          >
            Features
          </a>
          <a
            href="https://docs.cashu.space/"
            target="_blank"
            className="duration-20 px-4 py-2.5 font-roboto-mono text-base font-medium"
          >
            Documentation
          </a>
          <a
            href="https://docs.cashu.space/wallets"
            target="_blank"
            className="duration-20 px-4 py-2.5 font-roboto-mono text-base font-medium"
          >
            Applications
          </a>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'flex ' : 'hidden'
        } w-full flex-col items-center gap-y-4 lg:hidden lg:flex-row lg:pl-[40px]`}
      >
        <a
          href="#features"
          className="duration-20 px-4 py-2.5 font-roboto-mono text-base font-medium"
        >
          Features
        </a>
        <a
          href="#docs"
          className="duration-20 px-4 py-2.5 font-roboto-mono text-base font-medium"
        >
          Documentation
        </a>
        <a
          href="#apps"
          className="duration-20 px-4 py-2.5 font-roboto-mono text-base font-medium"
        >
          Applications
        </a>
      </div>
      <a
        href="https://docs.cashu.space/contribute"
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          isOpen ? 'flex' : 'hidden lg:flex'
        } justify-center whitespace-nowrap rounded-lg bg-[#f18805] px-4 py-2.5 font-medium text-white `}
      >
        <div className="text-sm">Donate</div>
      </a>
    </div>
  )
}

export default Navbar
