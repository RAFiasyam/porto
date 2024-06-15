import React, { Component } from "react";

export class Coc1 extends Component {
    render() {
        return (
            <div className="w-fit flex flex-col gap-[20px]">
                <section className="flex flex-row gap-[350px] xl:gap-[235px] sm:gap-[145px]">
                    <a href="https://www.dicoding.com/certificates/81P2GWQYQPOY">
                        <h1 className="text-[24px] font-bold group relative w-max" >
                            <span>App Android Pemula</span>
                            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                        </h1>
                    </a>
                    <p className="text-[24px] font-bold">01</p>
                </section>
                <section className="transform w-[610px] h-fit transition duration-500 hover:none md:hover:scale-125 xl:w-[500px] sm:w-[410px]">
                    <img src="images/certificate/Certificate1.png" alt="" />
                </section>
            </div>
        );
    }
}