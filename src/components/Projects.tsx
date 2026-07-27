"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProjectCard } from "./ProjectCard"
import { projects } from "@/data/projects"

const categories = ["All", "Data Analysis", "Frontend Engineering"]

export function Projects() {
  const [active, setActive] = useState("All")

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="mt-3 text-muted-foreground">
            Real problems, real data, real results
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
