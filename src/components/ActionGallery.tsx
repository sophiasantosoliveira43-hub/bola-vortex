import React from 'react';
import { ACTION_IMAGE, HERO_IMAGE, DETAIL_IMAGE } from '../data/volleyballData';
import { Flame, Play, Eye, Sparkles, Activity, ShieldCheck } from 'lucide-react';

export const ActionGallery: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
              <Flame className="w-3.5 h-3.5" />
              <span>Em Ação na Quadra</span>
            </div>
            <h2 className="font-athletic text-4xl sm:text-5xl text-white tracking-wide uppercase leading-none">
              Nascida Para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Ponto Mais Difícil</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Desenvolvida sob o ritmo alucinante do vôlei moderno: levantamentos velozes, cortadas explosivas na diagonal e defesas acrobáticas.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-300">
            <div className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>720 RPM Rotação Suave</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Zero Deformação</span>
            </div>
          </div>
        </div>

        {/* Action Showcase Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Action Freeze Frame */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden group border border-slate-800 shadow-2xl bg-slate-950">
            <div className="aspect-16/10 sm:aspect-16/9 w-full relative overflow-hidden">
              <img
                src={ACTION_IMAGE}
                alt="Ataque de vôlei com bola Vortex Pro"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest font-mono">
                  Impacto Congelado a 1/8000s
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  Aderência Cirúrgica no Momento do Golpe
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                  A superfície de microfibra decola com efeito giratório estável e sensação plena de controle.
                </p>
              </div>

              <div className="bg-slate-950/80 backdrop-blur-md border border-slate-700/80 px-4 py-2 rounded-xl text-center shrink-0">
                <span className="text-lg font-black text-sky-400">112 km/h</span>
                <div className="text-[10px] text-slate-400 uppercase">Velocidade no Saque</div>
              </div>
            </div>
          </div>

          {/* Side Stacked Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Top Side: Close Detail */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 flex-1 group shadow-xl">
              <div className="aspect-16/10 sm:aspect-4/3 w-full relative overflow-hidden">
                <img
                  src={DETAIL_IMAGE}
                  alt="Micro-covinhas da bola Vortex Pro"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>
              <div className="p-4 bg-slate-950">
                <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">Superfície Dimpled</div>
                <div className="text-sm font-semibold text-white mt-0.5">Micro-textura que reduz o arrasto do ar em 34%</div>
              </div>
            </div>

            {/* Bottom Side: Arena Lighting Highlight */}
            <div className="p-5 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-sky-400 font-bold uppercase tracking-wider mb-1">
                  <Eye className="w-4 h-4" />
                  <span>Padrão Eye-Tracking</span>
                </div>
                <h4 className="text-base font-bold text-white">Visualização Instantânea de Rotação</h4>
                <p className="text-xs text-slate-400 mt-1">
                  O desenho curvo em Azul Marinho e Ciano permite aos jogadores ler o efeito de giro antes mesmo do bloqueio se armar.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-sky-400">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Testada sob iluminação de ginásio olímpico</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
