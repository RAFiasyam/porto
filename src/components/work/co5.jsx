import React, { Component } from "react";

export class Co5 extends Component {
    render() {
        return (
            <div className="w-fit flex flex-col gap-[20px]">
                <section className="flex flex-row gap-[365px] xl:gap-[255px] sm:gap-[165px]">
                    <a href="https://github.com/RAFiasyam/porto">
                        <h1 className="text-[24px] font-bold group relative w-max" >
                            <span>Web Nidaul Qur'an</span>
                            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                        </h1>
                    </a>
                    <p className="text-[24px] font-bold">05</p>
                </section>
                <section className="transform w-[610px] h-fit transition duration-500 hover:none md:hover:scale-125 xl:w-[500px] sm:w-[410px]">
                    <img src="images/work/Work 5.png" alt="" />
                </section>
                <section className="w-[610px] h-fit xl:w-[500px] sm:w-[410px]">
                    <p className="text-[#94a1b2] text-justify text-[20px] sm:text-[18px]">
                        The Nidaul Qur'an Web is a website that we worked on as a group, which aims to help their school,
                         and we created this project for the purpose of working on the Ujikom assignment when we were in the 2nd grade of vocational school,
                          and as far as I remember, this was created using Nextjs and Tailwindcss.
                    </p>
                </section>
            </div>
        );
    }
}