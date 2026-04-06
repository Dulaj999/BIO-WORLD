import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { Screen, NavItem } from '../types';
import { NAV_ITEMS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
  showNav?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentScreen, 
  setScreen, 
  showNav = true 
}) => {
  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      {/* Top Bar */}
      <header className="px-6 py-4 flex items-center justify-between glass-panel z-10">
        <div 
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center overflow-hidden shadow-sm">
            <img 
              src="https://img.icons8.com/fluency/96/leaf.png" 
              alt="BIO World Logo" 
              className="w-8 h-8 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-xl font-headline font-bold tracking-tight text-primary">BIO WORLD</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
            <Icons.Bell className="w-5 h-5 text-on-surface-variant" />
          </button>
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
             <img src="https://picsum.photos/seed/user/100/100" alt="User" referrerPolicy="no-referrer" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      {showNav && (
        <nav className="px-4 py-2 glass-panel flex items-center justify-around border-t border-outline-variant z-10">
          {NAV_ITEMS.map((item) => {
            const Icon = (Icons as any)[item.icon];
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setScreen(item.id)}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${
                  isActive ? 'text-primary scale-110' : 'text-on-surface-variant'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-primary-fixed' : 'bg-transparent'}`}>
                  <Icon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-on-surface-variant'}`} />
                </div>
                <span className={`text-[10px] font-medium ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
};
