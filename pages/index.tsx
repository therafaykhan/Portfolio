import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { personalInfo } from '../data/portfolioData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Software & Web Development Portfolio</title>
        <meta name="description" content="Professional portfolio of a software and web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="container relative mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12 animate-fade-in">
                <h1 className="text-white font-semibold text-5xl leading-normal">
                  {personalInfo.title}
                </h1>
                <p className="mt-4 text-xl text-gray-300">
                  {personalInfo.bio}
                </p>
                <div className="mt-8">
                  <Link href="/projects">
                    <a className="btn btn-accent mr-4">View My Projects</a>
                  </Link>
                  <Link href="/contact">
                    <a className="btn btn-outline">Contact Me</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="section-title text-gray-800 dark:text-white">About Me</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                {personalInfo.bio}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Name</h3>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.name}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.location}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="section-title text-gray-800 dark:text-white">My Skills</h2>
          <p className="section-subtitle text-gray-600 dark:text-gray-400">
            Technologies and tools I specialize in
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">React</span>
                  <span className="text-amber-500">95%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
                  <span className="text-amber-500">98%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">TypeScript</span>
                  <span className="text-amber-500">90%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">HTML/CSS</span>
                  <span className="text-amber-500">95%</span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Backend</h3>
              <ul className="space-y-2">
                <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">Node.js</span>
                  <span className="text-amber-500">90%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">Python</span>
                  <span className="text-amber-500">80%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">Express</span>
                  <span className="text-amber-500">85%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">GraphQL</span>
                  <span className="text-amber-500">75%</span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Tools & Others</h3>
              <ul className="space-y-2">
                <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">Git</span>
                  <span className="text-amber-500">95%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">Docker</span>
                  <span className="text-amber-500">80%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">AWS</span>
                  <span className="text-amber-500">75%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">MongoDB</span>
                  <span className="text-amber-500">85%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="section-title text-gray-800 dark:text-white">Featured Projects</h2>
          <p className="section-subtitle text-gray-600 dark:text-gray-400">
            Some of my recent work
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group">
              <div className="h-48 bg-gray-200 border-2 border-dashed w-full" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Project Name</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A brief description of the project and technologies used.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200">React</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200">Node.js</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200">MongoDB</span>
                </div>
                <div className="flex space-x-4">
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                      View Details
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 font-medium">
                      Source Code
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card group">
              <div className="h-48 bg-gray-200 border-2 border-dashed w-full" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Project Name</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A brief description of the project and technologies used.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200">Vue.js</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200">Firebase</span>
                </div>
                <div className="flex space-x-4">
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                      View Details
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 font-medium">
                      Source Code
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card group">
              <div className="h-48 bg-gray-200 border-2 border-dashed w-full" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Project Name</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A brief description of the project and technologies used.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200">Next.js</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200">Tailwind CSS</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200">PostgreSQL</span>
                </div>
                <div className="flex space-x-4">
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                      View Details
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 font-medium">
                      Source Code
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <a className="btn btn-outline">
                View All Projects
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title text-gray-800 dark:text-white">Get In Touch</h2>
            <p className="section-subtitle text-gray-600 dark:text-gray-400">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <a className="btn btn-accent">
                  Contact Me
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}