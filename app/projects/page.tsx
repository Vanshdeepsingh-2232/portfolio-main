'use client'

import ProjectCard from "../components/project-card"
import Layout from "../components/Layout"
import { useEffect, useState } from "react"
import { projects } from "@/lib/data"

export default function ProjectsPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          My Projects & Open Source Work
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          These are some of the projects I&apos;ve worked on. Each project represents a unique challenge and learning
          experience. Explore the code repositories and live demos.
        </p>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
