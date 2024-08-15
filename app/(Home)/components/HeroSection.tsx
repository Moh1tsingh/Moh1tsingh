import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./Title";

const HeroSection = () => {
  return (
    <div className=" min-h-[60vh] flex flex-col-reverse lg:gap-0 gap-14 lg:flex-row items-center justify-between animate-move-up">
      <div className=" space-y-6 text-center lg:text-left">
        <h1 className=" text-4xl lg:text-7xl font-bold">
          Nice to meet you!{" "}
          <span className=" hand-emoji">
            👋
          </span>
          <br />
          <span className=" underline underline-offset-8 decoration-green-500">
            {"I am Mohitsing"}
          </span>
          h.
        </h1>
        <p className=" md:w-96 text-lg text-gray-300">
          {
            "An Engineering student and a Fullstack developer passionate about solving problems and building stuff that users love."
          }
        </p>
        <Link
          className=" inline-block group"
          href="mailto:thakurmohitsingh2003@gmail.com"
        >
          <Title text="Contact Me 📬" />
        </Link>
      </div>
      <div className=" relative">
        <div className=" abstract-size-parent space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className=" abstract-size  rounded-2xl bg-green-500"></div>
            <div className=" abstract-size rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="abstract-size  rounded-2xl bg-indigo-500"></div>
            <div className="abstract-size rounded-full bg-green-500"></div>
          </div>
          <div className="glow  absolute top-[40%] right-1/2 -z-10"></div>
        </div>

        {/* <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className=" available-button">
            <p>📢 Available for Work</p>
          </MovingBorderBtn>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
