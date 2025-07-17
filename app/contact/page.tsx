"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Clipboard, Github, Linkedin, Code } from "lucide-react"
import ContactForm from "../components/contact-form"
import Layout from "../components/Layout"
import { useState } from "react"
import { contactInfo } from "@/lib/data"

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(contactInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset after 2 sec
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-8 md:text-left">
          Get in Touch
        </h1>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {/* Left Side: Contact Info */}
          <div>
            <p className="text-lg text-muted-foreground mb-8 text-center md:text-left">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out using the contact form or through my social media profiles.
            </p>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {/* Email Card */}
              <Card>
                <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center w-full">
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground select-all block w-full text-center break-all">{contactInfo.email}</p>
                  </div>
                  <button onClick={copyEmail} className="text-primary hover:text-primary/80 transition">
                    <Clipboard className="h-5 w-5" />
                  </button>
                  {copied && <span className="text-xs text-green-600">Copied!</span>}
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card>
                <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground text-center">{contactInfo.phone}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card>
                <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground text-center">{contactInfo.location}</p>
                  </div>
                </CardContent>
              </Card>

              {/* GitHub Card */}
              <Card>
                <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium">GitHub</h3>
                    <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline">Vanshdeep-Singh</a>
                  </div>
                </CardContent>
              </Card>

              {/* LinkedIn Card */}
              <Card>
                <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="w-full text-center">
                    <h3 className="font-medium">LinkedIn</h3>
                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline">Vanshdeep Singh</a>
                  </div>
                </CardContent>
              </Card>

              {/* LeetCode Card */}
              <Card>
                <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="w-full text-center">
                    <h3 className="font-medium">LeetCode</h3>
                    <a href={contactInfo.leetcode} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline">Profile</a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="px-4 sm:px-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}
