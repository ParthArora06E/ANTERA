"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2.5 second clean loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-brand-cream-bg)]"
        >
          <div className="flex flex-col items-center">
            
            {/* Clean Logo Block */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-[80px] h-[80px] flex flex-col items-center justify-center bg-[var(--color-brand-maroon-deep)] text-white rounded-[16px] shadow-xl mb-8"
            >
              <span className="font-serif font-black text-[22px] leading-none mt-2 uppercase tracking-wide">Ant</span>
              <span className="text-[9px] text-[var(--color-brand-gold-soft)] uppercase tracking-[0.25em] leading-none mt-1">ERA</span>
            </motion.div>

            {/* Creative Minimal Loading Spinner */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-3 text-[var(--color-brand-maroon-royal)]"
            >
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-[12px] font-bold uppercase tracking-[0.2em]">Preparing your feast...</span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
