import { TitleWithText } from "@/components";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";


export const metadata = {
  title: 'Hazzly | Attractive Landing Page by Gabriel Maestre',
  description: 'Explore Hazzly, a visually engaging landing page created by Gabriel Maestre. Built with React, styled with Tailwind CSS, and featuring animations with Framer Motion and GSAP.',
};

export default function NamePage() {
  return (
    <main className="px-8 my-12 lg:px-0 max-w-2xl mx-auto w-fit">
      <h1 className="text-3xl max-w-xl leading-10 font-medium tracking-tight">Hazzly - Landing page</h1>
      <h2 className="tracking-tight leading-7 text-[15px] mt-4 mb-6 text-neutral-600">Hazzly is a visually attractive landing page created to capture users&apos; attention and provide a seamless user experience. Built using React and styled with Tailwind CSS, Hazzly combines modern design with responsive functionality.</h2>

      <Image
        src="/projects/Hazzly.png"
        alt="Hazzly Image"
        width={1000}
        height={1000}
        className="rounded-lg"
        priority
      />
      <div className="mt-4 tracking-tight border-b pb-2">
        <p className="text-[13px] text-neutral-600">Developed by Gabriel Maestre. Design inspiration by Ronas IT | UI/UX Team</p>
      </div>
      <div className="flex gap-2 justify-start items-center mt-4 text-zinc-500">
        <a aria-label="Github Code" target="blank" className="p-2 group bg-zinc-100 rounded" href="https://github.com/kiosao6/hazzly">
          <SiGithub className="group-hover:text-black transition-all" size={20} />
        </a>
        <a aria-label="Live Project" target="blank" className="p-2 bg-zinc-100 rounded group" href="https://hazzly.vercel.app/">
          <TbWorldWww className="group-hover:text-black transition-all" size={20} />
        </a>
      </div>

      <TitleWithText title="Fun Aspect of Development:">
        <p>The most enjoyable part of developing Hazzly was implementing the animations. Using a combination of Framer Motion and GSAP, I was able to bring the page to life with smooth transitions and engaging interactive elements. </p>
        <p>Lennis library was an amazing ally to get this smooth scroll effect, and combined with the ScrollTrigger plugin from GSAP, I could finally give to this project a nice and smooth feeling.</p>
      </TitleWithText>

      <TitleWithText title="Challenges Faced:">
        <p>The most challenging aspect was optimizing the animations for performance across different devices and browsers. Ensuring that the animations and ScrollTrigger were smooth and did not screw up and break the page required meticulous attention to detail and extensive testing. </p>
      </TitleWithText>

    </main>
  );
}