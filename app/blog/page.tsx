import { BlogCard } from "@/components";
import { articles } from "@/lib/articles";

export const metadata = {
  title: 'Gabriel Maestre | Blog',
  description: "Welcome to my blog, where I'll be sharing some tutorials and personal insights.",
};

export default function BlogPage() {
  return (
    <main className="px-8 my-12 lg:px-0 max-w-2xl mx-auto w-fit">
      <h1 className="text-3xl font-medium tracking-tighter">Blog:</h1>
      <p className="tracking-tight leading-7 text-[15px] mt-4 mb-6 lg:leading-7 max-w-3xl text-neutral-600">Welcome to my blog, where I&apos;ll be sharing some tutorials and personal insights.</p>
      <section className="gap-20 mb-12 max-w-7xl mx-auto lg:flex">
        <div className="max-w-3xl">
          <div className="flex flex-col max-w-3xl">
            {
              articles.map((article, i) => (
                <BlogCard {...article} key={i} />
              ))
            }
          </div>
        </div>
      </section>
    </main>
  );
}