'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiGit, 
  DiSass,
  DiMongodb 
} from 'react-icons/di';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer,
  SiFirebase,
  SiVercel,
  SiFigma
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

export default function Skills() {
  // Memoizacja kategorii umiejętności
  const skillCategories = React.useMemo(() => [
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', icon: DiJavascript1, color: 'text-yellow-400', level: 90 },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', level: 85 },
        { name: 'React', icon: DiReact, color: 'text-blue-400', level: 90 },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', level: 85 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', level: 90 },
        { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-400', level: 80 }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: DiNodejs, color: 'text-green-400', level: 75 },
        { name: 'MongoDB', icon: DiMongodb, color: 'text-green-500', level: 70 },
        { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400', level: 80 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: DiGit, color: 'text-orange-500', level: 85 },
        { name: 'VS Code', icon: VscCode, color: 'text-blue-500', level: 95 },
        { name: 'Figma', icon: SiFigma, color: 'text-purple-400', level: 75 },
        { name: 'Vercel', icon: SiVercel, color: 'text-white', level: 85 },
        { name: 'Sass', icon: DiSass, color: 'text-pink-400', level: 80 }
      ]
    }
  ], []);

  return (
    <section className="py-20 px-6 md:px-20 ml-16 bg-gray-800/30">
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
            Umiejętności & Technologie
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologie i narzędzia, z którymi pracuję na co dzień
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Kategorie umiejętności */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="text-center">
                        <div className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-200`}>
                          <Icon className="mx-auto" />
                        </div>
                        <h4 className="text-white font-medium mb-2 group-hover:text-blue-400 transition-colors duration-200">
                          {skill.name}
                        </h4>
                        
                        {/* Progress bar */}
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full"
                          />
                        </div>
                        <span className="text-xs text-gray-400">{skill.level}%</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dodatkowe informacje */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">
              Ciągle się uczę!
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Świat technologii szybko się zmienia, dlatego staram się być zawsze na bieżąco 
              z najnowszymi trendami i narzędziami. Obecnie pogłębiam wiedzę z zakresu 
              Three.js, Web3 i serverless architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}