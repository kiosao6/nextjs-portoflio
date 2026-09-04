import Link from "next/link"
import { Logo } from "@/components/logo/Logo"

const links = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-maestre-31b52529b/"
  },
  {
    name: "Github",
    href: "https://github.com/kiosao6",
  },
  {
    name: "Email",
    href: "mailto:gabrielmaestre79@gmail.com",
  },
  {
    name: "Resume CV",
    href: "https://drive.google.com/file/d/1fcSS-_Kg2Ce_cZEW5CSoMHeORTLYnpvd/view?usp=sharing",
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/Kiosao",
  },
]

const pages = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
]

export const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Top: headline + CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-14 border-b border-zinc-800">
          <h3 className="text-3xl lg:text-5xl leading-tight font-medium tracking-tight max-w-xl">
            Open to new{" "}
            <span className="text-lila">opportunities</span>, let&apos;s
            connect.
          </h3>

          <a
            href="mailto:gabrielmaestre79@gmail.com"
            className="group inline-flex items-center gap-3 text-lila text-lg tracking-tight border border-zinc-700 rounded-full px-6 py-3 w-fit hover:bg-lila hover:text-[#141414] transition-all duration-300"
          >
            Say hello
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Middle: links + nav */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 py-14">
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {links.map((link, i) => (
              <a
                className="text-[15px] tracking-tight text-neutral-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>

          <nav>
            <ul className="flex gap-6">
              {pages.map((link, i) => (
                <li key={i}>
                  <Link
                    className="text-[15px] tracking-tight text-neutral-400 hover:text-white transition-colors duration-200"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom: logo + copyright */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pt-8 border-t border-zinc-800">
          <Logo />
          <p className="text-neutral-500 text-sm tracking-tight">
            © {new Date().getFullYear()} Gabriel Maestre.
          </p>
        </div>
      </div>
    </footer>
  )
}