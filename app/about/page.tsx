import { Card } from "@/components/ui/card"
import TechStack from "../components/tech-stack"
import Layout from "../components/Layout"
import { aboutInfo } from "@/lib/data"

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center md:text-left mb-8">
          About Me
        </h1>

        {/* Professional Summary */}
        <Card className="p-6 mb-8 shadow-md rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          {aboutInfo.summary.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base leading-relaxed mt-4">
              {paragraph}
            </p>
          ))}
        </Card>

        {/* Education */}
        <Card className="p-6 mb-8 shadow-md rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          {aboutInfo.education.map((edu, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-medium text-lg">{edu.degree}</h3>
              <p className="text-sm">{edu.institution}</p>
              <p className="text-sm font-medium">GPA: {edu.gpa}</p>
            </div>
          ))}
          <div>
            <h3 className="font-medium text-lg">Relevant Coursework</h3>
            <p className="text-sm">
              {aboutInfo.coursework}
            </p>
          </div>
        </Card>

        {/* Work Experience */}
        <Card className="p-6 mb-8 shadow-md rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          {aboutInfo.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-medium text-lg">{exp.role}</h3>
              <p className="text-sm">{exp.company}</p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                {exp.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </Card>

        {/* Technical Skills Section */}
        <div className="shadow-md p-6 rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">Technical Skills</h2>
          <TechStack />
        </div>
      </div>
    </Layout>
  )
}
