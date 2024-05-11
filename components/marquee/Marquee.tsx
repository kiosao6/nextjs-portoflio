

export const Marquee = () => {
  return (
    <div className="relative bg-lila flex overflow-x-hidden tracking-tight">
      <div className="py-6 lg:py-8 animate-marquee whitespace-nowrap">
        <span className="text-base mx-12">Based in Venezuela</span>
        <span className="text-base mx-12">Open for full-time remote roles</span>
        <span className="text-base mx-12">Frontend Developer</span>
        <span className="text-base mx-12">Based in Venezuela</span>
        <span className="text-base mx-12">Open for full-time remote roles</span>
        <span className="text-base mx-12">Frontend Developer</span>
      </div>

      <div className="py-6 absolute top-0 lg:py-8 animate-marquee2 whitespace-nowrap">
        <span className="text-base mx-12">Based in Venezuela</span>
        <span className="text-base mx-12">Open for full-time remote roles</span>
        <span className="text-base mx-12">Frontend Developer</span>
        <span className="text-base mx-12">Based in Venezuela</span>
        <span className="text-base mx-12">Open for full-time remote roles</span>
        <span className="text-base mx-12">Frontend Developer</span>
      </div>
    </div>
  )
}