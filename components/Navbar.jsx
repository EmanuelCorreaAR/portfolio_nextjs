import Link from "next/link";
import React from "react";
import{AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h4 className="p-2">EmaCorreaDEV</h4>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="mr-5 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="mr-5 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="mr-5 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="mr-5 text-sm uppercase hover:border-b">
                Certifications
              </li>
            </Link>
            <Link href="/">
              <li className="mr-5 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="mr-5 text-sm uppercase hover:border-b">Contact</li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={26}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
