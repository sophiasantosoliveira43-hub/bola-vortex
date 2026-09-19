import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, CreditCard, QrCode, Truck, ArrowRight, Lock, Copy, Check } from 'lucide-react';
import { BUNDLES, EDITIONS } from '../data/volleyballData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBundleId?: string;
  initialEditionId?: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  initialBundleId = 'combo',
  initialEditionId = 'olympic-azure',
}) => {
  const [selectedBundleId, setSelectedBundleId] = useState<string>(initialBundleId);
  const [selectedEditionId, setSelectedEditionId] = useState<string>(initialEditionId);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao'>('pix');
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [copiedPix, setCopiedPix] = useState(false);

  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');

  if (!isOpen) return null;

  const currentBundle = BUNDLES.find((b) => b.id === selectedBundleId) || BUNDLES[1];
  const currentEdition = EDITIONS.find((e) => e.id === selectedEditionId) || EDITIONS[0];

  const basePrice = currentBundle.priceCurrent;
  const couponDiscount = couponApplied ? basePrice * 0.1 : 0;
  const priceAfterCoupon = basePrice - couponDiscount;
  const pixDiscount = paymentMethod === 'pix' ? priceAfterCoupon * 0.1 : 0;
  const finalPrice = priceAfterCoupon - pixDiscount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'INCRIVEL10' || couponCode.trim().toUpperCase() === 'VOLEI10') {
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Cupom inválido. Experimente: INCRIVEL10');
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const copyPixCode = () => {
    navigator.clipboard?.writeText('00020126580014br.gov.bcb.pix0136vortex-pro-chave-ficticia-9988225204000053039865405247.005802BR5916VORTEX PRO OFICIAL6009SAO PAULO62070503***6304E8A2');
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-sky-400 border border-blue-500/30 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Checkout Rápido & Seguro</span>
              </span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                Garantir Sua Bola Vortex Pro
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                90 dias de teste sem risco + Frete Grátis com rastreamento em tempo real.
              </p>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-6">
              
              {/* Package Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Selecione o Pacote Desejado:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {BUNDLES.map((bundle) => {
                    const isSelected = bundle.id === selectedBundleId;
                    return (
                      <button
                        key={bundle.id}
                        type="button"
                        onClick={() => setSelectedBundleId(bundle.id)}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-500/15 border-sky-400 text-white shadow-md shadow-sky-500/10'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="text-xs font-bold">{bundle.title}</div>
                        <div className="text-sm font-black text-sky-400 mt-1">
                          R$ {bundle.priceCurrent}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{bundle.subtitle}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Edition / Color Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  2. Escolha o Modelo / Cor:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {EDITIONS.map((ed) => {
                    const isSelected = ed.id === selectedEditionId;
                    return (
                      <button
                        key={ed.id}
                        type="button"
                        onClick={() => setSelectedEditionId(ed.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600/20 border-blue-400 text-white'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <span
                            className="w-3 h-3 rounded-full border border-white/30"
                            style={{ backgroundColor: ed.colorHex }}
                          />
                          <span
                            className="w-3 h-3 rounded-full border border-white/30 -ml-2"
                            style={{ backgroundColor: ed.secondaryHex }}
                          />
                        </div>
                        <div className="text-xs font-bold truncate">{ed.name.replace('Vortex Pro ', '')}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Delivery Data */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  3. Dados para Envio (Frete Grátis):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Seu Nome Completo"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-sky-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Seu E-mail para rastreio"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-sky-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp para avisos"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-sky-400"
                  />
                  <input
                    type="text"
                    required
                    placeholder="CEP de entrega"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-sky-400"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Endereço, Número e Bairro"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="sm:col-span-2 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-sky-400"
                  />
                </div>
              </div>

              {/* Payment Method Switcher */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  4. Forma de Pagamento:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-2xl border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      paymentMethod === 'pix'
                        ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300 shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold">PIX (10% de Desconto Extra)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cartao')}
                    className={`p-3 rounded-2xl border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      paymentMethod === 'cartao'
                        ? 'bg-blue-500/15 border-sky-400 text-sky-300 shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-bold">Cartão de Crédito (até 10x)</span>
                  </button>
                </div>
              </div>

              {/* Coupon Bar */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Cupom (dica: INCRIVEL10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white uppercase focus:outline-none focus:border-sky-400"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Aplicar
                </button>
              </div>
              {couponApplied && (
                <div className="text-xs text-emerald-400 font-semibold">
                  ✓ Cupom de 10% aplicado com sucesso!
                </div>
              )}
              {couponError && (
                <div className="text-xs text-red-400 font-semibold">
                  {couponError}
                </div>
              )}

              {/* Summary Bar */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal ({currentBundle.title}):</span>
                  <span>R$ {basePrice.toFixed(2).replace('.', ',')}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Desconto Cupom:</span>
                    <span>- R$ {couponDiscount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                {paymentMethod === 'pix' && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Desconto PIX (10%):</span>
                    <span>- R$ {pixDiscount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-400">
                  <span>Frete Expresso Brasil:</span>
                  <span className="text-emerald-400 font-bold uppercase">Grátis</span>
                </div>
                <div className="border-t border-slate-800 pt-2 flex justify-between text-sm font-bold text-white">
                  <span>Total Final:</span>
                  <span className="text-sky-400 font-black text-lg">
                    R$ {finalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black py-4 rounded-2xl text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 transition-all cursor-pointer active:scale-98"
              >
                <Lock className="w-4 h-4" />
                <span>Finalizar Pedido Seguro</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Ambiente Criptografado 256-bit
                </span>
                <span>•</span>
                <span>Garantia 90 Dias</span>
              </div>

            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
                Pedido Confirmado com Sucesso!
              </h3>
              <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                Parabéns, {fullName || 'Atleta'}! Sua bola <strong className="text-sky-400">{currentEdition.name}</strong> está sendo preparada pelo nosso centro de distribuição.
              </p>
            </div>

            {paymentMethod === 'pix' ? (
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-left max-w-md mx-auto space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Pagamento via PIX Copia e Cola
                  </span>
                  <span className="text-xs text-slate-400">Expira em 30 min</span>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-300 break-all select-all">
                  00020126580014br.gov.bcb.pix0136vortex-pro-chave-ficticia-9988225204000053039865405247.005802BR5916VORTEX PRO OFICIAL6009SAO PAULO62070503***6304E8A2
                </div>

                <button
                  type="button"
                  onClick={copyPixCode}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copiedPix ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPix ? 'Chave PIX Copiada!' : 'Copiar Código PIX'}</span>
                </button>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 max-w-md mx-auto">
                Pagamento aprovado na operadora de cartão. O comprovante foi enviado para <strong className="text-white">{email || 'seu e-mail'}</strong>.
              </div>
            )}

            <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 text-xs text-slate-400 max-w-md mx-auto flex items-center gap-3">
              <Truck className="w-5 h-5 text-sky-400 shrink-0" />
              <div className="text-left">
                <div className="font-bold text-white">Código de Rastreamento Gerado:</div>
                <div className="font-mono text-sky-400 font-bold">BR994821045VX</div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-3 rounded-xl text-xs uppercase tracking-wider cursor-pointer"
            >
              Voltar à Página Inicial
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
