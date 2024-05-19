import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

export const metadata = {
  title: 'Shinning Balloons | E-commerce website by Gabriel Maestre',
  description: 'Explore Shinning Balloons, a fictitious balloon store platform by Gabriel Maestre. Discover dynamically generated product pages, user authentication, and a seamless shopping experience, built with Next.js, Typescript, PostgreSQL, and Auth.js.',
};

export default function NamePage() {
  return (
    <main className="px-8 my-12 lg:px-0 max-w-2xl mx-auto w-fit">
      <h1 className="text-3xl max-w-xl leading-10 font-medium tracking-tighter">Shinning Balloons - Full-stack Ecommerce website</h1>
      <div className="tracking-tight leading-7 text-[15px] mt-4 mb-6 space-y-4">
        <h2>Shinning Balloons is a fictitious e-commerce platform specializing in the sale of balloons for events and decorations. Built with Typescript and Next.js App Router Syntax, this project extends beyond the frontend, incorporating a backend built with Next.js Server Actions and a PostgreSQL database.</h2>
        <p>It features dynamically generated pages based on product or category slugs, following the latest web design trends. State management is enhanced with a mix of Next.js searchParams and Zustand, and user authentication is handled with Auth.js, allowing account creation and login via credentials or GitHub.</p>
        <p>The project showcases meticulous design, with carefully crafted balloon images and an outstanding user experience.</p>
      </div>

      <Image
        src="/projects/ecommerce.png"
        alt="Foodima Image"
        width={1000}
        height={1000}
        className="rounded-lg"
        priority
      />
      <div className="mt-4 tracking-tight border-b pb-2">
        <p className="text-[11px] lg:text-xs text-zinc-500">Developed by Gabriel Maestre.</p>
      </div>
      <div className="flex gap-2 justify-start items-center mt-4 text-zinc-500">
        <a aria-label="Github Code" target="blank" className="p-2 group bg-zinc-100 rounded" href="https://github.com/kiosao6/shinning-balloons">
          <SiGithub className="group-hover:text-black transition-all" size={20} />
        </a>
        <a aria-label="Live Project" target="blank" className="p-2 bg-zinc-100 rounded group" href="https://shinning-balloons.vercel.app/">
          <TbWorldWww className="group-hover:text-black transition-all" size={20} />
        </a>
      </div>

      <div className="mt-12 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Fun Aspect of Development:
        </h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>The most enjoyable part of developing Shinning Balloons was connecting the frontend to the database and seeing all the pages generate dynamically. Seeing the seamless integration and real-time updates was really satisfying, which brought the e-commerce platform to life.</p>
        </div>
      </div>
      <div className="mt-12 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Challenges Faced:
        </h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>The most challenging aspect was definitely implementing the authentication system. There were moments of frustration, especially when dealing with Auth.js documentation and ensuring secure and smooth user authentication.</p>
          <p>Overcoming these obstacles, however, provided valuable learning experiences in managing user accounts and session handling.</p>
        </div>
      </div>

    </main>
  );
}