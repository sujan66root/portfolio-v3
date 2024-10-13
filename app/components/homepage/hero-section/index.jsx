// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode, SiInstagram } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="fade-in text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-[3rem] lg:leading-[4rem]">
            Hello, <br />
            I’m <span className="text-pink-500">{personalData.name}</span> 👋 <br />
            <span className="text-[#16f2b3] text-xl md:text-2xl lg:text-3xl">
              {personalData.designation}
            </span>.
          </h1>
          <p className="mt-4 text-lg text-gray-300 md:text-xl">
            Welcome to my portfolio! I'm excited to showcase my projects and skills.
            Let's create something amazing together!
          </p>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.instagram}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiInstagram size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}>
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">&apos;</span>
                <span className="text-amber-300">Sujan Gautam</span>
                <span className="text-gray-400">&apos;,</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">[</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">&apos;, </span>
                <span className="text-amber-300">Node</span>
                <span className="text-gray-400">&apos;, </span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">&apos;, </span>
                <span className="text-amber-300">Java</span>
                <span className="text-gray-400">&apos;, </span>
                <span className="text-amber-300">Spring Boot</span>
                <span className="text-gray-400">&apos;, </span>
                <span className="text-amber-300">J2EE</span>
                <span className="text-gray-400">&apos;, </span>
                <span className="text-amber-300">JSP</span>
                <span className="text-gray-400">&apos;, </span>
                <span className="text-amber-300">PostgreSQL</span>
                <span className="text-gray-400">&apos;, </span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">&apos;, </span>
                <span className="text-amber-300">Hibernate</span>
                <span className="text-gray-400">&apos;, </span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">&apos;, </span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">&apos;, </span>
                <span className="text-amber-300">Microservices</span>
                <span className="text-gray-400">&apos;, </span>
                <span className="text-amber-300">Kafka</span>
                <span className="text-gray-400">&apos;, </span>
                <span className="text-amber-300">MQTT</span>
                <span className="text-gray-400">]</span>
                <span className="text-gray-400">,</span>
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">location:</span>
                <span className="text-gray-400">[</span>
                <span className="text-white">{"{"}</span>
                <span className="ml-4 lg:ml-8 text-white">city:</span>
                <span className="text-gray-400">&apos;</span>
                <span className="text-amber-300">Toronto</span>
                <span className="text-gray-400">&apos;,</span>
                <span className="ml-4 lg:ml-8 text-white">country:</span>
                <span className="text-gray-400">&apos;</span>
                <span className="text-amber-300">Canada</span>
                <span className="text-gray-400">&apos;</span>
                <span className="text-gray-400">{"}"}</span>
                <span className="text-gray-400">],</span>
              </div>
              <div>
                <span className="text-white">{"}"}</span>
                <span className="text-gray-400">;</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
