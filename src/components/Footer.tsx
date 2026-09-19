import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Heart, Sparkles, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenCheckout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-400/10 text-sky-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Envio Expresso Grátis</div>
              <div className="text-slate-400 text-xs">Para todas as regiões do Brasil com rastreamento</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">90 Dias de Teste</div>
              <div className="text-slate-400 text-xs">Jogue e comprove ou receba 100% de volta</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Padrão Oficial FIVB</div>
              <div className="text-slate-400 text-xs">65-67cm e 260-280g de pura precisão</div>
            </div>
          </div>
        </div>

        {/* Middle Navigation & Info */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 flex items-center justify-center">
                <span className="font-athletic text-xl text-slate-950 font-black">VX</span>
              </div>
              <span className="font-athletic text-2xl text-white tracking-wider">
                VORTEX <span className="text-sky-400">PRO</span>
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm italic font-medium leading-relaxed max-w-sm border-l-2 border-sky-400/70 pl-3">
              “A habilidade está em você e o conforto do jogo está na bola que só a Vortex Pro proporciona.”
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Desenvolvida com a missão de transformar cada treino e jogo em uma experiência épica: sem dores no antebraço, com voo estável e controle milimétrico. Essa bola é incrível.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenCheckout}
                className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-blue-500/25"
              >
                Garantir a Minha Agora
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider">Navegação</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#por-que-incrivel" className="hover:text-sky-400 transition-colors">Por Que É Incrível</a></li>
              <li><a href="#tecnologia" className="hover:text-sky-400 transition-colors">Tecnologia & Hotspots</a></li>
              <li><a href="#posicoes" className="hover:text-sky-400 transition-colors">Para Sua Posição</a></li>
              <li><a href="#comparativo" className="hover:text-sky-400 transition-colors">Comparativo com Bolas Comuns</a></li>
              <li><a href="#depoimentos" className="hover:text-sky-400 transition-colors">Depoimentos Verificados</a></li>
              <li><a href="#precos" className="hover:text-sky-400 transition-colors">Tabela de Preços</a></li>
            </ul>
          </div>

          {/* Safe Purchase & Info */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider">Compra 100% Protegida</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Todos os pagamentos são processados com certificado SSL de 256 bits via banco central (PIX instantâneo) e operadoras de cartão com autenticação em 2 etapas.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-[10px] text-slate-300">PIX com 10% OFF</span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-[10px] text-slate-300">Visa / Mastercard / Elo</span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-[10px] text-slate-300">Até 10x Sem Juros</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Vortex Pro Brasil. Todos os direitos reservados.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors cursor-pointer text-xs"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
