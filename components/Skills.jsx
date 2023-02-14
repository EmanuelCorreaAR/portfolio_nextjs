import Image from "next/image";
import React from "react";
import Link from "next/link";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest pt-10 text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-2">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="https://www.javascript.com/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/js.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JAVASCRIPT</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.java.com/es/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/java.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JAVA</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://nodejs.org/es/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/nodejs.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>NODE JS</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://es.reactjs.org/">
            <div className="pt-7 pb-6 pl-4 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/react.png"
                    width="126"
                    height="100"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>REACT</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.css3.com/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/css-3.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS 3</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://nextjs.org/">
            <div className="p-5 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/nextjs.png"
                    width="72"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>NEXT JS</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://tailwindcss.com/">
            <div className="pt-7 pb-7 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/tailwindcss.png"
                    width="95"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="pr-2">TAILWIND CSS</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://lenguajehtml.com/html/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/html-5.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML 5</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.docker.com/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/docker.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>DOCKER</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.mongodb.com/es">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/mongodb.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>MONGO DB</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.postgresql.org/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/postgre.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>POSTGRESQL</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.mysql.com/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/mysql.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>MYSQL</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
