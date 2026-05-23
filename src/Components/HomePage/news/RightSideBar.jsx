"use client"
import Image from "next/image";
import swim from '@/assets/swimming.png';
import play from '@/assets/playground.png';
import cls from '@/assets/class.png';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const RightSideBar = () => {

// Google SignIn
const HandleGoogleSignIn = async () => {
  const Googledata = await authClient.signIn.social({
    provider: "google",
  });
  console.log("Google Login Data" , Googledata);
};


// Github SignIn

const HandleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
      console.log("Github Login Data" , data);

  };



    return (
        <div className="flex flex-col p-2">
            <h1 className="font-bold text-black">LogIn With</h1>

            <div className="flex flex-col mt-3 space-y-2">
                    <button className="btn p-2 flex  justify-center items-center border border-solid border-blue-400"
                    onClick={HandleGoogleSignIn}
                    >
                    <FaGoogle className="mr-2"/>Login with Google
                    </button>

                    <button  className=" btn p-2 flex  justify-center items-center border border-solid border-black"
                    onClick={HandleGithubSignIn}
                    >
                    <FaGithub className="mr-2"/>Login with Github
                    </button>
            </div>


            {/* Social Accounts */}
                        <h1 className="font-bold text-gray-600 mt-5">Find on us</h1>

            <div className="flex flex-col mt-3 ">
                    <button className="btn p-2 flex  justify-center items-center border border-solid border-gray-300">
                    <FaFacebook className="mr-2"/>Facebook
                    </button>
                    <button  className="btn p-2 flex  justify-center items-center border border-solid border-gray-300">
                    <FaTwitter className="mr-2"/>Twitter
                    </button>
                    <button  className="btn p-2 flex  justify-center items-center border border-solid border-gray-300">
                    <FaInstagram className="mr-2"/>Instagram
                    </button>
            </div>

            {/* Q-zone */}

            <h1 className="font-bold block text-start text-gray-800 mt-5  p-3 bg-gray-300">Q-zone</h1>

            <div className="flex flex-col items-center space-y-4  p-3 bg-gray-300">
                 <Image src={swim} alt='swim' height={100} width={200}/>
                 <Image src={play} alt='swim' height={100} width={200}/>
                 <Image src={cls} alt='swim' height={100} width={200}/>

            </div>






        </div>
    );
};

export default RightSideBar;