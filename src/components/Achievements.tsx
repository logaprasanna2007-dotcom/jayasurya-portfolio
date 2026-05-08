/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TrendingUp, FileCheck, CreditCard, Building2, Landmark, Users } from "lucide-react";

const achievements = [
  {
    title: "Grant Facilitation",
    stat: "₹50 Lakhs",
    desc: "Facilitated critical funding for early-stage startups.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "DPIIT Guidance",
    stat: "50+ Startups",
    desc: "Successfully navigated complex certification processes.",
    icon: <FileCheck size={24} />,
  },
  {
    title: "Smart Card Support",
    stat: "100+ Cards",
    desc: "Supported StartupTN Smart Card applications and benefits.",
    icon: <CreditCard size={24} />,
  },
  {
    title: "Incubation Links",
    stat: "38 Startups",
    desc: "Connected ventures to high-impact incubation centers.",
    icon: <Building2 size={24} />,
  },
  {
    title: "IPR Assistance",
    stat: "15 Patents",
    desc: "Helped startups secure vital patents and trademarks.",
    icon: <Landmark size={24} />,
  },
  {
    title: "Outreach Reached",
    stat: "10,000+",
    desc: "Inspired and reached entrepreneurs through outreach.",
    icon: <Users size={24} />,
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 inline-block"
            >
              Key Milestones
            </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-display font-bold leading-tight"
          >
            Making an <span className="text-gradient">Impact</span> <br /> in the Ecosystem
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white border border-slate-100 p-8 rounded-[32px] relative overflow-hidden group transition-all duration-500 shadow-sm hover:shadow-xl hover:border-blue-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all relative z-10">
                <div className="text-slate-900 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
              </div>

              <div className="text-4xl font-display font-extrabold text-gradient mb-2 relative z-10">{item.stat}</div>
              <h3 className="text-lg font-bold mb-3 text-slate-900 relative z-10 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed relative z-10 font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
