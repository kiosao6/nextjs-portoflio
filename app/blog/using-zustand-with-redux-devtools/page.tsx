import BlockCode from "@/components/code/BlockCode";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

export default function NamePage() {

  const code = `import AcmeLogo from '@/app/ui/acme-logo;
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
  
export default function Page() {
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
    // ...
  )
}`;

  return (
    <main className="px-8 my-12 lg:px-0 max-w-2xl mx-auto w-fit">
      <h1 className="text-3xl max-w-xl leading-10 font-medium tracking-tighter">Using Zustand with Redux Toolkit</h1>
      <p className="tracking-tight leading-7 text-[15px] mt-4 mb-6">Shinning Balloons is a full stack Ecommerce website build to learn Next.Js and know a little bit more about how a backend works, including database using PostgreSQL.</p>

      <Image
        src="/articles/zustand.png"
        alt="Article image"
        width={800}
        height={800}
        className="rounded-lg"
        priority
      />
      <div className="mt-4 tracking-tight border-b pb-2">
        <p className="text-[11px] lg:text-xs text-zinc-500">Developed by Gabriel Maestre.</p>
      </div>
      <div className="flex gap-2 justify-start items-center mt-4 text-zinc-500">
        <a aria-label="Live Project" target="blank" className="p-2 group bg-zinc-100 rounded" href="#">
          <SiGithub className="group-hover:text-black transition-all" size={20} />
        </a>
        <a aria-label="Live Project" target="blank" className="p-2 bg-zinc-100 rounded group" href="#">
          <TbWorldWww className="group-hover:text-black transition-all" size={20} />
        </a>
      </div>

      <div className="mt-12 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">My latest works:</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>Hazzly is a landing page built to learn the basics of React and Tailwind Css. Gsap library was also implemented in this project.</p>
          <p>Hazzly is a landing page built to learn the basics of React and Tailwind Css. Gsap library was also implemented in this project.</p>
        </div>
      </div>

      <BlockCode filename="app/store/store.ts"
        code={code}
      />
    </main>
  );
}