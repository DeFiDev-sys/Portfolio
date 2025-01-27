"use client";

import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";

const HeroSection: React.FC = () => {
  const Links = [
    {
      name: "About Me",
      linkUrl: "/about-me",
    },
    {
      name: "Skills",
      linkUrl: "/skills",
    },
    {
      name: "Projects",
      linkUrl: "/projects",
    },
  ];

  return (
    <main className='font-poppins space-y-10 overflow-x-hidden'>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className='flex justify-center items-center relative  mx-auto my-10 w-fit rounded-full'>
        <BorderBeam size={250} duration={12} delay={9} />
        <Image
          src={"/ProfilePic.png"}
          width={150}
          height={150}
          alt={"Profile Picture"}
          className='object-cover'
        />
      </motion.div>
      <div className='flex flex-col items-center space-y-20 xl:justify-between xl:flex-row'>
        <div className=' my-auto border-l-8 border-slate-300 p-5'>
          <motion.div
            initial={{
              opacity: 0,
              translateX: -40,
            }}
            animate={{
              opacity: 1,
              translateX: 0,
              transitionDuration: "0.7",
            }}>
            <h1 className='text-6xl xl:text-8xl font-bold font-poppins'>
              WELCOME
            </h1>
            <p className='text-2xl xl:text-4xl'>
              To my Portfolio.{" "}
              <Button className='border-2 rounded-lg text-2xl p-5'>
                CV Papers
              </Button>
            </p>
          </motion.div>
        </div>

        <div className='xl:space-y-20 flex space-x-10 xl:space-x-0 xl:flex-col'>
          {Links.map((link, i) => (
            <motion.div
              initial={{
                opacity: 0,
                translateX: 100,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              className='text-xl xl:text-3xl flex flex-row items-center gap-5 group'
              key={i}>
              <span>
                <hr className='border-2 group-hover:border-green-400 rounded-lg w-5 xl:w-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all ease-linear 3s delay-75' />
              </span>
              <Link href={link.linkUrl} className='group-hover:text-green-400'>
                {" "}
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
