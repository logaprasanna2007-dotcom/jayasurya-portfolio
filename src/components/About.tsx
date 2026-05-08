/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { User, MapPin, Award, Shield } from "lucide-react";

export default function About() {
  const highlights = [
    { label: "DPIIT Certification", icon: <Shield className="text-primary" /> },
    { label: "Incubation Support", icon: <Award className="text-secondary" /> },
    { label: "IPR Guidance", icon: <Shield className="text-accent" /> },
    { label: "Mentoring", icon: <User className="text-purple-400" /> },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12"
          >
            <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                  <div className="space-y-6">
                    <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] block">
                      Professional Profile
                    </span>
                    <h2 className="text-4xl lg:text-6xl font-display font-black mb-8 text-slate-900 tracking-tight leading-tight">
                      STRATEGIST.<br /> 
                      <span className="text-slate-300">ECOSYSTEM BUILDER.</span>
                    </h2>
                    
                    <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                      <p className="border-l-4 border-blue-600/20 pl-6 text-slate-950 italic">
                        "Bridging the Gap between Raw Innovation and Market Impact through Strategic Facilitation."
                      </p>
                      <p>
                        Specializing in <span className="text-slate-900 font-bold underline decoration-blue-500/30 underline-offset-4">DPIIT CERTIFICATION</span>, government grant protocols, and incubation lifecycle management. I optimize startup growth pathways within the regional innovation landscape.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {highlights.map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -4 }}
                        className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center gap-4 group transition-all hover:bg-white hover:shadow-md"
                      >
                        <div className="text-blue-600">
                          {item.icon}
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700">
                          {item.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-square rounded-[2rem] bg-slate-50 border border-slate-200 p-8 group-hover:border-blue-200 transition-colors pointer-events-none overflow-hidden hidden md:block">
                  {/* Visual Element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: 360 
                      }}
                      transition={{ 
                        duration: 30, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      className="w-3/4 h-3/4 border border-blue-500/10 rounded-full"
                    />
                    <div className="w-24 h-24 bg-white shadow-xl rounded-2xl flex items-center justify-center font-black text-slate-900 text-lg">
                      JS
                    </div>
                  </div>
                  
                  {/* Decorative dots */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0.1, 0.5, 0.1],
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                      className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
                      style={{ 
                        top: `${10 + Math.random() * 80}%`, 
                        left: `${10 + Math.random() * 80}%` 
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
