import React, { useState } from 'react';
import { PLAYER_ROLES } from '../data/volleyballData';
import { PlayerRoleInfo } from '../types';
import { Users, Quote, Check, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';

interface PlayerRolesProps {
  onOpenCheckout: () => void;
}

export const PlayerRoles: React.FC<PlayerRolesProps> = ({ onOpenCheckout }) => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>(PLAYER_ROLES[0].id);

  const currentRole = PLAYER_ROLES.find((r) => r.id === selectedRoleId) || PLAYER_ROLES[0];

  return (
    <section id="posicoes" className="py-20 bg-slate-900/40 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>Feita Para Quem Entende de Vôlei</span>
          </div>

          <h2 className="font-athletic text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight">
            Como Ela É Incrível na <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
              Sua Posição em Quadra
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Seja distribuindo o jogo com a ponta dos dedos, cravando na linha dos 3 metros ou defendendo saques canhão, a Vortex Pro eleva o seu rendimento.
          </p>
        </div>

        {/* Role Selectors Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {PLAYER_ROLES.map((role) => {
            const isSelected = role.id === selectedRoleId;
            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setSelectedRoleId(role.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{role.role}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Card */}
        <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="md:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono">
                  {currentRole.namePt}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {currentRole.tagline}
                </h3>
              </div>

              {/* Quote from athlete */}
              <div className="relative pl-6 border-l-2 border-sky-400/80 italic text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/40 p-4 rounded-r-2xl">
                <Quote className="w-5 h-5 text-sky-400/60 mb-1" />
                {currentRole.quote}
              </div>

              {/* 3 Core Benefits */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Vantagens Diretas na Partida:
                </span>
                {currentRole.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Metric Box & Direct Action */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/60 border border-slate-800 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-sky-400/10 text-sky-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-athletic text-sky-400 leading-none">
                  {currentRole.statHighlight.value}
                </div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
                  {currentRole.statHighlight.label}
                </div>
              </div>

              <div className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-3 w-full">
                Testado por atletas em mais de 100 partidas oficiais
              </div>

              <button
                onClick={onOpenCheckout}
                className="w-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/25"
              >
                <span>Experimentar No Próximo Jogo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
