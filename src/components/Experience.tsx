/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Project Associate",
    company: "DST Sona iTBI",
    period: "Present",
    description: "Driving startup success through holistic support systems.",
    highlights: [
      "Startup mentoring & Incubation support",
      "Government grant facilitation (DST NIDHI-iTBI)",
      "IPR assistance & CSR funding programs",
      "Ecosystem networking & Investor relations"
    ],
    icon: <Briefcase className="text-primary" size={20} />
  },
  {
    role: "Project Fellow",
    company: "StartupTN",
    period: "Previous",
    description: "Strengthening the regional startup foundation in Tamil Nadu.",
    highlights: [
      "DPIIT certification guidance",
      "StartupTN Smart Card support",
      "Event coordination & Startup outreach",
      "Funding scheme assistance"
    ],
    icon: <Briefcase className="text-secondary" size={20} />
  },
  {
    role: "Intern",
    company: "Nature’s Trails Zero-Waste Pvt. Ltd.",
    period: "Earlier",
    description: "Focusing on sustainable innovation and circular economy.",
    highlights: [
      "Sustainable innovation initiatives",
      "Social impact analysis",
      "Zero-waste product research"
    ],
    icon: <Briefcase className="text-accent" size={20} />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="badge-label text-blue-600 font-bold">Timeline</div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-display font-black text-center"
          >
            Professional <span className="text-gradient">Journey</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white -translate-x-1/2 z-10 hidden md:block mt-8 shadow-md" />

                {/* Content Card */}
                <div className="md:w-1/2">
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`bg-white border border-slate-100 p-8 rounded-[32px] transition-all duration-500 group relative overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-100 ${
                      i % 2 === 0 ? "md:ml-12" : "md:mr-12"
                    }`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-500/10 transition-colors" />
                    
                    <div className="flex justify-between items-start mb-4 relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <Briefcase className="text-slate-900 group-hover:text-white transition-colors" size={20} />
                      </div>
                      <div className="badge-label text-slate-400 font-mono mt-1">
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-1 text-slate-900 transition-colors relative z-10">{exp.role}</h3>
                    <div className="text-blue-600 font-bold mb-4 text-[10px] uppercase tracking-widest relative z-10">{exp.company}</div>
                    
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed relative z-10 font-medium">
                      {exp.description}
                    </p>

                    <div className="space-y-3 pl-4 border-l-2 border-slate-100 relative z-10">
                      {exp.highlights.map((item, j) => (
                        <motion.div 
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + (j * 0.1) }}
                          className="text-[11px] text-slate-600 font-bold font-sans flex items-center gap-2 uppercase tracking-wide"
                        >
                          <div className="w-1 h-1 rounded-full bg-blue-600/40" />
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
