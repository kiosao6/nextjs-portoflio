import { SiJavascript, SiTypescript , SiReact, SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const MainStack = () => {
  return (
    <div className="flex flex-col">
      <span className="uppercase text-sm tracking-wide font-medium text-zinc-500">Main stack:</span>
      <div className="flex gap-4 mt-3 [&>*]:text-zinc-600">
        <SiTailwindcss className="hover:text-black transition-all" title="Tailwind CSS" size={26} />
        <SiJavascript  className="hover:text-black transition-all" title="Javascript" size={26} />
        <SiTypescript  className="hover:text-black transition-all" title="Typescript" size={26} />
        <SiReact  className="hover:text-black transition-all" title="React" size={26} />
        <SiNextdotjs  className="hover:text-black transition-all" title="Next.js" size={26} />
      </div>
    </div>
  )
}