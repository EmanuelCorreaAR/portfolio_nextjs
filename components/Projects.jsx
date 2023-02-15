import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-2">What I've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
            className="rounded-xl group-hover:opacity-10"
              src="https://res.cloudinary.com/drscelx6f/image/upload/v1676412534/Projects_images/tiger_coffee_hjn2kt.png"
              width="700"
              height="700"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                <h3 className="text-2xl text-white tracking-wider text-center">Tiger Coffee</h3>
                <p className="pb-4 pt-2 text-white text-center">MongoDB-NodeJS-ReactJS</p>
                <Link href="">
                    <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;