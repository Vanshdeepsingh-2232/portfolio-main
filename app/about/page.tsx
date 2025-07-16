import { Card } from "@/components/ui/card"
import TechStack from "../components/tech-stack"
import Header from "../components/header"
import Footer from "../components/footer"
import BackgroundPaths from "../components/BackgroundPaths"

export default function AboutPage() {
  return (
    <BackgroundPaths title="About Me">
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="container px-4 md:px-6 py-12 flex-grow">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center md:text-left mb-8">
              About Me
            </h1>

            {/* Professional Summary */}
            <Card className="p-6 mb-8 shadow-md rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
              <p className="text-sm sm:text-base leading-relaxed">
                An eager learner with a passion for growth, innovation, and collaboration. I bring adaptability, problem-solving,
                and leadership skills, constantly exploring new opportunities in Computer Science Engineering.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mt-4">
                My journey in software development began during my undergraduate studies, where I developed a deep interest
                in web technologies and algorithms. I strive to create projects that push boundaries and improve user experience.
              </p>
            </Card>

            {/* Education */}
            <Card className="p-6 mb-8 shadow-md rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="mb-6">
                <h3 className="font-medium text-lg">B.Tech in Computer Science</h3>
                <p className="text-sm">Chandigarh Engineering College, Landran (2022-2026)</p>
                <p className="text-sm font-medium">GPA: 8.75/10</p>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-lg">Diploma in Computer Science</h3>
                <p className="text-sm">Thapar Polytechnic College, Patiala (2021-2022)</p>
                <p className="text-sm font-medium">GPA: 8.65/10</p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Relevant Coursework</h3>
                <p className="text-sm">
                  Data Structures & Algorithms, DBMS, Web Development, Computer Networks, Operating Systems, AI, ML.
                </p>
              </div>
            </Card>

            {/* Work Experience */}
            <Card className="p-6 mb-8 shadow-md rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

              <div className="mb-6">
                <h3 className="font-medium text-lg">Back-end Developer Intern</h3>
                <p className="text-sm">Royal Technologies (June - July 2024)</p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                  <li>Built and managed RESTful APIs for efficient data exchange.</li>
                  <li>Optimized database operations for better performance.</li>
                  <li>Ensured smooth integration between client-side and server-side functionalities.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Open Source Contributor</h3>
                <p className="text-sm">Twenty Solutions (Oct 2024)</p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                  <li>Resolved front-end bugs and implemented UI/UX improvements.</li>
                  <li>Gained hands-on experience with Docker and containerized environments.</li>
                  <li>Contributed to large-scale application architecture and deployment strategies.</li>
                </ul>
              </div>
            </Card>

            {/* Technical Skills Section */}
            <div className="shadow-md p-6 rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">Technical Skills</h2>
              <TechStack />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </BackgroundPaths>
  )
}
