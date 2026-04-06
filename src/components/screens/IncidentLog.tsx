import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Screen } from '../../types';

interface IncidentLogProps {
  onNavigate: (screen: Screen) => void;
}

interface Incident {
  id: string;
  date: string;
  time: string;
  title: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Resolved';
  agentId: string;
  location?: string;
  impact?: string;
  source?: string;
  duration?: string;
  description: string;
  status: string;
  icon: string;
}

export const IncidentLog: React.FC<IncidentLogProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const incidents: Incident[] = [
    {
      id: '1',
      date: 'Oct 24, 2023',
      time: '14:32:01',
      title: 'Systemic Pressure Spike',
      severity: 'Critical',
      agentId: 'BIO-A7-VANGUARD',
      location: 'Sector G-12',
      description: 'Autonomous cooling override initiated after pressure transducers exceeded 450kPa. Integrity preserved via emergency nitrogen venting.',
      status: 'Resolution Complete',
      icon: 'check_circle'
    },
    {
      id: '2',
      date: 'Oct 23, 2023',
      time: '09:15:44',
      title: 'Potential System Breach',
      severity: 'High',
      agentId: 'CYBER-SENTRY-01',
      impact: 'Data Perimeter',
      description: 'Unusual traffic patterns detected from external node. IP blocked and protocol re-sharding executed by Agent. No data exfiltration.',
      status: 'Threat Neutralized',
      icon: 'verified'
    },
    {
      id: '3',
      date: 'Oct 22, 2023',
      time: '18:00:12',
      title: 'Bio-Gas Leak Detected',
      severity: 'Medium',
      agentId: 'BIO-M3-MAINTAIN',
      source: 'Unit 04-B',
      description: 'Trace amounts of Bio-Methane detected in ventilation. Seal 12 was automatically tightened by robotic assembly within 4 minutes.',
      status: 'Stabilized',
      icon: 'task_alt'
    },
    {
      id: '4',
      date: 'Oct 21, 2023',
      time: '12:45:00',
      title: 'Sensor Miscalibration',
      severity: 'Resolved',
      agentId: 'SYS-DIAG-009',
      duration: '12 Seconds',
      description: 'Optical sensor drift detected in lab sector. Agent remotely re-synced timestamps. No human intervention required.',
      status: 'Archived',
      icon: 'check_circle'
    }
  ];

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-error-container text-on-error-container border-error';
      case 'High': return 'bg-secondary-container text-on-secondary-container border-secondary';
      case 'Medium': return 'bg-primary-fixed text-on-primary-fixed-variant border-primary-fixed-dim';
      case 'Resolved': return 'bg-tertiary-fixed text-on-tertiary-fixed-variant border-tertiary-fixed-dim';
      default: return 'bg-surface-container-highest text-on-surface-variant border-outline-variant';
    }
  };

  const filteredIncidents = incidents.filter(incident => {
    const matchesSearch = incident.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          incident.agentId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'All' || incident.severity === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-background font-body text-on-surface min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_4px_40px_0_rgba(0,53,39,0.04)]">
        <div className="flex items-center justify-between px-6 h-20 w-full max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border-2 border-primary-fixed/20">
              <img 
                alt="CEO Profile Avatar" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL6BbI-_c06BKWpRhVFTbVq9g2jdiTzFFHxXBZpxjYz0u_0mRWq_OiHt2Jf28p3VH-BcW0O1BmCcWXIJfu0J4dNCu-c5edVZ0Xwew8Sm2EnUj4DiOAnBiWzcIYrqdrZ7wUYj3HtxoxMD29ThsjbThGsf082iQM3OCCazm7EK9ZGH4Gp0ZdYdSnkNoS05Pj-alxIpw_AzQqH5ONJ1C4UB3JHVisLnQrfsRu4lVWM7oYbhl8pU5GVgBv7tSNad1ByHd1qTGl5rvr66m0"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-2xl font-bold text-primary font-headline tracking-tight">BIO World Intelligence</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-surface-container-low transition-all active:scale-95 text-primary">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="p-2 rounded-full hover:bg-surface-container-low transition-all active:scale-95 text-primary">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-28 px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 text-on-primary-container mb-2">
            <span className="material-symbols-outlined text-sm">history</span>
            <span className="text-xs font-bold tracking-widest uppercase">Archive System</span>
          </div>
          <h2 className="text-4xl font-bold text-primary tracking-tight mb-4">Historical Incident Log</h2>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed">
            Comprehensive audit trail of bio-synthetic ecosystem anomalies and agent interventions. High-fidelity logs for executive oversight.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="bg-surface-container-low rounded-2xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-center sticky top-24 z-40 shadow-sm border border-outline-variant/10">
          <div className="relative w-full md:flex-1">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input 
              className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/20 rounded-xl text-sm font-medium placeholder:text-outline/60" 
              placeholder="Search by incident type, agent ID, or keyword..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto no-scrollbar">
            {['All', 'Critical', 'High', 'Medium', 'Resolved'].map((f) => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${filter === f ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant hover:bg-primary/10'}`}
              >
                {f === 'All' ? 'All Logs' : f}
              </button>
            ))}
          </div>
        </div>

        {/* Incident Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredIncidents.map((incident, idx) => (
            <motion.div 
              key={incident.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onNavigate('INCIDENT_REPORT')}
              className={`bg-surface-container-lowest p-6 rounded-2xl border-l-4 ${getSeverityStyles(incident.severity)} flex flex-col gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-1 duration-300 cursor-pointer`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs font-bold text-outline uppercase tracking-wider mb-1">{incident.date} • {incident.time}</div>
                  <h3 className="text-xl font-bold text-primary">{incident.title}</h3>
                </div>
                <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${getSeverityStyles(incident.severity).split(' ').slice(0, 2).join(' ')}`}>
                  {incident.severity}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="bg-surface-container-low p-3 rounded-xl">
                  <div className="text-[10px] text-outline font-bold uppercase mb-1">Agent ID</div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-primary">smart_toy</span>
                    <span className="text-sm font-bold text-on-surface">{incident.agentId}</span>
                  </div>
                </div>
                <div className="bg-surface-container-low p-3 rounded-xl">
                  <div className="text-[10px] text-outline font-bold uppercase mb-1">
                    {incident.location ? 'Location' : incident.impact ? 'Impact' : incident.source ? 'Source' : 'Duration'}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-primary">
                      {incident.location ? 'location_on' : incident.impact ? 'security' : incident.source ? 'factory' : 'timer'}
                    </span>
                    <span className="text-sm font-bold text-on-surface">
                      {incident.location || incident.impact || incident.source || incident.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                {incident.description}
              </div>

              <div className="flex items-center justify-between mt-2 pt-4 border-t border-outline-variant/10">
                <div className="flex items-center gap-2 text-primary text-xs font-bold">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{incident.icon}</span>
                  {incident.status}
                </div>
                <button className="text-xs font-bold flex items-center gap-1 text-primary hover:text-secondary transition-colors">
                  View Detailed Report
                  <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pt-3 pb-6 px-4 bg-surface/90 backdrop-blur-2xl rounded-t-[1.5rem] z-50 shadow-[0_-4px_40px_0_rgba(0,53,39,0.06)] max-w-6xl mx-auto left-1/2 -translate-x-1/2">
        <button 
          onClick={() => onNavigate('SAFETY_ORACLE')}
          className="flex flex-col items-center justify-center text-[#80bea6] px-5 py-2 hover:text-secondary transition-colors active:scale-90 duration-200"
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-body text-xs font-semibold">Status</span>
        </button>
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-primary-container to-primary text-white rounded-2xl px-5 py-2 active:scale-90 duration-200">
          <span className="material-symbols-outlined">history</span>
          <span className="font-body text-xs font-semibold">Log</span>
        </div>
        <button 
          onClick={() => onNavigate('NEXUS')}
          className="flex flex-col items-center justify-center text-[#80bea6] px-5 py-2 hover:text-secondary transition-colors active:scale-90 duration-200"
        >
          <span className="material-symbols-outlined">smart_toy</span>
          <span className="font-body text-xs font-semibold">Agents</span>
        </button>
        <button 
          onClick={() => onNavigate('PROFILE')}
          className="flex flex-col items-center justify-center text-[#80bea6] px-5 py-2 hover:text-secondary transition-colors active:scale-90 duration-200"
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="font-body text-xs font-semibold">Settings</span>
        </button>
      </nav>

      {/* FAB */}
      <button className="fixed bottom-28 right-6 w-14 h-14 bg-secondary rounded-2xl shadow-lg flex items-center justify-center text-white active:scale-95 transition-transform">
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
};
