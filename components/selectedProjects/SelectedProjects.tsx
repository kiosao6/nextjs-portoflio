import Link from "next/link"


const projects = [
  {
    name: "Hazzly - Landing page",
    slug:"hazzly",
  },
  {
    name: "Foodima - Recipe diary",
    slug: "foodima",
  },
  {
    name: "Shinning Balloons - Ecommerce website",
    slug: "shinning-balloons",
  },
]
export const SelectedProjects = () => {
  return (
    <div className="hidden lg:block my-12">
      <span className="uppercase text-sm tracking-wide font-medium text-zinc-500">Selected Projects:</span>
      <div className="flex flex-col tracking-tight">
        {
          projects.map((project, i) => (
            <Link className="py-4 border-b text-xl hover:border-black transition-all" href={`/projects/${project.slug}`} key={i}>
              {project.name}
            </Link>
          ))
        }
      </div>
    </div>
  )
}