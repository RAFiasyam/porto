import { Co1 } from "./components/co1";
import { Co2 } from "./components/co2";
import { Co3 } from "./components/co3";
import { Co4 } from "./components/co4";
import { Co5 } from "./components/co5";
import { ReactComponent as Logo } from './components/svg/dec.svg';


export default function App() {
  return (
    <div className="bg-[#16161A] h-fit w-fit flex flex-col gap-[130px] text-white items-center content-center p-[20px] overflow-x-none sm:w-full xl:w-full">
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
        <section className="flex flex-col gap-[30px] pt-[14vh] xl:flex-row">
          <section>
            <h1 className="text-[120px]  font-bold h-[200px] xl:text-[145px]">RAFIASYAM.</h1>
            <h2 className="text-[50px] h-[70px] text-white opacity-25 hover:opacity-100 xl:text-[70px]">Portfolio</h2>
            <h2 className="text-[50px] text-white opacity-25 hover:opacity-100 xl:text-[70px]">Web Frontend Developer</h2>
          </section>
          <section className="w-[700px] h-fit text-[22px] text-justify items-center content-center text-[#94A1B2] xl:w-[350px] xl:h-[410px]">
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
        <section className="flex flex-col items-center gap-[30px]">
          <section className="flex flex-col gap-[120px] lg:flex-row">
            <Co1 />
            <Co2 />
          </section>
          <section className="flex flex-col gap-[120px] lg:flex-row">
            <Co3 />
            <Co4 />
          </section>
          <section className="flex flex-col gap-[120px] lg:flex-row">
            <Co5 />
            {/* Add according to your needs👌 */}
          </section>
        </section>
      </section>
    </div>
  )
}