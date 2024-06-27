import { SiLinkedin } from "react-icons/si";


export const CallToActionButton = () => {
  return (
    <a target="blank" href="https://www.linkedin.com/in/gabriel-maestre-31b52529b/" className="text-base tracking-tight flex gap-2 items-center justify-center rounded-md border py-3 px-4 sm:justify-center lg:justify-start hover:border-neutral-500 transition-all">
      <SiLinkedin size={16} />
      LinkedIn
    </a>
  )
}