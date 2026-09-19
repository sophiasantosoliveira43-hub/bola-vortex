import React from 'react';
import { REVIEWS } from '../data/volleyballData';
import { Star, CheckCircle2, ThumbsUp, MessageSquareQuote, ShieldCheck } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Avaliações Verificadas</span>
          </div>

          <h2 className="font-athletic text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight">
            A Opinião de Quem Já <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
              Colocou a Bola em Jogo
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Mais de 2.800 levantadores, ponteiros, líberos e entusiastas em todo o Brasil já trocaram suas bolas antigas pela Vortex Pro.
          </p>
        </div>

        {/* Global Rating Score Bar */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 rounded-2xl p-6 mb-12 shadow-xl flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-black text-white flex items-center gap-2">
              <span>4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
            </div>
            <span className="text-xs text-slate-400 mt-1">Nota Média de Satisfação</span>
          </div>

          <div className="hidden sm:block w-px h-12 bg-slate-800" />

          <div className="flex flex-col items-center">
            <span className="text-3xl font-athletic text-sky-400 leading-none">99.4%</span>
            <span className="text-xs text-slate-400 mt-1">Recomendam Para Outros Jogadores</span>
          </div>

          <div className="hidden sm:block w-px h-12 bg-slate-800" />

          <div className="flex flex-col items-center">
            <span className="text-3xl font-athletic text-emerald-400 leading-none">0 Queixas</span>
            <span className="text-xs text-slate-400 mt-1">De Dor ou Ardência no Antebraço</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900/50 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
            >
              <div className="space-y-4">
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      Comprador Verificado
                    </span>
                  )}
                </div>

                {/* Highlight */}
                <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                  "{review.highlight}"
                </h4>

                {/* Comment */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{review.author}</div>
                  <div className="text-xs text-slate-400">{review.role} • {review.teamOrCity}</div>
                </div>
                <div className="text-[11px] text-slate-400">{review.date}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
