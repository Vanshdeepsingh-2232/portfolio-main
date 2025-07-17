"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import Image from "next/image"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg font-semibold tracking-tight">Vanshdeep.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/about" className="transition-colors hover:text-foreground/80">
            About
          </Link>
          <Link href="/projects" className="transition-colors hover:text-foreground/80">
            Projects
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground/80">
            Contact
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Resume Button - Desktop */}
          <Link
            href="https://drive.google.com/file/d/1oEHrdl5ARIprUmN2MvJCcKBN7ExvG_5U/view?usp=sharing"
            target="_blank"
            className="hidden md:inline-flex"
          >
            <Button variant="outline" size="sm">Resume</Button>
          </Link>

          {/* Mobile Menu Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            {/* Mobile Navigation */}
            <SheetContent side="right" className="w-64">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <SheetDescription className="sr-only">
                A mobile navigation menu with links to different pages of the portfolio.
              </SheetDescription>
              <div className="flex flex-col items-center space-y-8 mt-8">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary">
                  <Image
                    src="https://res.cloudinary.com/ddhgmidpp/image/upload/v1741240718/IMG_20230712_123428_enyq3k.png"
                    alt="Vanshdeep Singh"
                    fill
                    className="object-cover"
                  />
                </div>
                <nav className="flex flex-col gap-4 text-base text-center">
                  <Link href="/" onClick={() => setOpen(false)} className="font-medium">
                    Home
                  </Link>
                  <Link href="/about" onClick={() => setOpen(false)} className="font-medium">
                    About
                  </Link>
                  <Link href="/projects" onClick={() => setOpen(false)} className="font-medium">
                    Projects
                  </Link>
                  <Link href="/contact" onClick={() => setOpen(false)} className="font-medium">
                    Contact
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/1oEHrdl5ARIprUmN2MvJCcKBN7ExvG_5U/view?usp=sharing"
                    target="_blank"
                    onClick={() => setOpen(false)}
                  >
                    <Button variant="outline" className="w-full mt-4" size="sm">
                      Resume
                    </Button>
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
