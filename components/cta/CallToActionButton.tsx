import { SiLinkedin } from "react-icons/si";


export const CallToActionButton = () => {
  return (
    <button className="justify-start rounded-md border py-3 px-4 sm:justify-center lg:justify-start hover:border-zinc-400 transition-all">
      <a target="blank" href="https://www.linkedin.com/in/gabriel-maestre-31b52529b/"  className="text-base tracking-tight flex gap-2 items-center justify-center">
        <SiLinkedin size={16} />
        LinkedIn
      </a>
    </button>
  )
}