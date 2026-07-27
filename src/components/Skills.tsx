"use client"

import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Frontend Engineering",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Git", "GitHub"],
  },
  {
    title: "Data Analytics",
    skills: [
      "Excel",
      "Power Query",
      "Pivot Tables",
      "Power Pivot",
      "SQL",
      "Power BI",
      "DAX",
      "Data Cleaning",
      "Data Validation",
      "Data Visualization",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Tools</h2>
          <p className="mt-3 text-muted-foreground">
            What I bring to the table
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="mb-5 text-lg font-semibold">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                    className="inline-flex items-center rounded-xl border border-border bg-muted px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
