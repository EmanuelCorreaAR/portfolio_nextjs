import React from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1680px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm text-gray-800">
            Let's something build together
          </p>
          <h1 className="py-4 text-gray-800">
            Hi, I'm <span className="text-[#5651e5]">Emanuel</span>
          </h1>
          <h1 className="py-2 text-gray-800">A Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a full-stack developer, with experience in front-end
            development, back-end development, and relational/non-relational
            databases. My specialization is focused on the back-end development.
            My approach to life is "lifelong learning".
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-10">
            <Link href="https://www.linkedin.com/in/emanuel-s-correa-5b4b40139/">
              <div className="rounded-full shadow-lg shadow-gray-500 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/EmanuelCorreaAR">
              <div className="rounded-full shadow-lg shadow-gray-500 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:emanuel.sal.correa@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-500 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://drive.google.com/file/d/1wxdLc5UvYszHwDiOV43lq5nSWw5ZHx15/view?usp=share_link">
              <div className="rounded-full shadow-lg shadow-gray-500 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
