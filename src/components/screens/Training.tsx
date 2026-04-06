import React from 'react';
import { motion } from 'motion/react';
import { Screen } from '../../types';

interface TrainingProps {
  onBack: (screen: Screen) => void;
  onNavigate: (screen: Screen) => void;
}

export const Training: React.FC<TrainingProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-emerald-950/80 backdrop-blur-xl shadow-[0_4px_40px_0_rgba(0,53,39,0.04)]">
        <div className="flex items-center px-6 h-16 w-full max-w-7xl mx-auto">
          <button 
            onClick={() => onBack('REGISTRATION_STATUS')}
            className="mr-4 p-2 text-emerald-50 hover:bg-emerald-800/30 transition-all rounded-full active:scale-95"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold text-emerald-50 font-headline tracking-tight">Bio-Gas Specialist Training</h1>
          <div className="ml-auto hidden md:flex items-center gap-6">
            <nav className="flex gap-4">
              <a className="text-emerald-400 font-bold font-headline" href="#">Modules</a>
              <a className="text-emerald-200/70 hover:text-emerald-50 transition-all" href="#">Progress</a>
              <a className="text-emerald-200/70 hover:text-emerald-50 transition-all" href="#">Support</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-7xl mx-auto">
        {/* Progress Tracker Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row gap-6 items-end justify-between mb-6">
            <div className="w-full md:w-1/2">
              <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">Current Certification</span>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary leading-none mb-4">Bio-Gas Safety Level 2</h2>
              <div className="relative h-4 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: '65%' }}></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
              <div className="flex justify-between mt-2 text-sm font-semibold text-on-surface-variant">
                <span>65% Complete</span>
                <span>Next: System Auditor</span>
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-6 py-3 bg-primary text-on-primary font-bold rounded-xl active:scale-95 transition-all shadow-lg shadow-primary/10">
                Resume Last Lesson
              </button>
              <button 
                onClick={() => onNavigate('ASSESSMENT')}
                className="flex-1 md:flex-none px-6 py-3 bg-secondary-fixed text-on-secondary-fixed font-bold rounded-xl active:scale-95 transition-all"
              >
                Take Quiz
              </button>
            </div>
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Training Modules & Skills */}
          <div className="lg:col-span-8 space-y-10">
            {/* Bento Grid: Modules */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-headline font-bold text-primary">Core Curriculum</h3>
                <a className="text-primary font-bold flex items-center gap-1 group" href="#">
                  View All <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Module Card 1 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="group relative bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/15"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvB93MMBuB5tgYe1KKiF2QOnOgCnvFkIZDt414xo6HmHk-cfzADZW0H0ZkRjAzcoZeSaMGwEPzjcDLzhXI3VMhdAf9M-q4PVPPIb3KqY5YandHGkjEtq8V0ZcdpbmrDo7dC7EkJPnoDn8KL3A1by5P3KYt1eHUNzSZ5qyyZPx3E5T1_WqM2crarP8tg-K-okY7ExYi6Q7wkT0kaLaGoG84Jk_xgjvWMnQeO1b0lAK6T4WtixIAmg1UGbMx-Uo-jYJtiXk3KKSwqd6T" alt="anaerobic bacteria" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded uppercase">12:45</div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-headline font-bold text-lg text-primary">Anaerobic Digestion Basics</h4>
                      <span className="material-symbols-outlined text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-4">Master the foundational biology of organic breakdown and methane production.</p>
                    <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 4 Lessons</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">bar_chart</span> Beginner</span>
                    </div>
                  </div>
                </motion.div>

                {/* Module Card 2 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="group relative bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/15"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcg8dt5wP6hO16naY5GUsQDN2xNQP_4UsIORdS32cUdHyOaZIdiTNL-DqDjePZtsOZXEKM3G5C9c9kVc5qZrkd2aAcbzdUBVfe4uX7mNlmZjdTVHwV6tU6YupUPFjkHprnBr7sO-1SOI3utjsKxRkbwMOgEMMHrJL0xSz1fMavGuzJw6hHIUDX0qxq_MoiRSn72nbWoiw1nWcleYUqobhNdrDlR5mKjxd1G4FSHZBH9MIbT55UX_UXN_liPRFsAKPT98JPCPek1bm2" alt="industrial valves" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded uppercase">24:10</div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-headline font-bold text-lg text-primary mb-2">High-Pressure Valve Management</h4>
                    <p className="text-on-surface-variant text-sm mb-4">Technical safety protocols for managing gas compression and distribution nodes.</p>
                    <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 8 Lessons</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">bar_chart</span> Advanced</span>
                    </div>
                  </div>
                </motion.div>

                {/* Large Featured Module */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="md:col-span-2 group relative bg-primary rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row"
                >
                  <div className="md:w-1/2 relative h-48 md:h-auto overflow-hidden">
                    <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy-LZTCBL5ww9JV1VBCIaDNzPeepBW9E2zDj5SpaygmJAsv19AIyYmnE1W3j_iyaMS2I_2z72EQWw0w659VZ1wqUIzhmGITk0kJNtEkCpbIDQrpTvED8XhdfeCIntjn05pJr2H7XV5toMfTg0Sr1uMCsrG20zA99m_DhYDa_HY1xRcSAnPScPJ7BGTL2B0_ybHYFv5dMf5fIiMxSGHcTR4MEp8DMz38QOiBnE7dSYMaaywoyQao99xa7U7arWVi1Za2aawLW4SBfrW" alt="AI neural network" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent md:block hidden"></div>
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center relative z-10">
                    <span className="bg-secondary text-on-secondary text-[10px] font-bold px-2 py-1 rounded-full w-fit mb-4 uppercase tracking-widest">New Protocol</span>
                    <h4 className="font-headline font-bold text-2xl text-on-primary mb-3">AI Sync Protocols</h4>
                    <p className="text-on-primary-container text-sm mb-6">Learn to integrate real-time sensor data with the BIO World AI monitoring engine for predictive maintenance.</p>
                    <button className="w-fit flex items-center gap-2 px-5 py-2.5 bg-white text-primary font-bold rounded-lg hover:bg-emerald-50 transition-colors">
                      Start Now <span className="material-symbols-outlined text-sm">trending_flat</span>
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Technical Skills Lab */}
            <section className="bg-surface-container-low rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-primary mb-1">Technical Skills Lab</h3>
                  <p className="text-on-surface-variant text-sm">Your proficiency based on simulator performance.</p>
                </div>
                <div className="px-4 py-2 bg-primary-container rounded-lg border border-primary/20">
                  <span className="text-on-primary-container font-bold text-sm">Overall Rank: Specialist</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Construction', score: 88, color: 'bg-emerald-500', icon: 'construction', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-800' },
                  { label: 'Maintenance', score: 72, color: 'bg-amber-500', icon: 'settings_suggest', iconBg: 'bg-amber-100', iconColor: 'text-amber-800' },
                  { label: 'Safety', score: 95, color: 'bg-red-500', icon: 'health_and_safety', iconBg: 'bg-red-100', iconColor: 'text-red-800' }
                ].map((skill) => (
                  <div key={skill.label} className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 ${skill.iconBg} rounded-lg ${skill.iconColor}`}>
                        <span className="material-symbols-outlined">{skill.icon}</span>
                      </div>
                      <span className="font-bold text-primary">{skill.label}</span>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-headline font-bold">{skill.score}</span>
                      <span className="text-sm font-bold text-on-surface-variant pb-1">/100</span>
                    </div>
                    <div className="mt-4 h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                      <div className={`h-full ${skill.color} rounded-full`} style={{ width: `${skill.score}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: AI & Secondary */}
          <aside className="lg:col-span-4 space-y-8">
            {/* AI Instructor Card */}
            <div className="relative bg-emerald-900 text-white rounded-2xl p-6 overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="flex items-center gap-3 mb-6 relative">
                <div className="w-12 h-12 rounded-full border-2 border-emerald-400 p-1">
                  <img className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9lWIAsyXlDS-xFjscYaGTxqKNHzWsFgK6McAAdciVeGYkmR3IoiKq18AJ5sUg2HFtK1tiHh0XcQ8NxLRpoz56XB5fKsbRm3TB85hOQjO4-QCFYL2aAlAhQoaDhEfdSxFXnE_2AcpSYKzaSQrPCtdKDtD83tMdNgYfI4r3Fn_31rrF7wu7PqTOIw0y8i1ngFbMsvA7ir2_le7u3e-y3pJZUmJC5Ol7BcpiI0Zo4d_FZeoEbFXjYimRnDovj2nMupjhpYIhlPpoSTOP" alt="AI Instructor" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-headline font-bold">Specialized AI Instructor</h4>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-300 font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    Live Technical Support
                  </div>
                </div>
              </div>
              <div className="bg-emerald-950/50 rounded-xl p-4 mb-6 border border-white/10">
                <p className="text-sm leading-relaxed text-emerald-50 italic">
                  "Remember: When venting pressure from the Primary Digester, always ensure the AI Sync is in 'Calibration Mode' to avoid false alarm triggers in the regional node."
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-bold text-emerald-300 uppercase tracking-widest">Ask a technical question</p>
                <div className="relative">
                  <input className="w-full bg-emerald-950 border-none rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-secondary transition-all" placeholder="e.g. How to calibrate Valve R-4?" type="text"/>
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-secondary text-on-secondary rounded-md">
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-surface-container-low rounded-2xl p-6">
              <h4 className="font-headline font-bold text-primary mb-4">Quick References</h4>
              <div className="space-y-4">
                {[
                  { label: 'Safety Manual v4.2', icon: 'menu_book', action: 'download' },
                  { label: 'Emergency Protocols', icon: 'warning', action: 'visibility' },
                  { label: 'Gas Yield Calculator', icon: 'database', action: 'open_in_new' }
                ].map((res) => (
                  <button key={res.label} className="w-full flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors text-left group">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">{res.icon}</span>
                      <span className="font-bold text-sm">{res.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:translate-x-1 transition-transform">{res.action}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="bg-gradient-to-br from-secondary-fixed to-secondary-fixed-dim rounded-2xl p-6 text-on-secondary-fixed flex items-center gap-4 shadow-lg">
              <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              </div>
              <div>
                <h5 className="font-bold">Next Milestone</h5>
                <p className="text-sm opacity-80">Earn 'Pressure Master' badge in 2 more lessons.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-4 pb-2 bg-surface/90 backdrop-blur-xl rounded-t-[1.5rem] z-50 shadow-[0_-4px_40px_0_rgba(0,53,39,0.04)]">
        <button className="flex flex-col items-center justify-center bg-emerald-900 text-white rounded-2xl px-4 py-1.5 active:scale-95 transition-all">
          <span className="material-symbols-outlined">school</span>
          <span className="font-semibold text-xs mt-1">Modules</span>
        </button>
        <button 
          onClick={() => onNavigate('REGISTRATION_STATUS')}
          className="flex flex-col items-center justify-center text-emerald-900/60 px-4 py-1.5 hover:text-emerald-900 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined">analytics</span>
          <span className="font-semibold text-xs mt-1">Progress</span>
        </button>
        <button className="flex flex-col items-center justify-center text-emerald-900/60 px-4 py-1.5 hover:text-emerald-900 active:scale-95 transition-all">
          <span className="material-symbols-outlined">psychology</span>
          <span className="font-semibold text-xs mt-1">AI Guide</span>
        </button>
        <button 
          onClick={() => onNavigate('PROFILE')}
          className="flex flex-col items-center justify-center text-emerald-900/60 px-4 py-1.5 hover:text-emerald-900 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined">account_circle</span>
          <span className="font-semibold text-xs mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
};
