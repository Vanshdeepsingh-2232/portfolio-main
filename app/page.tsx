"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "./components/header"
import Footer from "./components/footer"
import BackgroundPaths from "./components/BackgroundPaths"
import { useEffect, useState } from "react"

export default function Page() {
  const [isMobile, setIsMobile] = useState(false)

  const [buttonSize, setButtonSize] = useState<"sm" | "default" | "lg">("sm")

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768) // Mobile if width < 768px
      if (width < 640) {
        setButtonSize("sm")
      } else if (width < 768) {
        setButtonSize("default")
      } else {
        setButtonSize("lg")
      }
    }
    handleResize() // Set initial state
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <BackgroundPaths title="Hi, I'm Vanshdeep Singh">
      <div className="relative z-10 min-h-screen flex flex-col p-6 md:p-8">
        <Header />

        {/* Profile Image - Only One at a Time */}
        <div className="flex justify-center mt-4">
          <div
            className={`relative ${
              isMobile ? "w-24 h-24" : "w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
            } rounded-full overflow-hidden border-2 md:border-4 border-primary`}
          >
            <Image
              src="https://res.cloudinary.com/ddhgmidpp/image/upload/v1741240718/IMG_20230712_123428_enyq3k.png"
              alt="Vanshdeep Singh"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <main className="flex-grow container px-4 md:px-6 py-8 md:py-12">
          <section className="flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
              Hi, I&apos;m <span className="text-primary">Vanshdeep Singh</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-[600px]">
              Full Stack Developer & Problem Solver passionate about creating innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button size="lg">
                  Learn About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg">
                  View My Projects
                </Button>
              </Link>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">My Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {["Web Development", "Problem Solving", "UI/UX Design"].map((skill, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg text-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{skill}</h3>
                  <p className="text-muted-foreground">Passionate about creating efficient and elegant solutions.</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact / Social Media Section */}
          <section className="py-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Let&apos;s Connect</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://github.com/Vanshdeepsingh-2232" target="_blank">
                <Button variant="outline" size={buttonSize}>
                  <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/vanshdeep-singh-0211a4215" target="_blank">
                <Button variant="outline" size={buttonSize}>
                  <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="mailto:vanshdeepsingh2232@gmail.com">
                <Button variant="outline" size={buttonSize}>
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Email
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </BackgroundPaths>
  )
}
