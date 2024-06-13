import React, { Component } from "react";

export class Co4 extends Component {
    render() {
        return (
            <div className="w-fit flex flex-col gap-[20px]">
                <section className="flex flex-row gap-[450px] xl:gap-[340px] sm:gap-[250px]">
                    <a href="https://github.com/RAFiasyam/my-art">
                        <h1 className="text-[24px] font-bold group relative w-max" >
                            <span>Mini Profile</span>
                            <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                        </h1>
                    </a>
                    <p className="text-[24px] font-bold">04</p>
                </section>
                <section className="transform w-[610px] h-fit transition duration-500 hover:none md:hover:scale-125 xl:w-[500px] sm:w-[410px]">
                    <img src="images/work/work 4.png" alt="" />
                </section>
                <section className="w-[610px] h-fit xl:w-[500px] sm:w-[410px]">
                    <p className="text-[#94a1b2] text-justify text-[20px] sm:text-[18px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Temporibus quibusdam quaerat quos corrupti perferendis aperiam accusantium officiis magnam inventore,
                        tempora deleniti esse nostrum voluptatum. Numquam voluptate labore dolores laudantium eos.
                    </p>
                </section>
            </div>
        );
    }
}