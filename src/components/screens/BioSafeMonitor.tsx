import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from '../../types';
import { GoogleGenAI } from "@google/genai";

interface BioSafeMonitorProps {
  onNavigate: (screen: Screen) => void;
}

export const BioSafeMonitor: React.FC<BioSafeMonitorProps> = ({ onNavigate }) => {
  const [incidentType, setIncidentType] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const incidentTypes = [
    { id: 'gas', label: 'Gas Leak', sub: 'Air quality compromise', icon: 'gas_meter' },
    { id: 'pressure', label: 'Pressure Spike', sub: 'Containment risk', icon: 'compress' },
    { id: 'equipment', label: 'Equipment Failure', sub: 'Mechanical error', icon: 'settings_suggest' },
    { id: 'breach', label: 'System Breach', sub: 'Security alert', icon: 'security_update_warning' },
  ];

  const handleRunAIAnalysis = async () => {
    if (!incidentType) return;
    
    setIsAnalyzing(true);
    setAiAnalysis(null);
    setStep(3);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const selectedType = incidentTypes.find(t => t.id === incidentType);
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analyze this incident: ${selectedType?.label} (${selectedType?.sub}). Provide a 3-step emergency protocol and a risk assessment.`,
        config: {
          systemInstruction: "You are the BioSafe AI Triage Bot. You provide rapid, technical, and authoritative safety protocols for biological and industrial incidents. Keep responses structured and urgent.",
        },
      });
      
      setAiAnalysis(response.text || "Analysis failed. Reverting to manual protocols.");
    } catch (error) {
      console.error("AI Triage Error:", error);
      setAiAnalysis("Neural link failure. Please execute standard emergency lockdown immediately.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_4px_40px_0_rgba(0,53,39,0.04)]">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">biotech</span>
            <h1 className="text-xl font-bold text-primary tracking-tighter font-headline">BioSafe Monitor</h1>
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary-fixed">
            <img 
              alt="Specialist" 
              className="h-full w-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5QvSLb0B8fy-kcSWAcpHCvBjzrnsff3S9ZEnAyYPa3YKE3a6cPHlTNuLlUWni8xggExEsHVePYaBWMLNSDubVz8gF9vxRhP-VWvQJsAzU_TBRsI0yDvhSC_PEUmMpJeeYC7JeZfEg_jI242GPnMjRkUrthoZtYXbknvF-je58sv1-Mq1QrE06G2rFLgzKYNtkUOFB9P_IGBJSTW6yy6U8NBvLh0O9x8RoPXdB0zcDITwCi7Lx_JBnE3hYcUanvNHwFM-wkRVeWPpw"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <main className="mt-20 px-4 md:px-8 max-w-5xl mx-auto space-y-8">
        {/* Real-time AI Hazard Analysis */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-primary-container text-on-primary-container p-6 rounded-[1.5rem] relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary-fixed">clinical_notes</span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Live Diagnostic Feed</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight mb-1">Localized Pressure Variance</h2>
            <p className="text-on-primary-container/70 max-w-md">Sector 04 monitoring detected a 4.2% fluctuation. AI currently performing structural integrity scan.</p>
          </div>
          <div className="relative z-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-secondary-container text-on-secondary-container rounded-full">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <div>
              <div className="text-xs font-bold opacity-60">THREAT LEVEL</div>
              <div className="text-xl font-bold">MODERATE</div>
            </div>
          </div>
          {/* Abstract Bio-Aura Background */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary-fixed opacity-10 blur-[80px] rounded-full"></div>
        </motion.section>

        {/* Reporting Flow Steps */}
        <section className="mb-10">
          <div className="flex justify-between items-center px-4 overflow-x-auto no-scrollbar gap-8 py-2">
            {[1, 2, 3, 4].map((s) => (
              <React.Fragment key={s}>
                <div className={`flex flex-col items-center gap-2 min-w-max transition-opacity duration-300 ${step >= s ? 'opacity-100' : 'opacity-40'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface'}`}>
                    {s}
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${step >= s ? 'text-primary' : 'text-on-surface'}`}>
                    {s === 1 ? 'Incident Type' : s === 2 ? 'Evidence Capture' : s === 3 ? 'AI Analysis' : 'Submission'}
                  </span>
                </div>
                {s < 4 && <div className="h-[2px] flex-grow bg-outline-variant/30 min-w-[20px]"></div>}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Bento Layout for Form Sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Incident Type Selection */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="md:col-span-7 bg-surface-container-lowest p-8 rounded-[1.5rem] shadow-sm border border-outline-variant/10"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">category</span>
              1. Select Incident Type
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {incidentTypes.map((type) => (
                <button 
                  key={type.id}
                  onClick={() => setIncidentType(type.id)}
                  className={`flex flex-col items-start p-6 rounded-xl text-left transition-all hover:scale-[1.02] active:scale-95 group border-2 ${incidentType === type.id ? 'bg-primary-fixed border-primary' : 'bg-surface-container border-transparent hover:border-primary-fixed'}`}
                >
                  <span className="material-symbols-outlined mb-3 text-primary group-hover:scale-110 transition-transform">{type.icon}</span>
                  <span className="font-bold">{type.label}</span>
                  <span className="text-xs text-on-surface-variant">{type.sub}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Automated Emergency Protocols */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="md:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-secondary-fixed text-on-secondary-fixed p-8 rounded-[1.5rem] shadow-sm relative overflow-hidden flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">emergency</span>
                Protocols
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/20 rounded-lg">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Auto-Alert Regional Fire</span>
                    <span className="text-[10px] uppercase opacity-60">External Liaison</span>
                  </div>
                  <div className="w-12 h-6 bg-secondary-fixed-dim rounded-full p-1 flex justify-end">
                    <div className="w-4 h-4 bg-on-secondary-fixed rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/20 rounded-lg">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Seal Sector 04</span>
                    <span className="text-[10px] uppercase opacity-60">Physical Lockdown</span>
                  </div>
                  <div className="w-12 h-6 bg-on-secondary-fixed/10 rounded-full p-1 flex justify-start">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="w-full bg-on-secondary-fixed text-secondary-fixed py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
                    EXECUTE EMERGENCY
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Analysis Section */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="md:col-span-12 bg-surface-container-lowest p-8 rounded-[1.5rem] shadow-sm border border-outline-variant/10"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">psychology</span>
                  3. AI Triage Analysis
                </h3>
                <p className="text-on-surface-variant text-sm mb-6">The BioSafe AI engine will analyze the incident type and provide immediate countermeasures.</p>
                
                <div className="min-h-[200px] bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {isAnalyzing ? (
                      <motion.div 
                        key="analyzing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center h-full space-y-4"
                      >
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-primary font-bold animate-pulse">Analyzing Neural Patterns...</p>
                      </motion.div>
                    ) : aiAnalysis ? (
                      <motion.div 
                        key="result"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="prose prose-sm max-w-none text-on-surface-variant"
                      >
                        <div className="flex items-center gap-2 text-primary font-bold mb-4">
                          <span className="material-symbols-outlined">verified</span>
                          AI RECOMMENDATION
                        </div>
                        <p className="whitespace-pre-wrap leading-relaxed">{aiAnalysis}</p>
                      </motion.div>
                    ) : (
                      <div key="empty" className="flex flex-col items-center justify-center h-full opacity-40 text-center">
                        <span className="material-symbols-outlined text-5xl mb-2">query_stats</span>
                        <p className="text-sm font-medium">Select an incident type and run analysis to begin.</p>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              <div className="w-full md:w-80 flex flex-col gap-4">
                <button 
                  onClick={handleRunAIAnalysis}
                  disabled={!incidentType || isAnalyzing}
                  className="w-full bg-primary text-on-primary py-6 rounded-2xl font-bold shadow-lg hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 flex flex-col items-center gap-2"
                >
                  <span className="material-symbols-outlined text-3xl">bolt</span>
                  RUN AI TRIAGE
                </button>
                <div className="bg-surface-container-high p-6 rounded-2xl relative overflow-hidden h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">System Status</span>
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  </div>
                  <div className="my-4 flex items-center justify-center">
                    <span className="material-symbols-outlined text-5xl text-outline-variant">document_scanner</span>
                  </div>
                  <div className="text-[11px] font-medium leading-relaxed italic text-on-surface-variant">
                    "Neural engine ready for spectroscopic analysis. Awaiting input parameters."
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex justify-end">
          <button 
            onClick={() => onNavigate('INCIDENT_LOG')}
            className="px-10 py-4 bg-surface-container-high text-primary rounded-[1.5rem] font-bold tracking-tight shadow-sm flex items-center gap-3 hover:bg-surface-container-highest transition-all active:scale-95 group"
          >
            SUBMIT TO ARCHIVE
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
          </button>
        </div>
      </main>

        {/* BottomNavBar */}
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-surface/90 backdrop-blur-2xl border-t border-outline-variant/15 z-50 shadow-[0_-4px_40px_0_rgba(0,53,39,0.04)] rounded-t-[1.5rem] max-w-5xl mx-auto left-1/2 -translate-x-1/2">
          <button 
            onClick={() => onNavigate('SAFETY_ORACLE')}
            className="flex flex-col items-center justify-center text-primary/50 px-6 py-2 hover:bg-primary-container/10 rounded-full transition-all"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Status</span>
          </button>
          <div className="flex flex-col items-center justify-center bg-primary-container text-white rounded-[1.5rem] px-6 py-2 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-md">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_late</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Reports</span>
          </div>
          <button 
            onClick={() => onNavigate('INCIDENT_LOG')}
            className="flex flex-col items-center justify-center text-primary/50 px-6 py-2 hover:bg-primary-container/10 rounded-full transition-all"
          >
            <span className="material-symbols-outlined">history</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Archive</span>
          </button>
          <button 
            onClick={() => onNavigate('MAP')}
            className="flex flex-col items-center justify-center text-primary/50 px-6 py-2 hover:bg-primary-container/10 rounded-full transition-all"
          >
            <span className="material-symbols-outlined">emergency_home</span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Emergency</span>
          </button>
        </nav>

      {/* Floating UI Decorations */}
      <div className="fixed top-24 left-[-10%] w-[40%] h-[40%] bg-primary-fixed/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-24 right-[-10%] w-[40%] h-[40%] bg-secondary-fixed/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </div>
  );
};
