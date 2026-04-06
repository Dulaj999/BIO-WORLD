import React from 'react';
import { motion } from 'motion/react';
import { 
  Car, 
  Zap, 
  ShieldCheck, 
  ArrowLeft, 
  Star, 
  ChevronRight, 
  ShoppingCart, 
  Share2, 
  Heart,
  CheckCircle2,
  Activity,
  Gauge,
  Battery,
  Wind
} from 'lucide-react';
import { Screen } from '../../types';

interface EVPerformanceProps {
  onBack: (screen: Screen) => void;
}

export const EVPerformance: React.FC<EVPerformanceProps> = ({ onBack }) => {
  return (
    <div className="h-full bg-background overflow-y-auto pb-24">
      {/* Hero Image Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://picsum.photos/seed/ev-detail/800/1200" 
          alt="EcoPulse Model S" 
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
        <div className="absolute bottom-6 left-6 bg-primary-fixed text-primary px-4 py-2 rounded-2xl font-headline font-black text-sm shadow-xl flex items-center gap-2">
          <Activity className="w-4 h-4" />
          High Performance
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 -mt-12 relative z-10 space-y-8">
        <div className="glass-panel p-8 rounded-[40px] shadow-2xl space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl font-headline font-black tracking-tighter text-primary">EcoPulse Model S</h2>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <Car className="text-primary w-4 h-4" />
                <span className="text-sm font-medium">GreenGrid Mobility • Sport Edition</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-primary font-black text-3xl">$34,500</p>
              <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">Starting Price</p>
            </div>
          </div>

          <p className="text-on-surface-variant leading-relaxed font-medium">
            The EcoPulse Model S redefines sustainable performance. With a 0-100km/h in 3.2 seconds and a bio-integrated battery system that charges while you drive.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Range', value: '450 km', icon: Battery, color: 'bg-primary-fixed' },
              { label: 'Top Speed', value: '240 km/h', icon: Gauge, color: 'bg-secondary-fixed' },
              { label: 'Drag', value: '0.22 Cd', icon: Wind, color: 'bg-tertiary-fixed' }
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

        {/* Performance Graph Placeholder */}
        <div className="space-y-4">
          <h3 className="text-xl font-headline font-black text-primary">Performance Pulse</h3>
          <div className="bg-primary rounded-3xl p-8 h-48 relative overflow-hidden shadow-xl">
             <div className="absolute inset-0 opacity-20">
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary-fixed to-transparent" />
             </div>
             <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between">
                   <p className="text-primary-fixed text-xs font-bold uppercase">Battery Health</p>
                   <p className="text-white font-headline font-black text-lg">98%</p>
                </div>
                <div className="h-12 flex items-end gap-1">
                   {[40, 60, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary-fixed/40 rounded-t-sm" style={{ height: `${h}%` }} />
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="fixed bottom-0 left-0 w-full p-6 glass-panel border-t border-outline-variant z-20">
          <button className="w-full bg-primary text-white py-5 rounded-3xl font-headline font-black text-lg flex items-center justify-center gap-3 shadow-2xl hover:bg-primary-container transition-all">
            <ShoppingCart className="w-6 h-6 text-primary-fixed" />
            Configure & Order
          </button>
        </div>
      </div>
    </div>
  );
};
