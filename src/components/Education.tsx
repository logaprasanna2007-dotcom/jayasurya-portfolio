/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, BookOpen, Award } from "lucide-react";

export default function Education() {
  const edu = [
    {
      degree: "MBA - Innovation, Entrepreneurship & Venture Development",
      school: "Sona College of Technology",
      highlights: ["Focus on Ecosystem Building", "Incubation Strategies", "Venture Capital Fundamentals"],
      icon: <GraduationCap className="text-primary" />
    },
    {
      degree: "B.Com - Commerce",
      school: "University of Madras",
      highlights: ["Business Finance", "Economic Systems", "Corporate Law"],
      icon: <BookOpen className="text-secondary" />
    }
  ];

  return (
    <section className="py-24 relative bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">Academic <span className="text-blue-600">Foundations</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {edu.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-100 p-8 rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight mb-2 text-slate-900">{item.degree}</h3>
                  <p className="text-blue-600 text-xs font-black uppercase tracking-wider">{item.school}</p>
                </div>
              </div>

              <div className="space-y-3 pl-4 border-l-2 border-slate-100">
                {item.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
                    {h}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
