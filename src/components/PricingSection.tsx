import React, { useState } from 'react';
import { BUNDLES } from '../data/volleyballData';
import { Check, Sparkles, ShieldCheck, Truck, ArrowRight, Zap, Gift, RotateCcw } from 'lucide-react';

interface PricingSectionProps {
  onOpenCheckout: (bundleId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckout }) => {
  const [shippingCep, setShippingCep] = useState('');
  const [shippingResult, setShippingResult] = useState<string | null>(null);
  const [isCalculatingShipping, setIsCalculatingShipping] = useState(false);

  const handleCalculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingCep || shippingCep.length < 8) return;

    setIsCalculatingShipping(true);
    setTimeout(() => {
      setIsCalculatingShipping(false);
      setShippingResult('🎉 Parabéns! Frete Expresso GRÁTIS disponível para o seu CEP (Entrega estimada em 2 a 5 dias úteis com rastreamento)');
    }, 600);
  };

  return (
    <section id="precos" className="py-20 bg-gradient-to-b from-slate-900/60 to-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider">
            <Gift className="w-4 h-4" />
            <span>Condição Especial de Lançamento</span>
          </div>

          <h2 className="font-athletic text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight">
            Escolha o Seu Pacote da <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
              Bola Mais Incrível do Brasil
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Todas as versões contam com nossa garantia incondicional de 90 dias e envio imediato com frete grátis.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14 items-stretch">
          {BUNDLES.map((bundle) => {
            const isPopular = bundle.popular;
            return (
              <div
                key={bundle.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-2 border-sky-400 shadow-2xl shadow-sky-500/15 scale-100 lg:-translate-y-2'
                    : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                    <span>{bundle.tag}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{bundle.title}</h3>
                    {!isPopular && (
                      <span className="text-xs text-slate-400 font-semibold uppercase">{bundle.tag}</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mb-6">{bundle.subtitle}</p>

                  {/* Price Block */}
                  <div className="mb-6 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-xs text-slate-400 line-through">
                      De R$ {bundle.priceOriginal.toFixed(2).replace('.', ',')}
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">
                        R$ {bundle.priceCurrent.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <div className="text-xs text-emerald-400 font-bold mt-1">
                      {bundle.pixDiscount}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      ou {bundle.installments}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      O que está incluso:
                    </span>
                    {bundle.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <button
                  type="button"
                  onClick={() => onOpenCheckout(bundle.id)}
                  className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                    isPopular
                      ? 'bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-blue-500/25 scale-[1.02]'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>Garantir Este Pacote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Free Shipping Simulator Bar */}
        <div className="max-w-2xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-6 mb-12">
          <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
            <Truck className="w-4 h-4 text-sky-400" />
            <span>Consulte o Frete Expresso e Prazo para Sua Cidade:</span>
          </div>
          <form onSubmit={handleCalculateShipping} className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Digite seu CEP (ex: 01310-100)"
              value={shippingCep}
              onChange={(e) => setShippingCep(e.target.value)}
              maxLength={9}
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
            />
            <button
              type="submit"
              disabled={isCalculatingShipping}
              className="bg-slate-800 hover:bg-slate-700 text-sky-400 font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer disabled:opacity-50"
            >
              {isCalculatingShipping ? 'Calculando...' : 'Consultar Frete'}
            </button>
          </form>

          {shippingResult && (
            <div className="mt-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-xs font-medium animate-fadeIn">
              {shippingResult}
            </div>
          )}
        </div>

        {/* 90-Day Guarantee Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-950/40 via-slate-900 to-cyan-950/40 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-sky-400/10 text-sky-400 flex items-center justify-center shrink-0 border border-sky-400/20">
            <RotateCcw className="w-8 h-8" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <span>Garantia de Satisfação: Teste por 90 Dias</span>
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Jogue em seus treinos, campeonatos e finais de semana. Se você ou seus colegas não considerarem a Vortex Pro a bola mais incrível que já usaram, basta entrar em contato conosco que devolvemos 100% do seu pagamento. Risco zero para você.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
