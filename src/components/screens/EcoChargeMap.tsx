import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Search, 
  Filter, 
  Navigation, 
  Zap, 
  Sun, 
  ArrowLeft, 
  ChevronRight,
  Star,
  Clock
} from 'lucide-react';
import { Screen } from '../../types';

interface EcoChargeMapProps {
  onBack: (screen: Screen) => void;
}

export const EcoChargeMap: React.FC<EcoChargeMapProps> = ({ onBack }) => {
  return (
    <div className="h-full bg-background relative overflow-hidden">
      {/* Map Placeholder */}
      <div className="absolute inset-0 bg-primary-fixed/20">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
           {/* Grid pattern */}
           <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>
        
        {/* Map Pins */}
        {[
          { top: '20%', left: '30%', type: 'solar' },
          { top: '45%', left: '60%', type: 'ev' },
          { top: '70%', left: '25%', type: 'solar' },
          { top: '35%', left: '80%', type: 'ev' },
          { top: '60%', left: '50%', type: 'solar' }
        ].map((pin, i) => (
          <motion.div 
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            style={{ top: pin.top, left: pin.left }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl border-2 border-white transition-transform group-hover:scale-110 ${pin.type === 'solar' ? 'bg-secondary-container' : 'bg-primary'}`}>
              {pin.type === 'solar' ? <Sun className="text-primary w-6 h-6" /> : <Zap className="text-primary-fixed w-6 h-6" />}
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
               <div className="glass-panel px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-primary shadow-lg">
                  {pin.type === 'solar' ? 'Solar Hub' : 'EV Pod'}
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Header Controls */}
      <div className="absolute top-6 left-0 w-full px-6 flex items-center gap-4 z-10">
        <button 
          onClick={() => onBack('MARKET')}
          className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl hover:bg-surface-container-high transition-all"
        >
          <ArrowLeft className="text-primary w-6 h-6" />
        </button>
        <div className="flex-1 glass-panel h-12 rounded-2xl flex items-center px-4 gap-3 shadow-xl">
          <Search className="text-on-surface-variant w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search EcoCharge Hubs..." 
            className="bg-transparent border-none outline-none flex-1 text-sm font-medium text-primary placeholder:text-on-surface-variant"
          />
          <Filter className="text-on-surface-variant w-5 h-5" />
        </div>
      </div>

      {/* Bottom Card */}
      <div className="absolute bottom-6 left-0 w-full px-6 z-10">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="glass-panel p-6 rounded-[32px] shadow-2xl space-y-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center shadow-sm">
                <Sun className="text-primary w-8 h-8" />
              </div>
              <div>
                <h4 className="text-2xl font-headline font-black text-primary">EcoHub Colombo 07</h4>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <Star className="text-secondary-container fill-secondary-container w-3 h-3" />
                  <span className="text-xs font-bold">4.9 • 1.2km away</span>
                </div>
              </div>
            </div>
            <button className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
              <Navigation className="text-primary-fixed w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-high p-4 rounded-2xl flex items-center gap-3">
              <Zap className="text-primary w-5 h-5" />
              <div>
                <p className="text-[10px] font-bold uppercase text-on-surface-variant">Available</p>
                <p className="text-sm font-headline font-black text-primary">12/15 Slots</p>
              </div>
            </div>
            <div className="bg-surface-container-high p-4 rounded-2xl flex items-center gap-3">
              <Clock className="text-primary w-5 h-5" />
              <div>
                <p className="text-[10px] font-bold uppercase text-on-surface-variant">Wait Time</p>
                <p className="text-sm font-headline font-black text-primary">~5 mins</p>
              </div>
            </div>
          </div>

          <button className="w-full bg-primary text-white py-4 rounded-2xl font-headline font-black text-lg flex items-center justify-center gap-2 shadow-xl hover:bg-primary-container transition-all">
            Start Navigation
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
