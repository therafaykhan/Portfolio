import Link from 'next/link';
import { useState, useEffect } from 'react';
import Script from 'next/script';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              DevPortfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Dark Mode Toggle */}
          <div className="hidden md:block">
            <button
              id="theme-toggle"
              type="button"
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors"
            >
              <svg id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              <Link href="/" className="py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/projects" className="py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/contact" className="py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <button
                  id="theme-toggle-mobile"
                  type="button"
                  className="w-full py-2 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <span className="mr-2">Toggle Theme</span>
                  <svg id="theme-toggle-mobile-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg id="theme-toggle-mobile-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-24 md:pt-28">
        {children}
      </main>

      <footer className="py-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Software & Web Development Portfolio. All rights reserved.
          </p>
        </div>
      </footer>

      <Script
        id="theme-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Change the theme toggle script to work with Tailwind's dark mode
            function initializeTheme() {
              const themeToggle = document.getElementById('theme-toggle');
              const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
              const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');

              const themeToggleMobile = document.getElementById('theme-toggle-mobile');
              const themeToggleMobileLightIcon = document.getElementById('theme-toggle-mobile-light-icon');
              const themeToggleMobileDarkIcon = document.getElementById('theme-toggle-mobile-dark-icon');

              // Determine initial theme
              let currentTheme = localStorage.getItem('color-theme');
              if (!currentTheme) {
                currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              }

              // Apply initial theme
              if (currentTheme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }

              // Show appropriate icons based on current theme
              function updateIcons() {
                if (document.documentElement.classList.contains('dark')) {
                  // In dark mode, show light icon (sun) and hide dark icon (moon)
                  if (themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
                  if (themeToggleDarkIcon) themeToggleDarkIcon.classList.add('hidden');
                  if (themeToggleMobileLightIcon) themeToggleMobileLightIcon.classList.remove('hidden');
                  if (themeToggleMobileDarkIcon) themeToggleMobileDarkIcon.classList.add('hidden');
                } else {
                  // In light mode, show dark icon (moon) and hide light icon (sun)
                  if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
                  if (themeToggleLightIcon) themeToggleLightIcon.classList.add('hidden');
                  if (themeToggleMobileDarkIcon) themeToggleMobileDarkIcon.classList.remove('hidden');
                  if (themeToggleMobileLightIcon) themeToggleMobileLightIcon.classList.add('hidden');
                }
              }

              // Initialize icons
              updateIcons();

              // Add click listeners
              if (themeToggle) {
                themeToggle.addEventListener('click', function() {
                  // Toggle dark mode class
                  document.documentElement.classList.toggle('dark');

                  // Update icons
                  updateIcons();

                  // Save preference to localStorage
                  if (document.documentElement.classList.contains('dark')) {
                    localStorage.setItem('color-theme', 'dark');
                  } else {
                    localStorage.setItem('color-theme', 'light');
                  }
                });
              }

              if (themeToggleMobile) {
                themeToggleMobile.addEventListener('click', function() {
                  // Toggle dark mode class
                  document.documentElement.classList.toggle('dark');

                  // Update icons
                  updateIcons();

                  // Save preference to localStorage
                  if (document.documentElement.classList.contains('dark')) {
                    localStorage.setItem('color-theme', 'dark');
                  } else {
                    localStorage.setItem('color-theme', 'light');
                  }
                });
              }
            }

            // Initialize theme when DOM is loaded
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initializeTheme);
            } else {
              initializeTheme();
            }
          `
        }}
      />
    </div>
  );
}