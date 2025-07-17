import React from 'react';
import './globals.css';
import CanvasParticles from '../components/CanvasParticles';
import GeometricShapes from '../components/GeometricShapes';
import Sidebar from '../components/Sidebar';
import ErrorBoundary from '../components/ErrorBoundary';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mariusz Urban - Frontend Developer Portfolio',
  description: 'Portfolio Mariusza Urbana - Frontend Developer specjalizujący się w React, Next.js i nowoczesnych technologiach webowych',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <body className="relative bg-gray-900 text-white overflow-x-hidden">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Cząsteczki w tle */}
        <CanvasParticles />
        
        {/* Geometryczne kształty w tle */}
        <GeometricShapes />
        
        {/* Główna zawartość */}
        <ErrorBoundary>
          <main className="relative z-20">
            {children}
          </main>
        </ErrorBoundary>
      </body>
    </html>
  );
}