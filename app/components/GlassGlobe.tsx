"use client"

import React from 'react';
import { motion } from 'framer-motion';

const GlassGlobe = () => {
  return (
    <section className="py-12 flex justify-center items-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                      bg-white/5 dark:bg-black/5 backdrop-blur-lg border border-white/10 dark:border-black/10
                      flex justify-center items-center">
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          style={{
            backgroundImage: `url('/globe.svg')`, // Use your globe SVG
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.7, // Adjust opacity for glass effect
          }}
        />
        <div className="absolute inset-0 rounded-full border-2 border-white/20 dark:border-black/20"></div>
      </div>
    </section>
  );
};

export default GlassGlobe;
