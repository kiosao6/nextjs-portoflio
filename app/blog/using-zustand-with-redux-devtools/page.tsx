import BlockCode from "@/components/code/BlockCode";
import Image from "next/image";

export default function NamePage() {

  const zustandCode = `import { create } from 'zustand'

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))
  `

  const zustandCode2 = `import { create } from 'zustand'
import { devtools } from "zustand/middleware"; // [!code highlight]

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))
  `
  const zustandCode3 = `import { create } from 'zustand'
import { devtools } from "zustand/middleware";

const useStore = create((devtools(set) => ({ // [!code highlight]
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
})))
  `

  return (
    <main className="px-8 my-12 lg:px-0 max-w-2xl mx-auto w-fit">
      <h1 className="text-3xl max-w-xl leading-10 font-medium tracking-tighter">Using Zustand with Redux Devtools</h1>
      <div className="tracking-tight leading-7 text-[15px] mt-4 mb-6 space-y-4">
        <p>Zustand is pretty amazing. It has quickly become the most popular store manager for React and Next.js applications. However, you probably met Redux and Redux Devtools since they were probably the most popular tools for state management before Zustand appears.</p>
        <p>If so, you probably know that Redux Devtools are really intuitive and offers a great developer experience, and that&apos;s why today we are goint to use Zustand with Redux Devtools.</p>
      </div>


      <Image
        src="/articles/zustand.png"
        alt="Article image"
        width={800}
        height={800}
        className="rounded-lg"
        priority
      />
      <div className="mt-4 tracking-tight border-b pb-2">
        <p className="text-[13px] text-zinc-500">Written by Gabriel Maestre.</p>
      </div>


      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Installing dependencies</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>Once we have set up our React or Next.js application, let&apos;s install Zustand.</p>
          <BlockCode lang="tcl" filename="terminal"
            code={`npm install zustand`}
          />
        </div>
      </div>

      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Setting up our Store</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>Once Zustand is installed, let&apos;s create a file at the root of our directory called store/. Now let&apos;s define our store file. For this example I will create a file called <strong>store.js</strong></p>
          <BlockCode filename="app/store/store.js"
            code={zustandCode}
          />
          <p className="border-l-4 border-zinc-300 pl-4 py-1 text-[13px] leading-6">In case you&apos;re wondering, of course, you can always use Typescript instead of Javascript, which is actually recommended, but for this example I&apos;m going to be using Javascript. You may check <a className="font-medium hover:underline" target="blank" href="https://zustand-demo.pmnd.rs/">Zustand documentation</a> to get more information and an example.</p>
        </div>
      </div>

      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Let&apos;s prepare for Redux Devtools</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>Setting up the Redux Devtools with Zustand is a peace of cake and can be done in two steps. First, in our file, we are goint to import a <strong>Middleware</strong> called devtools from &apos;zustand/middleware&apos;.</p>
          <BlockCode filename="app/store/store.js"
            code={zustandCode2}
          />
          <p>Now comes the fun part: we need to <strong>wrap our store</strong> with that middleware</p>
          <BlockCode filename="app/store/store.js"
            code={zustandCode3}
          />
          <p>All set up! We can now refresh our page and enjoy our Zustand Store with the Redux Devtools.</p>
        </div>
      </div>

      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Conclution</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
        <p>Zustand is an amazing state management tool for React and Next.js applications, offering simplicity and powerful features. Integrating it with Redux Devtools enhances the developer experience by providing intuitive debugging and state tracking.</p>
        <p>With the given steps, you can leverage the benefits of both Zustand and Redux Devtools, making state management in your applications smoother and more efficient.</p>
        </div>
      </div>

    </main>
  );
}

