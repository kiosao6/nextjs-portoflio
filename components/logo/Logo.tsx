import { remark } from "@/lib/fonts"

export const Logo = () => {
  return (
    <span className={`${remark.className} inline-flex items-center text-2xl font-normal`}>
      <span className="hidden lg:inline">Gabriel Maestre</span>
      <span className="lg:hidden">Gabriel M.</span>
    </span>
  )
}