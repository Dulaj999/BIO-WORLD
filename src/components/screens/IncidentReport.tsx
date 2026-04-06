import React from 'react';
import { motion } from 'motion/react';
import { Screen } from '../../types';

interface IncidentReportProps {
  onNavigate: (screen: Screen) => void;
}

export const IncidentReport: React.FC<IncidentReportProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background font-body text-on-background min-h-screen pb-32 selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_4px_40px_0_rgba(0,53,39,0.04)]">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-none">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('INCIDENT_LOG')}
              className="active:scale-95 transition-transform p-2 hover:bg-white/50 rounded-full"
            >
              <span className="material-symbols-outlined text-primary">arrow_back</span>
            </button>
            <h1 className="font-headline font-bold tracking-tight text-primary text-xl">Incident Report</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-xs font-bold uppercase tracking-wider">Neutralized</span>
          </div>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-5xl mx-auto space-y-8">
        {/* Hero Section: Sector G-12 Pressure Spike */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative overflow-hidden rounded-[2rem] bg-primary text-on-primary p-8 md:p-12 shadow-xl"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-fixed to-transparent scale-150"></div>
          </div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="font-headline font-medium text-primary-fixed uppercase tracking-[0.2em] mb-2">Technical Dossier #992-G</p>
                <h2 className="font-headline text-4xl md:text-6xl font-bold leading-tight">Sector G-12<br/>Pressure Spike</h2>
                <div className="flex items-center gap-4 mt-6 text-primary-fixed/80">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span className="text-sm font-semibold">Today, 04:12:09 UTC</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-primary-fixed/40"></div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="text-sm font-semibold">Bio-Dome Alpha</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest text-primary-fixed/60 mb-1">Severity Matrix</p>
                  <p className="text-2xl font-headline font-bold text-secondary-container">Class 4 Anomaly</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Bento Grid: Summary & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Impact Summary */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="md:col-span-2 bg-surface-container-lowest rounded-[1.5rem] p-8 shadow-[0_4px_40px_0_rgba(0,53,39,0.04)]"
          >
            <h3 className="font-headline text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">analytics</span> Impact Summary
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              The pressure spike in Sector G-12 posed a <span className="text-error font-bold">94% risk of structural breach</span> within the primary bio-membrane. However, due to hyper-localized containment and rapid AI mitigation, the actual outcome resulted in <span className="text-primary font-bold">0% structural damage</span> and a temporary 2% drop in localized oxygen production.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface-container-low rounded-xl">
                <p className="text-xs text-on-surface-variant/60 font-bold uppercase mb-1">Potential Risk</p>
                <p className="text-2xl font-headline font-bold text-error">Catastrophic</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-xs text-on-surface-variant/60 font-bold uppercase mb-1">Actual Impact</p>
                <p className="text-2xl font-headline font-bold text-primary">Negligible</p>
              </div>
            </div>
          </motion.div>

          {/* Bot Network Participation */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-primary-container text-on-primary-container rounded-[1.5rem] p-8 flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
            </div>
            <div>
              <h3 className="font-headline text-lg font-bold text-on-primary-container/80 mb-2">Bot Swarm</h3>
              <p className="text-4xl font-headline font-bold">14,208</p>
              <p className="text-sm mt-2 opacity-70">Bots mobilized from the 1M global network for localized sealing.</p>
            </div>
            <div className="mt-8 pt-4 border-t border-on-primary-container/10">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                <span>Utilization</span>
                <span>1.4%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-primary-fixed w-[1.4%]"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI-Assisted Root Cause Analysis */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-primary text-on-primary rounded-[2rem] p-8 shadow-xl overflow-hidden relative border border-primary-fixed/20"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <div>
                <h3 className="font-headline text-3xl font-bold text-primary-fixed flex items-center gap-3">
                  <span className="material-symbols-outlined text-4xl">psychology</span>
                  AI-Assisted Root Cause Analysis
                </h3>
                <p className="text-primary-fixed/60 text-sm mt-1 uppercase tracking-widest font-bold">Advanced Diagnostics Engine v4.2</p>
              </div>
              <div className="bg-primary-container/40 backdrop-blur px-6 py-3 rounded-2xl border border-primary-fixed/30 text-center">
                <p className="text-[10px] uppercase font-bold text-primary-fixed/60 mb-1">Confidence Score</p>
                <p className="text-3xl font-headline font-bold text-secondary-container">99.7%</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Neural Pathway Analysis Visualization */}
              <div className="bg-black/20 rounded-3xl p-6 border border-white/5 relative h-80 flex flex-col">
                <h4 className="text-xs font-bold text-primary-fixed uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
                  Neural Pathway Analysis
                </h4>
                <div className="flex-1 flex items-center justify-center relative">
                  <svg className="w-full h-full max-w-[400px]" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="pathGrad" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#b0f0d6', stopOpacity: 0 }}></stop>
                        <stop offset="50%" style={{ stopColor: '#b0f0d6', stopOpacity: 1 }}></stop>
                        <stop offset="100%" style={{ stopColor: '#ffc329', stopOpacity: 1 }}></stop>
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="100" fill="#b0f0d6" r="4"></circle>
                    <text fill="#b0f0d6" fontSize="8" fontWeight="bold" x="30" y="85">SENSOR DRIFT</text>
                    <circle cx="50" cy="150" fill="#b0f0d6" r="4"></circle>
                    <text fill="#b0f0d6" fontSize="8" fontWeight="bold" x="25" y="170">THERMAL FLUX</text>
                    <circle cx="200" cy="100" fill="#b0f0d6" r="6"></circle>
                    <text fill="#b0f0d6" fontSize="10" fontWeight="bold" x="175" y="85">AI SYNTHESIS</text>
                    <circle cx="350" cy="100" fill="#ffc329" r="8"></circle>
                    <text fill="#ffc329" fontSize="10" fontWeight="bold" x="320" y="125">MICRO-FRACTURE</text>
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "linear" }}
                      d="M 54 100 L 194 100" fill="none" stroke="url(#pathGrad)" strokeWidth="1.5"
                    ></motion.path>
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "linear", delay: 0.5 }}
                      d="M 54 150 Q 120 150 194 105" fill="none" stroke="url(#pathGrad)" strokeWidth="1.5"
                    ></motion.path>
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "linear", delay: 2 }}
                      d="M 206 100 L 342 100" fill="none" stroke="#ffc329" strokeWidth="2"
                    ></motion.path>
                  </svg>
                  <div className="absolute bottom-2 left-6 text-[10px] text-primary-fixed/40 italic">
                    Cross-referencing S-G12 drift with localized environmental variables...
                  </div>
                </div>
              </div>
              {/* Root Cause & Prevention */}
              <div className="space-y-6">
                <div className="p-6 bg-primary-container/20 rounded-3xl border-l-4 border-secondary-container">
                  <h4 className="text-xs font-bold text-secondary-container uppercase tracking-widest mb-3">Primary Driver Identification</h4>
                  <p className="text-xl font-headline font-bold leading-snug">
                    Micro-fracture in containment seal (Seal-ID: G12-SC-44) due to <span className="text-secondary-container">unexpected thermal expansion</span> in the underlying composite mesh.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-black/10 rounded-2xl border border-white/5">
                    <h4 className="text-[10px] font-bold text-primary-fixed/60 uppercase tracking-widest mb-2">Bot Swarm Intelligence</h4>
                    <p className="text-sm text-primary-fixed/90">
                      <span className="font-bold text-primary-fixed">1,000,000</span> bots globally synchronized to verify structural integrity and feed real-time stress data into the analysis loop.
                    </p>
                  </div>
                  <div className="p-5 bg-black/10 rounded-2xl border border-white/5">
                    <h4 className="text-[10px] font-bold text-secondary-container/80 uppercase tracking-widest mb-2">Prevention Protocol</h4>
                    <p className="text-sm text-primary-fixed/90 italic">
                      "Deployment of dynamic thermal shielding adjustment in Sector G-12 recommended to mitigate 12:00-14:00 solar peaks."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Sensor Data Visualization */}
        <section className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_8px_40px_0_rgba(0,53,39,0.02)]">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary">Pressure Dynamics</h3>
              <p className="text-sm text-on-surface-variant">Real-time sensor relay (S-G12-004 through S-G12-098)</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-secondary"></span> Actual
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-primary-fixed"></span> Baseline
              </div>
            </div>
          </div>
          <div className="relative h-64 w-full flex items-end gap-2 group">
            {/* Mock Graph Lines */}
            {[32, 36, 44].map((h, i) => (
              <div key={i} className="flex-1 bg-surface-container-low rounded-t-lg transition-all hover:bg-secondary/20 relative" style={{ height: `${h}%` }}>
                <div className="absolute bottom-0 w-full bg-secondary opacity-30 h-1/2"></div>
              </div>
            ))}
            {/* The Spike */}
            <div className="flex-1 bg-error/10 rounded-t-lg h-60 border-x border-error/20 relative">
              <div className="absolute bottom-0 w-full bg-error opacity-40 h-[95%]"></div>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-error text-white text-[10px] font-bold px-2 py-1 rounded">102.4 PSI</div>
            </div>
            {/* Stabilization */}
            {[40, 34, 32, 30].map((h, i) => (
              <div key={i} className="flex-1 bg-surface-container-low rounded-t-lg transition-all hover:bg-secondary/20 relative" style={{ height: `${h}%` }}>
                <div className="absolute bottom-0 w-full bg-secondary opacity-30 h-1/3"></div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-[10px] text-on-surface-variant font-bold uppercase tracking-widest px-1">
            <span>04:10:00</span>
            <span>04:11:00</span>
            <span className="text-error">04:12:09 (Spike)</span>
            <span>04:13:00</span>
            <span>04:14:00</span>
          </div>
        </section>

        {/* Intervention Log */}
        <section className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline text-2xl font-bold text-primary">Intervention Log</h3>
            <div className="px-4 py-2 bg-surface-container-high rounded-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
              <span className="text-xs font-bold text-primary">Active Agent: VANGUARD-7</span>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { time: '04:12:10', title: 'Protocol Initiation', desc: 'VANGUARD-7 detected anomalous thermal expansion in Sector G-12. Automated cooling systems overridden for maximum venting.', color: 'border-primary' },
              { time: '04:12:14', title: 'Swarm Redistribution', desc: '14,208 nano-bots re-routed from maintenance grid B. Structural bonding agent applied to micro-fractures in Panel 44-D.', color: 'border-secondary' },
              { time: '04:12:45', title: 'Pressure Equalization', desc: 'Internal pressure stabilized at 44.2 PSI. VANGUARD-7 returns system control to local biosphere managers.', color: 'border-primary-fixed-dim' }
            ].map((log, i) => (
              <motion.div 
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-surface-container-lowest p-6 rounded-2xl flex gap-6 items-start shadow-sm border-l-4 ${log.color}`}
              >
                <span className="font-headline font-bold text-primary/40 text-sm mt-1">{log.time}</span>
                <div>
                  <h4 className="font-bold text-primary text-lg">{log.title}</h4>
                  <p className="text-on-surface-variant text-sm mt-1">{log.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Administrative Audit */}
        <section className="bg-tertiary text-on-tertiary rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <span className="material-symbols-outlined text-tertiary-fixed/10 text-9xl">security</span>
          </div>
          <div className="relative z-10">
            <h3 className="font-headline text-2xl font-bold mb-8">Administrative Audit</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-xs font-bold text-tertiary-fixed uppercase tracking-widest mb-4">Notification Chain</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">person</span>
                    </div>
                    <span className="text-sm font-medium">CEO (Direct Alert)</span>
                    <span className="text-[10px] px-2 py-0.5 bg-primary-fixed text-on-primary-fixed rounded">Confirmed</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">engineering</span>
                    </div>
                    <span className="text-sm font-medium">Biosphere Director</span>
                    <span className="text-[10px] px-2 py-0.5 bg-primary-fixed text-on-primary-fixed rounded">Confirmed</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">shield</span>
                    </div>
                    <span className="text-sm font-medium">Global Security Council</span>
                    <span className="text-[10px] px-2 py-0.5 bg-tertiary-fixed-dim text-on-tertiary-fixed rounded">Log Only</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-tertiary-fixed uppercase tracking-widest mb-4">Triggered Protocols</p>
                <div className="space-y-3">
                  <div className="p-3 bg-tertiary-container/50 rounded-xl flex justify-between items-center">
                    <span className="text-sm">Biosphere Containment 04</span>
                    <span className="material-symbols-outlined text-primary-fixed text-sm">check_circle</span>
                  </div>
                  <div className="p-3 bg-tertiary-container/50 rounded-xl flex justify-between items-center">
                    <span className="text-sm">Automated Evacuation (Pre-Check)</span>
                    <span className="material-symbols-outlined text-primary-fixed text-sm">check_circle</span>
                  </div>
                  <div className="p-3 bg-tertiary-container/50 rounded-xl flex justify-between items-center">
                    <span className="text-sm">Post-Incident Analytics Generation</span>
                    <span className="material-symbols-outlined text-secondary-fixed-dim text-sm">pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-2xl border-t border-outline-variant/15 rounded-t-[1.5rem] shadow-[0_-8px_40px_0_rgba(0,53,39,0.04)] px-4 pt-2 pb-6">
        <div className="flex justify-around items-center max-w-lg mx-auto">
          <button 
            onClick={() => onNavigate('PORTAL')}
            className="flex flex-col items-center gap-1 text-[#80bea6] hover:text-primary transition-all active:scale-90"
          >
            <span className="material-symbols-outlined">nature_people</span>
            <span className="font-body text-[11px] font-semibold">Ecosystem</span>
          </button>
          <button 
            onClick={() => onNavigate('INCIDENT_LOG')}
            className="flex flex-col items-center gap-1 text-primary bg-primary-container/10 rounded-xl px-4 py-1 transition-all active:scale-90"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>report_problem</span>
            <span className="font-body text-[11px] font-semibold">Incidents</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#80bea6] hover:text-primary transition-all active:scale-90">
            <span className="material-symbols-outlined">sensors</span>
            <span className="font-body text-[11px] font-semibold">Sensors</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#80bea6] hover:text-primary transition-all active:scale-90">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body text-[11px] font-semibold">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
