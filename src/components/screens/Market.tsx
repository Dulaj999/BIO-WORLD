import React from 'react';
import { motion } from 'motion/react';
import { 
  Sun, 
  Car, 
  Flame, 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  MapPin, 
  ChevronRight,
  Zap
} from 'lucide-react';
import { Screen } from '../../types';

interface MarketProps {
  onSelectProduct: (screen: Screen) => void;
}

export const Market: React.FC<MarketProps> = ({ onSelectProduct }) => {
  return (
    <div className="p-6 space-y-8 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-headline font-black tracking-tighter text-primary">MARKET</h2>
          <p className="text-on-surface-variant text-sm font-medium">Sustainable Energy Solutions</p>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 bg-surface-container-high rounded-xl flex items-center justify-center shadow-sm">
            <Search className="text-on-surface-variant w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-surface-container-high rounded-xl flex items-center justify-center shadow-sm">
            <Filter className="text-on-surface-variant w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {[
          { id: 'solar', label: 'Solar Hub', icon: Sun, color: 'bg-secondary-container', text: 'text-primary' },
          { id: 'ev', label: 'Electric Vehicles', icon: Car, color: 'bg-primary-fixed', text: 'text-primary' },
          { id: 'biogas', label: 'Bio-Gas', icon: Flame, color: 'bg-tertiary-fixed', text: 'text-primary' },
          { id: 'wind', label: 'Wind Power', icon: Zap, color: 'bg-surface-container-high', text: 'text-on-surface-variant' }
        ].map((cat, i) => (
          <motion.button
            key={cat.id}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl ${cat.color} ${cat.text} shadow-sm font-headline font-bold transition-all`}
          >
            <cat.icon className="w-6 h-6" />
            {cat.label}
          </motion.button>
        ))}
      </div>

      {/* Featured Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-headline font-black text-primary">Featured Solutions</h3>
          <button className="text-primary font-bold text-sm flex items-center gap-1">
            Explore All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Solar Hub Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            onClick={() => onSelectProduct('SOLAR_DETAIL')}
            className="glass-panel rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/solar/600/400" 
                alt="Solar Hub" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-secondary-container text-primary px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                Best Seller
              </div>
              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-xl flex items-center gap-1">
                <Star className="text-secondary-container fill-secondary-container w-4 h-4" />
                <span className="text-primary font-black text-xs">4.9</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-headline font-black text-primary">Solar Hub Pro v2</h4>
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs font-medium">EcoTech Industries • Colombo</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-primary font-black text-2xl">$2,499</p>
                  <p className="text-on-surface-variant text-[10px] font-bold uppercase">Starting from</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="flex-1 bg-primary-fixed/30 py-2 rounded-xl flex items-center justify-center gap-2">
                  <Zap className="text-primary w-4 h-4" />
                  <span className="text-primary text-xs font-bold">12.5 kW Yield</span>
                </div>
                <div className="flex-1 bg-secondary-fixed/30 py-2 rounded-xl flex items-center justify-center gap-2">
                  <Star className="text-secondary w-4 h-4" />
                  <span className="text-secondary text-xs font-bold">Premium Build</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* EV Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            onClick={() => onSelectProduct('EV_PERFORMANCE')}
            className="glass-panel rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/ev/600/400" 
                alt="Electric Vehicle" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-primary-fixed text-primary px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                New Arrival
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-headline font-black text-primary">EcoPulse Model S</h4>
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <Car className="w-3 h-3" />
                    <span className="text-xs font-medium">GreenGrid Mobility • Kandy</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-primary font-black text-2xl">$34,500</p>
                  <p className="text-on-surface-variant text-[10px] font-bold uppercase">Starting from</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="flex-1 bg-primary-fixed/30 py-2 rounded-xl flex items-center justify-center gap-2">
                  <Zap className="text-primary w-4 h-4" />
                  <span className="text-primary text-xs font-bold">450km Range</span>
                </div>
                <div className="flex-1 bg-secondary-fixed/30 py-2 rounded-xl flex items-center justify-center gap-2">
                  <ArrowRight className="text-secondary w-4 h-4" />
                  <span className="text-secondary text-xs font-bold">Fast Charging</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
