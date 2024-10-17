import React from 'react'
import Image from 'next/image'
import CashuGraphic from '/public/homepage/cashu-graphic.png'
import BitcoinIcon from '/public/homepage/bitcoin-icon.svg'
import ArrowIcon from '../icons/ArrowIcon'
import NewCodeSnippet from './NewCodeSnippet' // Import the new code snippet component

const Docs = () => {
  return (
    <div className="my-16 mx-auto max-w-[1152px] px-4 xl:px-0">
      
      {/* Container with Background Image */}
      <div 
        style={{
          position: 'relative',
          padding: '50px 0', // Some padding around the section
          backgroundImage: 'url("/homepage/home-wrap.svg")', // Replace with your actual SVG path
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1, // Ensure the background image is correctly layered
        }}
      >
        {/* Content Section */}
        <p
          className="pt-16 text-center font-roboto text-[24px] font-bold md:text-[32px] xl:text-[54px]"
          style={{
            textTransform: 'uppercase',
            marginBottom: '64px',
          }}
        >
          Developers, developers, developers
        </p>

        <NewCodeSnippet />

        <p className="my-16 text-center font-roboto-mono text-[18px] xl:text-[24px]">
          AN open ecash protocol for anyone to implement. The specifications,
          called Cashu NUTs (Notation, Usage, and Terminology) describe how to
          implement the protocol. Multiple Cashu client libraries make it easy for
          developers to write their own wallets in their favorite programming
          language.
        </p>
        <div className="flex justify-center">
          <button className="my-16 flex items-center gap-2.5 rounded-lg bg-[#f1f5f9] px-6 py-5 font-semibold text-[#1f2937] xl:text-[21px]">
            <ArrowIcon />
            <a href="https://docs.cashu.space" target="_blank">
              VIEW DOCUMENTATION
            </a>
          </button>
        </div>
      </div>

      <p
        className="pt-16 text-center font-roboto text-[24px] font-bold md:text-[32px] xl:text-[54px]"
        style={{
          textTransform: 'uppercase',
        }}
      >
        SUPPORT our research
      </p>

      <Image
        className="my-16 h-full w-full"
        src={CashuGraphic}
        width={1024}
        height={1024}
      />
      <p className="my-16 text-center font-roboto-mono text-[18px] xl:text-[24px]">
        Your support can ensure the sustainable development of free and
        open-source digital cash projects using the Cashu protocol. As digital
        cash becomes integral to future payment infrastructure and financial
        services, we need your help to keep these systems public and accessible
        to all
      </p>
      <div className="flex justify-center">
        <button className="my-16 flex items-center gap-2.5 rounded-lg bg-[#f1f5f9] px-6 py-5 font-semibold text-[#1f2937] xl:text-[21px]">
          <Image
            className=" h-[30px] w-[30px]"
            src={BitcoinIcon}
            width={30}
            height={30}
          />
          <a href="https://docs.cashu.space/contribute" target="_blank"> DONATE </a>
        </button>
      </div>
    </div>
  )
}

export default Docs