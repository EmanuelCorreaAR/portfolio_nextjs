import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import { sendContactForm } from "../lib/api";

const initValues = {
  name: "",
  phone_number: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { values: initValues };

const Contact = () => {
  const [state, setState] = useState(initState);
  const { values, isloading, error } = state;

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isloading: false,
        error: error.message,
      }));
    }
  };

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  return (
    <div id="contact" className="w-full h-full">
      <div className="max-w-[1680px] m-auto p-4 py-16 w-full">
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
                <p className="uppercase pt-10 text-[#5651e5]">Connect with me</p>
                <div className="flex items-center gap-10 py-4">
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
          {/*left*/}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl ">
            <div className="p-4">
              {error && (
                <Text color="red.300" my={4} fontSize="xl">
                  {error}
                </Text>
              )}
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 ">Name</label>
                    <input
                      placeholder="Please enter your name"
                      className="border-2 rounded-lg p-3 border-gray-300"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      placeholder="Please enter your phone number"
                      className="border-2 rounded-lg p-3 border-gray-300"
                      type="text"
                      name="phone_number"
                      value={values.phone_number}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    placeholder="Please enter your email address"
                    className="border-2 rounded-lg p-3 border-gray-300 peer invalid:border-red-500"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    placeholder="Please enter a subject"
                    className="border-2 rounded-lg p-3 border-gray-300 "
                    type="text"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    placeholder="Please enter a message here"
                    className="border-2 rounded-lg p-3 border-gray-300 "
                    rows="8"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  className="w-full p-4 text-gray-50 mt-4"
                  disabled={
                    !values.name ||
                    !values.email ||
                    !values.message ||
                    !values.subject
                  }
                  onClick={onSubmit}
                  isloading={isloading}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <Link href="#main" scroll={false}>
            <div className="rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={35} />
            </div>
          </Link>
          
        </div>
        <div>
        <h4 className=" p-3 flex justify-center mb-[-10%]">
          Created with a lot ♥ 2023
        </h4>
      </div>
      </div>
   
    </div>
  );
};

export default Contact;
