import React, { Component } from "react";

export class Co1 extends Component {
    render() {
        return (
            <div className="w-fit flex flex-col gap-[20px]">
                <section className="flex flex-row gap-[225px] xl:gap-[113px] sm:gap-[28px]">
                    <a href="https://web.garuda-indonesia.com/">
                        <h1 className="text-[24px] font-bold group relative w-max" >
                            <span>Revamp Web Garuda Indonesia</span>
                            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                        </h1>
                    </a>
                    <p className="text-[24px] font-bold">01</p>
                </section>
                <section className="transform w-[610px] h-fit transition duration-500 hover:none md:hover:scale-125 xl:w-[500px] sm:w-[410px]">
                    <img src="images/work/work 1.png" alt="" />
                </section>
                <section className="w-[610px] h-fit xl:w-[500px] sm:w-[410px]">
                    <p className="text-[#94a1b2] text-justify text-[20px] sm:text-[18px]">
                        During my internship at PT Aero Systems Indonesia, I had the opportunity to contribute to the Garuda Indonesia website revamp project.
                        It was my first experience working on a real-world project, and I was thrilled to be able to make a meaningful contribution.
                        The project involved revamping the frontend of the Garuda Indonesia website using React.js and Material-UI.
                    </p>
                </section>
            </div>
        );
    }
}