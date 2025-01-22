import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
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
    <main className='px-10 font-poppins space-y-10 overflow-hidden'>
      <div className='flex justify-center items-center w-1/12 rounded-full border-2 mx-auto my-10'>
        <Image
          src={"/Photo.jpeg"}
          width={64}
          height={64}
          alt={"Profile Picture"}
          className='object-cover rounded-full '
        />
      </div>
      <div className='flex justify-between'>
        <div className=' my-auto border-l-8 p-5'>
          <div>
            <h1 className='text-8xl font-bold font-poppins'>WELCOME</h1>
            <p className='text-4xl'>To my Portfolio.</p>
          </div>
        </div>

        <div className='space-y-32 flex flex-col'>
          {Links.map((link, i) => (
            <Link className='text-3xl' href={link.linkUrl} key={i}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
