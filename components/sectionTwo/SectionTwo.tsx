import Link from "next/link"
import { SiGithub } from "react-icons/si"
import { TbWorldWww } from "react-icons/tb";

const projects = [
  {
    name: "Hazzly - Landing page",
    href: "https://kiosao6.github.io/hazzly/",
    stack: "React - Tailwind Css - Gsap"
  },
  {
    name: "Foodima - Recipe diary",
    href: "https://kiosao6.github.io/hazzly/",
    stack: "React - Tailwind Css - Gsap"
  },
  {
    name: "Shinning Balloons - Ecommerce website",
    href: "https://kiosao6.github.io/hazzly/",
    stack: "NextJs - Tailwind Css - Typescript - PostgreSQL - Prisma"
  },
]

export const SectionTwo = () => {
  return (
    <section className="px-8 mt-12 lg:px-0 mb-16 max-w-7xl mx-auto h-screen">
      <p className="text-3xl lg:text-3xl tracking-tighter mb-6">My latest works:</p>

      <div className="flex flex-col">
        {
          projects.map((project, i) => (

            <div key={i} className="py-6 lg:py-10 tracking-tight lg:tracking-tighter border-b text-2xl lg:text-4xl hover:border-black transition-all duration-300">
              <Link className="" href={project.href} key={i}>
                {project.name}
              </Link>
              
              <div className="flex gap-2 text-xs lg:text-sm tracking-tight mt-2">
                <p className="border py-1 lg:py-1 px-2 rounded" key={i}>{project.stack}</p>
              </div>

              <div className="flex gap-2 justify-start items-center mt-2">
                <Link className="p-2 bg-zinc-100 rounded" href={"#"}>
                  <SiGithub size={24} />
                </Link>
                <Link className="p-2 bg-zinc-100 rounded" href={'#'}>
                  <TbWorldWww size={24} />
                </Link>
              </div>
            </div>
            // <Link className="py-6 lg:py-10 tracking-tight lg:tracking-tighter border-b text-xl lg:text-4xl hover:border-black transition-all hover:translate-x-2 duration-300" href={project.href} key={i}>
            //   {project.name}
            // </Link>
          ))
        }
      </div>
    </section>
  )
}