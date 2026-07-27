"use client"

import { motion } from "framer-motion"
import { Mail, Download, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { GithubIcon, LinkedinIcon } from "./Icons"

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s Connect</h2>
          <p className="mt-3 text-muted-foreground">
            I&apos;m always open to new opportunities and conversations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Link
            href="mailto:hassana@example.com"
            className="group inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground transition-all hover:bg-muted"
          >
            <Mail className="size-4" />
            Email
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="https://linkedin.com/in/hassanabdullahi"
            target="_blank"
            className="group inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground transition-all hover:bg-muted"
          >
            <LinkedinIcon className="size-4" />
            LinkedIn
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="https://github.com/hassanabdullahi"
            target="_blank"
            className="group inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground transition-all hover:bg-muted"
          >
            <GithubIcon className="size-4" />
            GitHub
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/resume.pdf"
            download
            className="group inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
          >
            <Download className="size-4" />
            Download Resume
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
