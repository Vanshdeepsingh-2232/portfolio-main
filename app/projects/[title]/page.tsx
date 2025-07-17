"use client"
import { projects } from "@/lib/data"
import Layout from "@/app/components/Layout"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useParams } from "next/navigation"

export default function ProjectDetailPage() {
  const params = useParams()
  const { title } = params

  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, "-") === title
  )

  if (!project) {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
            Project Not Found
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            The project you are looking for does not exist.
          </p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-12">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">About the Project</h2>
            <div className="text-gray-800 dark:text-gray-200 space-y-4">
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-4">Development Timeline</h3>
              <p>{project.timeline}</p>

              <h3 className="text-2xl font-bold mb-4">Lessons Learned</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.lessonsLearned.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Links</h3>
              <div className="flex flex-col space-y-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:underline"
                >
                  <Github className="mr-2" />
                  GitHub Repository
                </a>
                {/* Add a live demo link if available */}
                {/* <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
                  <ExternalLink className="mr-2" />
                  Live Demo
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
