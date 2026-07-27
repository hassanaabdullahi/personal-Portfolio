"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Project } from "@/data/projects"

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg hover:shadow-primary/5">
          <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/20 to-muted">
            <img
              src={project.image}
              alt={project.title}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex items-center rounded-lg bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {project.category}
              </span>
              <span className="text-xs text-muted-foreground">{project.year}</span>
            </div>
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tools.slice(0, 4).map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-lg border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
              {project.tools.length > 4 && (
                <span className="inline-flex items-center rounded-lg border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                  +{project.tools.length - 4}
                </span>
              )}
            </div>
            <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
              Read Case Study
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
