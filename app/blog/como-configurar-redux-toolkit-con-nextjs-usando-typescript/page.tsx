import Image from "next/image";
import { GeistMono } from "geist/font/mono";
import BlockCode from "@/components/code/BlockCode";

export const metadata = {
  title: 'Configurando Redux Toolkit con Next.js 14 y TypeScript | Gabriel Maestre',
  description: 'Aprende a configurar Redux Toolkit con Next.js 14 utilizando TypeScript en este tutorial paso a paso sin morir en el intento. Descubre qué son los slices, los reducers y cómo utilizar este gestor de estado en Next.js 14.',
};


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

  const providerCode = `'use client'; // 🔴 Lee la nota de debajo

import { Provider } from 'react-redux';
import { store } from './store';

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;`  

  const rootLayoutCode = `//...

// layout.tsx Antes de envolver con el Provider 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body> // [!code highlight]
    </html>
  )
}


// layout.tsx Después de envolver con el Provider ✅

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers> // [!code highlight]
      </body>
    </html>
  );
  `

  const accessStoreCode = `'use client'; // 🔴 IMPORTANT!!

import { useAppDispatch, useAppSelector } from './store'; // [!code highlight]
import { decrement, increment, incrementByAmount } from './store/slices/counter'; // [!code highlight]

export default function Home() {
  const counter = useAppSelector((state) => state.counter.value); // Return Root State Slices // [!code highlight]
  const dispatch = useAppDispatch(); // Action Dispatcher // [!code highlight]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center mb-12">Count is {counter}</div>

      <div className="flex">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch(increment()); // [!code highlight]
          }}
        >
          Increment
        </button>
        <button
          className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch(decrement()); // [!code highlight]
          }}
        >
          Decrement
        </button>

        <button
          className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch(incrementByAmount(10)); // [!code highlight]
          }}
        >
          Incement By 10
        </button>
      </div>
    </main>
  );
}`

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
          <p>Pensemos en los slices como aquellas funcionalidades que puede tener nuestro proyecto que implican el manejo de un estado global. Si lo llevamos a un ejemplo real, podríamos imaginarnos una tienda de ropa. Podemos tener muchas funciones dentro de esta:</p>
          <ul className="[&>li]:list-disc ml-8">
            <li>Slice para autenticación</li>
            <li>Slice para perfil de usuario</li>
            <li>Slice para búsquedas o filtros</li>
            <li>Slice para carrito de compras</li>
          </ul>
          <p>De forma similar a esto, <strong>podemos tener muchos slices dentro de una aplicación</strong>, y por esa razón hemos tomado un ejemplo muy básico en el que hemos creado un counter slice, el cual incrementa +1, + 10, y decrementa también -1.</p>
          <BlockCode filename="app/store/counterSlice.ts" lang="tsx" code={sliceCode}/>

          <p className="border-l-4 border-zinc-300 pl-4 py-1 text-[13px] leading-6">En Redux Toolkit, <span className={`${GeistMono.className} bg-zinc-200 text-[13px] py-1 px-2 mx-1 rounded`}>createSlice</span> se encarga de generar la acción y los reducers mediante un único slice.</p>

        </div>
      </div>

      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Configurar un Provider</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>Este es un paso muy <strong>importante</strong>, debido a que para poder colocar un store en nuestra aplicación de Next.js y que nuestros componentes puedan tener acceso al store necesitaremos <strong>envolver</strong> el Root Layout con un Provider, al cual podremos facilitarle todos nuestros componentes como children.</p>
          <BlockCode filename="app/StoreProvider.tsx" lang="tsx" code={providerCode}/>
          
          <div className="border-l-4 border-zinc-300 pl-4 py-1 text-[13px] leading-6">
            <p>Es sumanente importante añadir <span className={`${GeistMono.className} bg-zinc-200 text-[13px] py-1 px-2 mx-1 rounded`}>&apos;use client&apos;</span> para hacerle saber a Next.js que este functional component será tratado como un componente generado del lado del cliente y no del servidor. De otra forma arrojará el siguiente error:</p>
            <p className="font-medium">Error: This function is not supported in React Server Components. Please only use this export in a Client Component.</p>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Envolver el root layout con el Provider</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
          <p>Envolver nuestro root layout con el Provider que generamos en el paso anterior nos dará acceso a nuestro Store en cualquier parte de nuestra aplicación, lo que significa que ya podemos acceder a él mediante los <strong>hooks</strong> que definimos anteriormente.</p>
          <BlockCode filename="app/layout.tsx" lang="tsx" code={rootLayoutCode}/>
        </div>
      </div>

      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Acceder al Store en cualquier componente</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
        <p>Para tener acceso al Store que hemos creado en cualquier parte de nuestra aplicación, basta con importar los hooks y los slices que hemos creado antes, guardarlos en una variable y disparar las respectivas acciones mediante la función <strong>dispatch</strong>.</p>
          <BlockCode filename="app/components/Section.tsx" lang="tsx" code={accessStoreCode}/>
        </div>
      </div>

      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-medium tracking-tighter mb-4">Conclusión</h2>
        <div className="space-y-4 tracking-tight leading-7 text-[15px]">
        <p>Este artículo tiene como propósito guiarte paso por paso para conectar tu aplicación de Next.js con un estado global de Redux usando Redux Toolkit.</p>
        <p>Este artículo es una traducción de un artículo de Medium escrito por el usuario <a target="blank" href="https://khizerrehandev.medium.com/" className="font-medium hover:underline">khizerrehandev</a>. Puedes ver el artículo original <a className="hover:underline font-medium" target="blank" href="https://khizerrehandev.medium.com/how-to-configure-redux-toolkit-with-nextjs-using-typescript-384531fa7501">aquí.</a></p>
        </div>
      </div>

    </main>
  );
}