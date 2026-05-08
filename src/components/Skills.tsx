/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Layout, Brain, Cpu, MessageSquare, Lightbulb, Search, PenTool, Database, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    name: "Startup & Business",
    icon: <BarChart3 className="text-primary" />,
    skills: ["Business Model Development", "Pitch Deck Creation", "Govt Proposal Writing", "Startup Mentoring", "DPIIT Guidance", "IPR Support"]
  },
  {
    name: "AI & Tech Tools",
    icon: <Cpu className="text-secondary" />,
    skills: ["ChatGPT", "Claude", "Gemini", "Canva AI", "Notion AI", "HubSpot AI", "Gamma AI", "Perplexity AI"]
  }
];

export default function Skills() {
  return (
    <section id="tools" className="py-24 relative overflow-hidden bg-slate-50/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-6"
          >
            Digital Arsenal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-display font-black max-w-2xl text-slate-900 tracking-tight leading-tight"
          >
            Empowered by <span className="text-blue-600">Next-Gen</span> Skills & Tools
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[2.5rem] border border-slate-100 relative overflow-hidden shadow-sm"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-display font-black text-slate-900">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }}
                    className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-[12px] font-bold text-slate-600 hover:text-blue-600 transition-all cursor-default uppercase tracking-tight"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
