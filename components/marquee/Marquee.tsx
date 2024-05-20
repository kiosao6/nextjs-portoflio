

export const Marquee = () => {
  return (
    <div className="relative bg-lila flex overflow-x-hidden tracking-tight">
      <div className="py-6 lg:py-8 animate-marquee whitespace-nowrap">
        <span className="text-base mx-12">Passionate about React and Next.js</span>
        <span className="text-base mx-12">Frontend Developer</span>
        <span className="text-base mx-12">Open for full-time remote roles</span>
        <span className="text-base mx-12">Building beautiful interfaces</span>
        <span className="text-base mx-12">Passionate about React and Next.js</span>
        <span className="text-base mx-12">Frontend Developer</span>
        <span className="text-base mx-12">Open for full-time remote roles</span>
        <span className="text-base mx-12">Building beautiful interfaces</span>
      </div>

      <div className="py-6 absolute top-0 lg:py-8 animate-marquee2 whitespace-nowrap">
        <span className="text-base mx-12">Passionate about React and Next.js</span>
        <span className="text-base mx-12">Frontend Developer</span>
        <span className="text-base mx-12">Open for full-time remote roles</span>
        <span className="text-base mx-12">Building beautiful interfaces</span>
        <span className="text-base mx-12">Passionate about React and Next.js</span>
        <span className="text-base mx-12">Frontend Developer</span>
        <span className="text-base mx-12">Open for full-time remote roles</span>
        <span className="text-base mx-12">Building beautiful interfaces</span>
      </div>
    </div>
  )
}