'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const socialLinks = React.useMemo(() => [
    {
      icon: FaGithub,
      url: 'https://github.com/mariuszurban',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/mariuszurban',
      label: 'LinkedIn'
    }
  ], []);

  return (
    <footer className="bg-gray-900/50 border-t border-gray-700/50 py-12 px-6 md:px-20 ml-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo/Nazwa */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Mariusz Urban</h3>
            <p className="text-gray-400">Frontend Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-gray-400 text-sm">Znajdź mnie:</span>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xl"
                  title={social.label}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 p-3 rounded-full border border-blue-500/30 transition-colors duration-200"
            title="Wróć na górę"
          >
            <FaArrowUp />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              &copy; {new Date().getFullYear()} Mariusz Urban. Stworzone z 
              <FaHeart className="text-red-400 text-xs" />
              w React & Next.js
            </p>
            <p>
              Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}