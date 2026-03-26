"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "Software Developer – Freddie Mac",
      period: "2025 – Present",
      responsibilities: [
        "Built automated backend workflows using Python and SQL.",
        "Developed data pipelines and optimized ETL processes.",
        "Collaborated with cross-functional teams to implement AI solutions."
      ]
    },
    {
      title: "Quality Analyst – Amazon",
      period: "2023 – 2025",
      responsibilities: [
        "Performed system and process testing for automation tools.",
        "Ensured quality of data-driven workflows.",
        "Documented test results and reported issues to development teams."
      ]
    }
  ];

  const skills = [
    "Python", "SQL", "FastAPI", "LangChain", "OpenAI / LLMs",
    "RAG", "Docker", "AWS", "Git"
  ];

  const projects = [
    {
      title: "AI Chatbot (RAG)",
      description: "Answers questions from documents using embeddings and LLMs.",
      tech: "Python, FastAPI, OpenAI",
      live: "#",
      github: "#"
    },
    {
      title: "AI Agent Automation",
      description: "Automates workflows like email summarization and task management.",
      tech: "Python, LangChain, OpenAI",
      live: "#",
      github: "#"
    },
    {
      title: "Travel Prediction App",
      description: "Predicts travel destinations based on history, budget, and timing using data science.",
      tech: "Python, Pandas, Scikit-learn, Streamlit",
      live: "#",
      github: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans">

      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
          Jyothi Lekkala
        </h1>
        <h2 className="text-2xl text-gray-700 mb-4">AI Engineer | LLM & Automation Specialist</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Experienced in building AI-powered applications, automating workflows, and working with LLMs, RAG, and Python-based systems.
        </p>
      </section>

      {/* Experience with Popups */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4 text-gray-800">Experience</h3>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400 hover:shadow-lg transition cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <h4 className="text-xl font-bold">{exp.title}</h4>
              <p className="text-gray-600">{exp.period}</p>

              {/* Popup */}
              {openIndex === index && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-2 border-blue-300">
                  <h5 className="font-semibold mb-2 text-blue-700">Responsibilities:</h5>
                  <ul className="list-disc list-inside text-gray-700">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4 text-gray-800">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Projects</h3>
        <div className="space-y-6">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-cyan-400">
              <h4 className="text-xl font-bold mb-1 text-cyan-700">{proj.title}</h4>
              <p className="text-gray-700 mb-1">{proj.description}</p>
              <p className="text-gray-600 mb-2">Tech: {proj.tech}</p>
              <a href={proj.live} className="text-blue-600 hover:underline mr-4">Live Demo</a>
              <a href={proj.github} className="text-blue-600 hover:underline">GitHub</a>
            </div>
          ))}
        </div>
      </section>


{/* Contact Section */}
<section className="text-center mb-12">
  <h3 className="text-3xl font-semibold mb-4 text-gray-800">Contact</h3>

  {/* Email as plain text */}
  <p className="text-gray-700 mb-4">
    Email: <span className="text-blue-600">jyothilekkala.ms@gmail.com</span>
  </p>

  {/* GitHub & LinkedIn buttons */}
  <div className="flex justify-center gap-4 flex-wrap">
    <a
      href="https://www.github.com/jyothilekkala"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition"
    >
      <FaGithub />
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/jyothilekkala/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-800 transition"
    >
      <FaLinkedin />
      LinkedIn
    </a>
  </div>
</section>
    </main>
  )
}