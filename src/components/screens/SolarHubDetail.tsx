import React from 'react';
import { motion } from 'motion/react';
import { 
  Sun, 
  Zap, 
  ShieldCheck, 
  ArrowLeft, 
  Star, 
  ChevronRight, 
  ShoppingCart, 
  Share2, 
  Heart,
  CheckCircle2,
  Info
} from 'lucide-react';
import { Screen } from '../../types';

interface SolarHubDetailProps {
  onBack: (screen: Screen) => void;
}

export const SolarHubDetail: React.FC<SolarHubDetailProps> = ({ onBack }) => {
  return (
    <div className="h-full bg-background overflow-y-auto pb-24">
      {/* Hero Image Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://picsum.photos/seed/solar-detail/800/1200" 
          alt="Solar Hub Pro" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
        
        {/* Header Controls */}
        <div className="absolute top-6 left-0 w-full px-6 flex items-center justify-between">
          <button 
            onClick={() => onBack('MARKET')}
            className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg hover:bg-white transition-all"
          >
            <ArrowLeft className="text-primary w-6 h-6" />
          </button>
          <div className="flex gap-3">
            <button className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg hover:bg-white transition-all">
              <Share2 className="text-primary w-6 h-6" />
            </button>
            <button className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg hover:bg-white transition-all">
              <Heart className="text-primary w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Floating Badge */}
        <div className="absolute bottom-6 left-6 bg-secondary-container text-primary px-4 py-2 rounded-2xl font-headline font-black text-sm shadow-xl flex items-center gap-2">
          <Star className="w-4 h-4 fill-primary" />
          4.9 (124 Reviews)
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 -mt-12 relative z-10 space-y-8">
        <div className="glass-panel p-8 rounded-[40px] shadow-2xl space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl font-headline font-black tracking-tighter text-primary">Solar Hub Pro v2</h2>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <Sun className="text-secondary w-4 h-4" />
                <span className="text-sm font-medium">EcoTech Industries • Premium Series</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-primary font-black text-3xl">$2,499</p>
              <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">Full Package</p>
            </div>
          </div>

          <p className="text-on-surface-variant leading-relaxed font-medium">
            The Solar Hub Pro v2 is our most advanced energy harvesting system yet. Featuring high-precision bio-integrated cells that adapt to sunlight patterns in real-time.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Yield', value: '12.5 kW', icon: Zap, color: 'bg-primary-fixed' },
              { label: 'Efficiency', value: '24.8%', icon: Sun, color: 'bg-secondary-fixed' },
              { label: 'Warranty', value: '10 Years', icon: ShieldCheck, color: 'bg-tertiary-fixed' }
            ].map((spec, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center">
                <div className={`w-12 h-12 ${spec.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                  <spec.icon className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-primary font-headline font-black text-sm">{spec.value}</p>
                  <p className="text-on-surface-variant text-[10px] font-bold uppercase">{spec.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-4">
          <h3 className="text-xl font-headline font-black text-primary">Key Features</h3>
          <div className="space-y-3">
            {[
              'Real-time bio-tracking sensors',
              'Integrated smart-grid connection',
              'Weather-resistant graphene coating',
              'Modular expansion support'
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 glass-panel p-4 rounded-2xl shadow-sm">
                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                <span className="text-on-surface-variant font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialist Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-headline font-black text-primary">Certified Specialist</h3>
          <div className="glass-panel p-4 rounded-3xl flex items-center justify-between shadow-sm border-l-4 border-secondary-container">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/specialist/100/100" 
                  alt="Specialist" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="font-headline font-bold text-primary">EcoTech Solar Team</p>
                <p className="text-on-surface-variant text-xs font-medium">Certified Partner • 124 Projects</p>
              </div>
            </div>
            <button className="w-10 h-10 bg-surface-container-high rounded-xl flex items-center justify-center">
              <ChevronRight className="text-primary w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Action Button */}
        <div className="fixed bottom-0 left-0 w-full p-6 glass-panel border-t border-outline-variant z-20">
          <button className="w-full bg-primary text-white py-5 rounded-3xl font-headline font-black text-lg flex items-center justify-center gap-3 shadow-2xl hover:bg-primary-container transition-all">
            <ShoppingCart className="w-6 h-6 text-primary-fixed" />
            Pre-Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
