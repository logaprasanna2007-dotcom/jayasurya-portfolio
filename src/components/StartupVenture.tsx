/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, ShoppingBag, Globe, Share2 } from "lucide-react";

export default function StartupVenture() {
  return (
    <section id="startup" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-slate-50 rounded-[3rem] p-8 lg:p-16 relative overflow-hidden border border-slate-100">
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-200/20 rounded-full blur-[100px]" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  <Sparkles size={24} className="text-blue-600" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-blue-600">Entrepreneurial Journey</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-display font-black mb-6 text-slate-900 tracking-tight">Nature’s Jazz Skincare</h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                A natural skincare revolution focused on purity and innovation. Co-founded to bring rose petal & moong dal-based products back to the modern skincare routine. We combine traditional wisdom with modern D2C strategies.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { title: "Natural Innovation", desc: "Rose petal & moong dal based products." },
                  { title: "D2C Strategy", desc: "Direct-to-consumer digital-first branding." },
                  { title: "Sustainable Roots", desc: "Eco-friendly and ethically sourced." }
                ].map((feature, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="flex gap-4 group"
                  >
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500 transition-all">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1 uppercase tracking-wider text-sm group-hover:text-blue-600 transition-colors">{feature.title}</div>
                      <div className="text-slate-500 text-sm leading-tight font-medium">{feature.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10">
                  <ShoppingBag size={20} />
                  Shop Products
                </button>
                <div className="flex items-center gap-3">
                  <button className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-white hover:border-slate-300 transition-all shadow-sm">
                    <Globe size={20} className="text-slate-600" />
                  </button>
                  <button className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-white hover:border-slate-300 transition-all shadow-sm">
                    <Share2 size={20} className="text-slate-600" />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-white border border-slate-100 p-4 rounded-[2.5rem] relative overflow-hidden group shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1000" 
                  alt="Nature's Jazz"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Brand Overlay */}
                <motion.div 
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md border border-slate-200 p-6 rounded-2xl shadow-xl z-20"
                >
                  <div className="text-center relative">
                    <div className="text-[10px] font-black text-blue-600 mb-1 uppercase tracking-[0.2em]">Flagship Product</div>
                    <div className="text-lg font-black tracking-tight text-slate-900 whitespace-nowrap">Moong Dal Protocol</div>
                  </div>
                </motion.div>

                {/* Decorative Stats */}
                <div className="absolute top-8 left-8 flex flex-col gap-2">
                  <div className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border border-slate-100 flex items-center gap-2 shadow-sm">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">+1200 Sales</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
