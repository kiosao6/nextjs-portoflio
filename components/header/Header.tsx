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
    href: "https://drive.google.com/file/d/1fcSS-_Kg2Ce_cZEW5CSoMHeORTLYnpvd/view?usp=sharing",
  },
  
]

export const Header = () => {
  return (
    <header className="w-full z-50 bg-white py-5 px-8 border-b sticky top-0">
      <div className="flex justify-between max-w-7xl mx-auto">          
        <Link href="/" className="tracking-tight py-2 uppercase font-medium text-xs lg:text-sm">Gabriel</Link>
        <nav className="text-xs uppercase lg:capitalize font-medium tracking-tight lg:font-normal lg:text-sm space-x-7 flex items-center">
          <ul className="flex space-x-7">
            {
              links.map((link, i ) => (
                <li key={i}>
                  <Link className="hover:underline py-2" href={link.href} key={i}>{link.name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}