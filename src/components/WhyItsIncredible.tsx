import React, { useState } from 'react';
import { Sparkles, Zap, Shield, Target, Award, Check, AlertCircle, Wind, Layers, HeartHandshake } from 'lucide-react';

export const WhyItsIncredible: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'voo' | 'toque' | 'durabilidade'>('toque');

  return (
    <section id="por-que-incrivel" className="py-20 bg-slate-900/60 border-y border-slate-800/80 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>O Diferencial Que Muda o Jogo</span>
          </div>

          <h2 className="font-athletic text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight">
            Por Que Todo Jogador Diz: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
              "Essa Bola É Incrível"?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Não é apenas mais uma bola esportiva. É uma obra-prima de engenharia têxtil e aerodinâmica projetada para que cada manchete, levantamento e cortada pareçam naturais, prazerosos e precisos.
          </p>
        </div>

        {/* 5 Big Pillar Cards with Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="bg-slate-950/80 border border-slate-800 hover:border-sky-400/40 p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/40">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider font-mono">01. Conforto Total</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">
              Toque Aveludado Zero-Dor
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Diga adeus ao antebraço ardendo e cheio de manchas roxas. A camada intermediária de espuma inteligente dissipa a onda de choque no impacto da manchete sem perder a impulsão de volta para a quadra.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Indicada para amadores até profissionais</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-950/80 border border-slate-800 hover:border-blue-400/40 p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/40">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Wind className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider font-mono">02. Trajetória Laser</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">
              Aerodinâmica Dimple 360°
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Centenas de micro-covinhas inspiradas nas bolas de golfe estabilizam a camada limite do ar. O saque viaja sem curvas falsas causadas pelo vento e o saque flutuante quebra com nitidez letal.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Onde você mira, ela cai com precisão</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-950/80 border border-slate-800 hover:border-cyan-400/40 p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/40">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">03. Poder de Fogo</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">
              Estalo Explosivo no Ataque
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              O ressalto do poliuretano japonês entrega um estalo sonoro vibrante que ecoa no ginásio e transfere 100% da força do seu braço direto para a descida veloz no fundo da quadra adversária.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Sensação inigualável na palma da mão</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-950/80 border border-slate-800 hover:border-emerald-400/40 p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/40">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">04. Sem Costuras</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">
              Fusão Térmica Estanque
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nenhuma linha exposta que possa descosturar com o atrito do chão de cimento ou madeira. Zero absorção de umidade ou suor — a bola mantém o peso oficial de 260g do início ao fim da partida.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Perfeita para quadra, praia ou grama</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-slate-950/80 border border-slate-800 hover:border-purple-400/40 p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/40">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider font-mono">05. Grip Antiderrapante</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">
              Leitura e Controle Absoluto
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Mesmo no 5º set com os atletas suados, a textura microaderente permite ao levantador distribuir a bola com dedos firmes e ao atacante aplicar spin com precisão cirúrgica.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Zero deslizamento involuntário</span>
            </div>
          </div>

          {/* Card 6 (Testimonial Spotlight) */}
          <div className="bg-gradient-to-br from-blue-950/70 via-slate-900 to-cyan-950/50 border border-blue-500/40 p-6 rounded-2xl flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-1.5 text-sky-400 mb-3">
                <Sparkles className="w-5 h-5 text-cyan-300" />
                <span className="text-xs font-black uppercase tracking-wider">A Promessa Vortex Pro</span>
              </div>
              <p className="text-white text-base italic font-medium leading-snug">
                “A habilidade está em você e o conforto do jogo está na bola que só a Vortex Pro proporciona.”
              </p>
              <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                Quem joga uma partida com ela se recusa a voltar para as bolas duras convencionais. O jogo fica mais rápido, seguro e muito mais prazeroso.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-sky-300">Garantia 100% Incondicional</div>
                <div className="text-[11px] text-slate-400">90 dias para testar ou seu dinheiro de volta</div>
              </div>
              <Award className="w-8 h-8 text-sky-400" />
            </div>
          </div>

        </div>

        {/* Interactive Comparison Simulator / Deep Dive */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                Simulador Comparativo
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                A Diferença na Prática: Vortex Pro vs. Bola Comum
              </h3>
            </div>

            {/* Switch Tabs */}
            <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab('toque')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'toque'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Na Manchete
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('voo')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'voo'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                No Saque & Voo
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('durabilidade')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'durabilidade'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Durabilidade
              </button>
            </div>
          </div>

          {/* Interactive Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Common Ball */}
            <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-6 relative">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase tracking-wider mb-4">
                <AlertCircle className="w-4 h-4" />
                <span>Bola Comum de Mercado</span>
              </div>
              
              {activeTab === 'toque' && (
                <div className="space-y-3 text-sm text-slate-300">
                  <p className="text-red-200/90 font-medium">❌ Pele plástica rígida sem amortecimento real:</p>
                  <ul className="space-y-2 text-slate-400 text-xs">
                    <li>• Causa ardência imediata no antebraço ao receber saques fortes.</li>
                    <li>• Provoca hematomas e desestimula iniciantes de continuarem jogando.</li>
                    <li>• Toque seco que escapa no levantamento se a mão estiver suada.</li>
                  </ul>
                </div>
              )}

              {activeTab === 'voo' && (
                <div className="space-y-3 text-sm text-slate-300">
                  <p className="text-red-200/90 font-medium">❌ Superfície lisa ou costura desregular:</p>
                  <ul className="space-y-2 text-slate-400 text-xs">
                    <li>• Cria turbulência de ar irregular, desviando a trajetória sem querer.</li>
                    <li>• Perde rotação limpa no saque viagem, dificultando mira nos cantos da quadra.</li>
                    <li>• Variação de peso se houver umidade retida nas costuras.</li>
                  </ul>
                </div>
              )}

              {activeTab === 'durabilidade' && (
                <div className="space-y-3 text-sm text-slate-300">
                  <p className="text-red-200/90 font-medium">❌ Costuras vulneráveis e câmara de borracha simples:</p>
                  <ul className="space-y-2 text-slate-400 text-xs">
                    <li>• Linhas arrebentam e gomos descolam com o impacto repetido.</li>
                    <li>• Murcha a cada 3 dias, exigindo bomba constante na mochila.</li>
                    <li>• Fica ovalada e torta após poucos meses de racha semanal.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Vortex Pro Ball */}
            <div className="bg-blue-950/20 border border-sky-500/40 rounded-2xl p-6 relative shadow-lg shadow-sky-950/20">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4 text-cyan-300" />
                <span className="text-sky-300">Vortex Pro Oficial</span>
              </div>

              {activeTab === 'toque' && (
                <div className="space-y-3 text-sm text-slate-200">
                  <p className="text-emerald-300 font-semibold">✨ Camada Pro-Soft & Microfibra Japonesa Aveludada:</p>
                  <ul className="space-y-2 text-slate-300 text-xs">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Absorve até 88% do choque térmico/mecânico na manchete.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Você joga 3 horas seguidas sem dor nos braços.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Levantamentos com ponta dos dedos suaves e milimetricamente ajustados.</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'voo' && (
                <div className="space-y-3 text-sm text-slate-200">
                  <p className="text-emerald-300 font-semibold">✨ Engenharia Aerodinâmica Dimple 360°:</p>
                  <ul className="space-y-2 text-slate-300 text-xs">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Camada de ar uniforme que impede desvios indesejados no trajeto.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Saque flutuante desce de surpresa nos últimos metros com precisão letal.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Padrão em espiral de alto contraste que facilita a leitura rápida do giro.</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'durabilidade' && (
                <div className="space-y-3 text-sm text-slate-200">
                  <p className="text-emerald-300 font-semibold">✨ Fusão Térmica + Câmara Butil de Alta Densidade:</p>
                  <ul className="space-y-2 text-slate-300 text-xs">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>18 painéis selados a laser sem costuras vulneráveis a rasgos.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Retenção de pressão por até 90 dias sem necessidade de recalibrar.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Estrutura indeformável que suporta mais de 50.000 ataques de alta intensidade.</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
