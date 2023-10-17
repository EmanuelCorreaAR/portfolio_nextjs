import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center pt-8">
      <div className="max-w-[1680px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="text-gray-600">
            My love of development started 2021 in the middle of the pandemic. I
            had free time and decided to enroll in the Software Development
            career at the University of La Punta. In 2022 for reasons of
            availability I must leave it. In the middle of that year I have to
            make one of those decisions that "mark a milestone", and that is how
            I enroll in the intensive bootcamp that Henry offers, immersing
            myself full time in the studio with +800 hours of code. After
            intense months I managed to conclude it in December of that same
            year with the degree of Full-Stack Developer. Since then I have
            acquired new technologies that complete my profile, with preferences
            for back-end development. I am passionate about studying and I learn
            quickly. I consider that my previous work experience has developed
            my soft skills profile, which is why I consider myself a good
            resource to join a team.
            I am currently working as a software developer at <a href="https://www.runaid.com.ar/" target="_blank" className="text-[#5651e5]"><strong>runaID</strong></a>, working on corporate projects both front and back, with database and infrastructure management.
          </p>
          <Link href="https://res.cloudinary.com/drscelx6f/image/upload/v1676573745/Carta_de_Recomendacion_-_Ema_Correa_uikrii.jpg" target="_blank">
            <p className="py-2 text-[#5651e5]">
              <strong>I am attaching a letter of recommendation from my last non-tech
              employer.</strong>
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="develpment_image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
