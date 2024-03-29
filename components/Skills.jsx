import Image from "next/image";
import React from "react";
import Link from "next/link";

const Skills = () => {
  return (
    <div id="skills" className="w-full md:h-screen p-2 pt-12">
      <div className="max-w-[1680px] mx-auto flex flex-col justify-center h-full ">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-2">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="https://www.javascript.com/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676410421/Portfolio_images/js_ksoe3r.png"
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
          <Link href="https://www.typescriptlang.org/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1698169135/Portfolio_images/k24ql7ixyvh9xxl9ljpd.png"
                    width="64"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>TYPESCRIPT</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.java.com/es/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676410421/Portfolio_images/java_ibezbk.png"
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
          <Link href="https://learn.microsoft.com/en-us/dotnet/csharp/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1697565599/Portfolio_images/ksiwkpn20shfvbsycacp.png"
                    width="57"
                    height="54"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>C#</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://nodejs.org/es/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676410420/Portfolio_images/nodejs_hd2zo0.png"
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
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676410420/Portfolio_images/react_vlw3za.png"
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
          <Link href="https://grails.org/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1698169231/Portfolio_images/erlcv0hvndpogejzbcl5.png"
                    width="91"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>GRAILS</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://nextjs.org/">
            <div className="p-5 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676410419/Portfolio_images/nextjs_gi024j.png"
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
          <Link href="https://dart.dev/">
            <div className="pt-7 pb-7 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1698170038/Portfolio_images/hy9anbs47k8xsihb4mrl.png"
                    width="104"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="pr-2">DART</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://flutter.dev/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1698169018/Portfolio_images/jnxxw4uuvlp6w2ctuy1v.png"
                    width="85"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>FLUTTER</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.docker.com/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676410420/Portfolio_images/docker_ot1ffj.png"
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
          <Link href="https://firebase.google.com/">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676749805/Portfolio_images/firebase_brkvmz.png"
                    width="80"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>FIREBASE</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="https://www.mongodb.com/es">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676410420/Portfolio_images/mongodb_lplosn.png"
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
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676410421/Portfolio_images/postgre_otnlbp.png"
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
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1676410421/Portfolio_images/mysql_t1rfzp.png"
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
          <Link href="https://www.microsoft.com/es-ar/sql-server">
            <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="https://res.cloudinary.com/drscelx6f/image/upload/v1698168807/Portfolio_images/qyufftrjazzdlefxd9hv.png"
                    width="79"
                    height="64"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>SQL SERVER</h3>
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
