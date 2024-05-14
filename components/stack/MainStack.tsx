import { SiJavascript, SiTypescript , SiReact, SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const MainStack = () => {
  return (
    <div className="flex flex-col">
      <span className="uppercase text-sm tracking-wide font-medium text-zinc-500">Main stack:</span>
      <div className="flex gap-4 mt-3 [&>*]:text-zinc-600">
        <SiTailwindcss className="hover:text-[#38BDF8] transition-all cursor-pointer" title="Tailwind Css" size={26} />
        <SiJavascript  className="hover:text-[#F0DB4F] transition-all cursor-pointer" title="Javascript" size={26} />
        <SiTypescript  className="hover:text-[#3178C6] transition-all cursor-pointer" title="Typescript" size={26} />
        <SiReact  className="hover:text-[#087EA4] transition-all cursor-pointer" title="React.Js" size={26} />
        <SiNextdotjs  className="hover:text-black transition-all cursor-pointer" title="Next.Js" size={26} />
      </div>
    </div>
  )
}