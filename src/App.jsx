export default function App() {
  return (
    <div className="bg-[#16161A] h-[100vh] text-white items-center content-center p-[20px] ">
      <section className="absolute top-5 flex flex-row gap-5 text-[22px]">
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgmQMpVQZPGZgxcNzCZgbBnbTNrFSfGHpsRDHxkxtfbCFSMsGDcPThbnrQgxrRPrRWSRL" className="text-white opacity-25 hover:opacity-100">
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
      <section className="flex flex-row space-x-[50px]">
        <section>
          <h1 className="text-[145px] font-bold h-[200px]">RAFIASYAM.</h1>
          <h2 className="text-[70px] h-[70px] text-white opacity-25 hover:opacity-100">Portfolio</h2>
          <h2 className="text-[70px] text-white opacity-25 hover:opacity-100">Web Frontend Developer</h2>
        </section>
        <section className="w-[520px] text-[22px] text-justify items-center content-center text-[#94A1B2]">
          <p>
            Here I want to present several projects that have been created while I was looking for work as a Web Frontend Developer/Frontend Developer,
            here I also prefer to use Reactjs to build a website and framework. Currently I am familiar with Tailwindcss and MUi (Material UI).
          </p>
        </section>
      </section>
    </div>
  )
}