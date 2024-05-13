import Link from "next/link";
import { CallToActionButton, MainStack, Marquee, SectionTwo, SelectedProjects } from "@/components";

export default function Home() {
  return (
    <main className="">
      <section className="px-8 mt-12  lg:px-0 mb-16 max-w-7xl mx-auto lg:flex">
        <div>
          <p className="text-[80px] max-w-4xl mb-6 font-medium leading-tight tracking-[-0.07em] lg:text-[140px] lg:leading-none">I&apos;m Gabriel Maestre.</p>
          <p className="tracking-tight leading-7 text-base mb-6 lg:text-xl lg:leading-relaxed max-w-3xl">I develop frontend websites using React and NextJs with meticulous attention to detail. Passionate about frontend technologies and seamless user interfaces. Available for work. </p>
          <div className="flex justify-start items-center gap-4 mb-6">
            <CallToActionButton />
            <Link className="text-sm tracking-tight hover:underline" href="/projects">
              View Projects
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <SelectedProjects />
          <MainStack />
        </div>
      </section>
      <Marquee />
      <SectionTwo />
    </main>
  );
}
