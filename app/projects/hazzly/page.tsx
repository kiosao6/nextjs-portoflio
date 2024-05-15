import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

export default function NamePage() {
  return (
    <main className="px-8 my-12 lg:px-0 max-w-3xl mx-auto w-fit">
      <h1 className="text-3xl font-medium tracking-tighter">Hazzly - Landing page</h1>
      <p className="tracking-tight leading-7 text-base mt-4 mb-6">This project was built to learn the basics of React and Tailwind Css. Gsap library was also implemented in this project.</p>
      <Image 
        src="/projects/Hazzly.png"
        alt="Hazzly Image"
        width={1000}
        height={1000}
        className="rounded-lg"
        priority
      />
      <div className="mt-4 tracking-tight border-b pb-2">
        <p className="text-[11px] lg:text-xs text-zinc-500">Developed by Gabriel Maestre. Design inspiration by Ronas IT Team Design.</p>
      </div>

      <div className="mt-12 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">My latest works:</h2>
        <div className="space-y-4 tracking-tight leading-7 text-base">
          <p>Hazzly is a landing page built to learn the basics of React and Tailwind Css. Gsap library was also implemented in this project.</p>
          <p>Hazzly is a landing page built to learn the basics of React and Tailwind Css. Gsap library was also implemented in this project.</p>
        </div>
      </div>
      
    </main>
  );
}