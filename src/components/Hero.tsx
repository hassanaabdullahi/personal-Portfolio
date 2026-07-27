"use client"

import { ChevronDown, ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Typewriter } from "./Typewriter"

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-4 pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 size-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 size-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
        >
          <span className="size-2 rounded-full bg-primary" />
          <Typewriter
            texts={["Open to opportunities", "Available for hire", "Seeking data roles"]}
            speed={50}
            deleteSpeed={25}
            pauseDuration={3000}
            cursorClassName="text-primary"
          />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-primary">
            <Typewriter
              texts={["Hassana."]}
              speed={80}
              pauseDuration={999999}
              cursorClassName="text-primary"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-xl text-muted-foreground sm:text-2xl"
        >
          <span className="font-semibold text-foreground">Data Analyst</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 max-w-xl mx-auto text-base leading-relaxed text-muted-foreground"
        >
          I&apos;m an Entry-Level Data Analyst with a Frontend Engineering background. I am driven by curiosity and continuous learning. I enjoy transforming raw data into meaningful insights while building intuitive digital experiences that solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#projects"
            className="group inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
          >
            Explore Projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/Hassana_Abdullahi_DataAnalyst_Resume.pdf"
            download
            className="group inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-card px-6 text-sm font-medium text-foreground transition-all hover:bg-muted"
          >
            <Download className="size-4" />
            Download Resume
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="size-5 animate-bounce text-muted-foreground" />
      </motion.div>
    </section>
  )
}
