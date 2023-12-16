import Image from "next/image";
import React from "react";
import { Wrapper } from "./Wrapper";
import Link from "next/link";
import { MenuIcon, Search } from "lucide-react";

export default function Navbar(){
  return (
    <div className="h-16 top-0 sticky backdrop-blur-sm bg-white/30">
      <Wrapper className=" flex pt-2 md:justify-around justify-between items-center text-black">
        <div className="flex items-center">
          <Image src="/Logo.png" height={30} width={30} alt="Logo" />
          <Link href="/" className="font-bold ml-2 flex items-center" passHref>
            AniWatch
          </Link>
        </div>
        <div className="hidden md:block ">
          <div className="flex space-x-3 pl-20">
            <Link href="/">
              Trending
            </Link>
            <Link href="/">
              Liked
            </Link>
            <Link href="/" passHref>
              WatchList
            </Link>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="hidden md:block">
            <div className="relative flex items-center space-x-3">
              <input
                type="search"
                id="default-search"
                placeholder="Search Anime you Like..."
                className="ml-2 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                required
              />
              <button className="px-3 py-2 text-white bg-black hover:bg-white hover:border hover:transition-all hover:duration-700 hover:border-black hover:border-solid hover:text-black focus:outline-none font-medium rounded-lg text-sm">
                Search
              </button>
            </div>
          </div>
          <button className="px-3 py-2 text-black hover:text-gray-800  ">
            Login
          </button>
          <div className="md:hidden"  >
            <MenuIcon/>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
