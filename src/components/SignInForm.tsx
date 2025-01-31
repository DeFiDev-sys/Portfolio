"use client";

import { Button, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import Link from "next/link";
import axios from "axios";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  interface messageProps {
    message: string;
  }

  const GetNext: React.FC<messageProps> = ({ message }) => <p>{message}</p>;

  const onSubmit = handleSubmit(async (data) => {
    console.log("Payload:", data);
    try {
      const response = await axios.post(
        "https://formspree.io/f/xeoowyqq",
        data
      );
      JSON.stringify(localStorage.setItem("userData", response.data));
      console.log("Data Recieved:", localStorage.getItem("userData"));
      if (response.status >= 200 && response.status < 300) {
        console.log(response.data);
      }
    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
        const res = error.response.data.error;
        setMessage(res);
        if (error.response.status >= 300 && error.response.status < 400) {
          console.log("Page temporary moved");
          console.log(error.response.status);
        } else if (
          error.response.status >= 400 &&
          error.response.status < 500
        ) {
          console.log("Bad Request");
          console.log(error.response.status);
        }
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error(error.message);
      }
      console.log(error.config);
    }
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  });

  useEffect(() => {
    setTimeout(() => setMessage(""), 2000);
  }, [message]);

  return (
    <div className='w-1/2 h-full px-40 space-y-10 py-16'>
      {<GetNext message={message} />}
      <p className='text-3xl text-orange-500 font-bold'>Sign Up</p>
      <form onSubmit={onSubmit} className=' space-y-4  rounded-lg h-full'>
        <Stack gap='6'>
          <Field
            invalid={!!errors.firstName}
            errorText={errors.firstName?.message}>
            <Input
              width={"full"}
              type='text'
              className='border-2 px-2'
              placeholder={"First name"}
              focusRingColor={"orange.400"}
              {...register("firstName", { required: "First name is required" })}
            />
          </Field>
          <Field
            invalid={!!errors.lastName}
            errorText={errors.lastName?.message}>
            <Input
              type='text'
              className='border-2 px-2'
              placeholder={"Last name"}
              focusRingColor={"orange.400"}
              {...register("lastName", { required: "Last name is required" })}
            />
          </Field>
          <Field invalid={!!errors.email} errorText={errors.email?.message}>
            <Input
              type='email'
              className='border-2 px-2'
              placeholder={"Email Address"}
              focusRingColor={"orange.400"}
              {...register("email", { required: "Email is required" })}
            />
          </Field>
          <Field invalid={!!errors.email} errorText={errors.email?.message}>
            <div className='relative w-full'>
              <Input
                type={showPassword ? "text" : "password"}
                className='border-2  px-2'
                placeholder={"Password"}
                focusRingColor={"orange.400"}
                pattern='^(?=.*[A-Z])(?=.*\W)(?=.*[a-zA-Z]).{8,}$'
                {...register("password", { required: "Password is required" })}
              />
              <span
                onClick={handleShowPassword}
                className='absolute right-0 top-0 cursor-pointer bg-orange-500 rounded-r-sm h-full w-10 flex items-center justify-center'>
                {showPassword ? <IoIosEyeOff size={25} /> : <FaEye size={25} />}
              </span>
            </div>
          </Field>
          <p>
            Already have an account ?{" "}
            <Link href={"#"} className='underline text-orange-500'>
              Sign In
            </Link>
          </p>
          <Button
            type='submit'
            className='border-2 text-xl bg-orange-500 rounded-xl w-1/2 mx-auto hover:scale-110 transition-all ease-linear'>
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
};
export default SignInForm;
