import React from 'react'
import Image from 'next/image'
import XIcon from '/public/homepage/x-icon.png'
import TelegramIcon from '/public/homepage/telegram-icon.png'
import DiscordIcon from '/public/homepage/discord-icon.png'

const HomepageFooter = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        position: 'relative',
        height: '500px',
      }}
    >
      <div className="absolute top-1/2  left-1/2 mx-auto w-full max-w-[1280px] -translate-x-1/2 -translate-y-1/2 px-4 text-white xl:px-16">
        <section className="flex flex-col gap-y-8 lg:flex-row lg:justify-evenly">
          <div>
            <p className="font-roboto text-[24px] font-bold">CASHU</p>
            <p className="max-w-[350px] font-roboto text-[#6b7280]">
              © Free and unchained. No cost, no restrictions. Use it, tweak it,
              and share it however you want.
            </p>
          </div>
          <div className="flex flex-col  gap-4 font-roboto text-[18px]">
            <a className="font-bold" href="" target="_blank">
              Resources
            </a>
            <a
              className="opacity-87"
              href="https://opencash.dev/"
              target="_blank"
            >
              OpenCash Association
            </a>
            <a
              className="opacity-87"
              href="https://github.com/cashubtc"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="opacity-87"
              href="https://docs.cashu.space"
              target="_blank"
            >
              Documentation
            </a>
            <a
              className="opacity-87"
              href="https://github.com/cashubtc/awesome-cashu"
              target="_blank"
            >
              Awesome Cashu
            </a>
          </div>
          <div className="flex flex-col gap-4 font-roboto text-[18px]">
            <p className="font-bold">Follow Us</p>
            <div className="flex gap-4">
              <a href="https://x.com/cashubtc" target="_blank">
                <Image src={XIcon} width={20} height={20} loading="lazy" />{' '}
              </a>
              <a href="https://t.me/CashuBTC" target="_blank">
                <Image
                  src={TelegramIcon}
                  width={20}
                  height={20}
                  loading="lazy"
                />{' '}
              </a>
              <a href="https://discord.gg/9AFCsNSY8C" target="_blank">
                <Image
                  src={DiscordIcon}
                  width={20}
                  height={20}
                  loading="lazy"
                />{' '}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomepageFooter
