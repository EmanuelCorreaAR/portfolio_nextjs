import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-full">
      <div className="max-w-[1680px] mx-auto my-auto px-2 py-6">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-2">What I've Build</h2>
        <div className="grid sm:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10 h-full w-full"
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
              className="rounded-xl group-hover:opacity-10"
              src="https://res.cloudinary.com/drscelx6f/image/upload/v1676698554/Projects_images/dashboard_ltw3ff.png"
              width="800"
              height="800"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Dashboard
              </h3>
              <p className="pb-4 pt-2 text-white text-center">NextJS-ChartJS</p>
              <div className="flex justify-between items-center  ">
                <Link href="https://github.com/EmanuelCorreaAR/project_nextjs_dashboard">
                  <FaGithub className=" text-white text-4xl cursor-pointer" />
                </Link>
                <Link href="https://project-nextjs-dashboard.vercel.app/">
                  <HiExternalLink className=" text-white text-4xl" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src="https://res.cloudinary.com/drscelx6f/image/upload/v1676412536/Projects_images/wikidogs_asdsla.png"
              width="800"
              height="800"
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
              className="rounded-xl group-hover:opacity-10"
              src="https://res.cloudinary.com/drscelx6f/image/upload/v1676412535/Projects_images/photo_gallery_app_sglzdw.png"
              width="800"
              height="800"
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
                <Link href="https://github.com/EmanuelCorreaAR/Project_Photo_Gallery">
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
              className="rounded-xl group-hover:opacity-10"
              src="https://res.cloudinary.com/drscelx6f/image/upload/v1676412533/Projects_images/weather_app_e1lrfw.png"
              width="800"
              height="800"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Wheater App
              </h3>
              <p className="pb-4 pt-2 text-white text-center">NodeJS-HTML5</p>
              <div className="flex justify-between items-center  ">
                <Link href="https://github.com/EmanuelCorreaAR/Project_Wheater_App">
                  <FaGithub className=" text-white text-4xl cursor-pointer" />
                </Link>
                <Link href="https://res.cloudinary.com/drscelx6f/image/upload/v1676412533/Projects_images/weather_app_e1lrfw.png">
                  <HiExternalLink className=" text-white text-4xl" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src="https://res.cloudinary.com/drscelx6f/image/upload/v1676412531/Projects_images/tasks_app_rs4afe.png"
              width="800"
              height="800"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                API REST TASKS
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                NodeJS-React-CSS3
              </p>
              <div className="flex justify-between items-center  ">
                <Link href="https://github.com/EmanuelCorreaAR">
                  <FaGithub className=" text-white text-4xl cursor-pointer" />
                </Link>
                <Link href="https://res.cloudinary.com/drscelx6f/image/upload/v1676412531/Projects_images/tasks_app_rs4afe.png">
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
