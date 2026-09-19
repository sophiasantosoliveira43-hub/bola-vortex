import React, { useState } from 'react';
import { Sparkles, Star, ShieldCheck, Truck, ArrowRight, Play, CheckCircle2, RotateCcw, Volume2, Flame } from 'lucide-react';
import { EDITIONS } from '../data/volleyballData';
import { ProductEdition } from '../types';

interface HeroProps {
  onOpenCheckout: (editionId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  const [selectedEdition, setSelectedEdition] = useState<ProductEdition>(EDITIONS[0]);
  const [isImpactSimulated, setIsImpactSimulated] = useState(false);
  const [impactType, setImpactType] = useState<'manchete' | 'ataque' | 'levantamento'>('manchete');
  const [audioFeedbackText, setAudioFeedbackText] = useState<string | null>(null);

  const simulateTouch = (type: 'manchete' | 'ataque' | 'levantamento') => {
    setImpactType(type);
    setIsImpactSimulated(true);

    const feedback = {
      manchete: '💥 Ploft suave! Amortecimento Pro-Soft absorveu 88% do impacto no antebraço.',
      ataque: '⚡ Boom explosivo! Ressalto de poliuretano gerou +14% de propulsão na paralela.',
      levantamento: '✨ Toque de seda! Microfibra tátil encaixou com zero deslize nas pontas dos dedos.',
    };

    setAudioFeedbackText(feedback[type]);

    setTimeout(() => {
      setIsImpactSimulated(false);
    }, 1200);

    setTimeout(() => {
      setAudioFeedbackText(null);
    }, 3500);
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background Court Ambient Lines & Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/25 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-sky-500/20 rounded-full blur-[120px]" />
        {/* Subtle volleyball court lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & High-Energy Value Props */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Super Highlight Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 w-fit backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <Flame className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                A Sensação das Quadras de Vôlei
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-athletic text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.9]">
                Essa Bola É <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">Incrível</span> Para Jogar Vôlei.
              </h1>
              
              {/* Highlighted Quote Box with Requested Phrase */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950/80 via-slate-900/90 to-blue-900/40 border border-blue-500/30 p-4 sm:p-5 shadow-xl backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/20 text-cyan-300 shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg md:text-xl font-medium text-white leading-relaxed italic">
                      “A habilidade está em você e o conforto do jogo está na bola que só a Vortex Pro proporciona.”
                    </p>
                    <span className="text-xs text-sky-300/80 font-semibold tracking-wider uppercase mt-1.5 block">
                      Toque suave no antebraço • Precisão aerodinâmica • Padrão profissional
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                O vôlei ganha outra dimensão quando você toca na <strong className="text-white font-semibold">Vortex Pro</strong>. Amortecimento inteligente que <span className="text-sky-300 font-medium">não machuca o antebraço</span>, micro-covinhas 360° que não oscilam no saque e ressalto explosivo no ataque.
              </p>
            </div>

            {/* Quick 3 Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-2">
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Zero Ardência</div>
                  <div className="text-[11px] text-slate-400">Camada Pro-Soft na manchete</div>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Voo Estável 360°</div>
                  <div className="text-[11px] text-slate-400">Micro-covinhas anti-turbulência</div>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Padrão FIVB Pro</div>
                  <div className="text-[11px] text-slate-400">260-280g e 65-67cm oficial</div>
                </div>
              </div>
            </div>

            {/* Interactive Touch Simulator Buttons */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4 text-sky-400" />
                  Teste a Sensação da Vortex Pro:
                </span>
                <span className="text-[11px] text-slate-400">Clique para simular o toque</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => simulateTouch('manchete')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 border cursor-pointer ${
                    impactType === 'manchete' && isImpactSimulated
                      ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-500/40 scale-105'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  <span>🛡️</span>
                  <span>Simular Manchete</span>
                </button>
                <button
                  type="button"
                  onClick={() => simulateTouch('ataque')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 border cursor-pointer ${
                    impactType === 'ataque' && isImpactSimulated
                      ? 'bg-sky-500 text-slate-950 border-sky-300 shadow-lg shadow-sky-500/40 scale-105 font-bold'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  <span>⚡</span>
                  <span>Simular Cortada / Ataque</span>
                </button>
                <button
                  type="button"
                  onClick={() => simulateTouch('levantamento')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 border cursor-pointer ${
                    impactType === 'levantamento' && isImpactSimulated
                      ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-500/40 scale-105'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  <span>🎯</span>
                  <span>Simular Levantamento</span>
                </button>
              </div>

              {/* Dynamic feedback display */}
              {audioFeedbackText && (
                <div className="p-2.5 rounded-lg bg-blue-950/80 border border-blue-500/40 text-sky-200 text-xs font-medium animate-fadeIn flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span>{audioFeedbackText}</span>
                </div>
              )}
            </div>

            {/* CTA & Conversion Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-primary-cta"
                onClick={() => onOpenCheckout(selectedEdition.id)}
                className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl shadow-blue-500/25 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>COMPRAR AGORA • R$ 247</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#por-que-incrivel"
                className="px-6 py-4 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:border-sky-500/50"
              >
                <span>Ver Por Que É Tão Incrível</span>
              </a>
            </div>

            {/* Trust and Social Proof Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9/5</span>
                <span>(+2.840 avaliações de atletas)</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-300">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Frete Grátis Brasil</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-300">
                <RotateCcw className="w-4 h-4 text-sky-400" />
                <span>90 Dias de Teste Sem Risco</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Product Display */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Visual Halo / Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 rounded-full blur-3xl opacity-70 -z-10" />

            {/* Main Interactive Product Card */}
            <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Product Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-600/90 text-white uppercase tracking-wider border border-blue-400/30">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                  {selectedEdition.badge || 'Bola de Competição'}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Em Estoque no Brasil
                </span>
              </div>

              {/* Main Volleyball Image Display with Hover/Impact Animation */}
              <div className="relative aspect-square w-full flex items-center justify-center p-4 group">
                <div
                  className={`relative w-full h-full rounded-2xl overflow-hidden transition-all duration-300 ${
                    isImpactSimulated ? 'scale-95 brightness-110' : 'hover:scale-105'
                  }`}
                >
                  <img
                    id="hero-volleyball-img"
                    src={selectedEdition.image}
                    alt={selectedEdition.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-2xl shadow-inner select-none transition-transform duration-500"
                  />

                  {/* Impact visual ring overlay */}
                  {isImpactSimulated && (
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl animate-ping pointer-events-none" />
                  )}
                </div>

                {/* Floating Micro-Features Floating Pills */}
                <div className="absolute -top-1 -right-2 bg-slate-900/95 border border-slate-700 text-slate-200 px-3 py-1.5 rounded-xl text-[11px] font-bold shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                  <span className="text-sky-400">★</span>
                  <span>Micro-Covinhas 360°</span>
                </div>

                <div className="absolute -bottom-2 -left-2 bg-slate-900/95 border border-slate-700 text-slate-200 px-3 py-1.5 rounded-xl text-[11px] font-bold shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                  <span className="text-emerald-400">✓</span>
                  <span>100% Selagem Térmica</span>
                </div>
              </div>

              {/* Colorway / Edition Selector */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Escolha a sua versão:</span>
                  <span className="font-semibold text-sky-300">{selectedEdition.name}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {EDITIONS.map((edition) => {
                    const isSelected = edition.id === selectedEdition.id;
                    return (
                      <button
                        key={edition.id}
                        type="button"
                        onClick={() => setSelectedEdition(edition)}
                        className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-slate-800/90 border-sky-400 shadow-md shadow-sky-400/20'
                            : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <span
                            className="w-3 h-3 rounded-full border border-white/20 shrink-0"
                            style={{ backgroundColor: edition.colorHex }}
                          />
                          <span
                            className="w-3 h-3 rounded-full border border-white/20 shrink-0 -ml-2"
                            style={{ backgroundColor: edition.secondaryHex }}
                          />
                        </div>
                        <div className="text-[11px] font-bold text-slate-200 truncate">
                          {edition.name.replace('Vortex Pro ', '')}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Snippet & Quick Buy */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 line-through">De R$ 349,00</div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-white">R$ 247,00</span>
                    <span className="text-xs text-emerald-400 font-bold">10% OFF no PIX</span>
                  </div>
                  <div className="text-[10px] text-slate-400">ou 6x de R$ 41,16 sem juros</div>
                </div>

                <button
                  onClick={() => onOpenCheckout(selectedEdition.id)}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-lg shadow-blue-500/25 cursor-pointer"
                >
                  <span>Garantir</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
