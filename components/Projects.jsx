import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const Projects = () => {
  return (
    <div id="projects" className="w-full lg:h-screen pt-20">
      <div className="max-w-[1680px] mx-auto flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Build</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl w-full h-full group-hover:opacity-10"
              src="https://res.cloudinary.com/drscelx6f/image/upload/v1676412534/Projects_images/tiger_coffee_hjn2kt.png"
              width="600"
              height="600"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Tiger Coffee
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                MongoDB-NodeJS-ReactJS
              </p>
              <div className="flex justify-between items-center ">
                <Link href="https://github.com/JuanSegundo7/Final_Proyect/">
                  <FaGithub className=" text-white text-4xl cursor-pointer" />
                </Link>
                <Link href="https://tigercoffee.vercel.app/">
                  <HiExternalLink className=" text-white text-4xl cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="w-full h-full rounded-xl group-hover:opacity-10"
              src="https://res.cloudinary.com/drscelx6f/image/upload/v1676412536/Projects_images/wikidogs_asdsla.png"
              width="600"
              height="600"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Wikidogs
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                PostgreSQL-NodeJS-ReactJS
              </p>
              <div className="flex justify-between items-center ">
                <Link href="https://github.com/EmanuelCorreaAR">
                  <FaGithub className=" text-white text-4xl cursor-pointer" />
                </Link>
                <Link href="https://vimeo.com/778608749">
                  <HiExternalLink className=" text-white text-4xl cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="w-full h-full rounded-xl group-hover:opacity-10"
              src="https://res.cloudinary.com/drscelx6f/image/upload/v1676412535/Projects_images/photo_gallery_app_sglzdw.png"
              width="600"
              height="600"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Photo Gallery
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                MongoDB-Handlebars
              </p>
              <div className="flex justify-between items-center ">
                <Link href="https://github.com/EmanuelCorreaAR">
                  <FaGithub className=" text-white text-4xl cursor-pointer" />
                </Link>
                <Link href="https://res.cloudinary.com/drscelx6f/image/upload/v1676412535/Projects_images/photo_gallery_app_sglzdw.png">
                  <HiExternalLink className=" text-white text-4xl cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className=" w-full h-full rounded-xl group-hover:opacity-10"
              src="https://res.cloudinary.com/drscelx6f/image/upload/v1676412533/Projects_images/weather_app_e1lrfw.png"
              width="600"
              height="600"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Wheater App
              </h3>
              <p className="pb-4 pt-2 text-white text-center">NodeJS-HTML5</p>
              <div className="flex justify-between items-center  ">
                <Link href="https://github.com/EmanuelCorreaAR">
                  <FaGithub className=" text-white text-4xl cursor-pointer" />
                </Link>
                <Link href="https://res.cloudinary.com/drscelx6f/image/upload/v1676412533/Projects_images/weather_app_e1lrfw.png">
                  <HiExternalLink className=" text-white text-4xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
