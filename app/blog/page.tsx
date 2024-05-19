import Link from "next/link";

const articles = [
  {
    name: "Using Zustand with Redux Devtools",
    slug:"using-zustand-with-redux-devtools",
    stack: "React - Tailwind Css - Gsap - Framer Motion",
    description: "Zustand is a powerful state management tool for React and Next.js applications, and so are Redux Devtools. In this article, I'll show you how to integrate it with Redux Devtools for an better developer experience.",
  },
  {
    name: "Cómo configurar Redux Toolkit con Next.js usando Typescript",
    slug: "como-configurar-redux-toolkit-con-nextjs-usando-typescript",
    href: "https://kiosao6.github.io/foodima/",
    stack: "React - Tailwind Css - Gsap",
    description: "Aprenderemos cómo sacarle provecho a la librería Redux con Redux Toolkit en nuestra aplicación de Next.js.",
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