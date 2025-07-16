import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6 bg-background">
      <div className="container flex flex-col md:flex-row justify-between items-center px-4 md:px-6">
        <p className="text-sm text-muted-foreground">© 2025 VanshdeepSingh.dev. All rights reserved.</p>
        <nav className="flex gap-4 mt-2 md:mt-0">
          <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#">
            Terms
          </Link>
          <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  )
}
