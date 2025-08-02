'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';

export default function About() {
  // Memoizacja danych dla lepszej wydajności
  const skills = React.useMemo(() => [
    'Bash Scripting',
    'Git & GitHub',
    'AWS (EC2, S3, Lambda)',
    'Jenkins',
    'Docker',
    'CI/CD',
    'Kubernetes',
    'Terraform',
  ], []);

  const values = React.useMemo(() => [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write readable, maintainable code that adheres to best practices'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'I am always looking for new solutions and the latest technologies'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'I value teamwork and open communication'
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'I optimize applications for speed and user experience'
    }
  ], []);

  return (
    <section id="about" className="py-20 px-6 md:px-20 ml-16 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Nagłówek sekcji */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            About me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lewa strona - tekst */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
              DevOps Engineer with a passion for automation and optimization
            </h3>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a computer science student with hands-on experience in various
                DevOps tools and practices. My goal is to streamline development
                processes and improve collaboration between teams.
              </p>
              
              <p>
                My passion for technology drives me to continuously learn and adapt to
                new challenges. I enjoy automating repetitive tasks, optimizing workflows,
                and ensuring that applications run smoothly in production environments.
              </p>
              
              <p>
                I believe that a strong foundation in both development and operations is
                essential for delivering high-quality software. I am committed to writing
                clean, maintainable code and following best practices in all my projects.
              </p>
            </div>

            {/* Umiejętności */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-white">Main technologies:</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Prawa strona - wartości */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-semibold mb-8 text-white text-center lg:text-left">
              My values
            </h4>
            
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600/20 p-3 rounded-lg">
                      <Icon className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">
                        {value.title}
                      </h5>
                      <p className="text-gray-400">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}