import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { personalInfo, experiences } from '../data/portfolioData';

export default function About() {
  return (
    <div>
      <Head>
        <title>About - Software & Web Development Portfolio</title>
        <meta name="description" content="About the software and web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* About Hero Section */}
      <section className="section bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-64 h-64" />
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white px-6 py-2 rounded-lg font-bold transform rotate-6 shadow-lg">
                  Full Stack Dev
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                About <span className="text-blue-600">Me</span>
              </h1>
              <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                {personalInfo.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-2">Name</h3>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.name}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-2">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.email}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-2">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.location}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-2">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/contact">
                  <a className="btn btn-accent">
                    Contact Me
                  </a>
                </Link>
                <Link href="/projects">
                  <a className="btn btn-outline">
                    View My Work
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="section-title text-gray-800 dark:text-white">My <span className="text-blue-600">Experience</span></h2>
          <p className="section-subtitle text-gray-600 dark:text-gray-400">
            My professional journey so far
          </p>

          <div className="relative">
            {/* Vertical timeline */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-gray-700 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div key={exp.id} className={`mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 md:px-8 md:py-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                        <p className="text-blue-600 font-semibold">{exp.company}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-200">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="md:w-1/2 flex justify-center items-center md:items-start">
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 shadow"></div>
                    {index !== experiences.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 h-16 w-16 border-b-2 border-blue-200 dark:border-gray-700 transform -translate-x-1/2"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="section-title text-gray-800 dark:text-white">My <span className="text-blue-600">Education</span></h2>
          <p className="section-subtitle text-gray-600 dark:text-gray-400">
            Academic background and certifications
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group">
              <div className="p-6">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Stanford University</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Graduated with honors. Focused on software engineering, algorithms, and web technologies.
                </p>
              </div>
            </div>

            <div className="card group">
              <div className="p-6">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">AWS Certified Solutions Architect</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Amazon Web Services</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Demonstrates ability to design and deploy distributed systems on AWS platform.
                </p>
              </div>
            </div>

            <div className="card group">
              <div className="p-6">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747.477 3.332.977 4.5 1.753v13C19.832 18.477 18.247 18 16.5 18c-1.746.477-3.332.977-4.5 1.753" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Full Stack Web Development Bootcamp</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Coding Academy</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Intensive program covering modern web technologies, project-based learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how I can help bring your vision to life.
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