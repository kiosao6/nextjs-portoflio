import Link from "next/link"

interface Props {
  title: string;
  description: string;
  slug: string;
}

export const BlogCard = ({
  title,
  description,
  slug,
}: Props) => {
  return (
    <div className="py-6 lg:py-8 tracking-tight lg:tracking-tighter border-b text-xl transition-all duration-300">
      {/* Project title  */}
      <Link className="font-medium hover:underline" href={`/blog/${slug}`}>
        {title}
      </Link>


      {/* Project mini description  */}
      <p className="text-sm text-neutral-600 lg:text-[15px] leading-7 tracking-tight mt-2">{description}</p>

    </div>
  )
}