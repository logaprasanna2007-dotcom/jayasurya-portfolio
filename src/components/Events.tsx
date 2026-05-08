/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle, Users, Zap, ExternalLink } from "lucide-react";

const events = [
  {
    name: "Think Salem 2025",
    type: "Flagship Event",
    metrics: "500+ Attendees",
    image: "https://images.unsplash.com/photo-1540575861501-7ad0582373f3?auto=format&fit=crop&q=80&w=800",
    icon: <Users size={16} />
  },
  {
    name: "Women Innovation",
    type: "Empowerment",
    metrics: "Focused Summit",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    icon: <Zap size={16} />
  },
  {
    name: "PoultryTech Summit",
    type: "Industrial Tech",
    metrics: "Expo & Summit",
    image: "https://images.unsplash.com/photo-1591115711431-da790518600d?auto=format&fit=crop&q=80&w=800",
    icon: <Zap size={16} />
  },
  {
    name: "#TN4Startup Cycle Rally",
    type: "Outreach",
    metrics: "Ecosystem Building",
    image: "https://images.unsplash.com/photo-1471506480208-8e93a6c1302d?auto=format&fit=crop&q=80&w=800",
    icon: <MessageCircle size={16} />
  }
];

export default function Events() {
  return (
    <section id="events" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 inline-block"
            >
              Signature Highlights
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-display font-black text-slate-900"
            >
              Events <span className="text-slate-300">&</span> Initiatives
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-md pb-2 font-medium"
          >
            Curating and supporting high-profile startup events that foster collaboration, learning, and ecosystem growth across the region.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative h-[480px] rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-sm active:scale-95 transition-all duration-500 hover:shadow-2xl hover:border-blue-100"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={event.image} 
                  alt={event.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100 grayscale-[50%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent opacity-95 group-hover:via-white/20 transition-all duration-500" />
              </div>
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end z-10">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-2 mb-4"
                >
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-widest shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    {event.type}
                  </span>
                </motion.div>
                
                <h3 className="text-2xl font-display font-black mb-4 leading-tight group-hover:translate-x-2 transition-transform duration-300 text-slate-900">
                  {event.name}
                </h3>

                <div className="flex items-center justify-between text-slate-500">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-80 text-slate-400 group-hover:text-blue-600 transition-colors">
                    {event.icon}
                    {event.metrics}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-45">
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
