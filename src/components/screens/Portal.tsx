import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Leaf, 
  TrendingUp, 
  TrendingDown, 
  CreditCard, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Plus, 
  MoreVertical,
  ChevronRight,
  Package,
  BookOpen
} from 'lucide-react';

import { Screen } from '../../types';

interface PortalProps {
  onNavigate: (screen: Screen) => void;
}

export const Portal: React.FC<PortalProps> = ({ onNavigate }) => {
  return (
    <div className="p-6 space-y-8 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-headline font-black tracking-tighter text-primary">PORTAL</h2>
          <p className="text-on-surface-variant text-sm font-medium">Your Bio-Intelligence Dashboard</p>
        </div>
        <button 
          onClick={() => onNavigate('PARTNER_PORTAL')}
          className="w-12 h-12 bg-primary-fixed rounded-2xl flex items-center justify-center shadow-sm"
        >
          <Plus className="text-primary w-6 h-6" />
        </button>
      </div>

      {/* Main Balance Card */}
      <motion.div 
        whileHover={{ y: -4 }}
        className="bio-gradient rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-container/20 rounded-full -ml-12 -mb-12 blur-2xl" />
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <CreditCard className="text-secondary-container w-6 h-6" />
            <span className="text-primary-fixed text-sm font-medium tracking-widest uppercase">Bio Balance</span>
          </div>
          <MoreVertical className="text-white/40 w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h3 className="text-5xl font-headline font-black tracking-tighter">$12,480.00</h3>
          <div className="flex items-center gap-2 text-primary-fixed">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-bold">+12.4% this month</span>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <button className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
            <ArrowUpRight className="w-4 h-4" />
            Send
          </button>
          <button className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
            <ArrowDownLeft className="w-4 h-4" />
            Receive
          </button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-panel p-5 rounded-3xl space-y-4 shadow-sm">
          <div className="w-10 h-10 bg-primary-fixed rounded-xl flex items-center justify-center">
            <Zap className="text-primary w-5 h-5" />
          </div>
          <div className="space-y-1">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Daily Yield</p>
            <h4 className="text-2xl font-headline font-black text-primary">12.4 kWh</h4>
          </div>
        </div>
        <div 
          onClick={() => onNavigate('BIOSAFE_MONITOR')}
          className="bg-secondary-fixed p-5 rounded-3xl space-y-4 shadow-sm cursor-pointer hover:scale-[1.02] transition-transform"
        >
          <div className="w-10 h-10 bg-white/40 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary">assignment_late</span>
          </div>
          <div className="space-y-1">
            <p className="text-on-secondary-fixed-variant text-xs font-bold uppercase tracking-wider">Safety Reports</p>
            <h4 className="text-2xl font-headline font-black text-secondary">Active</h4>
          </div>
        </div>
      </div>

      {/* BioWorld Science Shortcut */}
      <div 
        onClick={() => onNavigate('SCIENCE_FEED')}
        className="bg-surface-container-highest p-6 rounded-3xl flex items-center justify-between cursor-pointer hover:scale-[1.02] transition-transform shadow-lg border border-outline-variant/30"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary-fixed rounded-2xl flex items-center justify-center border border-primary/10">
            <BookOpen className="text-primary w-6 h-6" />
          </div>
          <div>
            <h4 className="font-headline font-bold text-primary">BioWorld Science</h4>
            <p className="text-on-surface-variant text-xs font-medium">Latest R&D and breakthroughs</p>
          </div>
        </div>
        <ChevronRight className="text-on-surface-variant w-5 h-5" />
      </div>

      {/* Safety Oracle Shortcut */}
      <div 
        onClick={() => onNavigate('SAFETY_ORACLE')}
        className="organic-gradient p-6 rounded-3xl flex items-center justify-between cursor-pointer hover:scale-[1.02] transition-transform shadow-xl text-white"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
            <span className="material-symbols-outlined text-primary-fixed">neurology</span>
          </div>
          <div>
            <h4 className="font-headline font-bold">Safety Oracle</h4>
            <p className="text-primary-fixed/80 text-xs font-medium">Global AI network oversight</p>
          </div>
        </div>
        <ChevronRight className="text-white/60 w-5 h-5" />
      </div>

      {/* Investor Deck Shortcut */}
      <div 
        onClick={() => onNavigate('INVESTOR_DECK')}
        className="bg-primary p-6 rounded-3xl flex items-center justify-between cursor-pointer hover:scale-[1.02] transition-transform shadow-xl text-white border border-white/10"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
            <span className="material-symbols-outlined text-secondary-fixed">visibility</span>
          </div>
          <div>
            <h4 className="font-headline font-bold">Investor Deck 2024</h4>
            <p className="text-white/60 text-xs font-medium">Vision & Executive Summary</p>
          </div>
        </div>
        <ChevronRight className="text-white/60 w-5 h-5" />
      </div>

      {/* Incident Log Shortcut */}
      <div 
        onClick={() => onNavigate('INCIDENT_LOG')}
        className="glass-panel p-6 rounded-3xl flex items-center justify-between cursor-pointer hover:bg-surface-container-high transition-colors border border-outline-variant/10"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center">
            <span className="material-symbols-outlined text-primary-fixed">history</span>
          </div>
          <div>
            <h4 className="font-headline font-bold text-primary">Historical Incident Log</h4>
            <p className="text-on-surface-variant text-xs font-medium">Review executive audit trails</p>
          </div>
        </div>
        <ChevronRight className="text-on-surface-variant w-5 h-5" />
      </div>

      {/* Bank Tracking Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-headline font-black text-primary">Bank Tracking</h3>
          <button className="text-primary font-bold text-sm flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {[
            { name: 'Solar Hub Payout', date: 'Oct 24, 2023', amount: '+$450.00', type: 'payout' },
            { name: 'EV Charging Fee', date: 'Oct 22, 2023', amount: '-$12.50', type: 'fee' },
            { name: 'Bio-Gas Credit', date: 'Oct 20, 2023', amount: '+$85.00', type: 'payout' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-4 rounded-2xl flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.type === 'payout' ? 'bg-primary-fixed' : 'bg-surface-container-high'}`}>
                  {item.type === 'payout' ? <TrendingUp className="text-primary w-6 h-6" /> : <TrendingDown className="text-on-surface-variant w-6 h-6" />}
                </div>
                <div>
                  <p className="font-headline font-bold text-primary">{item.name}</p>
                  <p className="text-on-surface-variant text-xs font-medium">{item.date}</p>
                </div>
              </div>
              <p className={`font-headline font-black ${item.type === 'payout' ? 'text-primary' : 'text-on-surface-variant'}`}>
                {item.amount}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pickup Scheduler */}
      <div className="space-y-4">
        <h3 className="text-xl font-headline font-black text-primary">Pickup Scheduler</h3>
        <div 
          onClick={() => onNavigate('MAP')}
          className="bg-primary-container rounded-3xl p-6 text-white flex items-center justify-between relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8 group-hover:scale-110 transition-transform" />
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
              <Package className="text-primary-fixed w-8 h-8" />
            </div>
            <div>
              <p className="font-headline font-bold text-lg">Schedule Bio-Waste</p>
              <p className="text-primary-fixed text-sm font-medium">Next available: Tomorrow, 9 AM</p>
            </div>
          </div>
          <Calendar className="text-secondary-container w-8 h-8" />
        </div>
      </div>
    </div>
  );
};
