"use client"

import { useEffect, useRef } from "react"

/**
 * Cursor "follower" con easing (lerp), inspirado en el comportamiento de
 * https://github.com/Cuberto/mouse-follower pero implementado sin esa
 * librería (que depende de GSAP).
 *
 * Cómo funciona (mismo principio que usa Cuberto internamente, solo que
 * ellos usan gsap.to con ease "expo.out" y nosotros usamos un lerp manual
 * dentro de requestAnimationFrame):
 *
 * 1. En cada `mousemove` guardamos la posición "objetivo" (target) del mouse
 *    relativa al contenedor (el footer completo).
 * 2. En un loop de `requestAnimationFrame` interpolamos la posición "actual"
 *    (current) hacia el objetivo un pequeño porcentaje (EASE) en cada frame:
 *      current += (target - current) * EASE
 *    Esto es un "linear interpolation" (lerp) y es exactamente lo que crea
 *    la sensación de que el cursor "persigue" al mouse con retraso/inercia.
 * 3. En hover sobre enlaces/botones (delegación de eventos, igual al
 *    `stateDetection` de Cuberto) el cursor crece, pero animando su TAMAÑO
 *    REAL (width/height) con lerp — no `transform: scale()` — para que el
 *    círculo siempre se vea nítido (sin anti-aliasing ni pixelado) al crecer.
 *
 * El `mix-blend-difference` con fondo blanco hace que invierta el color de
 * lo que tiene debajo: negro sobre fondo claro, blanco sobre los enlaces.
 *
 * El contenedor (`containerRef`) debe tener `position: relative` (o
 * cualquier valor distinto de `static`) para que el cursor absoluto se
 * posicione correctamente dentro de él.
 */

interface MouseFollowerCursorProps {
  containerRef: React.RefObject<HTMLElement | null>
}

// Entre 0 y 1. Más bajo = más "arrastre"/inercia en la posición.
const POSITION_EASE = 0.16
// Entre 0 y 1. Suavidad del cambio de tamaño.
const SIZE_EASE = 0.18

// Tamaño del cursor en px (estado normal y estado hover sobre enlaces).
const CURSOR_SIZE = 14
const CURSOR_SIZE_HOVER = 48

export const MouseFollowerCursor = ({ containerRef }: MouseFollowerCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0, size: CURSOR_SIZE })
  const current = useRef({ x: 0, y: 0, size: CURSOR_SIZE })
  const isInside = useRef(false)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const baseSize = CURSOR_SIZE
    const hoverSize = CURSOR_SIZE_HOVER
    let rafId: number

    const isInsideContainer = (clientX: number, clientY: number, rect: DOMRect) => {
      return (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      )
    }

    // El listener vive en `document` (igual que Cuberto/MouseFollower usa
    // documentElement por defecto) para no depender del orden de montaje de
    // los refs padre/hijo. La posición se convierte a coordenadas relativas
    // al contenedor con getBoundingClientRect() en cada evento.
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()

      if (isInsideContainer(e.clientX, e.clientY, rect)) {
        target.current.x = e.clientX - rect.left
        target.current.y = e.clientY - rect.top

        // Al entrar, coloca el cursor directamente sin animar desde (0,0)
        if (!isInside.current) {
          current.current.x = target.current.x
          current.current.y = target.current.y
          isInside.current = true
          cursor.style.opacity = "1"
        }
      } else {
        // Fuera del contenedor -> ocultar y volver al tamaño base
        if (isInside.current) {
          isInside.current = false
          cursor.style.opacity = "0"
          target.current.size = baseSize
        }
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const container = containerRef.current
      if (!container || !container.contains(e.target as Node)) return
      const el = (e.target as HTMLElement).closest("a, button")
      target.current.size = el ? hoverSize : baseSize
    }

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * POSITION_EASE
      current.current.y += (target.current.y - current.current.y) * POSITION_EASE
      current.current.size += (target.current.size - current.current.size) * SIZE_EASE

      cursor.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`
      cursor.style.width = `${current.current.size}px`
      cursor.style.height = `${current.current.size}px`

      rafId = requestAnimationFrame(tick)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    rafId = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      cancelAnimationFrame(rafId)
    }
  }, [containerRef])

  return (
    <div
      ref={cursorRef}
      aria-hidden
      style={{ width: CURSOR_SIZE, height: CURSOR_SIZE }}
      className="pointer-events-none absolute left-0 top-0 z-20 hidden rounded-full bg-white opacity-0 mix-blend-difference transition-opacity duration-200 ease-out will-change-transform lg:block"
    />
  )
}
