'use client';

import React, { useCallback } from 'react';
import { FaGithub, FaLinkedin, FaUser, FaCode, FaEnvelope, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useScrollSpy } from '../hooks/useScrollSpy';

export default function Sidebar() {
  const activeSection = useScrollSpy({ 
    sectionIds: ['home', 'about', 'projects', 'contact'],
    offset: 100 
  });

  const menuItems = [
    { id: 'home', icon: FaHome, label: 'Home', href: '#home' },
    { id: 'about', icon: FaUser, label: 'About me', href: '#about' },
    { id: 'projects', icon: FaCode, label: 'Projects', href: '#projects' },
    { id: 'contact', icon: FaEnvelope, label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/Korzengwiezdny',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/mariusz-urban-561b8b372/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    }
  ];

  const scrollToSection = useCallback((href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-full w-16 bg-gray-900/95 backdrop-blur-sm border-r border-gray-700/50 z-50 flex flex-col"
    >
      {/* Logo/Avatar */}
      <div className="p-3 border-b border-gray-700/50">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
          MU
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full p-3 flex items-center justify-center transition-colors duration-200 relative group ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                  title={item.label}
                >
                  <Icon className="text-lg" />
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400 rounded-r"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  {/* Tooltip */}
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {item.label}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="p-3 border-t border-gray-700/50 space-y-2">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-800/50 rounded group ${social.color}`}
              title={social.label}
            >
              <Icon className="text-lg mx-auto" />
              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {social.label}
              </div>
            </a>
          );
        })}
      </div>
    </motion.aside>
  );
}