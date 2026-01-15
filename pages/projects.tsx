import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique technologies for filtering
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project =>
        selectedCategory === 'Full Stack'
          ? project.technologies.some(tech =>
              ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'].includes(tech)
            )
          : project.technologies.includes(selectedCategory)
      );

  return (
    <div>
      <Head>
        <title>Projects - Software & Web Development Portfolio</title>
        <meta name="description" content="Projects by a software and web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Projects Hero Section */}
      <section className="section bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work and expertise in software and web development
          </p>
        </div>
      </section>

      {/* Projects Filtering */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full font-medium ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All Projects
            </button>

            <button
              onClick={() => setSelectedCategory('Full Stack')}
              className={`px-4 py-2 rounded-full font-medium ${
                selectedCategory === 'Full Stack'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Full Stack
            </button>

            {allTechnologies.slice(0, 6).map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedCategory(tech)}
                className={`px-4 py-2 rounded-full font-medium ${
                  selectedCategory === tech
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card group overflow-hidden">
                <div className="h-48 bg-gray-200 border-2 border-dashed w-full" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Link href={project.liveUrl}>
                      <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    </Link>
                    <Link href={project.githubUrl}>
                      <a className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Source Code
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-800 dark:text-white">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{projects.length}+</div>
              <h3 className="text-gray-800 dark:text-white font-medium">Projects</h3>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{allTechnologies.length}+</div>
              <h3 className="text-gray-800 dark:text-white font-medium">Technologies</h3>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5</div>
              <h3 className="text-gray-800 dark:text-white font-medium">Years Exp</h3>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
              <h3 className="text-gray-800 dark:text-white font-medium">Support</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Collaborating?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have a project in mind that aligns with my expertise? Let's discuss how we can work together.
          </p>
          <Link href="/contact">
            <a className="btn bg-white text-blue-600 hover:bg-gray-100">
              Contact Me
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}