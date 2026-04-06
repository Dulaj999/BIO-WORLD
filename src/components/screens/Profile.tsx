import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Settings, 
  Award, 
  Leaf, 
  Zap, 
  Globe, 
  Share2, 
  Edit3, 
  ChevronRight, 
  ShieldCheck,
  Trophy,
  Activity
} from 'lucide-react';

export const Profile: React.FC = () => {
  return (
    <div className="p-6 space-y-8 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-headline font-black tracking-tighter text-primary">PROFILE</h2>
        <button className="w-10 h-10 bg-surface-container-high rounded-xl flex items-center justify-center shadow-sm">
          <Settings className="text-on-surface-variant w-5 h-5" />
        </button>
      </div>

      {/* Profile Info Card */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-4 border-primary-fixed p-1 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/user/200/200" 
              alt="User" 
              className="w-full h-full rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="absolute bottom-0 right-0 w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center border-4 border-background shadow-lg">
            <Edit3 className="text-primary w-5 h-5" />
          </button>
        </div>
        <div>
          <h3 className="text-2xl font-headline font-black text-primary">Dulaj Vidanapathirana</h3>
          <div className="flex items-center justify-center gap-2 text-on-surface-variant">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">Eco-Pioneer • Colombo, SL</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-primary-fixed/50 px-4 py-1.5 rounded-full">
          <Trophy className="text-primary w-4 h-4" />
          <span className="text-primary text-xs font-black uppercase tracking-wider">Rank #42 Global</span>
        </div>
      </div>

      {/* Impact Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div 
          whileHover={{ y: -4 }}
          className="glass-panel p-5 rounded-3xl space-y-4 shadow-sm border-l-4 border-primary"
        >
          <div className="w-10 h-10 bg-primary-fixed rounded-xl flex items-center justify-center">
            <Leaf className="text-primary w-5 h-5" />
          </div>
          <div className="space-y-1">
            <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Carbon Offset</p>
            <h4 className="text-2xl font-headline font-black text-primary">12.4 Tons</h4>
          </div>
        </motion.div>
        <motion.div 
          whileHover={{ y: -4 }}
          className="glass-panel p-5 rounded-3xl space-y-4 shadow-sm border-l-4 border-secondary-container"
        >
          <div className="w-10 h-10 bg-secondary-fixed rounded-xl flex items-center justify-center">
            <Zap className="text-secondary w-5 h-5" />
          </div>
          <div className="space-y-1">
            <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Solar Credits</p>
            <h4 className="text-2xl font-headline font-black text-primary">4,280 SC</h4>
          </div>
        </motion.div>
      </div>

      {/* Ecosystem Nodes Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-headline font-black text-primary">Ecosystem Nodes</h3>
          <button className="text-primary font-bold text-sm flex items-center gap-1">
            Manage <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {[
            { name: 'Home Solar Hub', status: 'Active', yield: '8.4 kWh', icon: Zap },
            { name: 'EcoPulse EV', status: 'Charging', yield: '450km', icon: Award },
            { name: 'Bio-Gas Pod', status: 'Active', yield: '12.2m³', icon: Activity }
          ].map((node, i) => (
            <div key={i} className="glass-panel p-4 rounded-2xl flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center">
                  <node.icon className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="font-headline font-bold text-primary">{node.name}</p>
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs font-medium">{node.status}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-headline font-black text-primary">{node.yield}</p>
                <p className="text-on-surface-variant text-[10px] font-bold uppercase">Today</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-headline font-black text-primary">Achievements</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {[
            { label: 'Early Adopter', icon: Award, color: 'bg-primary-fixed' },
            { label: 'Carbon Neutral', icon: Leaf, color: 'bg-secondary-fixed' },
            { label: 'Grid Master', icon: Zap, color: 'bg-tertiary-fixed' },
            { label: 'Community Hero', icon: Share2, color: 'bg-surface-container-high' }
          ].map((ach, i) => (
            <div key={i} className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className={`w-16 h-16 ${ach.color} rounded-2xl flex items-center justify-center shadow-sm border border-white/20`}>
                <ach.icon className="text-primary w-8 h-8" />
              </div>
              <span className="text-on-surface-variant text-[10px] font-bold text-center max-w-[64px]">{ach.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Security Badge */}
      <div className="bg-primary-container rounded-3xl p-6 text-white flex items-center gap-4 shadow-xl">
        <ShieldCheck className="text-secondary-container w-10 h-10" />
        <div>
          <p className="font-headline font-bold text-lg">Bio-Verified Account</p>
          <p className="text-primary-fixed text-xs font-medium">Your data is secured by Bio-Intelligence encryption.</p>
        </div>
      </div>
    </div>
  );
};
