'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GeometricShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 z-5 overflow-hidden">
      {/* Pulsująca kula */}
      <motion.div
        className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full"
        style={{ filter: 'blur(40px)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />

      {/* Obracający się gradient */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full"
        style={{ filter: 'blur(60px)' }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 20, ease: 'linear' },
          scale: { repeat: Infinity, duration: 12, ease: 'easeInOut' }
        }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-cyan-400/10 rounded-lg"
        style={{ filter: 'blur(20px)' }}
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
      />

      {/* Animated gradient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-cyan-400/5 rounded-full"
        style={{ filter: 'blur(80px)', transform: 'translate(-50%, -50%)' }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          scale: { repeat: Infinity, duration: 10, ease: 'easeInOut' },
          rotate: { repeat: Infinity, duration: 25, ease: 'linear' }
        }}
      />

      {/* Small floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
            filter: 'blur(1px)'
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3 + i * 0.5, 
            ease: 'easeInOut',
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );
}