"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { MouseFollowerCursor } from "./MouseFollowerCursor"

const contactLinks = [
  { name: "Email", href: "mailto:gabrielmaestre79@gmail.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-maestre-31b52529b/" },
  { name: "Github", href: "https://github.com/kiosao6" },
]

const pages = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
]

export const FooterEditorial = () => {
  const footerRef = useRef<HTMLDivElement>(null)
  
  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-black text-white">
      <MouseFollowerCursor containerRef={footerRef} />

      <div className="max-w-7xl mx-auto px-8 pt-20 pb-40">
        <div className="grid grid-cols-1 border-t border-white/15 pt-14 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="max-w-sm mb-8">
            <span className="mb-6 block text-xs uppercase font-medium">
              About
            </span>
            <p className="text-sm leading-relaxed tracking-tight text-white lg:text-[15px] lg:leading-7">
              Frontend developer building modern web applications with a focus on
              user experience, performance, and the details that make products feel
              polished. I work with Next.js, React, and TypeScript — from landing
              pages to full-stack experiences — and I&apos;m always learning. Based
              in Venezuela, open to new opportunities.
            </p>
          </div>
          {/* Igual distribución: cada columna ocupa 1/3 y se alinea arriba */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full">
              <span className="mb-6 block text-xs uppercase font-medium">
                Visit
              </span>
              <ul className="space-y-3">
                {pages.map((page, i) => (
                  <li key={i}>
                    <Link
                      href={page.href}
                      target={page.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="underline-anim text-3xl font-semibold leading-tight tracking-tight lg:text-[2.75rem]"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full">
              <span className="mb-6 block text-xs uppercase font-medium">
                Contact
              </span>
              <ul className="space-y-3">
                {contactLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="underline-anim text-3xl font-semibold leading-tight tracking-tight lg:text-[2.75rem]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>

      <div className="select-none overflow-hidden">
        <h2
          className="whitespace-nowrap text-center font-bold leading-[0.85] tracking-tighter text-[12vw] lg:text-[10vw]"
        >
          Gabriel Maestre.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <p className="text-center text-xs uppercase tracking-wider text-white/50">
          © {new Date().getFullYear()} Gabriel Maestre.
        </p>
      </div>
    </footer>
  )
}
