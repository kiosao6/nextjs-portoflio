import { About, ProjectCard } from "@/components";
import { projects } from "@/lib/projects";

export const SectionTwo = () => {
  return (
    <section className="px-8 mt-12 gap-24 xl:px-0 lg:gap-36 mb-12 max-w-7xl mx-auto md:flex">

      <div className="max-w-3xl">
        <h2 className="text-3xl lg:text-3xl font-medium tracking-tight mb-4">My latest works:</h2>
        <p className="tracking-tight leading-7 mb-0 text-[15px] lg:leading-7 max-w-3xl text-neutral-600">Explore below to see the results of my latest work.</p>

        {/* This div below contains all the projects */}
        <div className="flex flex-col max-w-3xl">
          {
            projects.map((project, i) => (
              <ProjectCard {...project} key={i}/>
            ))
          }
        </div>
      </div>
      
      <About />
    </section>
  )
}