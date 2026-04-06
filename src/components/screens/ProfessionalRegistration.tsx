import React from 'react';
import { motion } from 'motion/react';
import { Screen } from '../../types';

interface ProfessionalRegistrationProps {
  onBack: (screen: Screen) => void;
  onComplete: (screen: Screen) => void;
}

export const ProfessionalRegistration: React.FC<ProfessionalRegistrationProps> = ({ onBack, onComplete }) => {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen pb-24">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex items-center px-6 h-16 bg-transparent backdrop-blur-xl shadow-[0_4px_40px_0_rgba(0,53,39,0.04)]">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onBack('PARTNER_PORTAL')}
            className="active:scale-95 transition-transform hover:bg-emerald-50/50 p-2 rounded-full"
          >
            <span className="material-symbols-outlined text-emerald-900">arrow_back</span>
          </button>
          <h1 className="font-headline text-xl font-bold tracking-tight text-emerald-900">Onboarding</h1>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-5xl mx-auto">
        {/* Hero Section / Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="font-headline text-5xl font-extrabold text-primary leading-tight tracking-tight mb-4">Professional Registration</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">Join the elite network of bio-gas specialists. Our digital arboretum ecosystem connects top-tier talent with sustainable infrastructure projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Form */}
          <div className="lg:col-span-8 space-y-8">
            {/* AI Agent Vetting Card */}
            <section className="bio-gradient rounded-[2rem] p-8 text-white relative overflow-hidden shadow-[0_20px_50px_rgba(0,53,39,0.15)]">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary-fixed/20 p-2 rounded-xl backdrop-blur-md">
                    <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>psychology_alt</span>
                  </div>
                  <span className="font-headline font-bold tracking-wide text-primary-fixed">AI Agent Vetting</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Automated Compliance Core</h3>
                <p className="text-emerald-100/80 leading-relaxed">
                  Your application will be cross-referenced by our fleet of <span className="text-primary-fixed font-bold">50 specialized AI agents</span>, ensuring technical mastery and regulatory alignment in real-time.
                </p>
              </div>
              {/* Abstract biological shape */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-fixed opacity-10 rounded-full blur-3xl"></div>
            </section>

            {/* Form Section: Personal Info */}
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_4px_40px_0_rgba(0,53,39,0.02)]">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">eco</span>
                <h4 className="font-headline text-2xl font-bold">Personal Identity</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-semibold px-1 text-on-surface-variant">Full Legal Name</label>
                  <input className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 rounded-t-xl py-4 px-4 transition-all duration-300" placeholder="e.g. Julian Thorne" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold px-1 text-on-surface-variant">Identification Number</label>
                  <input className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 rounded-t-xl py-4 px-4 transition-all duration-300" placeholder="ID-000-000-00" type="text"/>
                </div>
              </div>
            </div>

            {/* Form Section: Expertise & License */}
            <div className="bg-surface-container-low rounded-[2rem] p-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
                <h4 className="font-headline text-2xl font-bold">Expertise & Licensing</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label className="text-sm font-semibold px-1 text-on-surface-variant">Business Registration Number</label>
                  <input className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 rounded-t-xl py-4 px-4 transition-all duration-300" placeholder="BRN-9982-X" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold px-1 text-on-surface-variant">Specialist License</label>
                  <input className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 rounded-t-xl py-4 px-4 transition-all duration-300" placeholder="LIC-BIO-2024" type="text"/>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-semibold px-1 text-on-surface-variant">Primary Domains</label>
                <div className="flex flex-wrap gap-4">
                  {['Bio-Gas Construction', 'Systems Maintenance', 'Anaerobic Digestion'].map((domain) => (
                    <label key={domain} className="group flex items-center gap-3 bg-surface-container-lowest px-6 py-4 rounded-2xl cursor-pointer hover:bg-primary-fixed/30 transition-all border border-transparent active:scale-95">
                      <input className="rounded-full text-primary focus:ring-0 border-outline-variant" type="checkbox"/>
                      <span className="font-bold text-on-surface">{domain}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Section: Certifications */}
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_4px_40px_0_rgba(0,53,39,0.02)]">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                <h4 className="font-headline text-2xl font-bold">Certifications</h4>
              </div>
              <div className="border-2 border-dashed border-outline-variant/30 rounded-3xl p-12 flex flex-col items-center justify-center text-center group hover:border-primary/40 transition-all bg-surface-container-low/30">
                <div className="w-16 h-16 bg-primary-fixed-dim/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                </div>
                <p className="font-bold text-on-surface mb-1">Upload Certification Documents</p>
                <p className="text-on-surface-variant text-sm">PDF, JPG or PNG (Max 10MB each)</p>
                <button className="mt-6 px-8 py-3 rounded-full bg-on-surface text-surface text-sm font-bold active:scale-95 transition-transform">Browse Files</button>
              </div>
            </div>

            {/* Submit Button Container */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button 
                onClick={() => onComplete('REGISTRATION_STATUS')}
                className="w-full sm:w-auto bg-primary text-white px-12 py-5 rounded-2xl font-headline font-bold text-lg shadow-[0_12px_30px_rgba(0,53,39,0.2)] hover:shadow-[0_20px_40px_rgba(0,53,39,0.3)] hover:-translate-y-1 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
              >
                Submit Registration
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p className="text-sm text-on-surface-variant italic">By submitting, you agree to the Bio-Synthetic Ecosystem protocols.</p>
            </div>
          </div>

          {/* Right Column: Contextual Info & Visuals */}
          <div className="lg:col-span-4 space-y-8">
            {/* Visual Anchor Image */}
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl relative group">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwTGMs1qBPNhEeT1ciMWU6zWJpKDJ8i8XxriypHcVyD3g_7qsZ3bIEUbx-6C8G0PIsCTek2lrnxE2E2LlLxp8fIZvKC8A3pxu-4no19NXVJWaqph-17GdoTtS9YKLfmcWlCDvej5udzzXgQ-CbAXqst4NBlWpYqDCQZMb762wyhQHtAkD5p4D92oMA8rgDkFpllj8kTThW-_JwT5XZiSg_KXPytHGqr0R2s0e2SKjaNtVfDaUbPPE24vnWwD-0CsQzoRYa3lF-TNYc" alt="lush mountain valley at dawn" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-3 inline-block">Sustainable Core</span>
                <h5 className="text-white font-headline text-2xl font-bold">Powering the Future Organic Grid</h5>
              </div>
            </div>

            {/* Expertise Breakdown */}
            <div className="bg-surface-container rounded-[2rem] p-6 border-l-4 border-secondary">
              <h6 className="font-headline font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">energy_savings_leaf</span>
                Project Focus
              </h6>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-black mt-0.5">•</span>
                  <span className="text-sm text-on-surface-variant"><strong className="text-on-surface">Maintenance:</strong> Real-time monitoring of methane purity and thermal flow.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-black mt-0.5">•</span>
                  <span className="text-sm text-on-surface-variant"><strong class="text-on-surface">Construction:</strong> Bio-polymer dome deployment and structural sealing.</span>
                </li>
              </ul>
            </div>

            {/* Trust Badge */}
            <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-[2rem] p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>gpp_good</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Security Tier 1</p>
                <p className="text-sm font-bold text-primary">Encryption-Grade Identity</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-emerald-50/80 backdrop-blur-2xl shadow-[0_-4px_40px_0_rgba(0,53,39,0.04)] rounded-t-[1.5rem]">
        {[
          { icon: 'analytics', label: 'Status' },
          { icon: 'school', label: 'Training' },
          { icon: 'psychology', label: 'Support' },
          { icon: 'account_circle', label: 'Profile', active: true }
        ].map((item) => (
          <div key={item.label} className={`flex flex-col items-center justify-center px-5 py-1.5 transition-all duration-300 active:scale-90 ${item.active ? 'bg-emerald-100 text-emerald-950 rounded-2xl' : 'text-emerald-800/50'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: item.active ? "'FILL' 1" : undefined }}>{item.icon}</span>
            <span className="text-[11px] font-semibold tracking-wide">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};
