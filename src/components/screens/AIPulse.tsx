import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  Globe, 
  Activity, 
  TrendingUp, 
  ShieldCheck, 
  ArrowLeft, 
  ChevronRight, 
  Database, 
  Network, 
  Share2,
  BrainCircuit,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { Screen } from '../../types';
import { GoogleGenAI } from "@google/genai";

interface AIPulseProps {
  onBack: (screen: Screen) => void;
}

export const AIPulse: React.FC<AIPulseProps> = ({ onBack }) => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncReport, setSyncReport] = useState<string | null>(null);

  const handleHiveSync = async () => {
    setIsSyncing(true);
    setSyncReport(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Generate a brief, high-level status report for a global AI bot network managing energy, ecology, and security. Mention current efficiency and one 'emergent behavior' detected in the hive mind.",
        config: {
          systemInstruction: "You are the Hive Mind Core. Your language is technical, slightly abstract, and highly efficient. You represent the collective intelligence of 12,480 AI agents.",
        },
      });
      
      setSyncReport(response.text || "Sync complete. Data integrity verified.");
    } catch (error) {
      console.error("Hive Sync Error:", error);
      setSyncReport("Sync interrupted. Local cache maintained. Re-establishing neural link...");
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="h-full bg-background overflow-y-auto pb-24">
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <button 
          onClick={() => onBack('NEXUS')}
          className="w-12 h-12 bg-surface-container-high rounded-2xl flex items-center justify-center shadow-sm hover:bg-surface-container-highest transition-all"
        >
          <ArrowLeft className="text-primary w-6 h-6" />
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-headline font-black tracking-tighter text-primary uppercase">AI PULSE</h2>
          <div className="flex items-center gap-1 text-primary text-[10px] font-black uppercase tracking-widest">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Live Workforce
          </div>
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Main Visualization */}
      <div className="px-6 space-y-8">
        <div className="bg-primary rounded-[40px] p-10 text-center space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-fixed/20 rounded-full animate-pulse" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary-fixed/40 rounded-full animate-pulse delay-75" />
          </div>
          
          <div className="z-10 relative space-y-4">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-[40px] flex items-center justify-center mx-auto border border-white/20">
              <BrainCircuit className="text-secondary-container w-12 h-12" />
            </div>
            <div className="space-y-1">
              <h3 className="text-4xl font-headline font-black text-white tracking-tighter">12,480</h3>
              <p className="text-primary-fixed text-sm font-medium uppercase tracking-widest">Active AI Agents</p>
            </div>
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                <p className="text-primary-fixed text-[10px] font-bold uppercase">Processing</p>
                <p className="text-white font-headline font-black text-lg">4.2 TB/s</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                <p className="text-primary-fixed text-[10px] font-bold uppercase">Efficiency</p>
                <p className="text-white font-headline font-black text-lg">99.9%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hive Sync Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-headline font-black text-primary">Hive Mind Sync</h3>
            <button 
              onClick={handleHiveSync}
              disabled={isSyncing}
              className="bg-primary text-on-primary px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
              {isSyncing ? 'Syncing...' : 'Sync Now'}
            </button>
          </div>
          
          <div className="min-h-[120px] bg-secondary-container text-on-secondary-container p-6 rounded-[2.5rem] border border-secondary-fixed shadow-inner relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSyncing ? (
                <motion.div 
                  key="syncing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full space-y-2 py-4"
                >
                  <Sparkles className="text-primary w-8 h-8 animate-pulse" />
                  <p className="text-[10px] font-black uppercase tracking-widest animate-pulse">Establishing Neural Link...</p>
                </motion.div>
              ) : syncReport ? (
                <motion.div 
                  key="report"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Core Transmission Received
                  </div>
                  <p className="text-sm font-medium leading-relaxed italic">"{syncReport}"</p>
                </motion.div>
              ) : (
                <div key="empty" className="flex flex-col items-center justify-center h-full opacity-40 py-4">
                  <p className="text-xs font-bold uppercase tracking-widest">Awaiting Core Sync</p>
                </div>
              )}
            </AnimatePresence>
            {/* Background decoration */}
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-primary opacity-5 blur-[40px] rounded-full"></div>
          </div>
        </div>

        {/* AI Agent Types */}
        <div className="space-y-4">
          <h3 className="text-xl font-headline font-black text-primary">Agent Specializations</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Energy Grid', icon: Zap, value: '4.2k', color: 'bg-primary-fixed' },
              { label: 'Eco-Tracking', icon: Globe, value: '3.1k', color: 'bg-secondary-fixed' },
              { label: 'Data Mining', icon: Database, value: '2.8k', color: 'bg-tertiary-fixed' },
              { label: 'Security', icon: ShieldCheck, value: '2.3k', color: 'bg-surface-container-high' }
            ].map((agent, i) => (
              <div key={i} className="glass-panel p-6 rounded-3xl space-y-4 shadow-sm">
                <div className={`w-12 h-12 ${agent.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                  <agent.icon className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-primary font-headline font-black text-2xl tracking-tighter">{agent.value}</p>
                  <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">{agent.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-headline font-black text-primary">Live Activity</h3>
            <button className="text-primary font-bold text-sm flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {[
              { task: 'Grid Optimization', agent: 'Agent #420', status: 'Success', time: '2s ago' },
              { task: 'Carbon Audit', agent: 'Agent #124', status: 'Processing', time: 'Now' },
              { task: 'Node Verification', agent: 'Agent #89', status: 'Success', time: '12s ago' }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-4 rounded-2xl flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface-container-high rounded-xl flex items-center justify-center">
                    <Activity className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-headline font-bold text-primary">{item.task}</p>
                    <p className="text-on-surface-variant text-xs font-medium">{item.agent}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-[10px] font-black uppercase tracking-widest ${item.status === 'Success' ? 'text-primary' : 'text-secondary'}`}>
                    {item.status}
                  </p>
                  <p className="text-on-surface-variant text-[10px] font-medium">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Health */}
        <div className="bg-primary-container rounded-[40px] p-8 text-white flex items-center justify-between shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8" />
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
              <Network className="text-primary-fixed w-8 h-8" />
            </div>
            <div>
              <p className="font-headline font-bold text-lg">Network Health</p>
              <p className="text-primary-fixed text-sm font-medium">All systems operational</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-secondary-container">
            <TrendingUp className="w-6 h-6" />
            <span className="font-headline font-black text-xl">99.9%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
