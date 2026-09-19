import React, { useState, useEffect } from 'react';
import { Flame, ShieldCheck, ShoppingBag, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: (bundleId?: string) => void;
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout, cartCount = 1 }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Por Que É Incrível', href: '#por-que-incrivel' },
    { label: 'Tecnologia', href: '#tecnologia' },
    { label: 'Na Sua Posição', href: '#posicoes' },
    { label: 'Comparativo', href: '#comparativo' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Perguntas', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top promotional notification banner */}
      <div id="top-announcement-bar" className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border-b border-blue-500/20 py-2 px-4 text-slate-200 text-xs sm:text-sm font-medium text-center tracking-wide flex items-center justify-center gap-2 shadow-inner">
        <span className="flex items-center gap-1.5">
          <Flame className="w-4 h-4 text-sky-400" />
          <span className="font-bold text-white uppercase tracking-wider">A Sensação das Quadras:</span>
          <span className="text-slate-300">90 dias de teste sem risco + Frete Grátis Brasil</span>
        </span>
        <span className="hidden md:inline-block bg-blue-600/30 text-sky-300 border border-blue-400/30 text-xs px-2.5 py-0.5 rounded-full font-bold ml-2">
          10% OFF no PIX
        </span>
      </div>

      {/* Main Nav Bar */}
      <nav
        id="main-navigation"
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? 'bg-slate-950/95 backdrop-blur-md border-slate-800 shadow-2xl py-3'
            : 'bg-slate-950/70 backdrop-blur-sm border-slate-900 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-cyan-400/30 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-athletic text-2xl tracking-tighter text-sky-400 font-bold">VX</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-athletic text-2xl sm:text-3xl leading-none text-white tracking-wider flex items-center gap-1">
                VORTEX <span className="text-sky-400">PRO</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                Vôlei de Alta Performance
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-sky-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Garantia 90 Dias</span>
            </div>

            <button
              id="nav-buy-cta"
              onClick={() => onOpenCheckout()}
              className="relative group bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span className="uppercase tracking-wider">Quero Essa Bola</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-900 border border-slate-800"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-sky-400 border-b border-slate-900"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="w-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white font-bold py-3 rounded-xl text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Garantir Minha Vortex Pro Agora</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
