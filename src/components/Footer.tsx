import { Mail } from "lucide-react"
import Link from "next/link"
import { GithubIcon, LinkedinIcon } from "./Icons"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hassana Abdullahi. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/hassanabdullahi"
              target="_blank"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon className="size-4" />
            </Link>
            <Link
              href="https://linkedin.com/in/hassanabdullahi"
              target="_blank"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-4" />
            </Link>
            <Link
              href="mailto:hassana@example.com"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
