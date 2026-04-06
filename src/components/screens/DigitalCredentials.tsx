import React from 'react';
import { motion } from 'motion/react';
import { Screen } from '../../types';

interface DigitalCredentialsProps {
  onNavigate: (screen: Screen) => void;
}

export const DigitalCredentials: React.FC<DigitalCredentialsProps> = ({ onNavigate }) => {
  return (
    <div className="bg-surface font-body text-on-surface overflow-x-hidden pb-32 min-h-screen">
      {/* Bio-Mesh Pattern Layer */}
      <div className="fixed inset-0 bio-mesh pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#003527 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl flex items-center justify-between px-6 py-4 w-full max-w-lg mx-auto left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4">
          <button className="text-primary active:scale-95 transition-transform hover:opacity-80">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        <h1 className="font-headline font-bold tracking-tight text-primary text-center">Digital Credentials</h1>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary">verified_user</span>
        </div>
      </header>

      <main className="relative mt-20 px-6 max-w-lg mx-auto">
        {/* Identity Section */}
        <div className="relative space-y-6">
          {/* Hero ID Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative group"
          >
            {/* Ambient Glow Behind Card */}
            <div className="absolute -inset-4 bg-primary-fixed/20 blur-[60px] rounded-full opacity-50 pointer-events-none"></div>
            <div className="relative overflow-hidden bg-surface-container-lowest rounded-[2rem] p-1 shadow-[0_-4px_40px_rgba(0,53,39,0.04)]">
              {/* Bio-Synthetic Aura Gradient Header */}
              <div className="h-32 bg-gradient-to-br from-primary-container to-primary rounded-t-[1.75rem] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bio-mesh" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute top-6 right-8 flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse shadow-[0_0_8px_#ffdf9f]"></span>
                  <span className="text-[10px] font-headline font-bold text-white uppercase tracking-widest">Active Status</span>
                </div>
              </div>
              <div className="px-8 pb-10 -mt-16 relative">
                {/* Profile Photo with Organic Frame */}
                <div className="relative w-40 h-40 mx-auto">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-secondary to-primary-fixed rounded-[2.5rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                  <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden border-4 border-surface-container-lowest shadow-xl bg-surface-container-high">
                    <img 
                      alt="Professional bio-gas specialist profile" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAti3OfGMS3j2RlmyQKUtKdkJjLU3Apjo4QZTBrfMjS6fOnJ3DAB_Gx0iAyqFhYZZ5Shxq2rx4UW39nYVvEN9KYbZWkhELvO7o9id5beoS9FPbzV7sBnKT7vStH85lEmuZFMao3LSXNTr-uGUoEb8SmgzH5_V9zkv4wTO2lKd-N_W76hQYcIXlGzle50uJIhpeg5N8zKlWdDgYzcHMvShPsI2QuGUpjeQA2rtI1RGXnHiPwtsnMYiKyIHgAFyfpJ2NuFIWACneGbjzo"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                {/* Identification Details */}
                <div className="mt-8 text-center space-y-2">
                  <h2 className="font-headline text-2xl font-bold tracking-tight text-primary">Dulaj Vishwanath Abeyweera</h2>
                  <p className="font-body text-primary/60 font-medium uppercase tracking-widest text-[10px]">CEO, Bio-World | Bio-Gas Specialist</p>
                  {/* Certification Badge */}
                  <div className="flex justify-center pt-4">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-surface-container-low rounded-xl border border-outline-variant/15">
                      <span className="material-symbols-outlined text-secondary scale-90" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
                      <span className="text-sm font-bold text-primary tracking-wide">Safety Level 2</span>
                    </div>
                  </div>
                </div>
                {/* Data Grid */}
                <div className="grid grid-cols-2 gap-4 mt-10">
                  <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10">
                    <span className="text-[10px] text-primary/40 font-bold uppercase tracking-tighter">Credential ID</span>
                    <p className="text-sm font-headline font-semibold text-primary mt-1">BW-0092-24X</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10">
                    <span className="text-[10px] text-primary/40 font-bold uppercase tracking-tighter">Expiry Date</span>
                    <p className="text-sm font-headline font-semibold text-primary mt-1">OCT 2026</p>
                  </div>
                </div>
                {/* Secure Verification QR */}
                <div className="mt-10 p-6 bg-surface rounded-3xl border border-outline-variant/15 flex flex-col items-center">
                  <div className="w-32 h-32 bg-white p-3 rounded-2xl shadow-sm border border-outline-variant/5">
                    <img 
                      alt="Secure AI Verification QR" 
                      className="w-full h-full opacity-80 mix-blend-multiply" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjYp8CgpPIyqcKZ1eGpwOlpuQLzcuG5y4481gWJcUxol3kDRjbcDSU2sXF30jFZ8TSqEj3bg4zjQapUArJ2Itm67NG1hzhrhe48RDQ1Z2nzGeIiFE0mON9hR0ZWdYIpNN-24j03Anp-ah0C_YfPQHPjgslglaE2DscbFRnkaLdGRthmNYmIj1N7LEC_rFEmJNATJP9ba854a8umYBJOLJRlT867xsalMr43mn6cbuRcfGkwMwOs588xz2DUVGBM3DNHJcTWjVi45bM"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-2 opacity-50">
                    <span className="material-symbols-outlined text-[14px]">lock</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase">Instant AI Verification</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Supporting Info Cards */}
          <div className="grid grid-cols-1 gap-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-[1.5rem] bg-surface-container-low border border-outline-variant/10 flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">electric_bolt</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">Biometric Health Sync</p>
                  <p className="text-xs text-primary/50">Optimal vital signs detected</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-primary/30">chevron_right</span>
            </motion.div>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-surface/90 backdrop-blur-2xl border-t border-outline-variant/15 shadow-[0_-4px_40px_rgba(0,53,39,0.04)] z-50 rounded-t-[1.5rem] max-w-lg mx-auto left-1/2 -translate-x-1/2">
        {/* Overview Tab */}
        <button 
          onClick={() => onNavigate('PORTAL')}
          className="flex flex-col items-center justify-center text-primary/50 px-5 py-1.5 hover:text-secondary transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Overview</span>
        </button>
        {/* Tasks Tab */}
        <button 
          onClick={() => onNavigate('WORKER_ASSIGNMENTS')}
          className="flex flex-col items-center justify-center text-primary/50 px-5 py-1.5 hover:text-secondary transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined">assignment_turned_in</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Tasks</span>
        </button>
        {/* Reports Tab */}
        <button 
          onClick={() => onNavigate('BIOSAFE_MONITOR')}
          className="flex flex-col items-center justify-center text-primary/50 px-5 py-1.5 hover:text-secondary transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined">assignment_late</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Reports</span>
        </button>
        {/* Credentials Tab (Active) */}
        <div className="flex flex-col items-center justify-center bg-primary-container text-white rounded-[1.5rem] px-5 py-1.5 transition-all duration-500 cursor-pointer">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>badge</span>
          <span className="font-body text-[10px] font-semibold uppercase tracking-wider mt-1">Credentials</span>
        </div>
        {/* Profile Tab */}
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
