import React from 'react';
import { motion } from 'motion/react';
import { Screen } from '../../types';

interface CertificationSuccessProps {
  onNavigate: (screen: Screen) => void;
}

export const CertificationSuccess: React.FC<CertificationSuccessProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background font-body text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed antialiased min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_4px_40px_0_rgba(0,53,39,0.04)]">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-2xl mx-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('TRAINING')}
              className="text-primary active:scale-95 transition-transform hover:opacity-80"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="font-headline font-bold text-lg tracking-tight text-primary">Certification</h1>
          </div>
          <div className="text-primary font-bold tracking-tighter">BIO-CORP</div>
        </div>
        <div className="bg-gradient-to-b from-surface-container-low to-transparent h-4"></div>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-10">
        {/* Hero Section: Badge & Congratulations */}
        <section className="flex flex-col items-center text-center space-y-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 12 }}
            className="relative group"
          >
            {/* Bio-Luminescent Effect Background */}
            <div className="absolute inset-0 bg-primary-fixed opacity-20 blur-3xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-700"></div>
            {/* 3D Style Badge Container */}
            <div className="relative w-48 h-48 bg-primary-container rounded-full flex items-center justify-center bio-glow border border-primary-fixed/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-primary-fixed opacity-40"></div>
              <img 
                alt="Bio-Gas Safety Level 2 Badge" 
                className="w-32 h-32 relative z-10 drop-shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_59kdbK8fpHSkOnbAxq1L5Ht4a1sANj4UoYbJVjDSfIsv0t9tHyZ_tt_3I3515t9wFw6INrhXS95vHDQlffqYRfCDISJNA4cI6XzzKzTpRiWcxbL_MDPHKAPBFYGVCWMAU4eKqNF9jTrvu-29Ni2Iigih5e3hPFZ1UAH2RQClWcB_TyCuxdxYpudIy0mCY7Ci5jnHLShOmBQJg_2LRJsBm1UMv0cDtZOUS1azXxXSi0CtxPKVqrsaR4uozY3CoCg6pWC6bMasyIcr"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-[10px] font-headline font-bold text-primary-fixed uppercase tracking-[0.2em]">Safety Level 2</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <h2 className="font-headline font-bold text-4xl tracking-tight text-primary">Congratulations, Specialist!</h2>
            <p className="text-on-primary-container max-w-md mx-auto text-lg leading-relaxed">
              <span className="font-bold text-primary block mb-1">Dulaj Vishwanath Abeyweera</span>
              You have successfully passed the Bio-Gas Specialist Core assessment.
            </p>
          </motion.div>
        </section>

        {/* Bento Stats Grid */}
        <section className="grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-surface-container-lowest asymmetric-card p-6 border border-outline-variant/15 flex flex-col justify-center items-center"
          >
            <span className="text-on-primary-container font-label uppercase text-[10px] tracking-widest mb-1">Total Score</span>
            <div className="font-headline font-bold text-3xl text-primary">92%</div>
            <div className="w-12 h-1 bg-primary-fixed rounded-full mt-2"></div>
          </motion.div>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-surface-container-lowest asymmetric-card p-6 border border-outline-variant/15 flex flex-col justify-center items-center"
          >
            <span className="text-on-primary-container font-label uppercase text-[10px] tracking-widest mb-1">Time Taken</span>
            <div className="font-headline font-bold text-3xl text-primary">12m 40s</div>
            <div className="w-12 h-1 bg-secondary-fixed rounded-full mt-2"></div>
          </motion.div>
        </section>

        {/* Impact Highlight Section */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-primary-container text-on-primary rounded-xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/10 blur-3xl -mr-16 -mt-16 rounded-full"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="p-3 bg-primary-fixed/20 rounded-lg shrink-0 self-start">
              <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-lg text-primary-fixed">Network Expansion Unlocked</h3>
              <p className="text-on-primary-container/80 text-sm mt-1 leading-relaxed">Your specialized status now grants administrative access to advanced service nodes within the BIO World ecosystem, increasing your operation range by 45%.</p>
            </div>
          </div>
        </motion.section>

        {/* Next Milestone: Road Map Style */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <h4 className="font-headline font-bold text-primary px-2">Next Milestone</h4>
          <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center border border-outline-variant/20">
                <span className="material-symbols-outlined text-outline">verified_user</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-end mb-1">
                  <span className="font-bold text-primary">System Auditor</span>
                  <span className="text-xs font-label text-on-primary-container">0/15 Modules</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-outline-variant h-full w-[0%]"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              <div className="shrink-0 px-3 py-1 bg-surface-container-lowest border border-outline-variant/10 rounded-full text-xs text-on-surface-variant italic">Regulatory Ethics</div>
              <div className="shrink-0 px-3 py-1 bg-surface-container-lowest border border-outline-variant/10 rounded-full text-xs text-on-surface-variant italic">Pressure Dynamics</div>
              <div className="shrink-0 px-3 py-1 bg-surface-container-lowest border border-outline-variant/10 rounded-full text-xs text-on-surface-variant italic">Risk Assessment</div>
            </div>
          </div>
        </motion.section>

        {/* CTA Actions */}
        <section className="flex flex-col gap-3">
          <button 
            onClick={() => onNavigate('DIGITAL_CREDENTIALS')}
            className="bg-primary text-on-primary font-headline font-bold py-4 rounded-xl text-center shadow-lg active:scale-[0.98] transition-all hover:opacity-90"
          >
            View Certificate
          </button>
          <button 
            onClick={() => onNavigate('TRAINING')}
            className="bg-secondary-fixed text-on-secondary-fixed font-headline font-bold py-4 rounded-xl text-center active:scale-[0.98] transition-all hover:brightness-95"
          >
            Continue Training
          </button>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-2xl border-t border-outline-variant/15 flex justify-around items-center px-4 pt-3 pb-6 rounded-t-[1.5rem] z-50 max-w-2xl mx-auto left-1/2 -translate-x-1/2">
        <button 
          onClick={() => onNavigate('TRAINING')}
          className="flex flex-col items-center justify-center bg-primary-container text-white rounded-2xl px-5 py-2 active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined">school</span>
          <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Training</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-primary-container/50 px-5 py-2 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">military_tech</span>
          <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Achievements</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-primary-container/50 px-5 py-2 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">psychology_alt</span>
          <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Support</span>
        </button>
        <button 
          onClick={() => onNavigate('PROFILE')}
          className="flex flex-col items-center justify-center text-on-primary-container/50 px-5 py-2 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
};
