import { ProjectCard } from "@/components";
import { projects } from "@/lib/projects";

export const metadata = {
  title: 'Gabriel Maestre | Projects',
  description: 'Discover the projects developed by Gabriel Maestre. Featuring work with Tailwind CSS, Next.js, and React.',
};

export default function ProjectsPage() {
  return (
    <main className="px-8 my-12 lg:px-0 max-w-2xl mx-auto w-fit">
      <h1 className="text-3xl font-medium tracking-tight">Projects:</h1>
      <p className="tracking-tight text-neutral-600 leading-7 text-[15px] mt-4 mb-6 lg:leading-7 max-w-3xl">Here you can find the most important projects to me. Althought I&apos;ve worked on some others, these are my favorites.</p>
      <section className="gap-20 mb-12 max-w-7xl mx-auto lg:flex">
        <div className="max-w-3xl">
          <div className="flex flex-col max-w-3xl">
            {
              projects.map((project, i) => (
                <ProjectCard {...project} key={i} />
              ))
            }
          </div>
        </div>
      </section>
    </main>
  );
}