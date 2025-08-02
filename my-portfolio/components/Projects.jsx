'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

export default function Projects() {
  // Memoizacja danych projektów dla lepszej wydajności
  const projects = React.useMemo(() => [
    {
      title: 'E-commerce Dashboard',
      description: 'Nowoczesny dashboard dla sklepu internetowego z analityką sprzedaży, zarządzaniem produktami i systemem zamówień.',
      technologies: [
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' }
      ],
      github: 'https://github.com/mariuszurban/ecommerce-dashboard',
      demo: 'https://ecommerce-dashboard-demo.vercel.app',
      image: '/api/placeholder/400/250',
      featured: true
    },
    
    {
      title: 'Portfolio Website',
      description: 'Responsywne portfolio z animacjami, dark mode i systemem kontaktowym.',
      technologies: [
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' }
      ],
      github: 'https://github.com/mariuszurban/portfolio',
      demo: 'https://mariuszurban.dev',
      image: '/api/placeholder/400/250'
    }
  ], []);

  return (
    <section id="projects" className="py-20 px-6 md:px-20 ml-16">
      <div className="max-w-7xl mx-auto">
        {/* Nagłówek sekcji */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some projects I've worked on. Each one showcases different aspects of my skills.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Siatka projektów */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Obrazek projektu */}
              <div className="relative overflow-hidden bg-gray-700/50 h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-6xl text-gray-600">
                    <FaReact />
                  </div>
                </div>
                {/* Overlay z linkami */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-200"
                    title="Zobacz kod"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-200"
                    title="Zobacz demo"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Zawartość */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded-full border border-blue-500/30">
                      Wyróżniony
                    </span>
                  )}
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologie */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full text-sm"
                      >
                        <Icon className={`text-sm ${tech.color}`} />
                        <span className="text-gray-300">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Linki */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <FaGithub />
                    Kod źródłowy
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in my projects?
          </p>
          <a
            href="https://github.com/Korzengwiezdny"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 border border-gray-600 hover:border-gray-500"
          >
            <FaGithub />
            Check me out on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}