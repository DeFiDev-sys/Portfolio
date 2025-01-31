import SignInForm from "@/components/SignInForm";
import Image from "next/image";
import React from "react";

function signIn() {
  return (
    <div className='font-poppins flex flex-row space-y-10 overflow-hidden h-screen'>
      <div className='border-r-2 w-2/3 flex justify-center items-center  text-center'>
        <Image
          src={"/signUpPic.jpg"}
          width={750}
          height={750}
          alt='Sign up page'
          className='object-cover'
        />
      </div>
      <SignInForm />
    </div>
  );
}

export default signIn;
