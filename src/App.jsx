import { Co1 } from "./components/co1";
import { Co2 } from "./components/co2";
import { Co3 } from "./components/co3";
import { Co4 } from "./components/co4";
import { Co5 } from "./components/co5";
import { ReactComponent as Logo } from './components/svg/dec.svg';


export default function App() {
  return (
    <div className="bg-[#16161A] h-[390vh] flex flex-col gap-[130px] text-white items-center content-center p-[20px] overflow-x-none sm:w-full">
      <section className="flex flex-col">
        <section className=" flex flex-row gap-5 text-[22px]">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgmQMpVQZPGZgxcNzCZgbBnbTNrFSfGHpsRDHxkxtfbCFSMsGDcPThbnrQgxrRPrRWSRL"
            className="text-white opacity-25 hover:opacity-100">
            Email
          </a>
          <a href="https://www.linkedin.com/in/rafi-asyam-a5bb98289/" className="text-white opacity-25 hover:opacity-100">
            Linkedin
          </a>
          <a href="https://github.com/RAFiasyam" className="text-white opacity-25 hover:opacity-100">
            Github
          </a>
          <a href="https://www.instagram.com/rafiasyam__/" className="text-white opacity-25 hover:opacity-100">
            Instagram
          </a>
        </section>
        <section className="flex flex-col gap-[30px] pt-[14vh] lg:flex-row">
          <section>
            <h1 className="text-[145px] font-bold h-[200px]">RAFIASYAM.</h1>
            <h2 className="text-[70px] h-[70px] text-white opacity-25 hover:opacity-100">Portfolio</h2>
            <h2 className="text-[70px] text-white opacity-25 hover:opacity-100">Web Frontend Developer</h2>
          </section>
          <section className="w-[350px] h-[410px] text-[22px] text-justify items-center content-center text-[#94A1B2]">
            <p>
              Here I want to present several projects that have been created while I was looking for work as a Web Frontend Developer/Frontend Developer,
              here I also prefer to use Reactjs to build a website and framework. Currently I am familiar with Tailwindcss and MUi (Material UI).
            </p>
          </section>
        </section>
      </section>
      <section className="flex flex-col w-full gap-[25px]">
        <section className="w-full text-[22px] text-center">
          <h1 className="text-[145px] font-bold">THEPROJECTS</h1>
        </section>
        <section className="flex flex-col items-center gap-[30px]">
          <section className="flex flex-row gap-[90px]">
            <Co1 />
            <Co2 />
          </section>
          <section className="flex flex-row gap-[90px]">
            <Co3 />
            <Co4 />
          </section>
          <section className="flex flex-row gap-[90px]">
            <Co5 />
            {/* Add according to your needs👌 */}
          </section>
        </section>
      </section>
    </div>
  )
}