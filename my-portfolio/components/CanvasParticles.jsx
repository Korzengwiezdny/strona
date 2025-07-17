'use client';

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function CanvasParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 50, density: { enable: true, area: 800 } },
      color: { value: '#3b82f6' },
      shape: { type: 'circle' },
      opacity: { 
        value: 0.3,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1
        }
      },
      size: { 
        value: 2,
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5
        }
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'none',
        random: true,
        straight: false,
        outModes: 'out',
      },
      links: {
        enable: true,
        distance: 120,
        color: '#3b82f6',
        opacity: 0.2,
        width: 1,
      },
    },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    detectRetina: true,
  };

  return (
    <Particles
      init={particlesInit}
      options={options}
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}