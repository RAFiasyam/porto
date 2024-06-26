import React, { Component } from "react";

export class Co2 extends Component {
    render() {
        return (
            <div className="w-fit flex flex-col gap-[20px]">
                <section className="flex flex-row gap-[250px] xl:gap-[140px] sm:gap-[50px]">
                    <a href="https://home.asyst.co.id/">
                        <h1 className="text-[24px] font-bold group relative w-max" >
                            <span>Revamp Web PT Aero System</span>
                            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                        </h1>
                    </a>
                    <p className="text-[24px] font-bold">02</p>
                </section>
                <section className="transform w-[610px] h-fit transition duration-500 hover:none md:hover:scale-125 xl:w-[500px] sm:w-[410px]">
                    <img src="images/work/Work2.png" alt="" />
                </section>
                <section className="w-[610px] h-fit xl:w-[500px] sm:w-[410px]">
                    <p className="text-[#94a1b2] text-justify text-[20px] sm:text-[18px]">
                        During my internship at PT Aero Systems Indonesia, in addition to working on the Garuda Indonesia website revamp,
                        I was also tasked with revamping the frontend (FE) of the PT Aero Systems website. I dedicated approximately 11 months to both projects.
                        The Garuda Indonesia web FE revamp was completed in around 6 months, while the PT Aero Systems web project also involved using React.js and Material-UI.
                    </p>
                </section>
            </div>
        );
    }
}