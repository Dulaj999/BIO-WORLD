import React from 'react';
import { motion } from 'motion/react';
import { Leaf, ArrowRight, Globe, Zap, ShieldCheck, BookOpen } from 'lucide-react';
import { Screen } from '../../types';

interface EntryProps {
  onStart: (screen: Screen) => void;
}

export const Entry: React.FC<EntryProps> = ({ onStart }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-primary relative overflow-hidden px-8">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-fixed rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center text-center z-10"
      >
        <div 
          className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl overflow-hidden"
        >
          <img 
            src="https://img.icons8.com/fluency/96/leaf.png" 
            alt="BIO World Logo" 
            className="w-16 h-16 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <h1 className="text-5xl font-headline font-black text-white mb-4 tracking-tighter">
          BIO WORLD
        </h1>
        
        <p className="text-primary-fixed text-lg font-medium mb-12 max-w-xs leading-relaxed">
          High-precision engineering meets the fluid intelligence of nature.
        </p>

        <div className="grid grid-cols-3 gap-6 mb-12 w-full max-w-md">
          {[
            { icon: Globe, label: 'Ecosystem' },
            { icon: Zap, label: 'Energy' },
            { icon: ShieldCheck, label: 'Security' }
          ].map((item, i) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <item.icon className="text-white w-6 h-6" />
              </div>
              <span className="text-white/60 text-xs font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onStart('PORTAL')}
          className="group bg-secondary-container text-primary px-8 py-4 rounded-2xl font-headline font-bold text-lg flex items-center gap-3 shadow-xl hover:bg-secondary-fixed transition-all mb-4"
        >
          Enter Nexus
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <button 
          onClick={() => onStart('SCIENCE_FEED')}
          className="text-white/60 text-sm font-bold hover:text-white transition-colors flex items-center gap-2"
        >
          <BookOpen className="w-4 h-4" />
          View BioWorld Science Feed
        </button>
      </motion.div>

      {/* Footer Info */}
      <div className="absolute bottom-12 left-0 w-full text-center px-8">
        <p className="text-white/40 text-sm font-medium">
          v2.4.0 • Powered by Bio-Intelligence
        </p>
      </div>
    </div>
  );
};
