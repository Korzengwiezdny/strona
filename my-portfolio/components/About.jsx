'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';

export default function About() {
  // Memoizacja danych dla lepszej wydajności
  const skills = React.useMemo(() => [
    'React & Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Git & GitHub',
    'Responsive Design'
  ], []);

  const values = React.useMemo(() => [
    {
      icon: FaCode,
      title: 'Czysty kod',
      description: 'Piszę czytelny, maintainable kod zgodny z najlepszymi praktykami'
    },
    {
      icon: FaLightbulb,
      title: 'Innowacyjność',
      description: 'Zawsze szukam nowych rozwiązań i najnowszych technologii'
    },
    {
      icon: FaUsers,
      title: 'Współpraca',
      description: 'Cenię sobie pracę w zespole i otwartą komunikację'
    },
    {
      icon: FaRocket,
      title: 'Wydajność',
      description: 'Optymalizuję aplikacje pod kątem szybkości i user experience'
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
            O mnie
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
              Frontend Developer z pasją do tworzenia
            </h3>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Jestem frontend developerem z ponad 3-letnim doświadczeniem w tworzeniu 
                nowoczesnych aplikacji webowych. Specjalizuję się w React, Next.js i 
                ekosystemie JavaScript/TypeScript.
              </p>
              
              <p>
                Moją pasją jest przekształcanie pomysłów w funkcjonalne, piękne i 
                intuicyjne interfejsy użytkownika. Zawsze staram się być na bieżąco 
                z najnowszymi trendami i technologiami w świecie web developmentu.
              </p>
              
              <p>
                Poza programowaniem interesuję się UX/UI designem, co pozwala mi 
                lepiej rozumieć potrzeby użytkowników i tworzyć bardziej przemyślane 
                rozwiązania.
              </p>
            </div>

            {/* Umiejętności */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-white">Główne technologie:</h4>
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
              Moje wartości
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