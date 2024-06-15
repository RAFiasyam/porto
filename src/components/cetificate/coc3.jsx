import React, { Component } from "react";

export class Coc3 extends Component {
    render() {
        return (
            <div className="w-fit flex flex-col gap-[20px]">
                <section className="flex flex-row gap-[305px] xl:gap-[195px] sm:gap-[105px] ">
                    <a href="https://www.dicoding.com/certificates/81P28271NPOY">
                        <h1 className="text-[24px] font-bold group relative w-max" >
                            <span>Pemrograman web basic</span>
                            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                        </h1>
                    </a>
                    <p className="text-[24px] font-bold">03</p>
                </section>
                <section className="transform w-[610px] h-fit transition duration-500 hover:none md:hover:scale-125 xl:w-[500px] sm:w-[410px]">
                    <img src="images/certificate/Certificate3.png" alt="" />
                </section>
            </div>
        );
    }
}