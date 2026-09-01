import { remark } from "@/app/layout"

export const Logo = () => {
  return (
    <div>
      <span className={`${remark.className} text-2xl lg:text-4xl font-normal hidden lg:inline`}>Gabriel Maestre</span>
      <span className={`${remark.className} text-3xl lg:text-3xl font-normal lg:hidden`}>Gabriel</span>
    </div>
  )
}