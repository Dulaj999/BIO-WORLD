import React from 'react';
import { motion } from 'motion/react';
import { Screen } from '../../types';

interface WorkerAssignmentsProps {
  onNavigate: (screen: Screen) => void;
}

export const WorkerAssignments: React.FC<WorkerAssignmentsProps> = ({ onNavigate }) => {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_4px_40px_0_rgba(0,53,39,0.04)] flex items-center justify-between px-6 h-16 w-full max-w-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container/10 active:scale-95 transition-transform cursor-pointer">
            <img 
              alt="Specialist Profile" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUEOmBwsBWYv3jrLaLk2aVWBfcXFTLDItREcWuZOfP1Z_z8Wp6AKAtQpYhKP9S-EER5h7fqdzsqi3_8p7StjFUNLXXA-40-Am5bYAv2DuO7dYJSmFrLoWT9h1Fw0prxaljLB0jewV65lVQtnUKMW1EWS7_GA8PH8gkgeDeOwr01D8YA39Ocap-TDF_oqhOIK_XPkfr71Aj0m0KXcLZjQ0gL5kL9twHMHMbYjom0_zUQlJNiXwbZUkpHgFDBIhmsXJuLb3Qk3vqibyv"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-headline text-xl font-bold text-primary tracking-tight">BioArb Portal</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center text-primary rounded-full hover:bg-primary-container/5 transition-colors duration-300 active:scale-95">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <main className="pt-24 px-6 max-w-5xl mx-auto space-y-8">
        {/* Ecosystem Pulse Header */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-2">
            <p className="text-on-primary-container font-semibold tracking-wider text-xs uppercase opacity-80">Zone 04 • Sector North</p>
            <h1 className="text-4xl font-bold text-primary tracking-tight leading-tight">Worker Assignment List</h1>
          </div>
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-primary-container p-5 rounded-xl text-on-primary-container flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-primary-fixed/10 blur-3xl rounded-full"></div>
            <div className="flex justify-between items-start z-10">
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">Ecosystem Pulse</span>
              <span className="flex h-2 w-2 rounded-full bg-primary-fixed shadow-[0_0_8px_#b0f0d6]"></span>
            </div>
            <div className="mt-4 z-10">
              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold text-on-primary">98.4%</span>
                <span className="text-xs mb-1 text-primary-fixed">Efficiency</span>
              </div>
              <div className="w-full bg-primary/30 h-1 rounded-full mt-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '98.4%' }}
                  className="bg-primary-fixed h-full"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Dynamic Task Queue */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-fixed-dim">assignment_turned_in</span>
              Active Queue
            </h2>
            <div className="flex items-center gap-2 text-xs font-bold text-outline">
              <span className="px-3 py-1 bg-surface-container-high rounded-full">3 Tasks Total</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Task Card 1: Critical */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ y: -2 }}
              className="bg-surface-container-lowest/70 backdrop-blur-md rounded-[1.5rem] p-6 shadow-[0_8px_30px_rgb(0,53,39,0.04)] border border-outline-variant/15 flex flex-col md:flex-row gap-6 transition-all duration-300"
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-error-container text-on-error-container text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-error rounded-full"></span>
                    AI Priority: Critical
                  </span>
                  <span className="text-xs text-outline font-medium">Ref: BIO-882-X</span>
                </div>
                <h3 className="text-2xl font-bold text-primary">Emergency Bio-Gas Leak Response</h3>
                <div className="flex flex-wrap gap-4 text-sm text-on-surface-variant">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">distance</span>
                    Sector 7, Main Hub
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">schedule</span>
                    Est. 45 mins
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    <span className="font-bold">Safety Level 3 Required</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3 md:min-w-[180px]">
                <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary-container/10 active:scale-95 transition-all">Start Task</button>
                <button className="w-full bg-surface-container text-primary py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-surface-container-high active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-sm">near_me</span>
                  Navigate
                </button>
              </div>
            </motion.div>

            {/* Task Card 2: High */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="bg-surface-container-lowest/70 backdrop-blur-md rounded-[1.5rem] p-6 shadow-[0_8px_30px_rgb(0,53,39,0.04)] border border-outline-variant/15 flex flex-col md:flex-row gap-6 transition-all duration-300"
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    AI Priority: High
                  </span>
                  <span className="text-xs text-outline font-medium">Ref: BIO-901-S</span>
                </div>
                <h3 className="text-2xl font-bold text-primary">Solar Hub Grid Integration</h3>
                <div className="flex flex-wrap gap-4 text-sm text-on-surface-variant">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">distance</span>
                    West Canopy, Zone 2
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">schedule</span>
                    Est. 1.5 hours
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">verified_user</span>
                    <span className="font-bold">Safety Level 2</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3 md:min-w-[180px]">
                <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary-container/10 active:scale-95 transition-all">Start Task</button>
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-surface-container p-3 rounded-xl flex items-center justify-center hover:bg-surface-container-high transition-all active:scale-90">
                    <span className="material-symbols-outlined text-lg">near_me</span>
                  </button>
                  <button className="bg-tertiary-fixed text-on-tertiary-fixed p-3 rounded-xl flex items-center justify-center hover:bg-tertiary-fixed-dim transition-all active:scale-90">
                    <span className="material-symbols-outlined text-lg">psychology</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Task Card 3: Medium */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-surface-container-low/50 rounded-[1.5rem] p-6 border border-outline-variant/10 flex flex-col md:flex-row gap-6 opacity-80"
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    AI Priority: Medium
                  </span>
                  <span className="text-xs text-outline font-medium">Ref: BIO-412-M</span>
                </div>
                <h3 className="text-xl font-bold text-primary/80">Primary Digester Pressure Calibration</h3>
                <div className="flex flex-wrap gap-4 text-xs text-on-surface-variant/70">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">distance</span>
                    Core Basin
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    Est. 30 mins
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button className="px-6 py-3 border border-outline-variant rounded-xl font-bold text-xs text-outline hover:bg-surface-container-high transition-all">Queue Task</button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Support Context */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-secondary-fixed/20 p-6 rounded-[2rem] border border-secondary-fixed/30 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary shadow-[0_0_20px_rgba(255,223,159,0.5)]">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-secondary font-bold text-lg">Intelligent Resource Optimization</h4>
            <p className="text-on-secondary-fixed-variant text-sm mt-1">Our 50-agent AI core suggests a 15-minute hydration break before tackling the Sector 7 leak for optimal biological performance.</p>
          </div>
          <button className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-bold text-sm shadow-xl shadow-secondary/10 hover:scale-105 active:scale-95 transition-all">Request Support</button>
        </motion.section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-2xl border-t border-outline-variant/15 rounded-t-[1.5rem] shadow-[0_-4px_40px_0_rgba(0,53,39,0.04)] flex justify-around items-center px-4 pb-6 pt-3 max-w-5xl mx-auto left-1/2 -translate-x-1/2">
        <button 
          onClick={() => onNavigate('PORTAL')}
          className="flex flex-col items-center justify-center text-primary/50 px-5 py-1.5 hover:text-secondary transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Overview</span>
        </button>
        <div className="flex flex-col items-center justify-center bg-primary-container text-white rounded-[1.5rem] px-5 py-1.5 transition-all duration-500 cursor-pointer">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_turned_in</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Tasks</span>
        </div>
        <button 
          onClick={() => onNavigate('DIGITAL_CREDENTIALS')}
          className="flex flex-col items-center justify-center text-primary/50 px-5 py-1.5 hover:text-secondary transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined">badge</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Credentials</span>
        </button>
        <button 
          onClick={() => onNavigate('BIOSAFE_MONITOR')}
          className="flex flex-col items-center justify-center text-primary/50 px-5 py-1.5 hover:text-secondary transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined">assignment_late</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Reports</span>
        </button>
        <button 
          onClick={() => onNavigate('MAP')}
          className="flex flex-col items-center justify-center text-primary/50 px-5 py-1.5 hover:text-secondary transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined">distance</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Map</span>
        </button>
        <button 
          onClick={() => onNavigate('PROFILE')}
          className="flex flex-col items-center justify-center text-primary/50 px-5 py-1.5 hover:text-secondary transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined">account_circle</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Profile</span>
        </button>
      </nav>

      {/* Floating Map Preview Section */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => onNavigate('MAP')}
        className="fixed bottom-28 right-6 w-32 h-32 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/50 cursor-pointer hover:scale-110 transition-transform duration-500 hidden md:block z-40"
      >
        <img 
          alt="Map Preview" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHWQgGUjsvbDe8dakCm-J847TgctvvMPhQVQmHUNtrPn6if3qHsIN94A1AQNF1F2W4jsPY6pOrMVR9NedZLwF1O-mAMXDIYRjKv-zjJ3AdebvtqDppyQhUzYaCS31xBPZCBOzDSGkW7aE7ly-Fy1oNgaUnF2Mp3h0EA6Ha1sWpsocJ_lV5gFbkXT2hM4piEoUZfUUmcL1sjKRHFIMIX9EeOuw3f3OocFV2ModHiRrV-boKnsxQUFWBuwtqLjzT0PkT3Lewehn0SwQq"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-2">
          <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Sector View</span>
        </div>
      </motion.div>
    </div>
  );
};
