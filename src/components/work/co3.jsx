import React, { Component } from "react";

export class Co3 extends Component {
    render() {
        return (
            <div className="w-fit flex flex-col gap-[20px]">
                <section className="flex flex-row gap-[410px] xl:gap-[302px] sm:gap-[210px]">
                    <a href="https://github.com/RAFiasyam/porto">
                        <h1 className="text-[24px] font-bold group relative w-max" >
                            <span>Web Prognosis</span>
                            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                        </h1>
                    </a>
                    <p className="text-[24px] font-bold">03</p>
                </section>
                <section className="transform w-[610px] h-fit transition duration-500 hover:none md:hover:scale-125 xl:w-[500px] sm:w-[410px]">
                    <img src="images/work/work 3.png" alt="" />
                </section>
                <section className="w-[610px] h-fit xl:w-[500px] sm:w-[410px]">
                    <p className="text-[#94a1b2] text-justify text-[20px] sm:text-[18px]">
                        Prognosis is a website that our team developed during the IDN IT Fest 2022 competition at IDN Boarding School Jonggol.
                        We utilized HTML and JavaScript to construct the website over a period of approximately 2-3 weeks. I am delighted to share that we secured 3rd place in this competition.
                        It was also my first national competition experience while studying at IDN Boarding School Solo.
                    </p>
                </section>
            </div>
        );
    }
}