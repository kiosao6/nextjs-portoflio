import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { GeistMono } from "geist/font/mono";
import BlockCode from "@/components/code/BlockCode";

export default function NamePage() {

  const createProjectCode = `npx create-next-app@latest

What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use "src/" directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*`


  return (
    <main className="px-8 my-12 lg:px-0 max-w-2xl mx-auto w-fit">
      <h1 className="text-3xl max-w-xl leading-10 font-medium tracking-tighter">Cómo configurar Redux Toolkit con Next.js usando Typescript</h1>
      <p className="tracking-tight leading-7 text-[15px] mt-4 mb-6">Con la llegada de Zustand como gestor de estado para aplicaciones de React y Next.js, fueron muchas las librerías de gestión de estado, como Redux, que perdieron la atención de la mayoría de usuarios, sobre todo al tratarse de una librería super ligera y super simple de implementar. Sin embargo, ya sea que quieras darle mantenimiento a una aplicación que utilice Redux Toolkit o que simplemente quieras inicializar un nuevo proyecto de Next.Js para probar esta librería, aquí veremos en sencillos pasos cómo podemos configurarlo.</p> 

      <Image
        src="/articles/redux.png"
        alt="Foodima Image"
        width={800}
        height={800}
        className="rounded-lg"
        priority
      />
      <div className="mt-4 tracking-tight border-b pb-2">
        <p className="text-[11px] lg:text-xs text-zinc-500">Written by <a className="hover:underline" target="blank" href="https://medium.com/@khizerrehandev/how-to-configure-redux-toolkit-with-nextjs-using-typescript-384531fa7501">khizerrehandev</a>. Translated from English by Gabriel Maestre</p>
      </div>

      <p className="tracking-tight leading-7 text-[15px] mt-4 mb-6">Es importante tener en cuenta que esta configuración funciona con Next.js 14 (App Router), por lo que también funciona para Next.js 13. </p> 

    
      <div className="mt-12 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Crear un proyecto nuevo</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>Crea un nuevo proyecto de Next.js usando el comando <span className={`${GeistMono.className} bg-zinc-200 py-1 px-2 rounded text-sm`}>create-next-app@latest</span> en la terminal.</p>
          <BlockCode filename="Terminal" lang="tcl" code={createProjectCode}/>
        </div>
      </div>

      <div className="mt-12 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Intalar dependencias</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>Crea un nuevo proyecto de Next.js usando el comando <span className={`${GeistMono.className} bg-zinc-200 py-1 px-2 rounded text-sm`}>create-next-app@latest</span> en la terminal.</p>
          {/* <BlockCode filename="Terminal" lang="tcl" code={createProjectCode}/> */}
        </div>
      </div>

    </main>
  );
}