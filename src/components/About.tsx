"use client"

import { motion } from "framer-motion"
import { Code2, Sparkles, BarChart3, FileSpreadsheet, Database, BarChart, Target, TrendingUp } from "lucide-react"

const milestones = [
  { icon: Code2, label: "Frontend Engineering", period: "Building products" },
  { icon: Sparkles, label: "Curiosity About Decisions", period: "Who uses this? Why?" },
  { icon: BarChart3, label: "Discovering Data Analytics", period: "The numbers tell a story" },
  { icon: FileSpreadsheet, label: "Learning Excel", period: "Power Query & Pivot Tables" },
  { icon: Database, label: "Learning SQL", period: "Querying, Joins, CTEs" },
  { icon: BarChart, label: "Learning Power BI", period: "DAX & Dashboards" },
  { icon: Target, label: "Portfolio Projects", period: "Real-world datasets" },
  { icon: TrendingUp, label: "Growing Data Analyst", period: "One project at a time" },
]

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Journey</h2>
          <p className="mt-3 text-muted-foreground">
            From building products to understanding the data behind them
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col items-start gap-4 md:flex-row md:items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`hidden md:block ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <h3 className="text-lg font-semibold">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-card shadow-sm md:mx-auto">
                    <Icon className="size-6 text-primary" />
                  </div>

                  <div className={`flex-1 md:hidden ${i % 2 === 0 ? "" : ""}`}>
                    <h3 className="text-lg font-semibold">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
