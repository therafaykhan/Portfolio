import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <div>
      <Head>
        <title>Skills - Software & Web Development Portfolio</title>
        <meta name="description" content="Technical skills and expertise of a software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Skills Hero Section */}
      <section className="section bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-blue-600">Skills</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency in various technologies
          </p>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category) => (
              <div key={category.category} className="card p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                  <span className="mr-3 bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </span>
                  {category.category}
                </h2>

                <div className="space-y-6">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="section-title text-gray-800 dark:text-white">Technical <span className="text-blue-600">Expertise</span></h2>
          <p className="section-subtitle text-gray-600 dark:text-gray-400">
            Areas where I excel and have extensive experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center transform transition duration-500 hover:-translate-y-2">
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building responsive and interactive user interfaces with modern frameworks
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center transform transition duration-500 hover:-translate-y-2">
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Backend</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Developing robust server-side applications and APIs
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center transform transition duration-500 hover:-translate-y-2">
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Database</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Designing and managing relational and NoSQL databases
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center transform transition duration-500 hover:-translate-y-2">
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">DevOps</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Implementing CI/CD pipelines and cloud infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proficiency Levels */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="section-title text-gray-800 dark:text-white">Skill <span className="text-blue-600">Levels</span></h2>
          <p className="section-subtitle text-gray-600 dark:text-gray-400">
            My proficiency ratings across different technologies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Advanced Skills (90%+)</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">React.js</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Node.js</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Git & GitHub</span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Intermediate Skills (70-89%)</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">TypeScript</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Python</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Docker</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">MongoDB</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in leveraging my technical skills for your next project? Let's connect!
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