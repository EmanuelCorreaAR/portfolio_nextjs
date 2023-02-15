import React from "react";
import Link from "next/link";
import Image from "next/image";

const Certificates = () => {
  return (
    <div className="w-full lg:h-screen p-3">
      <div className="max-w-[1240px] mx-auto flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest pt-10 text-[#5651e5]">
          Certifications
        </p>
        <h2 className="py-2 pb-5">Certificate Of Knowledge</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6">
          <Link href="https://certificates.soyhenry.com/cert?id=a371a88c-e6f7-4e4b-8b5e-fbfbbdffa1ae">
            <div className="flex shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid sm:grid-col lg:grid-cols-2 gap-2 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676434055/Certificates_images/Titulo_Henry_f8u7vi.jpg"
                    width="230"
                    height="230"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-md">FULL STACK DEVELOPER</p>
                  <p className="text-sm p-2 text-gray-600">
                    Intensive career with +800 hours of code, focused on
                    programming tools such as JavaScript, CSS, Node JS, React
                    along with other technologies that complete the professional
                    development of the front and back-end.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.hackerrank.com/certificates/861970b4131e">
            <div className="flex shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid sm:grid-col lg:grid-cols-2 gap-2 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676427644/Certificates_images/css_certificate_tpjsfc.jpg"
                    width="230"
                    height="230"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-md">CSS</p>
                  <p className="text-sm p-2 text-gray-600">
                    It covers topics like exploring Cascading and Inheritance,
                    exploring text styling fundamentals, understanding the use
                    of layouts in CSS, understand the boxing of elements in CSS,
                    among others.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.hackerrank.com/certificates/6fddcc57ff25">
            <div className="flex shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid sm:grid-col lg:grid-cols-2 gap-2 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676428063/Certificates_images/javascript_intermediate_certificate_aogga0.jpg"
                    width="230"
                    height="230"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-md">JAVASCRIPT INTERMEDIATE</p>
                  <p className="text-sm p-2 text-gray-600">
                    It covers topics like Design Patterns, Memory management,
                    concurrency model, and event loops, among others.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.hackerrank.com/certificates/7fec95b2f4d7">
            <div className="flex shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid sm:grid-col lg:grid-cols-2 gap-2 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676427679/Certificates_images/rest_api_intermediate_certificate_j3tbeh.jpg"
                    width="230"
                    height="230"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-md">REST API INTERMEDIATE</p>
                  <p className="text-sm p-2 text-gray-600">
                    It covers topics like getting data from an API and process
                    using parameters or paging.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.hackerrank.com/certificates/f9e8d19938b0">
            <div className="flex shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid sm:grid-col lg:grid-cols-2 gap-2 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676427559/Certificates_images/nodejs_basic_certificate_tj7xwm.jpg"
                    width="230"
                    height="230"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-md">NODE BASIC</p>
                  <p className="text-sm p-2 text-gray-600">
                    It covers topics like Package and Modules Management,
                    Callbacks, Event Loop, Event Emitter, Buffers, Streams and
                    File Systems
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.hackerrank.com/certificates/ffd868b957d6">
            <div className="flex shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid sm:grid-col lg:grid-cols-2 gap-2 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676427667/Certificates_images/sql_basic_certificate_k6doke.jpg"
                    width="230"
                    height="230"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-md">SQL BASIC</p>
                  <p className="text-sm p-2  text-gray-600">
                    It includes simple queries, relationships, and aggregators.This competency includes using aggregations such as SUM, COUNT, AVG. 
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.hackerrank.com/certificates/f1bb277490d7">
            <div className="flex shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid sm:grid-col lg:grid-cols-2 gap-2 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676427660/Certificates_images/react_basic_certificate_p6hv6j.jpg"
                    width="230"
                    height="230"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-md">REACT BASIC</p>
                  <p className="text-sm p-2  text-gray-600">
                    It covers topics like Basic Routing, Rendering
                    Elements,State Management (Internal Component State),
                    Handling Events, ES6 and JavaScript and Form Validation.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.hackerrank.com/certificates/7a2397df0f44">
            <div className="flex shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid sm:grid-col lg:grid-cols-2 gap-2 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676428020/Certificates_images/problem_solving_basic_certificate_kl5elp.jpg"
                    width="230"
                    height="230"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-md">PROBLEM SOLVING BASIC</p>
                  <p className="text-sm p-2 text-gray-600">
                    It covers basic topics of Basic Data Structures (such as Arrays,
                    Strings) and Basic Algorithms (such as Sorting and Searching).
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
