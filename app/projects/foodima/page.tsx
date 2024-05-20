import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

export const metadata = {
  title: 'Foodima | Online Recipe Diary by Gabriel Maestre',
  description: 'Discover Foodima, an online recipe diary created by Gabriel Maestre. Search for recipes, use filters for better results, and enjoy a seamless user experience with this React and Tailwind CSS project, featuring GSAP animations and ShadCn components.',
};

export default function NamePage() {
  return (
    <main className="px-8 my-12 lg:px-0 max-w-2xl mx-auto w-fit">
      <h1 className="text-3xl max-w-xl leading-10 font-medium tracking-tighter">Foodima - Recipe diary</h1>
      <div className="tracking-tight leading-7 text-[15px] mt-4 mb-6 space-y-4">
        <h2>Foodima is an online recipe diary designed to provide a seamless and user-friendly experience. Users can enter a keyword in the search bar, and the application will display relevant recipes. A sidebar with filters is available to refine search results when there are too many recipes.</h2>
        <p>Foodima uses local storage to save recipes, ensuring simplicity as no account is needed. Built with React and styled using Tailwind CSS, the project also incorporates GSAP for animations and components from Shadcn.</p>
        <p>The main goal was to learn and implement asynchronous concepts in React by fetching recipes from an external API and displaying them dynamically.</p>
      </div>

      <Image
        src="/projects/foodima.png"
        alt="Foodima Image"
        width={1000}
        height={1000}
        className="rounded-lg"
        priority
      />
      <div className="mt-4 tracking-tight border-b pb-2">
        <p className="text-[13px] text-zinc-500">Developed by Gabriel Maestre. Design inspiration by Cuberto.</p>
      </div>
      <div className="flex gap-2 justify-start items-center mt-4 text-zinc-500">
        <a aria-label="Github Code" target="blank" className="p-2 group bg-zinc-100 rounded" href="https://github.com/kiosao6/foodima">
          <SiGithub className="group-hover:text-black transition-all" size={20} />
        </a>
        <a aria-label="Live Project" target="blank" className="p-2 bg-zinc-100 rounded group" href="https://foodima-brown.vercel.app/">
          <TbWorldWww className="group-hover:text-black transition-all" size={20} />
        </a>
      </div>

      <div className="mt-12 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Fun Aspect of Development:</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>The most enjoyable part of developing Foodima was working with the API. Seeing the recipes appear on the screen after successfully fetching data was incredibly satisfying. It was exciting to watch the application come to life as the data showed dynamically, improving the user experience.</p>
        </div>
      </div>

      <div className="mt-12 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Challenges Faced:</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>The most challenging aspect was implementing the sidebar and filtering functionality. Ensuring that the filters worked correctly and efficiently required careful planning and was a bit tedious.</p>
        </div>
      </div>

    </main>
  );
}