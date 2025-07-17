import Link from "next/link"
import { Github, Linkedin, Code } from "lucide-react"
import { contactInfo } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="border-t py-6 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-6">
        <p className="text-sm text-muted-foreground">© 2025 VanshdeepSingh.dev. All rights reserved.</p>
        <nav className="flex gap-6 mt-2 md:mt-0">
          <Link href={contactInfo.github} target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link href={contactInfo.leetcode} target="_blank" rel="noopener noreferrer">
            <Code className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
        </nav>
      </div>
    </footer>
  )
}
