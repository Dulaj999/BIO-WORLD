import { Screen } from './types';

export const NAV_ITEMS = [
  { id: 'MARKET' as Screen, label: 'Market', icon: 'ShoppingBag' },
  { id: 'NEXUS' as Screen, label: 'Nexus', icon: 'Network' },
  { id: 'PORTAL' as Screen, label: 'Portal', icon: 'LayoutDashboard' },
  { id: 'PROFILE' as Screen, label: 'Profile', icon: 'User' },
];

export const ECO_STATS = [
  { label: 'Daily Yield', value: '12.4 kWh', trend: '+12%', icon: 'Zap' },
  { label: 'Eco Impact', value: '840 kg', trend: '-5%', icon: 'Leaf' },
  { label: 'Active Nodes', value: '1,240', trend: '+24', icon: 'Share2' },
];

export const MARKET_CATEGORIES = [
  { id: 'solar', label: 'Solar Hub', icon: 'Sun', color: 'bg-secondary-container' },
  { id: 'ev', label: 'Electric Vehicles', icon: 'Car', color: 'bg-primary-fixed' },
  { id: 'biogas', label: 'Bio-Gas', icon: 'Flame', color: 'bg-tertiary-fixed' },
];

export const SPECIALISTS = [
  { name: 'EcoTech Solar', rating: 4.9, projects: 124, location: 'Colombo' },
  { name: 'GreenGrid EV', rating: 4.7, projects: 89, location: 'Kandy' },
  { name: 'BioFuel Systems', rating: 4.8, projects: 56, location: 'Galle' },
];
