import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

const articles = [
  {
    name: "Using Zustand with Redux Devtools",
    slug:"using-zustand-with-redux-devtools",
    stack: "React - Tailwind Css - Gsap - Framer Motion",
    description: "Hazzly is a landing page built to learn the basics of React and Tailwind Css. Gsap library was also implemented in this project.",
  },
  {
    name: "Cómo configurar Redux Toolkit con NextJs usando Typescript",
    slug: "como-configurar-redux-toolkit-con-nextjs-usando-typescript",
    href: "https://kiosao6.github.io/foodima/",
    stack: "React - Tailwind Css - Gsap",
    description: "Foodima is a basic recipe diary build to learn about asynchronous concepts and API Fetching.",
    github: "https://github.com/kiosao6/foodima"
  },
]

export default function BlogPage() {
  return (
    <main className="px-8 my-12 lg:px-0 max-w-2xl mx-auto w-fit">
      <h1 className="text-3xl font-medium tracking-tighter">Blog:</h1>
      <p className="tracking-tight leading-7 text-[15px] mt-4 mb-6 lg:leading-7 max-w-3xl">Welcome to my blog, where I&apos;ll be sharing some tutorials and personal insights.</p>
      <section className="gap-20 mb-12 max-w-7xl mx-auto lg:flex">
        <div className="max-w-3xl">
          <div className="flex flex-col max-w-3xl">
            {
              articles.map((article, i) => (
                <div key={i} className="py-6 lg:py-8 tracking-tight lg:tracking-tighter border-b text-xl lg:text-xl transition-all duration-300">
                  {/* Project title  */}
                  <Link className="font-medium hover:underline" href={`/blog/${article.slug}`} key={i}>
                    {article.name}
                  </Link>


                  {/* Project mini description  */}
                  <p className="text-sm lg:text-[15px] leading-relaxed tracking-tight mt-2">{article.description}</p>

                </div>
              ))
            }
          </div>
        </div>
      </section>
    </main>
  );
}