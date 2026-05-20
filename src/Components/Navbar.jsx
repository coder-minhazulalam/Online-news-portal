import Link from "next/link";

import demoUser from "@/assets/user.png"
import Image from "next/image";
import { NavLink } from "./NavLink";


const Navbar = () => {

  return (
    <div className="mt-5 w-11/13 mx-auto flex justify-between items-center">
    <div></div>
        <ul className="flex flex-row justify-center items-center space-x-3">
          <li>
            <NavLink href="/" >Home</NavLink>
          </li>
           <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/career">Career</NavLink>
          </li>

        </ul>


      <div className="flex flex-row justify-end items-center space-x-2">
           <Image  src={demoUser} alt="demo" height={60}  width={60}  />
           <Link href="/login">
             <button  className="bg-gray-700 text-white px-7 py-2">LogIn</button>
           </Link>
          

      </div>




    </div>
  );
};

export default Navbar;
Navbar;
