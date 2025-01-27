import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import Link from "next/link";
import React from "react";
import { GoArrowLeft } from "react-icons/go";

const About: React.FC = () => {
  return (
    <div className='my-10 space-y-14'>
      <Link href={"/"} className='flex gap-2 w-fit group'>
        <span className='my-auto group-hover:-translate-x-2 transition-all ease-linear'>
          <GoArrowLeft className='text-xl' />
        </span>
        <span className='my-auto font-medium text-xl'>Back</span>
      </Link>
      <main className='space-y-5'>
        <BlurFade delay={0.25} inView>
          <h1 className='text-center text-3xl xl:text-6xl'>About Me</h1>
        </BlurFade>

        <BlurFade delay={0.25 * 2} inView>
          <div className='flex justify-center'>
            <MagicCard
              gradientFrom='#000000'
              gradientTo='#ffffff'
              className='cursor-default text-xl w-1/2 border-2 h-3/4 p-10 shadow-2xl'>
              <p>
                I am Juown Bowofola by name and i a frontend web and mobile
                developer with an experience of over 2 years.
              </p>{" "}
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates eligendi doloribus tempore animi necessitatibus
                asperiores est praesentium tenetur? Quam laborum quia provident
                similique maxime repellendus alias, repudiandae et numquam
                beatae.
              </p>
            </MagicCard>
          </div>
        </BlurFade>
      </main>
    </div>
  );
};

export default About;
