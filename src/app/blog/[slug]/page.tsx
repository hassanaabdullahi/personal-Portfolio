"use client"

import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { blogPosts } from "@/data/projects"
import { ReadingProgress } from "@/components/ReadingProgress"

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <>
      <ReadingProgress />
      <div className="pt-16">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <header className="mb-8">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-lg border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="prose prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="mt-8 mb-3 text-xl font-bold text-foreground">{children}</h2>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">{children}</strong>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-4 space-y-2 pl-5">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-4 space-y-2 pl-5 list-decimal">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-muted-foreground marker:text-primary">{children}</li>
                  ),
                  hr: () => <hr className="my-8 border-border" />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  )
}
