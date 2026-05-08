/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, ExternalLink, Rocket, Sparkles } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "Entrepreneurs Reached", value: "10,000+" },
    { label: "Startups Mentored", value: "50+" },
    { label: "Grant Facilitated", value: "₹50L" },
    { label: "Programs Guided", value: "100+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center gap-4"
              >
                <div>
                  <div className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-600 mb-1">Ecosystem Builder</div>
                  <div className="text-xl font-display font-black text-slate-900 tracking-tight leading-none">Jayasurya Marudhasalamoorthi</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pill flex items-center gap-2 group w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="group-hover:text-primary transition-colors">DST Sona iTBI Ignition Grant Support</span>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl lg:text-[84px] font-display font-black leading-[0.95] mb-8 tracking-tighter text-slate-900">
                Empowering <br />
                <span className="text-slate-300">Startups from</span> <br />
                <span className="text-gradient">Idea to Impact</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-400 max-w-lg leading-relaxed font-medium"
            >
              Project Associate at <span className="text-white">DST Sona iTBI</span> & Innovation Ecosystem Strategist. Dedicated to building resilient startup ecosystems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#experience" 
                className="group relative px-8 py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center gap-2 overflow-hidden shadow-xl shadow-slate-900/10"
              >
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors">View Portfolio</span>
                <ArrowRight size={20} className="relative z-10 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
              <button className="px-8 py-4 bg-transparent border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all">
                Download CV
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  className="stat-box group"
                >
                  <div className="text-2xl font-display font-bold text-gradient mb-1 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold text-center leading-none">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative lg:h-[600px] flex items-center justify-center p-8"
          >
            <div className="relative w-full max-w-md aspect-square bg-slate-50 border border-slate-200 p-8 rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-50" />
              
              <div className="relative h-full flex flex-col justify-between z-10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      <Sparkles size={24} className="text-blue-500" />
                    </div>
                    <div className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full border border-green-100 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                       AVAILABLE
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-black text-slate-900 leading-tight">
                      Scaling Tamil Nadu's <br />
                      <span className="text-blue-600">Startup Ecosystem.</span>
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Strategic facilitation for founders, from identification to impact.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="stat-box">
                    <div className="badge-label">Startups</div>
                    <div className="text-xl font-black text-slate-900">50+</div>
                  </div>
                  <div className="stat-box">
                    <div className="badge-label">Impact</div>
                    <div className="text-xl font-black text-slate-900">High</div>
                  </div>
                </div>
              </div>

              {/* Decorative background shape */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
