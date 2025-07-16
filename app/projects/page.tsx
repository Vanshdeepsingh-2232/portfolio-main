'use client'

import ProjectCard from "../components/project-card"
import Header from "../components/header"
import Footer from "../components/footer"
import BackgroundPaths from "../components/BackgroundPaths"
import { useEffect, useState } from "react"

const projectImages = [
  "https://res.cloudinary.com/ddhgmidpp/image/upload/v1752693858/Screenshot_2025-07-17_005348_f4tkto.png",
  "https://res.cloudinary.com/ddhgmidpp/image/upload/v1752694378/Screenshot_2025-06-25_193016_ifmud3.png",
  "https://res.cloudinary.com/ddhgmidpp/image/upload/v1741235220/image1.png",
  "https://res.cloudinary.com/ddhgmidpp/image/upload/v1741237784/Screenshot_2025-03-06_103914_ub6xle.png",
  "https://res.cloudinary.com/ddhgmidpp/image/upload/v1741235363/Screenshot_2025-03-06_095902_yqomzu.png",
  "https://res.cloudinary.com/ddhgmidpp/image/upload/v1741235249/Screenshot_2024-10-28_131152_hdapv2.png",
]

const projects = [
  {
    title: "Education Station",
    description:
      "Spearheaded the development of a multi-faceted web application for an educational consultancy, featuring dedicated portals for students, administrators, and staff.Engineered a secure, role-based access control (RBAC) system and implemented core functionalities for application management, and visa services.",
    link: "https://github.com/MyOrgTS/server",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Nest.js", "PostgresSQL"],
  },
  {
    title: "Conway's Game of life",
    description:
      "Developed Conway's Game of Life using C++ and Raylib, implementing cellular automata logic with efficient grid-based rendering.Optimized simulation performance and user interactivity by leveraging Raylib for real-time graphics and C++ for low-level control.",
    link: "https://github.com/Vanshdeepsingh-2232",
    tags: ["C++", "RayLib", "Simulation"],
  },
  {
    title: "Natours App",
    description:
      "A full-stack tour booking web application with dynamic tour details, interactive maps, secure payments, and user authentication. Built with Node.js, Express, MongoDB, and Pug.",
    link: "https://github.com/Vanshdeepsingh-2232/vanshNodeNatours",
    tags: ["Node.js", "Express.js", "Stripe", "Mongoose", "Mongo DB", "Pug"],
  },
  {
    title: "C++ Algorithms Visualizer",
    description:
      "A desktop application to assist students in analyzing and visualizing C++ code performance using Google Benchmarks, Imgui, and Implot.",
    link: "https://github.com/Vanshdeepsingh-2232",
    tags: ["C++", "Google Benchmarks", "Imgui", "Implot"],
  },
  {
    title: "Open Source Project",
    description:
      "Contributed to open-source projects at Company Twenty, resolving front-end issues, improving UI/UX, and gaining experience with Docker and containerized applications.",
    link: "https://github.com/Vanshdeepsingh-2232",
    tags: ["Typescript", "Next.js", "TailwindCSS", "Redis", "PostgreSQL"],
  },
  {
    title: "Figma Design Contributions",
    description:
      "Contributed to an open-source Figma challenge at Company Twenty, improving UI/UX and gaining hands-on experience with Figma and UX components.",
    link: "https://www.figma.com/design/akgDOb37YLUW9iWLB155EV/Twenty-(Copy)?node-id=478-19796&p=f",
    tags: ["Figma"],
  },
]

export default function ProjectsPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <BackgroundPaths title="My Projects">
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="container px-4 md:px-6 py-12 flex-grow">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
              My Projects & Open Source Work
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              These are some of the projects I've worked on. Each project represents a unique challenge and learning
              experience. Explore the code repositories and live demos.
            </p>

            {/* Project Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={projectImages[index]}
                  link={project.link}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </BackgroundPaths>
  )
}
