import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <div>
      <Head>
        <title>Experience - Software & Web Development Portfolio</title>
        <meta name="description" content="Professional experience and career journey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Experience Hero Section */}
      <section className="section bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-blue-600">Experience</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A detailed overview of my professional journey and career milestones
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto">
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
                        <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-200">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200">React</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200">Node.js</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200">TypeScript</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200">AWS</span>
                    </div>
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

      {/* Skills Utilized */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="section-title text-gray-800 dark:text-white">Skills <span className="text-blue-600">Utilized</span></h2>
          <p className="section-subtitle text-gray-600 dark:text-gray-400">
            Technologies and tools I've used throughout my career
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {['React', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 'Java', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'GraphQL'].map((skill) => (
              <div key={skill} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow text-center transform transition duration-500 hover:-translate-y-2">
                <div className="text-blue-600 dark:text-blue-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Stats */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Years Experience</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Building and developing applications</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">25+</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Projects Delivered</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Successfully completed projects</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Happy Clients</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Satisfied customers worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Hire an Expert?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Impressed by my experience? Let's discuss how I can contribute to your team.
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