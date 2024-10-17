import React, { useEffect } from 'react';
import PrivacyIcon from '/public/homepage/privacy-icon.png';
import DecentralizedIcon from '/public/homepage/decentralized-icon.png';
import OpenSourceIcon from '/public/homepage/open-source-icon.png';
import CypherpunkIcon from '/public/homepage/cypherpunk-icon.png';
import Image from 'next/image';

const features = [
  {
    name: 'Privacy',
    description:
      'Secure and private transactions, putting the power of privacy back in your hands.',
    image: PrivacyIcon,
  },
  {
    name: 'Decentralized',
    description:
      'Easy for every user to run their own mint. Ensuring resilience against centralized failure.',
    image: DecentralizedIcon,
  },
  {
    name: 'Open-source',
    description:
      'Ensures transparency, security, and continuous improvement through community collaboration.',
    image: OpenSourceIcon,
  },
  {
    name: 'Cypherpunk',
    description:
      "Adapting the original Ecash mission for today's privacy challenges. Legacy meets Bitcoin.",
    image: CypherpunkIcon,
  },
];

const Features = () => {
  useEffect(() => {
    // Dynamically import GSAP and its plugins
    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default;

      import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
        const ScrollTrigger = ScrollTriggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        // Apply ScrambleText effect to each feature
        features.forEach((feature, index) => {
          gsap.to(`.feature-text-${index}`, {
            duration: 3,
            scrambleText: {
              text: feature.description,
              chars: 'lowerCase',
              revealDelay: 0.5,
              tweenLength: false,
            },
            scrollTrigger: {
              trigger: `.feature-item-${index}`,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none none',
            },
          });
        });
      });
    }).catch((error) => console.error('Error loading GSAP or ScrollTrigger:', error));
  }, []);

  return (
    <div className="my-16 mx-auto max-w-[1152px] px-4 xl:px-0">
      <p
        className="pt-16 text-center font-roboto text-[24px] font-bold md:text-[32px] xl:text-[54px]"
        style={{
          textTransform: 'uppercase',
        }}
      >
        FEATURES
      </p>

      <p className="mt-6 text-center font-roboto-mono text-[18px] text-[#1f2937] md:text-[26px] xl:mt-16 xl:text-[32px]">
        Cashu offers near-perfect privacy for users of custodial Bitcoin
        applications. Nobody needs to know who you are, how much funds you
        have, and with whom you transact.
      </p>

      <div className="my-16 flex flex-col gap-y-7">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-item-${index} flex flex-col items-center gap-x-7 px-7 lg:flex-row lg:justify-between`}
          >
            <div className="flex items-center gap-x-7 gap-y-12 lg:w-[40%]">
              <Image
                loading="lazy"
                width={100}
                height={100}
                className="rounded-full"
                src={feature.image}
              />
              <p className="font-roboto text-[18px] font-bold md:text-[24px] xl:text-[38px]">
                {feature.name}
              </p>
            </div>
            <p
              className={`feature-text-${index} text-center font-roboto-mono text-[24px] font-medium text-[#111827] lg:w-[60%]`}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;