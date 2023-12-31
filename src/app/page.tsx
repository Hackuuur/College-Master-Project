import { Wrapper } from "@/components/Wrapper";
import {ArrowRight } from "lucide-react";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import React from "react";


const Page = () => {
  return (
    <Wrapper>
      <div className="relative w-full h-screen items-end flex justify-center  ">
        <img
          src="/home.webp"
          alt="hero"
          className="max-w-full fixed" // Maintain aspect ratio
        />
        <div
          className="absolute animate-bounce flex text-sm md:text-base bottom-7  left-2 md:bottom-7 md:left-6 lg:left-12 text-white space-x-1"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "bottom left",
            width: "fit-content",
          }}
        >
          <Link href={"/"} className="pb-2 font-extrabold ">
            Watch Now
          </Link>
          <ArrowRight />
        </div>
        <div className="absolute flex text-white md:text-2xl text-[20px]  bottom-9 right-3 space-x-4 ">
          <Link href={"/"}>
            <FaFacebook />
          </Link>
          <Link href={"/"}>
            <FaGithub />
          </Link>
          <Link href={"/"}>
            <FaInstagram />
          </Link>
        </div>
     
      </div>
    </Wrapper>
  );
};

export default Page;
