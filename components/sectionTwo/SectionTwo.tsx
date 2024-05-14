import Link from "next/link"
import { SiGithub } from "react-icons/si"
import { TbWorldWww } from "react-icons/tb";
import { About } from "@/components";

const projects = [
  {
    name: "Hazzly - Landing page",
    slug:"hazzly",
    href: "https://kiosao6.github.io/hazzly/",
    stack: "React - Tailwind Css - Gsap - Framer Motion",
    description: "Hazzly is a landing page built to learn the basics of React and Tailwind Css. Gsap library was also implemented in this project.",
    github: "https://github.com/kiosao6/hazzly"
  },
  {
    name: "Foodima - Recipe diary",
    slug: "foodima",
    href: "https://kiosao6.github.io/foodima/",
    stack: "React - Tailwind Css - Gsap",
    description: "Foodima is a basic recipe diary build to learn about asynchronous concepts and API Fetching.",
    github: "https://github.com/kiosao6/foodima"
  },
  {
    name: "Shinning Balloons - Ecommerce website",
    slug: "shinning-balloons",
    href: "https://shinning-balloons.vercel.app/",
    stack: "NextJs - Tailwind Css - Typescript - PostgreSQL - Prisma",
    description: "Shinning Balloons is an Ecommerce website build to learn Next.Js and know a little bit more about how a backend works, including database using PostgreSQL.",
    github: "https://github.com/kiosao6/shinning-balloons"
  },
]

export const SectionTwo = () => {
  return (
    <section className="px-8 mt-12 lg:px-0 gap-20 mb-16 max-w-7xl mx-auto lg:flex">
      <div className="max-w-3xl">
        <h2 className="text-3xl lg:text-3xl font-medium tracking-tighter mb-4">My latest works:</h2>
        <p className="tracking-tight leading-7 mb-0 text-base lg:leading-7 max-w-3xl">Explore below to see the results of latest work.</p>

        <div className="flex flex-col max-w-3xl">
          {
            projects.map((project, i) => (
              <div key={i} className="py-6 lg:py-8 tracking-tight lg:tracking-tighter border-b text-xl lg:text-xl transition-all duration-300">
                {/* Project title  */}
                <Link className="font-medium hover:underline" href={`/projects/${project.slug}`} key={i}>
                  {project.name}:
                </Link>


                {/* Project mini description  */}
                <p className="text-sm lg:text-base leading-relaxed tracking-tight mt-2">{project.description}</p>

                {/* Stack  */}
                <div className="flex gap-2 text-xs lg:text-sm tracking-tight mt-2">
                  <p className="border py-1 lg:py-1 px-2 rounded" key={i}>{project.stack}</p>
                </div>

                {/* Github  */}
                <div className="flex gap-2 justify-start items-center mt-4 text-zinc-500">
                  <a aria-label="Github Button" target="blank" className="p-2 group bg-zinc-100 rounded" href={project.github}>
                    <SiGithub className="group-hover:text-black transition-all" size={20} />
                  </a>
                  <a aria-label="Live Project" target="blank" className="p-2 bg-zinc-100 rounded group" href={project.href}>
                    <TbWorldWww className="group-hover:text-black transition-all" size={20} />
                  </a>
                </div>

              </div>
            ))
          }
        </div>
      </div>
      <About />
    </section>
  )
}