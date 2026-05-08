/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Rocket } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import   About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Events from "./components/Events";
import StartupVenture from "./components/StartupVenture";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffect from "./components/BackgroundEffect";

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Simulate loading for effect
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative selection:bg-blue-100 selection:text-blue-900">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" } 
            }}
            className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="relative mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-2 border-slate-100 border-t-blue-500 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-display font-black tracking-tight text-slate-900">
                JAYASURYA<span className="text-blue-600"> MARUDHASALAMOORTHI</span>
              </h2>
              <p className="text-slate-400 text-[10px] uppercase tracking-[0.4em] mt-2 font-semibold">
                Initializing Portfolio
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cursor Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0 hidden lg:block"
        animate={{
          x: mousePos.x - 200,
          y: mousePos.y - 200,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.5 }}
      />

      <BackgroundEffect />
      <Navbar />

      <main className={isLoading ? "blur-sm" : "transition-all duration-1000 blur-0"}>
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Events />
        <StartupVenture />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}


