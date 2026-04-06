import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Briefcase, 
  MapPin, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Upload, 
  FileText, 
  Globe,
  ChevronRight,
  Info
} from 'lucide-react';
import { Screen } from '../../types';

interface SpecialistRegistrationProps {
  onBack: (screen: Screen) => void;
  onComplete: (screen: Screen) => void;
}

export const SpecialistRegistration: React.FC<SpecialistRegistrationProps> = ({ onBack, onComplete }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
    else onComplete('REGISTRATION_STATUS');
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
    else onBack('PORTAL');
  };

  return (
    <div className="h-full bg-background p-6 flex flex-col space-y-8 pb-24 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button 
          onClick={prevStep}
          className="w-12 h-12 bg-surface-container-high rounded-2xl flex items-center justify-center shadow-sm hover:bg-surface-container-highest transition-all"
        >
          <ArrowLeft className="text-primary w-6 h-6" />
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-headline font-black tracking-tighter text-primary uppercase">Registration</h2>
          <div className="flex gap-1 mt-1">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`h-1.5 rounded-full transition-all duration-500 ${s === step ? 'w-8 bg-primary' : 'w-2 bg-primary-fixed'}`} 
              />
            ))}
          </div>
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Step Content */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {step === 1 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-3xl font-headline font-black text-primary tracking-tighter">Business Profile</h3>
                  <p className="text-on-surface-variant font-medium">Tell us about your expertise and services.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Company Name</label>
                    <div className="glass-panel h-14 rounded-2xl flex items-center px-4 gap-3 shadow-sm">
                      <Briefcase className="text-primary w-5 h-5" />
                      <input type="text" placeholder="e.g. EcoTech Solar" className="bg-transparent border-none outline-none flex-1 font-medium text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Specialization</label>
                    <div className="glass-panel h-14 rounded-2xl flex items-center px-4 gap-3 shadow-sm">
                      <Globe className="text-primary w-5 h-5" />
                      <select className="bg-transparent border-none outline-none flex-1 font-medium text-primary appearance-none">
                        <option>Solar Installation</option>
                        <option>EV Infrastructure</option>
                        <option>Bio-Gas Systems</option>
                        <option>Energy Auditing</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Location</label>
                    <div className="glass-panel h-14 rounded-2xl flex items-center px-4 gap-3 shadow-sm">
                      <MapPin className="text-primary w-5 h-5" />
                      <input type="text" placeholder="City, Region" className="bg-transparent border-none outline-none flex-1 font-medium text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-3xl font-headline font-black text-primary tracking-tighter">Verification</h3>
                  <p className="text-on-surface-variant font-medium">Upload necessary documents for verification.</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: 'Business License', icon: FileText },
                    { label: 'Technical Certification', icon: ShieldCheck },
                    { label: 'Identity Proof', icon: User }
                  ].map((doc, i) => (
                    <div key={i} className="glass-panel p-6 rounded-3xl border-2 border-dashed border-outline-variant flex flex-col items-center gap-3 hover:border-primary transition-colors cursor-pointer group">
                      <div className="w-12 h-12 bg-surface-container-high rounded-2xl flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
                        <doc.icon className="text-primary w-6 h-6" />
                      </div>
                      <div className="text-center">
                        <p className="font-headline font-bold text-primary">{doc.label}</p>
                        <p className="text-on-surface-variant text-xs font-medium">PDF, JPG or PNG (Max 5MB)</p>
                      </div>
                      <button className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 mt-2">
                        <Upload className="w-4 h-4" />
                        Upload File
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div className="space-y-2 text-center">
                  <div className="w-24 h-24 bg-primary-fixed rounded-[40px] flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <CheckCircle2 className="text-primary w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-headline font-black text-primary tracking-tighter">Ready to Join?</h3>
                  <p className="text-on-surface-variant font-medium max-w-xs mx-auto">Review our terms and conditions to complete your registration as a Bio-Specialist.</p>
                </div>
                
                <div className="glass-panel p-6 rounded-3xl space-y-4 shadow-sm border-l-4 border-secondary-container">
                  <div className="flex items-center gap-3">
                    <Info className="text-secondary w-5 h-5" />
                    <h4 className="font-headline font-bold text-primary">Partner Agreement</h4>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    By joining the Bio World network, you agree to maintain high standards of ecological impact and follow our bio-intelligence guidelines for energy distribution.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <input type="checkbox" className="w-5 h-5 rounded border-outline accent-primary" />
                    <span className="text-sm font-medium text-primary">I agree to the Partner Terms</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Actions */}
      <div className="fixed bottom-0 left-0 w-full p-6 glass-panel border-t border-outline-variant z-20 flex gap-4">
        <button 
          onClick={nextStep}
          className="flex-1 bg-primary text-white py-5 rounded-3xl font-headline font-black text-lg flex items-center justify-center gap-3 shadow-2xl hover:bg-primary-container transition-all"
        >
          {step === totalSteps ? 'Complete Registration' : 'Next Step'}
          <ArrowRight className="w-6 h-6 text-primary-fixed" />
        </button>
      </div>
    </div>
  );
};
