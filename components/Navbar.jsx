import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-3 2xl:px-16">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/drscelx6f/image/upload/v1676474306/Portfolio_images/Logo_Marca_Personal_Masculino_con_Iniciales_y_Nombre_Profesional_Blanco_y_Negro_1_jcjd0q.png"
            width="150"
            height="50"
            alt="/"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/#main">
              <li className="mr-5 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="mr-5 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="mr-5 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#certificates">
              <li className="mr-5 text-sm uppercase hover:border-b">
                Certifications
              </li>
            </Link>
            <Link href="/#projects">
              <li className="mr-5 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="mr-5 text-sm uppercase hover:border-b">Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={40} className="pb-1" />
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
            <div className="flex w-full items-center justify-between translate-y-[-42%]">
              <Image
                className="translate-x-[-25%] translate-y-[7%]"
                src="https://res.cloudinary.com/drscelx6f/image/upload/v1676474306/Portfolio_images/Logo_Marca_Personal_Masculino_con_Iniciales_y_Nombre_Profesional_Blanco_y_Negro_1_jcjd0q.png"
                width="160"
                height="100"
                alt="/"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-500 p-2 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b translate-y-[-300%] border-gray-400">
              <p>Building the future</p>
            </div>
          </div>
          <div className="py-6 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-3">Home</li>
              </Link>
              <Link href="/">
                <li className="py-3">About</li>
              </Link>
              <Link href="/">
                <li className="py-3">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-3">Certifications</li>
              </Link>
              <Link href="/">
                <li className="py-3">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-3">Contact</li>
              </Link>
            </ul>
            <div className="mt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-between p-2 my-2 w-full sm:w[70%]">
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
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
