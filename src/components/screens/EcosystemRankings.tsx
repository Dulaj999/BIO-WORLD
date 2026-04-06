import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Award, 
  Star, 
  TrendingUp, 
  Globe, 
  ArrowLeft, 
  ChevronRight, 
  Search, 
  Filter, 
  Leaf, 
  Zap, 
  Share2,
  Medal
} from 'lucide-react';
import { Screen } from '../../types';

interface EcosystemRankingsProps {
  onBack: (screen: Screen) => void;
}

export const EcosystemRankings: React.FC<EcosystemRankingsProps> = ({ onBack }) => {
  return (
    <div className="h-full bg-background overflow-y-auto pb-24">
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <button 
          onClick={() => onBack('NEXUS')}
          className="w-12 h-12 bg-surface-container-high rounded-2xl flex items-center justify-center shadow-sm hover:bg-surface-container-highest transition-all"
        >
          <ArrowLeft className="text-primary w-6 h-6" />
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-headline font-black tracking-tighter text-primary uppercase">RANKINGS</h2>
          <div className="flex items-center gap-1 text-primary text-[10px] font-black uppercase tracking-widest">
            <Globe className="w-3 h-3" />
            Global Leaderboard
          </div>
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Top 3 Podium */}
      <div className="px-6 py-8 flex items-end justify-center gap-4">
        {/* 2nd Place */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-primary-fixed p-1 shadow-xl">
              <img src="https://picsum.photos/seed/rank2/100/100" alt="Rank 2" className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-fixed rounded-full flex items-center justify-center border-2 border-background shadow-lg">
              <Medal className="text-primary w-4 h-4" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-headline font-black text-primary text-sm">Arjun Silva</p>
            <p className="text-on-surface-variant text-[10px] font-bold uppercase">1.2t CO2</p>
          </div>
          <div className="w-16 h-24 bg-primary-fixed/30 rounded-t-2xl flex items-center justify-center">
            <span className="text-primary font-headline font-black text-2xl">2</span>
          </div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-28 h-28 rounded-full border-4 border-secondary-container p-1 shadow-2xl">
              <img src="https://picsum.photos/seed/rank1/100/100" alt="Rank 1" className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center border-2 border-background shadow-lg">
              <Trophy className="text-primary w-6 h-6" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-headline font-black text-primary text-lg">Sarah Jones</p>
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">2.4t CO2</p>
          </div>
          <div className="w-20 h-32 bg-secondary-container/30 rounded-t-3xl flex items-center justify-center">
            <span className="text-primary font-headline font-black text-4xl">1</span>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-tertiary-fixed p-1 shadow-xl">
              <img src="https://picsum.photos/seed/rank3/100/100" alt="Rank 3" className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-tertiary-fixed rounded-full flex items-center justify-center border-2 border-background shadow-lg">
              <Medal className="text-primary w-4 h-4" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-headline font-black text-primary text-sm">Nimal Perera</p>
            <p className="text-on-surface-variant text-[10px] font-bold uppercase">0.8t CO2</p>
          </div>
          <div className="w-16 h-20 bg-tertiary-fixed/30 rounded-t-2xl flex items-center justify-center">
            <span className="text-primary font-headline font-black text-2xl">3</span>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="px-6 flex gap-4">
        <div className="flex-1 glass-panel h-12 rounded-2xl flex items-center px-4 gap-3 shadow-sm">
          <Search className="text-on-surface-variant w-5 h-5" />
          <input type="text" placeholder="Find Agent..." className="bg-transparent border-none outline-none flex-1 text-sm font-medium text-primary" />
        </div>
        <button className="w-12 h-12 bg-surface-container-high rounded-2xl flex items-center justify-center shadow-sm">
          <Filter className="text-on-surface-variant w-5 h-5" />
        </button>
      </div>

      {/* Rankings List */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-on-surface-variant px-4">
          <span>Rank & Agent</span>
          <span>Impact Score</span>
        </div>
        <div className="space-y-3">
          {[
            { rank: 4, name: 'John Doe', impact: '0.75t', trend: 'up' },
            { rank: 5, name: 'Emily Chen', impact: '0.72t', trend: 'down' },
            { rank: 6, name: 'Michael Sun', impact: '0.68t', trend: 'up' },
            { rank: 7, name: 'Anna Lee', impact: '0.65t', trend: 'up' },
            { rank: 8, name: 'David Kim', impact: '0.62t', trend: 'down' }
          ].map((agent, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-panel p-4 rounded-2xl flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="font-headline font-black text-primary w-6 text-center">{agent.rank}</span>
                <div className="w-10 h-10 rounded-full border border-primary-fixed p-0.5">
                  <img src={`https://picsum.photos/seed/rank${agent.rank}/100/100`} alt={agent.name} className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-headline font-bold text-primary">{agent.name}</p>
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <Star className="text-secondary-container fill-secondary-container w-3 h-3" />
                    <span className="text-xs font-medium">Eco-Active</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-headline font-black text-primary">{agent.impact}</p>
                <div className={`flex items-center justify-end gap-1 text-[10px] font-bold uppercase ${agent.trend === 'up' ? 'text-primary' : 'text-secondary'}`}>
                  {agent.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingUp className="w-3 h-3 rotate-180" />}
                  <span>{agent.trend === 'up' ? '+4.2%' : '-1.5%'}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Your Rank Footer */}
      <div className="fixed bottom-0 left-0 w-full p-6 glass-panel border-t border-outline-variant z-20">
        <div className="bg-primary rounded-3xl p-4 text-white flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-4">
            <span className="font-headline font-black text-primary-fixed text-2xl">42</span>
            <div className="w-10 h-10 rounded-full border-2 border-primary-fixed p-0.5">
              <img src="https://picsum.photos/seed/user/100/100" alt="You" className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <p className="font-headline font-bold">You (Dulaj V.)</p>
              <p className="text-primary-fixed text-[10px] font-bold uppercase tracking-widest">Top 5% Globally</p>
            </div>
          </div>
          <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
            <Share2 className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
