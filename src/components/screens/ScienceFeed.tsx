import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, BookOpen, Clock, Tag, ChevronRight } from 'lucide-react';
import { Screen } from '../../types';

interface ScienceFeedProps {
  onNavigate: (screen: Screen) => void;
}

const ARTICLES = [
  {
    id: 1,
    title: "Researchers target DNA repair blind spots for BAP1-mutant cancers",
    summary: "A new study reveals how targeting specific DNA repair pathways can selectively kill cancer cells with BAP1 mutations, offering hope for mesothelioma and uveal melanoma patients.",
    date: "April 4, 2026",
    category: "Oncology",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/dna/800/400"
  },
  {
    id: 2,
    title: "Korsana boosts Alzheimer’s work with reverse merger, $380M financing",
    summary: "The biotech firm secures massive funding to accelerate its neurodegenerative pipeline, focusing on a first-in-class protein stabilizer for early-onset Alzheimer's.",
    date: "April 3, 2026",
    category: "Neurology",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/brain/800/400"
  },
  {
    id: 3,
    title: "COVID-19 mRNA vaccine provides broad-spectrum protection",
    summary: "Next-generation mRNA platforms are showing promise in providing immunity against multiple variants simultaneously, potentially ending the need for seasonal boosters.",
    date: "April 2, 2026",
    category: "Immunology",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/vaccine/800/400"
  },
  {
    id: 4,
    title: "New antibody-drug conjugates reported in Biocad patent",
    summary: "Biocad's latest patent filing details a novel ADC platform that improves payload delivery while significantly reducing systemic toxicity in solid tumors.",
    date: "April 1, 2026",
    category: "Pharmacology",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/lab/800/400"
  }
];

export const ScienceFeed: React.FC<ScienceFeedProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-surface pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-outline-variant px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('PORTAL')}
            className="p-2 hover:bg-surface-container-high rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-on-surface" />
          </button>
          <h1 className="text-xl font-headline font-bold text-primary tracking-tight">BioWorld Science</h1>
        </div>
        <button 
          onClick={() => onNavigate('PORTAL')}
          className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg hover:bg-primary/90 transition-all"
        >
          Enter Nexus
          <ChevronRight className="w-4 h-4" />
        </button>
      </header>

      {/* Featured Article */}
      <section className="px-6 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
        >
          <img 
            src={ARTICLES[0].image} 
            alt="Featured" 
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
            <span className="bg-primary-fixed text-on-primary-fixed text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">
              {ARTICLES[0].category}
            </span>
            <h2 className="text-2xl font-headline font-bold text-white mb-2 leading-tight">
              {ARTICLES[0].title}
            </h2>
            <p className="text-white/70 text-sm line-clamp-2 mb-4">
              {ARTICLES[0].summary}
            </p>
            <div className="flex items-center gap-4 text-white/50 text-xs">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {ARTICLES[0].readTime}</span>
              <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {ARTICLES[0].date}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Article List */}
      <section className="px-6 space-y-6">
        <h3 className="text-lg font-headline font-bold text-on-surface flex items-center gap-2">
          <Tag className="w-5 h-5 text-primary" />
          Latest Research
        </h3>
        
        <div className="grid gap-6">
          {ARTICLES.slice(1).map((article, index) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-outline-variant hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">
                    {article.category}
                  </span>
                  <h4 className="text-sm font-bold text-on-surface leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] text-on-surface-variant font-medium">
                    {article.date}
                  </span>
                  <ExternalLink className="w-3 h-3 text-on-surface-variant group-hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-6 mt-12 mb-8">
        <div className="bg-primary-fixed rounded-3xl p-8 text-center border border-primary/10">
          <h3 className="text-xl font-headline font-bold text-primary mb-2">Stay Informed</h3>
          <p className="text-on-primary-fixed-variant text-sm mb-6">
            Get the latest BioWorld Science breakthroughs delivered to your inbox.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter email..." 
              className="flex-1 bg-white border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-primary/90 transition-all">
              Join
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
