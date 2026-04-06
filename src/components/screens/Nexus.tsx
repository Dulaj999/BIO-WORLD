import React from 'react';
import { motion } from 'motion/react';
import { 
  Network, 
  Users, 
  Zap, 
  Globe, 
  Share2, 
  Activity, 
  TrendingUp, 
  MapPin, 
  ChevronRight,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

import { Screen } from '../../types';

interface NexusProps {
  onNavigate: (screen: Screen) => void;
}

export const Nexus: React.FC<NexusProps> = ({ onNavigate }) => {
  return (
    <div className="p-6 space-y-8 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-headline font-black tracking-tighter text-primary">NEXUS</h2>
          <p className="text-on-surface-variant text-sm font-medium">Bio-Intelligence Network</p>
        </div>
        <button className="w-12 h-12 bg-primary-fixed rounded-2xl flex items-center justify-center shadow-sm">
          <Network className="text-primary w-6 h-6" />
        </button>
      </div>

      {/* Network Map Visualization (Placeholder) */}
      <div 
        onClick={() => onNavigate('AI_PULSE')}
        className="h-64 bg-primary rounded-3xl relative overflow-hidden shadow-2xl flex items-center justify-center cursor-pointer group"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-fixed/20 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary-fixed/40 rounded-full animate-pulse delay-75" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary-fixed/60 rounded-full animate-pulse delay-150" />
        </div>
        
        <div className="z-10 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Globe className="text-primary-fixed w-6 h-6 animate-spin-slow" />
            <span className="text-white font-headline font-black text-2xl tracking-tighter uppercase">Global Grid</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              <p className="text-primary-fixed text-[10px] font-bold uppercase">Active Nodes</p>
              <p className="text-white font-headline font-black text-lg">1,240</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
              <p className="text-primary-fixed text-[10px] font-bold uppercase">Total Yield</p>
              <p className="text-white font-headline font-black text-lg">84.2 MWh</p>
            </div>
          </div>
        </div>

        {/* Floating Node Indicators */}
        <div className="absolute top-12 left-12 w-3 h-3 bg-secondary-container rounded-full animate-ping" />
        <div className="absolute bottom-16 right-20 w-2 h-2 bg-primary-fixed rounded-full animate-ping delay-300" />
        <div className="absolute top-20 right-12 w-2 h-2 bg-white rounded-full animate-ping delay-700" />
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Agents', value: '420', icon: Users, color: 'bg-primary-fixed' },
          { label: 'Uptime', value: '99.9%', icon: Activity, color: 'bg-secondary-fixed' },
          { label: 'Trust', value: '4.9', icon: ShieldCheck, color: 'bg-tertiary-fixed' }
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-4 rounded-2xl space-y-2 shadow-sm text-center">
            <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mx-auto`}>
              <stat.icon className="text-primary w-5 h-5" />
            </div>
            <div>
              <p className="text-primary font-headline font-black text-lg">{stat.value}</p>
              <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Active Agents Feed */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-headline font-black text-primary">Active Agents</h3>
          <button 
            onClick={() => onNavigate('RANKINGS')}
            className="text-primary font-bold text-sm flex items-center gap-1"
          >
            View Leaderboard <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {[
            { name: 'Arjun Silva', impact: '1.2t CO2', location: 'Colombo', status: 'Online' },
            { name: 'Nimal Perera', impact: '0.8t CO2', location: 'Kandy', status: 'Eco-Active' },
            { name: 'Sarah Jones', impact: '2.4t CO2', location: 'Galle', status: 'Top Agent' }
          ].map((agent, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-4 rounded-2xl flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-primary-fixed p-0.5">
                  <img 
                    src={`https://picsum.photos/seed/agent${i}/100/100`} 
                    alt={agent.name} 
                    className="w-full h-full rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-headline font-bold text-primary">{agent.name}</p>
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs font-medium">{agent.location}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-headline font-black text-primary">{agent.impact}</p>
                <div className="flex items-center justify-end gap-1 text-primary text-[10px] font-bold uppercase">
                  <TrendingUp className="w-3 h-3" />
                  <span>Impact</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Network Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-primary text-white p-6 rounded-3xl flex flex-col items-center gap-3 shadow-xl hover:bg-primary-container transition-all">
          <Share2 className="w-8 h-8 text-primary-fixed" />
          <span className="font-headline font-bold">Invite Nodes</span>
        </button>
        <button className="bg-secondary-container text-primary p-6 rounded-3xl flex flex-col items-center gap-3 shadow-xl hover:bg-secondary-fixed transition-all">
          <MessageSquare className="w-8 h-8 text-secondary" />
          <span className="font-headline font-bold">Nexus Chat</span>
        </button>
      </div>
    </div>
  );
};
