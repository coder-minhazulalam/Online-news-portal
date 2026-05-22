'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

          const { register , 
            handleSubmit , 
            watch , 
            formState : 
            {
                errors
            }
          } = useForm()
    
          const handleSubmitForm = (data ) =>
          {
                console.log(data)
          }

    return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="container 
    mx-auto bg-stale-100 flex flex-col justify-center items-center mt-10"  >
      <fieldset className="fieldset bg-base-200 border-base-300 w-4/12 p-10 rounded-box">
        <h1 className="font-bold text-center text-[15px] py-3">
          Register
        </h1>
        {/* NAME */}
                <label className="label">Name</label>
        <input 
        type="text" 
className="input w-full" 
        placeholder="Enter your name"
        {...register("name", {
            required: "Name is required",
          })}/>

        {errors.name && <span className="text-red-600">This field is required</span>}

        {/* URL */}
                <label className="label">URL</label>
        <input 
        type="text" 
        className="input w-full"  
        placeholder="url"
        {...register("Enter url...", {
            required: "URL is required",
          })}/>

        {errors.url && <span className="text-red-600">This field is required</span>}
  
        {/* EMAIL  */}
        <label className="label">Email</label>
        <input 
        type="email" 
        className="input w-full" 
        placeholder="Enter your Email"
        {...register("email", {
            required: "Email is required",
          })}/>

        {errors.email && <span className="text-red-600">This field is required</span>}


        {/* PASSWORD */}
        <label className="label">Password</label>
        <input 
        type="password" 
        className="input w-full"  
        placeholder="Enter your Password" 
        {...register("password",
        {
            required: "Password is required"
        })
        }/>

        {errors.password && <span className="text-red-600">This field is required</span>}


        <button className="btn btn-neutral mt-4">Register</button>

        <div className="flex mt-3 justify-center items-center space-x-2">
          <h1 className="text-[13px]">Already have An Account?</h1>
          <Link href="/login" className="text-[13px] text-red-600 font-bold">
            Login
          </Link>
        </div>
      </fieldset>
    </form>
    );
};

export default RegisterPage;