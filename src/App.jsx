import React from "react";
import AnimatedCursor from "react-animated-cursor";

import { Co1 } from "./components/work/co1";
import { Co2 } from "./components/work/co2";
import { Co3 } from "./components/work/co3";
import { Co4 } from "./components/work/co4";
import { Co5 } from "./components/work/co5";
import { Co6 } from "./components/work/co6";
// ----------------------------------------
import { Coc1 } from "./components/cetificate/coc1";
import { Coc2 } from "./components/cetificate/coc2";
import { Coc3 } from "./components/cetificate/coc3";
import { Coc4 } from "./components/cetificate/coc4";
import { Coc5 } from "./components/cetificate/coc5";


export default function App() {
  return (
    <div className="bg-[#16161A] h-fit w-fit flex flex-col gap-[130px] text-white items-center content-center p-[20px] overflow-x-none sm:w-full xl:w-full">
      <AnimatedCursor
        color='255, 255, 255'
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerStyle={{
          mixBlendMode: 'exclusion'
        }}
      />
      <section className="flex flex-col">
        <section className=" flex flex-row gap-5 text-[22px]">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgmQMpVQZPGZgxcNzCZgbBnbTNrFSfGHpsRDHxkxtfbCFSMsGDcPThbnrQgxrRPrRWSRL"
            className="text-white text-[30px] sm:text-[24px] opacity-25 hover:opacity-100">
            Email
          </a>
          <a href="https://www.linkedin.com/in/rafi-asyam-a5bb98289/" className="text-white text-[30px] sm:text-[24px] opacity-25 hover:opacity-100">
            Linkedin
          </a>
          <a href="https://github.com/RAFiasyam" className="text-white text-[30px] sm:text-[24px] opacity-25 hover:opacity-100">
            Github
          </a>
          <a href="https://www.instagram.com/rafiasyam__/" className="text-white text-[30px] sm:text-[24px] opacity-25 hover:opacity-100">
            Instagram
          </a>
        </section>
        <section className="flex flex-col gap-[30px] pt-[14vh] xl:flex-row">
          <section>
            <h1 className="text-[100px] font-bold h-[130px] xl:text-[145px] md:text-[120px] md:h-[145px] lg:h-[180px]">RAFIASYAM.</h1>
            <h2 className="text-[45px] h-[70px] text-white opacity-25 hover:opacity-100 xl:text-[70px] md:text-[60px]">Portfolio</h2>
            <h2 className="text-[45px] text-white opacity-25 hover:opacity-100 xl:text-[70px] md:text-[60px]">Web Frontend Developer</h2>
          </section>
          <section className="w-[600px] h-fit text-[22px] text-justify items-center content-center text-[#94A1B2] xl:w-[350px] xl:h-[410px] md:w-[720px]">
            <p>
              Here I want to present several projects that have been created while I was looking for work as a Web Frontend Developer/Frontend Developer,
              here I also prefer to use Reactjs to build a website and framework. Currently I am familiar with Tailwindcss and MUi (Material UI).
            </p>
          </section>
        </section>
      </section>
      <section className="flex flex-col w-full gap-[25px]">
        <section className="w-full text-[22px] text-center">
          <h1 className="text-[120px] font-bold xl:text-[145px]">WORK</h1>
        </section>
        <section className="flex flex-col items-center gap-[50px]">
          <section className="flex flex-col gap-[50px] lg:flex-row lg:gap-[120px]">
            <Co1 />
            <Co2 />
          </section>
          <section className="flex flex-col gap-[50px] lg:flex-row lg:gap-[120px]">
            <Co3 />
            <Co4 />
          </section>
          <section className="flex flex-col gap-[50px] lg:flex-row lg:gap-[120px]">
            <Co5 />
            <Co6 />
          </section>
          {/* Add according to your needs👌 */}
        </section>
      </section>
      <section className="flex flex-col w-full gap-[25px]">
        <section className="w-full text-[22px] text-center">
          <h1 className="text-[95px] font-bold xl:text-[145px] md:text-[120px]">CERTIFICATE</h1>
        </section>
        <section className="flex flex-col items-center gap-[50px] ">
          <section className="flex flex-col items-center gap-[50px] lg:flex-row lg:gap-[120px]">
            <Coc1 />
            <Coc2 />
          </section>
          <section className="flex flex-col items-center gap-[50px] lg:flex-row lg:gap-[120px]">
            <Coc3 />
            <Coc4 />
          </section>
          <section className="flex flex-col items-center gap-[50px] lg:flex-row lg:gap-[120px]">
            <Coc5 />
            {/* Add according to your needs👌 */}
          </section>
        </section>
      </section>
      <p className="text-[18px] gap-[8px]  group flex flex-row">
        Made with 💖 by
        <a href="https://github.com/RAFiasyam/">
          <p className="text-[18px] font-italic group relative w-fit" >
            <span>Rafi Asyam</span> {/* ⚠️⚠️⚠️Please don't change this creator⚠️⚠️⚠️ */}
            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
          </p>
        </a>
      </p>
    </div>
  )
}