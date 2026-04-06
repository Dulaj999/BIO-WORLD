import React from 'react';
import { motion } from 'motion/react';
import { Screen } from '../../types';

interface RegistrationStatusProps {
  onBack: (screen: Screen) => void;
  onNavigate: (screen: Screen) => void;
}

export const RegistrationStatus: React.FC<RegistrationStatusProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="bg-background text-on-background min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_4px_40px_0_rgba(0,53,39,0.04)]">
        <div className="flex items-center px-6 h-16 w-full max-w-7xl mx-auto">
          <button 
            onClick={() => onBack('PORTAL')}
            className="active:scale-95 transition-transform hover:opacity-80 mr-4"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <h1 className="font-headline font-bold text-lg tracking-tight text-primary">Registration Status</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-8 space-y-8">
        {/* AI Onboarding Status Card */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-8 bio-gradient rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-xl"
          >
            {/* Abstract Bio-Pattern Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-primary-fixed/20 text-primary-fixed px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">75% Complete</span>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-secondary-fixed/20 flex items-center justify-center border border-white/10">
                    <span className="material-symbols-outlined text-[14px]">hub</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary-fixed/20 flex items-center justify-center border border-white/10">
                    <span className="material-symbols-outlined text-[14px]">memory</span>
                  </div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-lg">AI-Driven Vetting in Progress</h2>
              <p className="text-primary-fixed/80 text-lg mb-8 max-w-md">
                Our ecosystem of 50 specialized AI agents is currently synchronizing your documentation and validating technical proficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-fixed text-on-primary-fixed font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                  Check Activity Log <span className="material-symbols-outlined">query_stats</span>
                </button>
              </div>
            </div>
            {/* Circular Progress Visual */}
            <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2">
              <div className="w-48 h-48 border-8 border-white/5 rounded-full flex items-center justify-center relative">
                <svg className="w-full h-full -rotate-90">
                  <circle 
                    className="text-primary-fixed" 
                    cx="96" cy="96" fill="none" r="88" 
                    stroke="currentColor" 
                    strokeDasharray="552" 
                    strokeDashoffset="138" 
                    strokeLinecap="round" 
                    strokeWidth="8"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold">75%</span>
                  <span className="text-[10px] uppercase tracking-tighter opacity-70">Synchronized</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Metric Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-4 bg-surface-container-lowest rounded-[2rem] p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group"
          >
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">verified_user</span>
              <h3 className="text-2xl font-bold text-primary mb-2">Agent Confidence</h3>
              <p className="text-on-surface-variant text-sm">Synthetic analysis shows high alignment with bio-gas safety protocols.</p>
            </div>
            <div className="mt-8 relative z-10">
              <div className="flex items-end gap-1 mb-2">
                <div className="w-2 bg-primary h-8 rounded-full"></div>
                <div className="w-2 bg-primary h-12 rounded-full"></div>
                <div className="w-2 bg-primary h-16 rounded-full"></div>
                <div className="w-2 bg-primary h-10 rounded-full"></div>
                <div className="w-2 bg-primary h-14 rounded-full"></div>
                <div className="w-2 bg-secondary h-20 rounded-full"></div>
              </div>
              <p className="text-xs font-bold text-secondary uppercase tracking-widest">Optimal Growth Predicted</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-fixed/30 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
          </motion.div>
        </section>

        {/* Document Verification Checklist & Technical Vetting */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Document Checklist */}
          <div className="bg-surface-container-low rounded-[2rem] p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-primary">Identity & Compliance</h3>
              <span className="text-xs font-bold uppercase tracking-widest text-outline">Phase 01</span>
            </div>
            <div className="space-y-4">
              {/* Verified */}
              <div className="flex items-center justify-between p-5 bg-surface-container-lowest rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">badge</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Government ID</h4>
                    <p className="text-xs text-on-surface-variant">Verified by AI Bio-Scanner</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              {/* Pending */}
              <div className="flex items-center justify-between p-5 bg-surface-container-lowest rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">engineering</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Specialist License</h4>
                    <p className="text-xs text-on-surface-variant">Cross-referencing with local authority...</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary animate-spin">progress_activity</span>
              </div>
              {/* Action Needed */}
              <div className="flex items-center justify-between p-5 bg-surface-container-lowest rounded-2xl border-l-4 border-error">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-error-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-error">upload_file</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-error">Certifications</h4>
                    <p className="text-xs text-on-error-container">Blur detected. Please re-upload.</p>
                  </div>
                </div>
                <button className="text-xs font-extrabold text-white bg-error px-4 py-2 rounded-lg hover:opacity-90 active:scale-95 transition-all">RE-UPLOAD</button>
              </div>
            </div>
          </div>

          {/* Technical Vetting Module */}
          <div className="bg-primary-container rounded-[2rem] p-8 text-on-primary-container relative overflow-hidden min-h-[400px]">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <img 
                alt="Technical Vetting background" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnG4q-gEdCHygXQp_MF0JSqHZTYD00uekqDua13-8uVMYD7HLkJgN8IR6uM4JR1d0mhuLH9bhMwhkDUdxKX1pXfj4yYbGemZ17mkdiEJ_uZ7ip3c43a6jHnyUuhZFB4BMADfSl0-yzYeLTZSbK7NTS6oKlrXTt7RPMhQFGSUkJ0rhwU5YsXp6gGrb0d7i46oS_olVTNTaig6JqmB3gBHD3I2TxusLIyfwPEZzs4AlAsUWjTqmTQpWUR5-aPPht7jd98ZdJ73D1jvNr"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary-fixed mb-2">Technical Skills Lab</h3>
                <p className="text-on-primary-container/80 text-sm">Real-time simulation & proficiency benchmarking.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/20 backdrop-blur-md p-4 rounded-2xl">
                  <p className="text-[10px] uppercase tracking-widest mb-1 opacity-60">Pressure Testing</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">92%</span>
                    <span className="material-symbols-outlined text-primary-fixed text-sm">trending_up</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 mt-2 rounded-full overflow-hidden">
                    <div className="bg-primary-fixed h-full w-[92%] rounded-full"></div>
                  </div>
                </div>
                <div className="bg-black/20 backdrop-blur-md p-4 rounded-2xl">
                  <p className="text-[10px] uppercase tracking-widest mb-1 opacity-60">Safety Response</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">88%</span>
                    <span className="material-symbols-outlined text-secondary-fixed text-sm">bolt</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 mt-2 rounded-full overflow-hidden">
                    <div className="bg-secondary-fixed h-full w-[88%] rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="mt-auto bg-primary-fixed/10 p-6 rounded-2xl border border-primary-fixed/20">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary-fixed">clinical_notes</span>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">AI Agent Observation</h4>
                    <p className="text-xs leading-relaxed opacity-80">Excellent handling of methane transition protocols. Final synthesis scheduled for tonight at 22:00 UTC.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps & Support */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant/15 p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="w-24 h-24 shrink-0 rounded-full bg-tertiary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl">event_available</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Next Step: Virtual Induction</h3>
              <p className="text-on-surface-variant text-sm mb-6">Once your re-uploaded certificates are verified, you'll be invited to the Virtual Site Induction. This is a mandatory 45-minute bio-hazard training module.</p>
              <div className="flex items-center gap-4">
                <button className="bg-secondary text-white font-bold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-all active:scale-95">Set Availability</button>
                <button className="text-primary font-bold text-sm underline underline-offset-4">What to prepare?</button>
              </div>
            </div>
          </div>
          <div className="bg-tertiary-container text-white p-8 rounded-[2rem] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-primary">
                  <img 
                    alt="Support Agent" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHk6xtWjdnRgcbNbkxTS34giE3EGZio3HNxRYlVi2RLmoxaIaHIlcbn2Cd9N9ayuAeb7yIMJf41MRL-8R9wAD3U_g3Godjk1pf7m-pXAUWORR_EhODiMniwW_TGoNhRLTlxNasIbrQZNvNkB8vITxl2A0vwQyiMxlDJQMTzs5T_o2gXX-Oa0HFCkTLxeMNRub0a2A7vH5xlIEWdmmlYvrOR-0U6aA7TEXWGfHzDsD-072W7sPM3JPRrhO1kJGabR8fUc_HGNJl-Gcs"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-sm font-bold">Aria (Support AI)</span>
                <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span>
              </div>
              <h4 className="text-lg font-bold mb-2">Need Help?</h4>
              <p className="text-xs opacity-70 mb-6">Ask me anything about the vetting process or your status.</p>
            </div>
            <button className="w-full bg-white/10 hover:bg-white/20 py-4 rounded-xl font-bold text-sm transition-all border border-white/5 flex items-center justify-center gap-2">
              Open AI Chat <span className="material-symbols-outlined">forum</span>
            </button>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface/90 backdrop-blur-2xl rounded-t-[1.5rem] shadow-[0_-4px_40px_0_rgba(0,53,39,0.04)] max-w-lg mx-auto left-1/2 -translate-x-1/2">
        <button 
          onClick={() => onNavigate('PORTAL')}
          className="flex flex-col items-center justify-center text-primary/50 px-5 py-1.5 hover:text-secondary transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Overview</span>
        </button>
        <button 
          onClick={() => onNavigate('WORKER_ASSIGNMENTS')}
          className="flex flex-col items-center justify-center text-primary/50 px-5 py-1.5 hover:text-secondary transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined">assignment_turned_in</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Tasks</span>
        </button>
        <button 
          onClick={() => onNavigate('BIOSAFE_MONITOR')}
          className="flex flex-col items-center justify-center text-primary/50 px-5 py-1.5 hover:text-secondary transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined">assignment_late</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Reports</span>
        </button>
        <button 
          onClick={() => onNavigate('DIGITAL_CREDENTIALS')}
          className="flex flex-col items-center justify-center text-primary/50 px-5 py-1.5 hover:text-secondary transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined">badge</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Credentials</span>
        </button>
        <button 
          onClick={() => onNavigate('PROFILE')}
          className="flex flex-col items-center justify-center text-primary/50 px-5 py-1.5 hover:text-secondary transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined">account_circle</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
};
