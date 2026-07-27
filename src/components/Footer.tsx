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
              href="https://github.com/hassanaabdullahi"
              target="_blank"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon className="size-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hassana-abdullahi-858040240/"
              target="_blank"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-4" />
            </Link>
            <Link
              href="https://x.com/techSultana"
              target="_blank"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="X / Twitter"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="mailto:hassanaabdll1@gmail.com"
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
