"use client";
import Link from "next/link";
import { useState } from "react";
import Theme from "./Theme";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="dark:bg-gray-800 fixed w-screen top-0 block z-[99] bg-white p-4 shadow-xl">
      <div className=" mx-auto container px-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className=" text-2xl font-bold">
            Herne
          </Link>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6">
          <HoverCard>
  <HoverCardTrigger><span className="text-lg cursor-pointer">Movies</span></HoverCardTrigger>
  <HoverCardContent className="flex flex-col">
  <Link href="/section/movies" className=" text-lg hover:text-gray-500">
            Popular
          </Link>
  <Link href="/section/movies/nowplaying" className=" text-lg hover:text-gray-500">
  Now Playing
          </Link>
  </HoverCardContent>
</HoverCard>

               <HoverCard>
  <HoverCardTrigger><span className="text-lg cursor-pointer">Tv Shows</span></HoverCardTrigger>
  <HoverCardContent className="flex flex-col">
  <Link href="/section/tv" className=" text-lg hover:text-gray-500">
            Popular
          </Link>
  <Link href="/section/tv/toprated" className=" text-lg hover:text-gray-500">
  Top Rated
          </Link>
  </HoverCardContent>
</HoverCard>
<HoverCard>
  <HoverCardTrigger><span className="text-lg cursor-pointer">People</span></HoverCardTrigger>
  <HoverCardContent className="flex flex-col">
  <Link href="/section/people" className=" text-lg hover:text-gray-500">
            Popular People
          </Link>
  </HoverCardContent>
</HoverCard>
          <Theme />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden  flex items-center">
          <button
            className="focus:outline-none mr-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className={`h-6 w-6 transform transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
      
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          <Theme />
        </div>
      </div>
      <div
        className={`md:hidden flex flex-col mt-4 space-y-4 transition-all duration-500 ease-in-out transform ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-2 justify-start items-start">
        <DropdownMenu>
  <DropdownMenuTrigger><span className="text-lg">Movies</span></DropdownMenuTrigger>
  <DropdownMenuContent className="relative z-[9999]">
   
    <DropdownMenuItem><Link href="/section/movies" className=" text-lg hover:text-gray-500">
            Popular
          </Link>
</DropdownMenuItem>
    <DropdownMenuItem>  <Link href="/section/movies/nowplaying" className=" text-lg hover:text-gray-500">
  Now Playing
          </Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        <DropdownMenu>
  <DropdownMenuTrigger><span className="text-lg">Tv Shows</span></DropdownMenuTrigger>
  <DropdownMenuContent className="relative z-[9999]">
   
    <DropdownMenuItem><Link href="/section/tv" className=" text-lg hover:text-gray-500">
            Popular
          </Link>
</DropdownMenuItem>
    <DropdownMenuItem>  <Link href="/section/tv/toprated" className=" text-lg hover:text-gray-500">
  Top Rated
          </Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        <DropdownMenu>
  <DropdownMenuTrigger><span className="text-lg">People</span></DropdownMenuTrigger>
  <DropdownMenuContent className="relative z-[9999]">
   
    <DropdownMenuItem><Link href="/section/people" className=" text-lg hover:text-gray-500">
            Popular People
          </Link>
</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
