import React from 'react'
import Image from 'next/image'
import CodeWithBackground from './CodeWithBackground'
import ArrowIcon from '../icons/ArrowIcon'

const Intro = () => {
  const handleViewUpdates = () => {
    window.open('https://github.com/cashubtc/nutshell/releases', '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <div className="mt-16">
        {/* Centered Image with max width and responsive scaling */}
        <div className="mx-auto max-w-[896px] px-4 xl:px-0">
          <Image
            src="/homepage/mints.png"
            alt="Mints"
            layout="intrinsic"
            width={896}
            height={448} // Maintain aspect ratio
            className="w-full h-auto"
          />

          {/* Centered and width-constrained heading */}
          <p
            className="text-center font-roboto text-[24px] font-bold md:text-[32px] xl:text-[54px] mt-8"
            style={{ textTransform: 'uppercase' }}
          >
            Open-source, secure, and ready for deployment
          </p>
        </div>

        {/* This section now includes the SVG background */}
        <CodeWithBackground />

        <div className="my-16 mx-auto max-w-[1152px] px-4 xl:px-0">
          <p className="font-roboto text-[24px] font-bold md:text-[32px] xl:text-[42px]">
            Extend Bitcoin with Privacy
          </p>
          <p className="font-roboto-mono text-[18px] xl:text-[24px]">
            Cashu brings Chaumian Ecash privacy to Bitcoin, providing developers
            a powerful framework for building apps with a core focus on user
            anonymity, seamlessly blending the strengths of both systems for
            advanced privacy features.
          </p>

          <p className="mt-16 font-roboto text-[24px] font-bold md:text-[32px] xl:text-[42px]">
            Thriving Developer Ecosystem
          </p>
          <p className="font-roboto-mono text-[18px] xl:text-[24px]">
            Dive into a community passionate about pushing the boundaries of
            bitcoin with features like Ecash HTLCs, efficient fee management,
            Multinut MPP Lightning payments, and CBOR binary token encoding and
            more.
          </p>

          <button 
            onClick={handleViewUpdates}
            className="mt-7 flex items-center gap-2.5 rounded-lg bg-[#f1f5f9] px-6 py-5 font-semibold text-[#1f2937] xl:text-[21px] hover:bg-gray-300 transition duration-300 ease-in-out"
          >
            <ArrowIcon />
            <p>VIEW UPDATES</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Intro