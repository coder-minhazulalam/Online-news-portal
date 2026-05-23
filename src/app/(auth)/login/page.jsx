"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {

  //  Password visiblity 

  const [ showPassword , setshowPassword ] = useState(false)
 
     // REACT HOOK ----------------------------->
           const { register , 
             handleSubmit , 
             watch , 
             formState : 
             {
                 errors
             }
           } = useForm()
     
     
      const handleSubmitForm = async(DATA) =>
           {
                    const {email , password } = DATA
                    console.log({email , password } )
    
    
            //   Authentication - login
            
                const { data : res , error } = await authClient.signIn.email({
                email: email,
                password: password,
                rememberMe: true,
                callbackURL: "/",
            });

            console.log("LOGIN ERROR:", error);
            console.log("LOGIN DATA:", res);
                
              if (error) {
                alert("Wrong Attempt! Please try again");
                return;
              }
    
        if (res) {
          alert("You are successfully Login");
        }
    }
 
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="container mx-auto bg-stale-100 flex flex-col justify-center items-center mt-10"  >
      <fieldset className="fieldset bg-base-200 border-base-300 w-5/12 p-10 rounded-box">
        <h1 className="font-bold text-center text-[15px] py-3">
          Login your Account
        </h1>
  
        {/* EMAIL  */}
        <label className="label">Email</label>
        <input 
        type="email" 
        className="input w-full" 
        placeholder="Email"
        {...register("email", {
            required: "Email is required",
          })}/>

        {errors.email && <span className="text-red-600">This field is required</span>}


{/* PASSWORD */}
<label className="label">Password</label>

<div className="relative w-full">
  <input
    type={showPassword ? "text" : "password"}
    className="input w-full pr-12"
    placeholder="Password"
    {...register("password", {
      required: "Password is required",
    })}
  />

  <span
    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
    onClick={() => setshowPassword(!showPassword)}
  >
    {showPassword ? <FaEye /> : <FaEyeSlash />}
  </span>
</div>

{errors.password && (
  <span className="text-red-600">
    This field is required
  </span>
)}



        <button className="btn btn-neutral mt-4">Login</button>

        <div className="flex mt-3 justify-center items-center space-x-2">
          <h1 className="text-[13px]">Create An Account?</h1>
          <Link href="/register" className="text-[13px] text-red-600 font-bold">
            Register
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginPage;
