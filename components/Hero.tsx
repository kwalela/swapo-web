'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

export default function Hero() {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-neutral-900">
      
      {/* 1. BACKGROUND IMAGE (Local File) */}
      <div className="absolute inset-0">
        <Image 
          src="/images/president.jpg" 
          alt="President Netumbo Nandi-Ndaitwah"
          fill
          className="object-cover object-top" // Focus on the face
          priority // Load this instantly
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-swapo-blue/90 via-swapo-blue/60 to-transparent" />
      </div>

      {/* 2. HERO CONTENT */}
      <div className="relative z-10 flex h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
        <div className="max-w-2xl text-white">
          
          {/* Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swapo-green/90 text-sm font-bold tracking-wide mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            THE RULING PARTY
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-heading text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            Unity. Liberty. <br />
            <span className="text-swapo-yellow">Justice.</span>
          </motion.h1>

          {/* Subheadline - UPDATED FOR 2025 CONTEXT */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg"
          >
            Under the visionary leadership of <strong>H.E. President Netumbo Nandi-Ndaitwah</strong>, we are building a prosperous, industrialized Namibia.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="/manifesto" 
              className="flex items-center justify-center gap-2 bg-swapo-red text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition"
            >
              <Download size={20} />
              2025-2030 Manifesto
            </Link>
            
            <Link 
              href="/join" 
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-swapo-blue transition"
            >
              Join the Movement
              <ArrowRight size={20} />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* 3. NEWS TICKER - UPDATED */}
      <div className="absolute bottom-0 w-full bg-swapo-red text-white py-3 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block px-4 font-bold text-sm tracking-widest">
          VICTORY: SWAPO REGAINS CONTROL OF ERONGO REGION +++ PRESIDENT NANDI-NDAITWAH LAUNCHES NEW GREEN HYDROGEN INITIATIVE +++
        </div>
      </div>
    </div>
  );
}