import React from 'react';
import { motion } from 'motion/react';
import { 
  Handshake, 
  Globe, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  Users, 
  BarChart3, 
  MessageSquare,
  Star,
  Award
} from 'lucide-react';
import { Screen } from '../../types';

interface PartnerPortalProps {
  onJoin: (screen: Screen) => void;
}

export const PartnerPortal: React.FC<PartnerPortalProps> = ({ onJoin }) => {
  return (
    <div className="h-full bg-background overflow-y-auto pb-24">
      {/* Hero Section */}
      <div className="bg-primary p-12 text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-fixed rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container rounded-full blur-3xl" />
        </div>
        
        <div className="z-10 relative space-y-6">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-[32px] flex items-center justify-center mx-auto border border-white/20">
            <Handshake className="text-secondary-container w-10 h-10" />
          </div>
          <h2 className="text-4xl font-headline font-black text-white tracking-tighter">PARTNER PORTAL</h2>
          <p className="text-primary-fixed text-lg font-medium max-w-xs mx-auto">Join the global network of bio-intelligence energy specialists.</p>
          
          <button 
            onClick={() => onJoin('PROFESSIONAL_REGISTRATION')}
            className="bg-secondary-container text-primary px-8 py-4 rounded-2xl font-headline font-bold text-lg flex items-center gap-3 mx-auto shadow-xl hover:bg-secondary-fixed transition-all"
          >
            Become a Specialist
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="p-6 space-y-8">
        <h3 className="text-2xl font-headline font-black text-primary text-center">Why Partner with Us?</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Global Reach', icon: Globe, color: 'bg-primary-fixed' },
            { label: 'Smart Grid', icon: Zap, color: 'bg-secondary-fixed' },
            { label: 'Verified Trust', icon: ShieldCheck, color: 'bg-tertiary-fixed' },
            { label: 'AI Insights', icon: BarChart3, color: 'bg-surface-container-high' }
          ].map((benefit, i) => (
            <div key={i} className="glass-panel p-6 rounded-3xl space-y-4 shadow-sm text-center">
              <div className={`w-12 h-12 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto shadow-sm`}>
                <benefit.icon className="text-primary w-6 h-6" />
              </div>
              <p className="font-headline font-bold text-primary">{benefit.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-headline font-black text-primary">Success Stories</h3>
          <div className="glass-panel p-6 rounded-[32px] shadow-sm border-l-4 border-secondary-container space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-fixed">
                <img src="https://picsum.photos/seed/partner1/100/100" alt="Partner" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-headline font-bold text-primary">EcoTech Solar</p>
                <div className="flex items-center gap-1">
                  <Star className="text-secondary-container fill-secondary-container w-3 h-3" />
                  <span className="text-xs font-bold">4.9 Rating</span>
                </div>
              </div>
            </div>
            <p className="text-on-surface-variant text-sm italic font-medium leading-relaxed">
              "Joining Bio World transformed our business. We've seen a 40% increase in project requests and the bio-intelligence tools are game-changing."
            </p>
          </div>
        </div>

        {/* Partner Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Partners', value: '120+', icon: Users },
            { label: 'Projects', value: '4.2k', icon: Award },
            { label: 'Support', value: '24/7', icon: MessageSquare }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-1">
              <p className="text-primary font-headline font-black text-2xl tracking-tighter">{stat.value}</p>
              <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-primary-container rounded-[40px] p-8 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
          <h3 className="text-3xl font-headline font-black tracking-tighter">Ready to Scale?</h3>
          <p className="text-primary-fixed font-medium">Access our premium specialist tools and global customer base today.</p>
          <button 
            onClick={() => onJoin('PROFESSIONAL_REGISTRATION')}
            className="w-full bg-white text-primary py-4 rounded-2xl font-headline font-bold text-lg flex items-center justify-center gap-2 shadow-xl hover:bg-primary-fixed transition-all"
          >
            Get Started
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
