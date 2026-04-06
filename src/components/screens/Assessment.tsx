import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Screen } from '../../types';

interface AssessmentProps {
  onBack: (screen: Screen) => void;
  onComplete: (screen: Screen) => void;
}

export const Assessment: React.FC<AssessmentProps> = ({ onBack, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>('A');

  const options = [
    { id: 'A', text: 'Initiate Stage 2 thermal bypass and synchronize manual release valves.' },
    { id: 'B', text: 'Deactivate the AI Sync module immediately to prevent sensor feedback loops.' },
    { id: 'C', text: 'Place AI Sync in \'Observational Only\' mode and wait for 60s pressure stabilization.' },
    { id: 'D', text: 'Auto-calibrate the bio-synthetic core prior to opening any secondary ports.' },
  ];

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen pb-48 selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,53,39,0.04)]">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-2xl mx-auto">
          <button 
            onClick={() => onBack('TRAINING')}
            className="active:scale-95 transition-transform text-primary hover:bg-surface-container-low p-2 rounded-xl"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <h1 className="font-headline font-bold tracking-tight text-lg text-primary">Certification Assessment</h1>
          <button className="active:scale-95 transition-transform text-primary hover:bg-surface-container-low p-2 rounded-xl">
            <span className="material-symbols-outlined">psychology_alt</span>
          </button>
        </div>
        <div className="bg-outline-variant/20 h-[1px] w-full"></div>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto bio-aura-glow">
        {/* Progress Section */}
        <div className="mb-10">
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-on-primary-container">Current Milestone</span>
              <h2 className="text-3xl font-headline font-bold text-primary leading-none mt-1">Question 4 of 10</h2>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-secondary">40% Complete</span>
            </div>
          </div>
          <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden p-0.5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '40%' }}
              className="h-full bg-gradient-to-r from-primary-container to-primary rounded-full shadow-[0_0_12px_rgba(0,53,39,0.2)]"
            ></motion.div>
          </div>
        </div>

        {/* Question Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_8px_40px_rgba(0,53,39,0.03)] border border-outline-variant/10 mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-8xl">biotech</span>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full text-xs font-bold mb-6">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              BIO-GAS SPECIALIST CORE
            </div>
            <p className="text-xl md:text-2xl font-headline font-bold text-primary leading-snug">
              When venting pressure from the Primary Digester, what is the mandatory safety protocol for the AI Sync module?
            </p>
          </div>
        </motion.div>

        {/* Options Bento Grid / List */}
        <div className="space-y-4">
          {options.map((option) => (
            <button 
              key={option.id}
              onClick={() => setSelectedOption(option.id)}
              className="w-full text-left group transition-all duration-300 active:scale-[0.98]"
            >
              <div className={`flex items-center gap-4 p-5 rounded-[1.5rem] transition-all duration-300 relative overflow-hidden border ${
                selectedOption === option.id 
                  ? 'bg-primary-container text-on-primary border-transparent shadow-[0_12px_24px_rgba(0,53,39,0.15)]' 
                  : 'bg-surface-container-low hover:bg-surface-container-lowest text-on-surface border-outline-variant/5 shadow-sm'
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-headline font-bold transition-colors ${
                  selectedOption === option.id
                    ? 'bg-on-primary/10'
                    : 'bg-surface-container-highest text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-on-primary-fixed'
                }`}>
                  {option.id}
                </div>
                <span className="flex-1 font-medium">{option.text}</span>
                {selectedOption === option.id && (
                  <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* AI Help Section */}
        <div className="mt-10 flex flex-col items-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold text-sm tracking-wide shadow-lg hover:shadow-secondary/20 transition-all active:scale-95">
            <span className="material-symbols-outlined text-lg">auto_awesome</span>
            Ask AI Guide
          </button>
          <p className="mt-4 text-xs text-on-surface-variant/60 font-medium italic">Available hints remaining: 2</p>
        </div>

        {/* Visual Element */}
        <div className="mt-12 rounded-[2.5rem] overflow-hidden aspect-[16/9] shadow-2xl relative border-[6px] border-white/50">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzJuuSoyvL-TkTJHL6Eej4SyLt5BvMSTpgyBPZYedD3aBp3PEaBNm4qEKy5-fnZtUFMwGA9Bvgrap05LWjmvxnVcmLaP7Pel532zPdUU_sxCvzDB-DGzAPwZjJOOpLIjIQL1eC1Mtq05FojjWHg4bVHeafQYvBUjXV2paiD3AiddnbL3Oq5H-Z-y4T0m-iyKVu0FpVx3xIkhx4C1BpFoPwYcDUbsUXJQz5rstg8N0QflNn1UUMrOn_qlANgf0U99sxbXBXPy50f7KD" 
            alt="Bio-tech laboratory"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-6">
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest">Primary Digester Live Feed</span>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar as Action Bar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 px-8 pb-10 pt-6 bg-surface/90 backdrop-blur-lg flex flex-col gap-4 max-w-2xl mx-auto left-1/2 -translate-x-1/2">
        <div className="flex gap-4">
          <button 
            onClick={() => onBack('TRAINING')}
            className="flex-1 py-4 px-8 rounded-2xl bg-surface-container-high text-primary font-bold transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Previous
          </button>
          <button 
            onClick={() => onComplete('CERTIFICATION_SUCCESS')}
            className="flex-[2] py-4 px-8 rounded-2xl bg-primary text-white font-bold shadow-xl shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            Submit Answer
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        {/* Secondary Actions */}
        <div className="flex justify-around items-center pt-2">
          <div className="flex flex-col items-center justify-center text-primary/40 p-3 hover:text-secondary transition-all cursor-pointer">
            <span className="material-symbols-outlined">bookmarks</span>
            <span className="font-body text-[10px] uppercase tracking-widest mt-1">Review</span>
          </div>
          <div className="flex flex-col items-center justify-center text-primary/40 p-3 hover:text-secondary transition-all cursor-pointer">
            <span className="material-symbols-outlined">flag</span>
            <span className="font-body text-[10px] uppercase tracking-widest mt-1">Report</span>
          </div>
        </div>
      </nav>
    </div>
  );
};
