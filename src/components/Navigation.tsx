"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { Typewriter } from "./Typewriter"

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16">
      <div className="absolute inset-0 border-b border-border bg-background/80 backdrop-blur-xl" />
      <nav className="relative mx-auto flex h-full max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          <Typewriter
            texts={["Hassana"]}
            speed={100}
            pauseDuration={999999}
            cursorClassName="text-primary"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex size-9 items-center justify-center rounded-xl border border-border bg-card md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-4 pb-4 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex justify-end pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
