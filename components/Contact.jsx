import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen pt-20">
      <div className="max-w-[1680px] m-auto px-2 py-2 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className=" grid lg:grid-cols-5 gap-8">
          {/*left*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                  alt="photo_contact"
                />
              </div>
              <div>
                <h2 className="py-2">Emanuel Correa</h2>
                <p>Full-Stack Developer</p>
                <p className="py-2">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className=" flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*left*/}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl ">
            <div className="p-4">
              <form action="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 ">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="email"
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="text"
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 "
                    rows="8"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-50 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="#main" scroll={false}>
          <div className="rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={35}/>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <h4 className=" p-6 flex justify-center">Todos los derechos reservados-2023</h4>
      </div>
    </div>
  );
};

export default Contact;
