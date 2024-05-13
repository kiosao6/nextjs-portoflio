import Link from "next/link"


const links = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-maestre-31b52529b/"
  },
  {
    name: "Dribbble",
    href: "#",
  },
  {
    name: "Resume CV",
    href: "#",
  },
  {
    name: "gabrielmaestre79@gmail.com",
    href: "#",
  }
]

const pages = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog"
  }
]


export const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white px-8">
      <div className="py-12 max-w-7xl mx-auto">
        <div className="">
          <h3 className="text-3xl lg:text-5xl max-w-xl leading-9 font-medium tracking-tighter mb-4">Available for work, let&apos;s connect.</h3>
        </div>
        <p className="tracking-tight mb-6 text-zinc-500">You can find me on social media,</p>
        <div className="flex flex-col space-y-6 lg:space-x-6 lg:space-y-0 lg:flex-row">
          {
            links.map((link, i) => (
              <a className="border-b tracking-normal pb-1 border-zinc-700 text-lg w-fit text-white hover:border-white transition-all" target="blank" key={i} href={link.href}>{link.name}</a>
            ))
          }
        </div>
        <nav className="flex flex-row gap-4 mt-24 ">
          {
            pages.map((page, i) => (
              <Link className="text-white text-sm tracking-tight hover:underline" href={page.href} key={i}>
                {page.name}
              </Link>
            ) )
          }
        </nav>
        <p className="tracking-tight text-zinc-500 mt-2 border-t border-zinc-700 pt-2 text-sm">© 2024 Gabriel Maestre</p>
      </div>
    </footer>
  )
}