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

  const createStore = `import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

// Infer the "RootState" and "AppDispatch" types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch`

  const hooksCode = `import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from './store';

// Use throughout your app instead of plain "useDispatch" and "useSelector"
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;`

  const sliceCode = `import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
 
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer // EXPORT Slice reducer`

  return (
    <main className="px-8 my-12 lg:px-0 max-w-2xl mx-auto w-fit">
      <h1 className="text-3xl max-w-xl leading-10 font-medium tracking-tighter">Cómo configurar Redux Toolkit con Next.js usando Typescript</h1>
      <div className="tracking-tight leading-7 text-[15px] mt-4 mb-6 space-y-4">
        <p>Con la llegada de Zustand como gestor de estado para aplicaciones de React y Next.js, fueron muchas las librerías de gestión de estado, como Redux, que perdieron la atención de la mayoría de usuarios, sobre todo al tratarse de una librería super ligera y super simple de implementar.</p>
        <p>Sin embargo, ya sea que quieras darle mantenimiento a una aplicación que utilice Redux Toolkit o que simplemente quieras inicializar un nuevo proyecto de Next.js para probar esta librería, aquí veremos en sencillos pasos cómo podemos configurarlo.</p>
      </div>


      <Image
        src="/articles/redux.png"
        alt="Foodima Image"
        width={800}
        height={800}
        className="rounded-lg"
        priority
      />
      <div className="mt-4 tracking-tight border-b pb-2">
        <p className="text-[13px] text-zinc-500">Written by <a className="hover:underline" target="blank" href="https://medium.com/@khizerrehandev/how-to-configure-redux-toolkit-with-nextjs-using-typescript-384531fa7501">khizerrehandev</a>. Translated from English by Gabriel Maestre</p>
      </div>

      <p className="tracking-tight leading-7 text-[15px] mt-4 mb-6">Es importante tener en cuenta que esta configuración funciona con Next.js 14 (App Router), por lo que también funciona para Next.js 13. </p>


      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Crear un proyecto nuevo</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>Crea un nuevo proyecto de Next.js usando el comando <span className={`${GeistMono.className} bg-zinc-200 py-1 mx-1 px-2 rounded text-sm`}>create-next-app@latest</span> en la terminal.</p>
          <BlockCode filename="terminal" lang="tcl" code={createProjectCode} />
        </div>
      </div>

      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Intalar dependencias</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <BlockCode filename="terminal" lang="tcl" code={`npm install @reduxjs/toolkit react-redux`}/>
          <p>Habiendo instalado nuestras dependencias, ya podemos proceder a configurar nuestro store.</p>
        </div>
      </div>
      
      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Configurar el store</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>Crea una carpeta llamada redux o store. Para este ejemplo crearemos store/. Luego crea un archivo llamado store.ts</p>
          <BlockCode filename="app/store/store.ts" lang="typescript" code={createStore}/>
          <p>Este código crea automáticamente el estado de Redux, y automáticamente también configura las Redux DevTools con su extensión para que podamos inspeccionar.</p>
        </div>
      </div>

      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Definir los hooks useDispatch y useSelector</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>Para ello crearemos un archivo llamado hooks.ts</p>
          <BlockCode filename="app/store/hooks.ts" lang="typescript" code={hooksCode}/>
        </div>
      </div>

      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">¿Qué son y cómo se configuran los slices?</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>Pensemos en los slices como aquellas funcionalidades que puede tener nuestro proyecto. Si lo llevamos a un ejemplo real, podríamos imaginarnos una tienda de ropa. Podemos tener muchas funciones dentro de esta:</p>
          <ul className="[&>li]:list-disc ml-8">
            <li>Slice para autenticación</li>
            <li>Slice para perfil de usuario</li>
            <li>Slice para búsquedas o filtros</li>
            <li>Slice para carrito de compras</li>
          </ul>
          <p>De forma similar a esto, podemos tener muchos slices dentro de una aplicación, y por esa razón hemos tomado un ejemplo muy básico, en el que hemos creado un <span className={`${GeistMono.className} bg-zinc-200 py-1 px-2 mx-1 rounded text-sm`} >counter slice</span>, el cual incrementa +1, + 10, y decrementa también -1.</p>
          <BlockCode filename="app/store/counterSlice.ts" lang="typescript" code={sliceCode}/>

          <p className="border-l-4 pl-4 text-[13px] leading-6 text-zinc-500">En Redux Toolkit, <span className={`${GeistMono.className} bg-zinc-200 py-1 px-2 mx-1 rounded text-sm`}>createSlice</span> se encarga de generar la acción y los reducers mediante un único slice.</p>

        </div>
      </div>

    </main>
  );
}