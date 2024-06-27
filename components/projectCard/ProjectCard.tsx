import Link from "next/link"
import { SiGithub } from "react-icons/si"
import { TbWorldWww } from "react-icons/tb"


interface Props {
  name: string;
  slug: string;
  description: string;
  stack: string;
  githubLink: string;
  liveLink: string;
};

export const ProjectCard = ({
  name,
  slug,
  description,
  stack,
  githubLink,
  liveLink,
}: Props) => {
  return (
    <div className="py-6 lg:py-8 tracking-tight lg:tracking-tighter border-b text-xl lg:text-xl transition-all duration-300">
      {/* Project title  */}
      <Link className="font-medium hover:underline" href={`/projects/${slug}`}>
        {name}:
      </Link>


      {/* Project mini description  */}
      <p className="text-sm leading-6 tracking-tight mt-2">{description}</p>

      {/* Stack  */}
      <div className="flex gap-2 text-xs lg:text-sm tracking-tight mt-2">
        <p className="border py-1 lg:py-1 px-2 rounded">{stack}</p>
      </div>

      {/* Github  */}
      <div className="flex gap-2 justify-start items-center mt-4 text-zinc-500">
        <a aria-label="Github Button Icon" target="blank" className="p-2 group bg-zinc-100 rounded" href={githubLink}>
          <SiGithub className="group-hover:text-black transition-all" size={20} />
        </a>

        {/* Live Icon  */}
        <a aria-label="Live Project Icon" target="blank" className="p-2 bg-zinc-100 rounded group" href={liveLink}>
          <TbWorldWww className="group-hover:text-black transition-all" size={20} />
        </a>
      </div>

    </div>
  )
}