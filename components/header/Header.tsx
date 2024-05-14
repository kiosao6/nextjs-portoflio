import Image from "next/image"
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
    <header className="w-full z-50 bg-white py-6 border-b px-8 sticky top-0">
      <div className="flex justify-between max-w-7xl mx-auto">
        {/* <Image 
          src="/logo.png"
          width={100}
          height={100}
          className="size-8"
          alt="logo"
        /> */}
          
        <Link href="/" className="tracking-tight font-medium">Gabriel Maestre</Link>
        <nav className="hidden lg:block tracking-tight text-sm space-x-7">
          {
            links.map((link, i) => (
              <Link className="hover:underline" href={link.href} key={i}>{link.name}</Link>
            ))
          }
        </nav>
        <button className="tracking-tight text-sm lg:hidden">Menu</button>
      </div>
    </header>
  )
}