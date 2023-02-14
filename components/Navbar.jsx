import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h4 className="p-2">EmaCorreaDEV</h4>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="mr-5 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="mr-5 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="mr-5 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="mr-5 text-sm uppercase hover:border-b">
                Certifications
              </li>
            </Link>
            <Link href="/">
              <li className="mr-5 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="mr-5 text-sm uppercase hover:border-b">
                Contact me
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={26} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "fixed md:hidden left-0 top-0 w-full h-screen bg-black/60" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h5 className="text-[#5651e5]">EmaCorreaDEV</h5>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-500 p-2 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p>Building the future</p>
            </div>
          </div>
          <div className="py-10 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-5">Home</li>
              </Link>
              <Link href="/">
                <li className="py-5">About</li>
              </Link>
              <Link href="/">
                <li className="py-5">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-5">Certifications</li>
              </Link>
              <Link href="/">
                <li className="py-5">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-5">Contact me</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w[80%]">
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
