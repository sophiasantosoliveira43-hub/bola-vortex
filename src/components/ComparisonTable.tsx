import React from 'react';
import { COMPARISONS } from '../data/volleyballData';
import { CheckCircle2, XCircle, Trophy, Sparkles, ArrowRight } from 'lucide-react';

interface ComparisonTableProps {
  onOpenCheckout: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenCheckout }) => {
  return (
    <section id="comparativo" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-4 h-4" />
            <span>Frente a Frente</span>
          </div>

          <h2 className="font-athletic text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight">
            Vortex Pro vs. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
              Bolas Comuns de Mercado
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Veja em detalhes o que faz da Vortex Pro a melhor escolha para treinos, torneios e rachas de alto nível.
          </p>
        </div>

        {/* Table Container */}
        <div className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Table Headers */}
          <div className="grid grid-cols-12 bg-slate-900 border-b border-slate-800 p-4 sm:p-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="col-span-5 sm:col-span-4 text-slate-400">
              Característica
            </div>
            <div className="col-span-7 sm:col-span-5 text-sky-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Vortex Pro Oficial</span>
            </div>
            <div className="hidden sm:block sm:col-span-3 text-slate-400">
              Bolas Tradicionais
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-800/80">
            {COMPARISONS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-800/30 transition-colors text-xs sm:text-sm"
              >
                <div className="col-span-5 sm:col-span-4 font-semibold text-slate-200 pr-2">
                  {row.feature}
                </div>
                
                <div className="col-span-7 sm:col-span-5 flex items-start gap-2 text-slate-100 font-medium pr-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-white">{row.vortexPro}</span>
                </div>

                <div className="hidden sm:flex sm:col-span-3 items-start gap-2 text-slate-400">
                  <XCircle className="w-4 h-4 text-red-400/80 shrink-0 mt-0.5" />
                  <span className="line-through decoration-slate-600 text-slate-400 text-xs">{row.standardBall}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom callout in table */}
          <div className="p-6 bg-gradient-to-r from-blue-500/10 via-slate-900 to-cyan-500/10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-bold text-white text-sm sm:text-base">
                Pronto para sentir a diferença no primeiro toque?
              </div>
              <div className="text-xs text-slate-400">
                Aproveite o frete expresso gratuito para todo o Brasil.
              </div>
            </div>

            <button
              onClick={onOpenCheckout}
              className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-lg shadow-blue-500/25"
            >
              <span>Garantir Minha Vortex Pro</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
