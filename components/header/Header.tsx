  import Link from "next/link"

const links = [
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Resume",
    href: "#",
  },
  
]

export const Header = () => {
  return (
    <header className="w-full z-50 bg-white h- [70px] py-5 border-b px-8 sticky top-0">
      <div className="flex justify-between max-w-7xl mx-auto">          
        <Link href="/" className="tracking-tight py-2 uppercase font-medium text-xs lg:text-sm">Gabriel</Link>
        <nav className="text-xs uppercase lg:capitalize font-medium tracking-tight lg:font-normal lg:text-sm space-x-7 flex items-center">
          {
            links.map((link, i) => (
              <Link className="hover:underline py-2" href={link.href} key={i}>{link.name}</Link>
            ))
          }
        </nav>
      </div>
    </header>
  )
}