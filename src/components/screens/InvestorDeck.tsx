import React from 'react';
import { motion } from 'motion/react';
import { Screen } from '../../types';

interface InvestorDeckProps {
  onNavigate: (screen: Screen) => void;
}

export const InvestorDeck: React.FC<InvestorDeckProps> = ({ onNavigate }) => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 backdrop-blur-xl flex justify-between items-center px-8 h-16 w-full max-w-full border-b border-outline-variant/10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('PORTAL')}
            className="text-[#003527] hover:opacity-70 transition-all scale-95 active:scale-90 cursor-pointer flex items-center"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <span className="font-headline text-lg font-bold text-[#003527]">INVESTOR DECK 2024</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <span className="font-headline tracking-tight font-bold uppercase text-xs text-[#795900] hover:opacity-70 transition-opacity cursor-pointer">Vision</span>
          <span className="font-headline tracking-tight font-bold uppercase text-xs text-[#003527]/60 hover:opacity-70 transition-opacity cursor-pointer">Market Opportunity</span>
          <span 
            onClick={() => onNavigate('INVESTOR_FINANCIALS')}
            className="font-headline tracking-tight font-bold uppercase text-xs text-[#003527]/60 hover:opacity-70 transition-opacity cursor-pointer"
          >
            Financials
          </span>
          <span className="font-headline tracking-tight font-bold uppercase text-xs text-[#003527]/60 hover:opacity-70 transition-opacity cursor-pointer">Roadmap</span>
        </div>
        <button className="text-[#003527] hover:opacity-70 transition-all scale-95 active:scale-90 cursor-pointer">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </nav>

      {/* NavigationDrawer (Visible on larger screens) */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-80 z-[60] bg-[#f7f9fb] rounded-r-2xl shadow-[40px_0_40px_rgba(0,53,39,0.04)] bg-surface-container-low transition-all duration-300">
        <div className="p-8">
          <h2 className="font-headline text-2xl font-black text-[#003527] mb-8">Executive Summary</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#064e3b] text-white rounded-xl mx-4 my-1 p-4 flex items-center gap-4 cursor-pointer transition-all duration-300">
            <span className="material-symbols-outlined">visibility</span>
            <span className="font-body font-medium">Vision</span>
          </div>
          <div className="text-[#003527]/70 mx-4 my-1 p-4 flex items-center gap-4 cursor-pointer hover:bg-[#f2f4f6] rounded-xl transition-colors">
            <span className="material-symbols-outlined">insights</span>
            <span className="font-body font-medium">Market Opportunity</span>
          </div>
          <div 
            onClick={() => onNavigate('INVESTOR_FINANCIALS')}
            className="text-[#003527]/70 mx-4 my-1 p-4 flex items-center gap-4 cursor-pointer hover:bg-[#f2f4f6] rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined">payments</span>
            <span className="font-body font-medium">Financials</span>
          </div>
          <div className="text-[#003527]/70 mx-4 my-1 p-4 flex items-center gap-4 cursor-pointer hover:bg-[#f2f4f6] rounded-xl transition-colors">
            <span className="material-symbols-outlined">timeline</span>
            <span className="font-body font-medium">Roadmap</span>
          </div>
        </div>
      </aside>

      <main className="lg:pl-80 pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[751px] overflow-hidden">
          <div className="absolute inset-0 bg-primary z-0">
            <img 
              alt="BIO World Vision" 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHkotn7KXMGY4uSA9VBeTrxZQ9UCar2KJjxEQV1SBpZeoAzNEB7QOF4P1ed5LVRJ1S3WAkB7dKmpvUUugm-LquGvFfWSQIUNysXh9KMEILV5lufyPjHs-zp9dz64C9r97kqdVAzVPTP6U5DkyeTF0KlstT_kCbHHDBwfPCtKZfpxbRZPS9EroCrgG8Rk1JJbFXBRTF1AxyFEZlSlRRlARzH_KWWYPA65uoGtFdiE2pfivaXUnl-DlurCrsGNiDH0PmKGlOK3J2r7iu"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center px-12 lg:px-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-headline text-xs font-bold tracking-widest uppercase mb-6">Introduction</span>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8">
                BIO World: <br/>The Future is <span className="text-primary-fixed italic font-light">Organic</span> & <span className="text-secondary-fixed">AI-Driven</span>
              </h1>
              <div className="flex flex-col md:flex-row md:items-center gap-6 mt-12">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full border-2 border-primary-fixed overflow-hidden">
                    <img 
                      alt="Dulaj Vishwanath Abeyweera" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf9wlLntnTC1up8AruFqkeyaEAm3yqadHOb-OzHQeOwTmz0pSq-D_-lw2UEOfuFJwKmVD59M7dQPfCivlBOlBTb9c-1lh-oIHBQKhIVi-bHjVUIeKO5CgQ5oA7uGBz1zh8_dMyTuJl1NxM9FZG3abOp-UnFf96HX14clQ1TnUUwKdRBGzcNTlrZn7iw3d_Iwb_Y1W8X006Yco5FvkS1lsrjvSvmrAn7U6zl1yfna7CNQ09uKWg8dwgrsocwSK2HFVuF51PFxa6PRvR"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="text-white/60 font-body text-xs uppercase tracking-widest">Founder & CEO</p>
                    <p className="text-white font-headline font-bold text-lg">Dulaj Vishwanath Abeyweera</p>
                  </div>
                </div>
                <div className="h-px w-12 bg-white/20 hidden md:block"></div>
                <p className="text-on-primary-container max-w-sm text-lg font-medium leading-relaxed">
                  Pioneering a global, self-sustaining ecosystem where synthetic intelligence breathes through biological frameworks.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bento Grid: The Core Pillars */}
        <section className="px-12 lg:px-24 -mt-24 relative z-20 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-surface-container-lowest rounded-xl p-10 shadow-[0_40px_40px_rgba(0,53,39,0.04)] group overflow-hidden relative"
            >
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">eco</span>
                <h3 className="font-headline text-3xl font-bold text-primary mb-4">Core Mission</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                  We are building more than a platform; we are nurturing a <span className="font-bold">Living Economy</span>. By integrating decentralized AI with regenerative ecological systems, we create a world that grows with its inhabitants.
                </p>
                <div className="mt-8 flex items-center gap-2 text-secondary font-bold group-hover:gap-4 transition-all duration-300 cursor-pointer">
                  <span>Explore our Manifesto</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
              <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary-fixed/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
            </motion.div>

            {/* Secondary Highlight Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary bio-gradient rounded-xl p-10 text-white flex flex-col justify-between border-t border-white/10"
            >
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary-fixed">psychology</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">AI Integration</h3>
                <p className="text-on-primary-container text-sm leading-relaxed">
                  Adaptive algorithms that mirror biological growth patterns to optimize resources and human potential.
                </p>
              </div>
              <div className="pt-8 flex justify-between items-end">
                <div className="text-4xl font-headline font-black text-primary-fixed">94%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Efficiency Delta</div>
              </div>
            </motion.div>

            {/* Three Small Pillar Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface-container-low rounded-xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <span className="material-symbols-outlined text-secondary">language</span>
              </div>
              <h4 className="font-headline font-bold text-primary mb-2">Global Scale</h4>
              <p className="text-xs text-on-surface-variant">Designed to operate across borders, unifying fragmented markets.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface-container-low rounded-xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
              </div>
              <h4 className="font-headline font-bold text-primary mb-2">Self-Sustaining</h4>
              <p className="text-xs text-on-surface-variant">Closed-loop systems that minimize waste and maximize longevity.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface-container-low rounded-xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <span className="material-symbols-outlined text-secondary">hub</span>
              </div>
              <h4 className="font-headline font-bold text-primary mb-2">Ecosystem Driven</h4>
              <p className="text-xs text-on-surface-variant">Interconnected modules that thrive through mutualistic data exchange.</p>
            </motion.div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="px-12 lg:px-24 pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="material-symbols-outlined text-primary/10 text-8xl leading-none" style={{ fontSize: '8rem' }}>format_quote</span>
            <p className="font-headline text-3xl md:text-4xl font-medium text-primary italic -mt-10 mb-8">
              "The most powerful technology is that which mimics life itself—resilient, evolving, and inherently connected."
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full flex justify-between items-center px-12 py-6 bg-transparent z-50 pointer-events-none">
        <p className="font-body text-[10px] uppercase tracking-widest text-[#003527]/40 pointer-events-auto">
          Proprietary & Confidential - Arboretum Group
        </p>
        <div className="flex gap-8 pointer-events-auto">
          <a className="font-body text-[10px] uppercase tracking-widest text-[#003527]/40 hover:text-[#003527] transition-colors" href="#">Contact Relations</a>
          <a className="font-body text-[10px] uppercase tracking-widest text-[#003527]/40 hover:text-[#003527] transition-colors" href="#">Legal Disclosures</a>
        </div>
      </footer>
    </div>
  );
};
