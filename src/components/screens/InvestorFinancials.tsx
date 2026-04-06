import React from 'react';
import { motion } from 'motion/react';
import { Screen } from '../../types';

interface InvestorFinancialsProps {
  onNavigate: (screen: Screen) => void;
}

export const InvestorFinancials: React.FC<InvestorFinancialsProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-xl flex justify-between items-center px-8 h-16 w-full max-w-full border-b border-outline-variant/10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('PORTAL')}
            className="text-[#003527] hover:opacity-70 transition-all scale-95 active:scale-90 cursor-pointer flex items-center"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <span className="font-headline text-lg font-bold text-[#003527]">ARBORETUM</span>
        </div>
        <div className="font-headline tracking-tight font-bold uppercase text-xs text-[#003527]">INVESTOR DECK 2024</div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8">
            <span 
              onClick={() => onNavigate('INVESTOR_DECK')}
              className="text-[#003527]/60 font-headline font-bold text-xs tracking-widest hover:opacity-70 transition-opacity cursor-pointer"
            >
              VISION
            </span>
            <span className="text-[#003527]/60 font-headline font-bold text-xs tracking-widest hover:opacity-70 transition-opacity cursor-pointer uppercase">Market</span>
            <span className="text-[#795900] font-headline font-bold text-xs tracking-widest uppercase">Financials</span>
          </nav>
          <button className="text-[#003527] hover:opacity-70 transition-all scale-95 active:scale-90 cursor-pointer">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </header>

      {/* Navigation Drawer */}
      <aside className="fixed left-0 top-0 h-screen w-80 z-[60] bg-[#f7f9fb] rounded-r-2xl shadow-[40px_0_40px_rgba(0,53,39,0.04)] hidden lg:flex flex-col pt-24 border-r border-outline-variant/10">
        <div className="px-8 mb-12">
          <h2 className="font-headline text-2xl font-black text-[#003527]">Executive Summary</h2>
          <p className="text-on-surface-variant text-sm mt-2">Proprietary Growth Model</p>
        </div>
        <nav className="flex flex-col gap-1">
          <div 
            onClick={() => onNavigate('INVESTOR_DECK')}
            className="text-[#003527]/70 mx-4 my-1 p-4 flex items-center gap-4 font-body font-medium hover:bg-[#f2f4f6] rounded-xl transition-all duration-300 cursor-pointer"
          >
            <span className="material-symbols-outlined">visibility</span> Vision
          </div>
          <div className="text-[#003527]/70 mx-4 my-1 p-4 flex items-center gap-4 font-body font-medium hover:bg-[#f2f4f6] rounded-xl transition-all duration-300 cursor-pointer">
            <span className="material-symbols-outlined">insights</span> Market Opportunity
          </div>
          <div className="bg-[#064e3b] text-white rounded-xl mx-4 my-1 p-4 flex items-center gap-4 font-body font-medium shadow-lg shadow-primary-container/20">
            <span className="material-symbols-outlined">payments</span> Financials
          </div>
          <div className="text-[#003527]/70 mx-4 my-1 p-4 flex items-center gap-4 font-body font-medium hover:bg-[#f2f4f6] rounded-xl transition-all duration-300 cursor-pointer">
            <span className="material-symbols-outlined">timeline</span> Roadmap
          </div>
        </nav>
        <div className="mt-auto p-8 border-t border-outline-variant/10">
          <div className="bg-secondary-fixed text-on-secondary-fixed p-4 rounded-xl">
            <p className="text-xs font-bold uppercase tracking-tighter">Current Valuation</p>
            <p className="text-2xl font-headline font-bold">$1.2B</p>
          </div>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="lg:ml-80 pt-24 px-8 pb-32 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-headline font-bold text-sm tracking-[0.2em] uppercase"
          >
            Roadmap 2024-2030
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-primary leading-none tracking-tighter mt-4 max-w-3xl"
          >
            The Road to Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Dominance</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-xl mt-6 max-w-xl font-body leading-relaxed"
          >
            Aggressive expansion meets environmental stewardship. We aren't just scaling a business; we're re-engineering the global economy.
          </motion.p>
        </section>

        {/* Bento Grid: Roadmap Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Phase 1: Workforce */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-surface-container-lowest p-8 rounded-[2rem] border-b-4 border-primary/5 hover:border-primary/20 transition-all shadow-sm"
          >
            <div className="w-12 h-12 bg-primary-container text-on-primary-container flex items-center justify-center rounded-xl mb-6">
              <span className="material-symbols-outlined">smart_toy</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary mb-2">Phase 01: Workforce</h3>
            <p className="text-on-surface-variant text-sm mb-6">Massive deployment of autonomous specialist units across five continents.</p>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-headline font-black text-primary">50k</span>
              <span className="text-sm font-bold text-secondary pb-1 uppercase">Active Bots</span>
            </div>
          </motion.div>

          {/* Phase 2: Integration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-8 relative overflow-hidden bg-primary text-on-primary p-8 rounded-[2rem] flex flex-col justify-between shadow-xl"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" 
              alt="Global integration map" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqu9Xmv7tB5Oo8MyY-W4vSMPJX_1weSgSiYrE8UweKc-G3Ilq6wR1ogy00SJbIu8Gj4EL8p6d2uw4nfnAEsa2ksLq5Duk3JMwhlhFs44OWJC3JFTcWzFXOIF7vXbm7x0PxSgYyveqGAJHQnT3vbj_oRJJEzPi8aIQod0paw3M74kpsIGyhE3yQx_wN6G1_zGh03M-zR1gKRHYEcEaUwbyL00oJKi80TA3gKtS_SI9U84h60Vc9Pruz59MjpHWYNjjcWzGdJVOxttm7"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center rounded-xl mb-6">
                <span className="material-symbols-outlined">account_balance</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-2">Phase 02: Integration</h3>
              <p className="text-on-primary-container text-lg max-w-md">Seamless fusion with top-tier global bank infrastructures for real-time liquidity management.</p>
            </div>
            <div className="relative z-10 flex gap-4 mt-8 overflow-x-auto pb-2 no-scrollbar">
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/10 text-xs backdrop-blur-sm whitespace-nowrap">Tier 1 Bank Alpha</span>
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/10 text-xs backdrop-blur-sm whitespace-nowrap">Global Reserve Beta</span>
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/10 text-xs backdrop-blur-sm whitespace-nowrap">Digital Asset Gamma</span>
            </div>
          </motion.div>

          {/* Phase 3: Sustainability */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-7 bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-sm"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                <span className="w-2 h-2 bg-primary rounded-full"></span> 2028 Horizon
              </div>
              <h3 className="text-3xl font-headline font-bold text-primary mb-4">Carbon-Negative Future</h3>
              <p className="text-on-surface-variant leading-relaxed">Our shift to planetary-scale carbon sequestration. For every dollar earned, we remove 5kg of CO2 from the atmosphere.</p>
            </div>
            <div className="w-full md:w-48 h-48 bg-gradient-to-br from-primary-fixed to-primary rounded-full relative flex items-center justify-center shadow-2xl shadow-primary/20">
              <div className="absolute inset-0 bg-white/20 rounded-full backdrop-blur-[2px] m-4"></div>
              <span className="material-symbols-outlined text-white text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            </div>
          </motion.div>

          {/* Call to Action Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-5 bg-secondary-fixed p-8 rounded-[2rem] flex flex-col justify-center items-center text-center shadow-lg"
          >
            <h3 className="text-3xl font-headline font-black text-on-secondary-fixed mb-6">Join the Revolution</h3>
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-primary/10">
              Secure Stake Now
            </button>
            <p className="mt-6 text-on-secondary-fixed-variant text-xs font-bold uppercase tracking-widest">Limited LP Opportunities Remaining</p>
          </motion.div>
        </div>

        {/* Financial Highlight Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-surface-container-lowest rounded-[3rem] shadow-[0_40px_80px_rgba(0,53,39,0.05)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-headline font-bold text-primary mb-6">Sustainable, Compounding Growth</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 flex-shrink-0 bg-surface-container-low rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
                  </div>
                  <div>
                    <p className="text-primary font-bold text-xl">42% MoM Retention</p>
                    <p className="text-on-surface-variant text-sm">Consistent organic expansion with zero churn in enterprise accounts.</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 flex-shrink-0 bg-surface-container-low rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-3xl">currency_exchange</span>
                  </div>
                  <div>
                    <p className="text-primary font-bold text-xl">Net Revenue Margin: 88%</p>
                    <p className="text-on-surface-variant text-sm">Ultra-efficient operations through our proprietary bot workforce.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-72">
              <div className="p-6 bg-primary rounded-3xl text-white shadow-xl">
                <p className="text-xs uppercase tracking-widest text-primary-fixed mb-1">Projected ROI (7yr)</p>
                <p className="text-5xl font-headline font-black">12.5x</p>
                <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-fixed w-3/4 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-transparent flex justify-between items-center px-12 py-6 pointer-events-none">
        <div className="font-body text-[10px] uppercase tracking-widest text-[#003527]/40 pointer-events-auto">
          Proprietary & Confidential - Arboretum Group
        </div>
        <div className="flex gap-8 pointer-events-auto">
          <a className="font-body text-[10px] uppercase tracking-widest text-[#003527]/40 hover:text-[#003527] transition-colors" href="#">Contact Relations</a>
          <a className="font-body text-[10px] uppercase tracking-widest text-[#003527]/40 hover:text-[#003527] transition-colors" href="#">Legal Disclosures</a>
        </div>
      </footer>
    </div>
  );
};
