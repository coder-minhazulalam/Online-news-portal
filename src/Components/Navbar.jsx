
"use client" 
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./NavLink";
import { authClient } from "@/lib/auth-client";
import SessionUser from "@/assets/demo-user.png"
import demoUser from "@/assets/user.png"
import { useRouter } from "next/navigation";



const Navbar = () => {

   const router = useRouter()
  // Signout Handler

  const SignOutHandler = async() =>
  {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/register"); // redirect to login page
            },
          },
        });
  }

  // User Name show on navber
  const { data: session } = authClient.useSession()
  console.log("session user" , session)


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
        {/* USER NAME */}
        <h1>  Hi!{session?.user?.name || "Guest"} </h1>

        {/* USER IMAGE */}
        <Image
          src={session?.user ? SessionUser : demoUser}
          alt="profile"
          height={60}
          width={60}
          className="rounded-full object-cover"
        />
        {
          !session?.user ? (
            <Link href="/login">
              <button className="btn bg-gray-700 text-white px-7 py-2">
                Login
              </button>
            </Link>
          ) : (
            <button className="btn bg-gray-700 text-white px-7 py-2"
             onClick={SignOutHandler}
            >
              SignOut
            </button>
          )
        }

      </div>




    </div>
  );
};

export default Navbar;
Navbar;
