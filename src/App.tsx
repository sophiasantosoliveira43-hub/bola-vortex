import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyItsIncredible } from './components/WhyItsIncredible';
import { HotspotViewer } from './components/HotspotViewer';
import { PlayerRoles } from './components/PlayerRoles';
import { ComparisonTable } from './components/ComparisonTable';
import { ActionGallery } from './components/ActionGallery';
import { Reviews } from './components/Reviews';
import { PricingSection } from './components/PricingSection';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { Sparkles, ShoppingBag } from 'lucide-react';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedBundleId, setSelectedBundleId] = useState<string>('combo');
  const [selectedEditionId, setSelectedEditionId] = useState<string>('olympic-azure');
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling past 600px
      setShowFloatingCta(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenCheckout = (bundleOrEditionId?: string) => {
    if (bundleOrEditionId) {
      if (['single', 'combo', 'team'].includes(bundleOrEditionId)) {
        setSelectedBundleId(bundleOrEditionId);
      } else {
        setSelectedEditionId(bundleOrEditionId);
      }
    }
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white font-sans">
      {/* Top sticky Navbar with announcement banner */}
      <Navbar onOpenCheckout={() => handleOpenCheckout()} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section with Interactive Impact Simulator & Colorway Selector */}
        <Hero onOpenCheckout={handleOpenCheckout} />

        {/* Highlight Section: Why This Ball is Incredible */}
        <WhyItsIncredible />

        {/* Technological Anatomy & Interactive Hotspot Pin Inspector */}
        <HotspotViewer />

        {/* Player Role Benefits (Levantador, Atacante, Líbero, Amador) */}
        <PlayerRoles onOpenCheckout={() => handleOpenCheckout()} />

        {/* Direct Side-by-Side Comparison vs Standard Balls */}
        <ComparisonTable onOpenCheckout={() => handleOpenCheckout()} />

        {/* Action Showcase & Arena Freeze Frame Bento */}
        <ActionGallery />

        {/* Verified Athlete Reviews & Rating Banner */}
        <Reviews />

        {/* Pricing Bundles & Shipping Simulator */}
        <PricingSection onOpenCheckout={(bundleId) => handleOpenCheckout(bundleId)} />

        {/* FAQ Section */}
        <Faq />
      </main>

      {/* Footer */}
      <Footer onOpenCheckout={() => handleOpenCheckout()} />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        initialBundleId={selectedBundleId}
        initialEditionId={selectedEditionId}
      />

      {/* Floating Bottom Quick Buy CTA when scrolled */}
      {showFloatingCta && !isCheckoutOpen && (
        <div className="fixed bottom-5 right-5 z-40 animate-bounce transition-all">
          <button
            onClick={() => handleOpenCheckout()}
            className="bg-[#0B1E3D] hover:bg-[#0F2952] text-white font-black px-5 py-3.5 rounded-2xl shadow-2xl shadow-blue-950/90 flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-wider cursor-pointer active:scale-95 border-2 border-sky-400/70"
            aria-label="A bola que o seu jogo precisa - Comprar"
          >
            <ShoppingBag className="w-4 h-4 text-sky-400" />
            <span>A bola que o seu jogo precisa</span>
          </button>
        </div>
      )}
    </div>
  );
}
