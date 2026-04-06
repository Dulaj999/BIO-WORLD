import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from '../../types';
import { GoogleGenAI } from "@google/genai";

interface SafetyOracleProps {
  onNavigate: (screen: Screen) => void;
}

export const SafetyOracle: React.FC<SafetyOracleProps> = ({ onNavigate }) => {
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleAskOracle = async () => {
    if (!chatInput.trim()) return;
    
    setIsTyping(true);
    setChatResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: chatInput,
        config: {
          systemInstruction: "You are the Safety Oracle, a high-level AI bot overseeing the BIO World ecosystem. You are professional, visionary, and protective. Your goal is to provide insights into global sustainability, bot workforce efficiency, and ecological integrity. Keep responses concise and impactful.",
        },
      });
      
      setChatResponse(response.text || "Connection to the hive mind was interrupted. Please try again.");
    } catch (error) {
      console.error("Oracle Error:", error);
      setChatResponse("An anomaly occurred in the neural network. Please re-initiate contact.");
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen pb-24 md:pb-0 font-body">
      {/* TopAppBar */}
      <header className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,53,39,0.04)]">
        <div className="flex items-center justify-between px-6 py-4 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary-fixed overflow-hidden border border-outline-variant/15">
              <img 
                alt="Founder Portrait" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4XXgmRLxkFffRCnQdBPxA3wVy7hTgDd0qvboxsvGDj3qB_3SZ3koEkoZFIQQEFyxM7uazT0H8zN94lS11uUuW5YVVmrN_Eji_Eln_gSIU40EjrlRroJgHm0v3eTMGjhbk4iOQQvMuFyDnrAIXJfXweobfLbf_E3dubkQaaozht9OYb3nBXjaU3MLnipZojnwUffTwFfAAj3_0OXwU6Z5A0ggZxHbRggQMOxBUPqnB2_kED-YwVYKLdGpPsegqqYfVAFyDxJlCrcpJ"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-bold">BIO WORLD FOUNDER</span>
              <h1 className="text-2xl font-bold tracking-tighter text-primary font-headline">Safety Oracle</h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate('PORTAL')} className="text-primary font-bold text-sm tracking-tight transition-all">Status</button>
            <button onClick={() => onNavigate('BIOSAFE_MONITOR')} className="text-primary/60 font-semibold text-sm tracking-tight hover:opacity-80 transition-all">Reports</button>
            <button onClick={() => onNavigate('MAP')} className="text-primary/60 font-semibold text-sm tracking-tight hover:opacity-80 transition-all">Emergency</button>
          </nav>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full text-primary hover:opacity-80 transition-all active:scale-95">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="hidden lg:block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container text-xs font-bold uppercase tracking-widest border border-outline-variant/10">
              Live Session
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-6 py-8">
        {/* Hero Greeting & Integrity Pulse */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-2">Welcome, Founder Dulaj</h2>
            <p className="text-on-surface-variant max-w-lg leading-relaxed">The AI bot network is currently maintaining peak structural efficiency across all six monitored continents.</p>
          </motion.div>
          
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-6 p-6 bg-surface-container-low rounded-[2rem] border border-outline-variant/15 shadow-sm"
          >
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-outline-variant/20" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeWidth="6"></circle>
                <circle className="text-primary" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeDasharray="226.2" strokeDashoffset="4.5" strokeWidth="6"></circle>
              </svg>
              <span className="absolute text-sm font-bold text-primary">99.8%</span>
            </div>
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-primary/60 mb-1">Systemic Integrity</div>
              <div className="text-2xl font-bold text-primary">Optimal Flow</div>
            </div>
          </motion.div>
        </div>

        {/* AI Interaction Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-12 bg-primary-container p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-3xl">psychology</span>
                <h3 className="text-2xl font-headline font-black tracking-tight">Ask the Oracle</h3>
              </div>
              <p className="text-primary-fixed/80 text-sm leading-relaxed max-w-md">
                Direct neural link to the global AI hive mind. Query the system for real-time ecological insights or bot deployment strategies.
              </p>
              <div className="relative">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAskOracle()}
                  placeholder="Query the Oracle..." 
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-fixed/50 transition-all"
                />
                <button 
                  onClick={handleAskOracle}
                  disabled={isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-fixed text-on-primary-fixed p-2 rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                >
                  <span className="material-symbols-outlined">{isTyping ? 'sync' : 'send'}</span>
                </button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-md rounded-[2rem] p-6 border border-white/10 min-h-[160px] flex flex-col">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-primary-fixed/60 mb-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-pulse"></div>
                Oracle Response
              </div>
              <div className="flex-grow text-sm leading-relaxed text-primary-fixed/90 italic">
                <AnimatePresence mode="wait">
                  {isTyping ? (
                    <motion.div 
                      key="typing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex gap-1"
                    >
                      <span className="animate-bounce">.</span>
                      <span className="animate-bounce delay-75">.</span>
                      <span className="animate-bounce delay-150">.</span>
                    </motion.div>
                  ) : chatResponse ? (
                    <motion.p 
                      key="response"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {chatResponse}
                    </motion.p>
                  ) : (
                    <p key="placeholder" className="opacity-50">Waiting for neural link initialization...</p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          {/* Aesthetic texture */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-fixed opacity-10 rounded-full blur-[100px]"></div>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Map Section (Large) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="lg:col-span-8 relative h-[600px] bg-surface-container-lowest rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,53,39,0.03)] group border border-outline-variant/10"
          >
            <img 
              alt="Global Map" 
              className="w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAXP_hYZ7nsLCZHH_uAQxirUBDaot5Jd2uRoh3FrHoyZeUhpMeUnHMM2kkgs0MYlfPO8X3PQyV4ClDFOvmGcBWdncgml2mTsC6QIb_3syeuinB4iP6xEhWY9kDcEPiVjPiwZXYBdxws9Lv8cNfbjrM8esXrgGlG29a-93ppThi06H8ylUdO92ZWzitcTU-PXyvA5BsmkPMLYh4gGB5tzUaxFpdvsr256fQ9rlgQSLAgI2gTPEpT9UzdqUmUY5xHxQ2XAO6y7jDzfi8"
              referrerPolicy="no-referrer"
            />
            
            {/* Map UI Overlays */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between pointer-events-auto">
                <div className="bg-surface/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-outline-variant/20 flex items-center gap-3 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm font-bold text-primary">Global Scanning Active</span>
                </div>
                <div className="flex gap-2">
                  <button className="bg-surface/80 backdrop-blur-md p-3 rounded-xl border border-outline-variant/20 text-primary hover:bg-surface transition-colors">
                    <span className="material-symbols-outlined">zoom_in</span>
                  </button>
                  <button className="bg-surface/80 backdrop-blur-md p-3 rounded-xl border border-outline-variant/20 text-primary hover:bg-surface transition-colors">
                    <span className="material-symbols-outlined">layers</span>
                  </button>
                </div>
              </div>

              {/* Simulated AI Node Cluster */}
              <div className="relative w-full h-full">
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(0,53,39,0.4)] pointer-events-auto cursor-pointer">
                  <div className="absolute -inset-2 bg-primary/20 rounded-full animate-ping"></div>
                </div>
                <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-secondary rounded-full shadow-[0_0_20px_rgba(121,89,0,0.4)] pointer-events-auto cursor-pointer">
                  <div className="absolute -inset-4 bg-secondary/10 rounded-full border border-secondary/30"></div>
                </div>
                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(0,53,39,0.4)] pointer-events-auto cursor-pointer"></div>
              </div>

              <div className="flex justify-between items-end pointer-events-auto">
                <div className="bg-surface/80 backdrop-blur-md p-6 rounded-3xl border border-outline-variant/20 max-w-xs shadow-sm">
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-on-surface-variant/70 mb-3">Continental Coverage</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Europe Sector</span>
                      <span className="text-sm font-bold text-primary">Safe</span>
                    </div>
                    <div className="w-full bg-outline-variant/20 h-1 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[94%]"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Asia-Pacific Sector</span>
                      <span className="text-sm font-bold text-secondary">Warning</span>
                    </div>
                    <div className="w-full bg-outline-variant/20 h-1 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full w-[82%]"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface/80 backdrop-blur-md p-4 rounded-2xl border border-outline-variant/20 shadow-sm">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1 opacity-60">Lat: 40.7128 N</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em]">Long: 74.0060 W</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Incidents Sidebar (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/15 flex-grow shadow-sm"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-primary">Active Incidents</h3>
                <span className="bg-error-container text-on-error-container px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider">04 Critical</span>
              </div>
              <div className="space-y-4">
                {/* Incident Card */}
                <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/10 shadow-sm hover:scale-[1.02] transition-transform cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm">warning</span>
                      <span className="font-bold text-sm">Biodiversity Anomaly</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant/60">2m ago</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">Agent #42 responding to unmapped thermal signature in Amazon Basin Delta.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center text-[10px] border-2 border-surface-container-lowest">AI</div>
                      <div className="w-6 h-6 rounded-full bg-tertiary-fixed flex items-center justify-center text-[10px] border-2 border-surface-container-lowest">50</div>
                    </div>
                    <button className="text-primary text-[10px] font-extrabold uppercase tracking-widest hover:underline">Deploy Support</button>
                  </div>
                </div>
                
                {/* Incident Card */}
                <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/10 shadow-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      <span className="font-bold text-sm">Oceanic pH Neutralized</span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant/60">15m ago</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Agent #12 successfully stabilized coral reef acidity levels near Great Barrier.</p>
                </div>
                
                <button 
                  onClick={() => onNavigate('INCIDENT_LOG')}
                  className="w-full py-4 rounded-xl border border-dashed border-outline-variant/40 text-on-surface-variant text-xs font-bold hover:bg-surface-container-high transition-colors uppercase tracking-widest"
                >
                  View Historical Log
                </button>
              </div>
            </motion.div>

            {/* AI Network Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-primary-container p-8 rounded-[2.5rem] text-white shadow-xl overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-primary-fixed text-4xl">neurology</span>
                  <div className="text-right">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-primary-fixed/60">Active Bots</div>
                    <div className="text-3xl font-bold font-headline tracking-tight">1,000,000</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-xs font-medium">
                    <span>Compute Load</span>
                    <span>64%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-secondary-fixed h-full w-[64%]"></div>
                  </div>
                  <p className="text-[10px] leading-relaxed text-primary-fixed/80">
                    Global synthetic hive mind is operating at nominal temperature with 50 specialized agents on high-alert status.
                  </p>
                </div>
              </div>
              {/* Aesthetic texture */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary-fixed opacity-5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>

        {/* Metric Stripe */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: 'Sync Latency', value: '12ms' },
            { label: 'Threats Neutralized', value: '4,821' },
            { label: 'Energy Efficiency', value: '94.2%' },
            { label: 'Active Protocols', value: 'Aether v4.1' }
          ].map((metric, idx) => (
            <motion.div 
              key={metric.label}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-surface-container-lowest rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant/60 mb-2">{metric.label}</div>
              <div className="text-2xl font-bold text-primary">{metric.value}</div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface/90 backdrop-blur-2xl rounded-t-[1.5rem] border-t border-outline-variant/15 shadow-[0_-10px_40px_rgba(0,53,39,0.04)]">
        <div className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-[1.5rem] px-6 py-2 shadow-inner transition-all active:scale-90">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Status</span>
        </div>
        <button 
          onClick={() => onNavigate('BIOSAFE_MONITOR')}
          className="flex flex-col items-center justify-center text-primary/50 px-6 py-2 hover:text-secondary transition-all active:scale-90"
        >
          <span className="material-symbols-outlined">analytics</span>
          <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Reports</span>
        </button>
        <button 
          onClick={() => onNavigate('MAP')}
          className="flex flex-col items-center justify-center text-primary/50 px-6 py-2 hover:text-secondary transition-all active:scale-90"
        >
          <span className="material-symbols-outlined">emergency_home</span>
          <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Emergency</span>
        </button>
      </nav>

      {/* Contextual FAB */}
      <button className="fixed right-6 bottom-24 md:bottom-12 z-40 w-16 h-16 rounded-full bg-primary text-on-primary shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300">
        <span className="material-symbols-outlined text-3xl">add_alert</span>
      </button>
    </div>
  );
};
