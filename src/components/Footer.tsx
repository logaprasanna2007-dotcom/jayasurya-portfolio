/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Rocket, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-slate-100 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/10">
              <Rocket size={20} className="text-white" />
            </div>
            <span className="text-xl font-display font-black tracking-tighter text-slate-900">
              JAYASURYA<span className="text-slate-400 font-medium"> @{currentYear}</span>
            </span>
          </div>

          <div className="flex items-center gap-10 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <p className="text-[10px] text-slate-300 flex items-center gap-2 uppercase tracking-widest font-bold">
            Built with <Heart size={10} className="text-red-400" /> in Tamil Nadu
          </p>
        </div>
        
        <div className="mt-12 text-[9px] text-slate-200 uppercase tracking-[0.5em] font-medium">
          Innovation ecosystem strategist & ecosystem builder
        </div>
      </div>
    </footer>
  );
}
