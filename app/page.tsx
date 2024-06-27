import Link from "next/link";
import { CallToActionButton, MainStack, Marquee, SectionTwo, SelectedProjects } from '@/components';


export default function Home() {
  return (
    <main>
      <section className="px-8 mt-12 xl:px-0 mb-12 max-w-7xl mx-auto lg:flex">
        <div>
          <p className="text-[80px] max-w-4xl mb-6 md:text-8xl font-medium leading-tight tracking-[-0.07em] lg:text-[140px] lg:leading-none">I&apos;m Gabriel Maestre.</p>
          <h1 className="tracking-tight leading-7 text-[15px] mb-6 lg:text-xl lg:leading-relaxed max-w-3xl text-neutral-600">I develop front-end websites using React and Next.js with meticulous attention to detail. Passionate about frontend technologies and seamless user interfaces. Available for work.</h1>
          <div className="flex justify-start items-center gap-4 mb-6">
            <CallToActionButton />
            <Link className="text-sm tracking-tight hover:underline" href="/projects">
              View Projects
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:pl-6 xl:pl-0">
          <SelectedProjects />
          <MainStack />
        </div>
      </section>
      <Marquee />
      <SectionTwo />
    </main>
  );
}
