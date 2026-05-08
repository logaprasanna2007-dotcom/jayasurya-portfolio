/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-slate-50 rounded-[3rem] p-8 lg:p-16 relative overflow-hidden border border-slate-100 shadow-sm">
          {/* Map background effect */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale" style={{ backgroundImage: `url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i10!2i735!3i473!2m3!1e0!2sm!3i635191773!3m8!2sen!3sus!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0!23i4111425')`, backgroundSize: 'cover' }}></div>

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-display font-black mb-8 text-slate-900 tracking-tight">
                Let's Build the <span className="text-blue-600">Future</span> Together
              </h2>
              <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium">
                Whether you're a founder seeking mentorship, an investor looking for opportunities, or an ecosystem enthusiast, I’m always open to meaningful connections.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email Me", val: "associate@sonaincubations.com", href: "mailto:associate@sonaincubations.com" },
                  { icon: Phone, label: "Call Me", val: "+91 90252 82825", href: "tel:+919025282825" },
                  { icon: MapPin, label: "Visit Me", val: "Salem, Tamil Nadu", href: "#" }
                ].map((item, i) => (
                  <a key={i} href={item.href} className="flex gap-6 group cursor-pointer w-fit">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">{item.label}</div>
                      <div className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.val}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex gap-4 mt-12">
                <a href="https://linkedin.com" className="px-6 py-3 bg-white border border-slate-100 rounded-xl flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors font-bold shadow-sm">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a href="https://wa.me/919025282825" className="px-6 py-3 bg-white border border-slate-100 rounded-xl flex items-center gap-2 hover:bg-green-600 hover:text-white transition-colors font-bold shadow-sm">
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-colors text-slate-900 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                    <input type="text" placeholder="Mentoring" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-colors text-slate-900 font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-colors text-slate-900 font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                  <textarea rows={4} placeholder="How can I help you?" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-colors text-slate-900 font-medium resize-none"></textarea>
                </div>
                <button className="w-full py-5 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
