import React, { useState } from 'react';
import { HOTSPOTS, PRODUCT_SPECS, DETAIL_IMAGE } from '../data/volleyballData';
import { Hotspot } from '../types';
import { Sparkles, Layers, CheckCircle, Info, ChevronRight } from 'lucide-react';

export const HotspotViewer: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <section id="tecnologia" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Engenharia de Precisão</span>
          </div>

          <h2 className="font-athletic text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight">
            Explore Por Dentro da <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
              Engenharia Inovadora
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Clique nos pontos interativos na bola para descobrir a tecnologia microscópica que garante o toque macio, o voo perfeito e a máxima resistência.
          </p>
        </div>

        {/* Interactive Layout: Hotspot Image Canvas + Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Image Container with Hotspot Pins */}
          <div className="lg:col-span-7 relative bg-slate-900/80 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden group">
            
            {/* Visual Instruction Badge */}
            <div className="absolute top-6 left-6 z-20 bg-slate-950/80 backdrop-blur-md border border-slate-700/80 px-3.5 py-1.5 rounded-xl text-xs text-slate-300 flex items-center gap-2 shadow-lg">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
              <span>Toque nos números para inspecionar</span>
            </div>

            {/* Product Image Canvas */}
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-inner">
              <img
                src={DETAIL_IMAGE}
                alt="Detalhe tecnológico da bola de vôlei Vortex Pro"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />

              {/* Hotspot Pins Overlay */}
              {HOTSPOTS.map((hotspot, idx) => {
                const isActive = selectedHotspot.id === hotspot.id;
                return (
                  <button
                    key={hotspot.id}
                    type="button"
                    onClick={() => setSelectedHotspot(hotspot)}
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer transition-all duration-300 group/pin ${
                      isActive ? 'scale-125' : 'hover:scale-110'
                    }`}
                    aria-label={`Ver detalhe de ${hotspot.title}`}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Outer pulse */}
                      <span
                        className={`absolute w-10 h-10 rounded-full animate-ping opacity-60 ${
                          isActive ? 'bg-cyan-400' : 'bg-blue-400'
                        }`}
                      />
                      {/* Center pin circle */}
                      <span
                        className={`relative w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-xl border-2 transition-colors ${
                          isActive
                            ? 'bg-cyan-400 text-slate-950 border-white shadow-cyan-400/50'
                            : 'bg-slate-950/90 text-white border-blue-400 hover:border-sky-400'
                        }`}
                      >
                        {idx + 1}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick switcher buttons beneath the image for mobile touch */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              {HOTSPOTS.map((hotspot, idx) => {
                const isActive = selectedHotspot.id === hotspot.id;
                return (
                  <button
                    key={hotspot.id}
                    type="button"
                    onClick={() => setSelectedHotspot(hotspot)}
                    className={`p-2.5 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                      isActive
                        ? 'bg-sky-400/10 border-sky-400 text-sky-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="font-bold">0{idx + 1}.</span> {hotspot.title.split(' ')[0]}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Details & Live Spec Sheet */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Active Hotspot Deep-Dive Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-sky-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 border border-sky-400/20 px-3 py-1 rounded-full">
                  Tecnologia Ativa
                </span>
                <div className="text-right">
                  <div className="text-2xl font-black text-sky-400 leading-none">{selectedHotspot.stat}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">{selectedHotspot.statLabel}</div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {selectedHotspot.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedHotspot.description}
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400 border-t border-slate-800 pt-4">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Testado e aprovado em quadras profissionais indoor e beach volley</span>
              </div>
            </div>

            {/* Official Technical Specifications Table */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-4 h-4 text-blue-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Especificações Oficiais da Bola
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {PRODUCT_SPECS.map((spec, i) => (
                  <div key={i} className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    <div className="text-slate-400">{spec.label}</div>
                    <div className="text-white font-bold text-sm mt-0.5">{spec.value}</div>
                    <div className="text-[10px] text-sky-400/90 mt-0.5">{spec.detail}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
