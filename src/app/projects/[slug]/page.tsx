"use client"

import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight, Download, ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/Icons"
import { projects } from "@/data/projects"
import { ReadingProgress } from "@/components/ReadingProgress"

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <>
      <ReadingProgress />
      <div className="pt-16">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to Projects
            </Link>
          </motion.div>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {project.category}
              </span>
              <span className="text-xs text-muted-foreground">{project.year}</span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">{project.role}</span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">{project.duration}</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{project.subtitle}</p>
          </motion.header>

          <div className="mt-12 space-y-16">
            <Section delay={0.2} title="Business Problem">
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </Section>

            <Section delay={0.25} title="Business Objective">
              <p className="text-muted-foreground leading-relaxed">{project.objective}</p>
            </Section>

            <Section delay={0.3} title="Dataset Overview">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {Object.entries(project.datasetOverview).map(([key, value]) => (
                  <div key={key} className="rounded-xl border border-border bg-card p-4">
                    <p className="text-xs text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                    <p className="mt-1 text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </Section>

            {project.dataDictionary.length > 0 && (
              <Section delay={0.35} title="Data Dictionary">
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted">
                        <th className="p-3 text-left font-medium">Column</th>
                        <th className="p-3 text-left font-medium">Type</th>
                        <th className="p-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.dataDictionary.map((col) => (
                        <tr key={col.column} className="border-b border-border last:border-0">
                          <td className="p-3 font-mono text-xs">{col.column}</td>
                          <td className="p-3 text-xs text-muted-foreground">{col.type}</td>
                          <td className="p-3 text-xs text-muted-foreground">{col.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>
            )}

            {project.preparation.length > 0 && (
              <Section delay={0.4} title="Preparation">
                <ul className="space-y-3">
                  {project.preparation.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {project.dataCleaning.length > 0 && (
              <Section delay={0.45} title="Data Cleaning">
                <ul className="space-y-3">
                  {project.dataCleaning.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {project.eda.length > 0 && (
              <Section delay={0.5} title="Exploratory Data Analysis">
                <div className="space-y-4">
                  {project.eda.map((item, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-4">
                      <p className="text-sm font-medium">
                        <span className="text-primary">Q:</span> {item.question}
                      </p>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        <span className="text-primary font-medium">A:</span> {item.finding}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            <Section delay={0.55} title="Power BI Dashboard">
              <div className="grid gap-4">
                {project.screenshots.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl border border-border">
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </Section>

            <Section delay={0.6} title="Key Insights">
              <ul className="space-y-3">
                {project.insights.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section delay={0.65} title="Business Recommendations">
              <ul className="space-y-3">
                {project.recommendations.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section delay={0.7} title="Lessons Learned">
              <ul className="space-y-3">
                {project.lessons.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section delay={0.75} title="Tools Used">
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-xl border border-border bg-card px-3.5 py-1.5 text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Section>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {project.links.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground transition-all hover:bg-muted"
                >
                  <GithubIcon className="size-4" />
                  GitHub Repository
                  <ExternalLink className="size-3.5 text-muted-foreground" />
                </Link>
              )}
              {project.links.live && (
                <Link
                  href={project.links.live}
                  target="_blank"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground transition-all hover:bg-muted"
                >
                  <ExternalLink className="size-4" />
                  Live Demo
                  <ArrowUpRight className="size-3.5 text-muted-foreground" />
                </Link>
              )}
              {project.links.dataset && (
                <Link
                  href={project.links.dataset}
                  download
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
                >
                  <Download className="size-4" />
                  Download Dataset
                </Link>
              )}
              {project.links.pbix && (
                <Link
                  href={project.links.pbix}
                  download
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground transition-all hover:bg-muted"
                >
                  <Download className="size-4" />
                  Download .pbix
                </Link>
              )}
              {project.links.guide && (
                <Link
                  href={project.links.guide}
                  download
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground transition-all hover:bg-muted"
                >
                  <Download className="size-4" />
                  Step-by-Step Guide
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

function Section({
  title,
  children,
  delay,
}: {
  title: string
  children: React.ReactNode
  delay: number
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h2 className="mb-4 text-2xl font-bold tracking-tight">{title}</h2>
      {children}
    </motion.section>
  )
}
