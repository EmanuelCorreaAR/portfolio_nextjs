import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill, BsMoonFill } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#eff2f5");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (router.asPath === "/wikidogs") {
      setNavBg("transparent");
      setLinkColor("#eff2f5");
    } else {
      setNavBg("#eff2f5");
      setLinkColor("#1f2937");
    }
  }, [router]);

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

  // const renderThemeChanger = () => {
  //   return (
  //     <button
  //       onClick=""
  //       className="rounded-full p-2 hover:bg-gray-200 cursor-pointer translate-x-[50%] translate-y-[-10%]"
  //     >
  //       <BsMoonFill />
  //     </button>
  //   );
  // };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-2xl rounded-bl-lg rounded-br-lg z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 xl:px-10">
        <Link href="#main">
          <Image
            className="w-auto h-auto "
            src="https://res.cloudinary.com/drscelx6f/image/upload/v1676905212/Portfolio_images/Logo_EC_Developer_asudwu.png"
            width="120"
            height="150"
            alt="/"
          />
        </Link>
        {/* <div>{renderThemeChanger()}
        </div> */}
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="#main" scroll={false}>
              <li className="mr-5 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="#about" scroll={false}>
              <li className="mr-5 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="#skills" scroll={false}>
              <li className="mr-5 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="#projects" scroll={false}>
              <li className="mr-5 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="#certificates" scroll={false}>
              <li className="mr-5 text-sm uppercase hover:border-b">
                Certifications
              </li>
            </Link>

            <Link href="#contact" scroll={false}>
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#eff2f5] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between translate-y-[-42%] ">
              <Image
                className="translate-x-[-25%] translate-y-[7%] w-auto h-auto "
                src="https://res.cloudinary.com/drscelx6f/image/upload/v1676905212/Portfolio_images/Logo_EC_Developer_asudwu.png"
                width="120"
                height="100"
                alt="/"
              />
              {/* <button
                onClick=""
                className="rounded-full shadow-lg shadow-gray-500 p-2 cursor-pointer"
              >
                <BsMoonFill />
              </button> */}
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
          <div className="py-2 flex flex-col translate-y-[-14%]">
            <ul className="uppercase">
              <Link href="#main" scroll={false}>
                <li className="py-3">Home</li>
              </Link>
              <Link href="#about" scroll={false}>
                <li className="py-3">About</li>
              </Link>
              <Link href="#skills" scroll={false}>
                <li className="py-3">Skills</li>
              </Link>
              <Link href="#projects" scroll={false}>
                <li className="py-3">Projects</li>
              </Link>
              <Link href="#certificates" scroll={false}>
                <li className="py-3">Certifications</li>
              </Link>
              <Link href="#contact" scroll={false}>
                <li className="py-3">Contact</li>
              </Link>
            </ul>
            <div className="pt-4 translate-y-[50%]">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-between p-2 my-2 w-full sm:w[70%]">
                <Link href="https://www.linkedin.com/in/emanuel-s-correa-5b4b40139/">
                  <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href="https://github.com/EmanuelCorreaAR">
                  <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="mailto:emanuel.sal.correa@gmail.com">
                  <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="https://drive.google.com/file/d/1wxdLc5UvYszHwDiOV43lq5nSWw5ZHx15/view?usp=share_link">
                  <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
