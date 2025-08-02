'use client';

import React, { useCallback } from 'react';
import { FaArrowDown, FaCode, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToProjects = useCallback(() => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-transparent text-white px-6 md:px-20 py-24 flex items-center overflow-hidden ml-16"
    >
      {/* Główna zawartość Hero */}
      <div className="relative z-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Powitanie */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-blue-400 text-lg font-medium">Hi, I'm</span>
          </motion.div>

          {/* Imię i nazwisko */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent"
          >
            Mariusz Urban
          </motion.h1>

          {/* Tytuł/pozycja */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6"
          >
            Aspiring DevOps Engineer
          </motion.h2>

          {/* Opis */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
          //Przerob na debops enginier
          >
            I am a passionate DevOps Engineer with a focus on automation, optimization, and continuous improvement. I thrive on solving complex problems and delivering high-quality software solutions.
          </motion.p>

          {/* Przyciski akcji */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button
              onClick={scrollToProjects}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-500/25"
            >
              <FaCode className="text-lg" />
              My Projects
              <FaArrowDown className="text-sm group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            
            <a
              href="#contact"
              className="group border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 hover:bg-blue-400/10"
            >
              <FaRocket className="text-lg" />
              Contact Me
            </a>
          </motion.div>
     
          {/* Statystyki/highlights */}
          
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-400 text-2xl"
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
}