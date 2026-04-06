/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Screen } from './types';
import { Layout } from './components/Layout';
import { Entry } from './components/screens/Entry';
import { Portal } from './components/screens/Portal';
import { Market } from './components/screens/Market';
import { Nexus } from './components/screens/Nexus';
import { Profile } from './components/screens/Profile';
import { SolarHubDetail } from './components/screens/SolarHubDetail';
import { EVPerformance } from './components/screens/EVPerformance';
import { EcoChargeMap } from './components/screens/EcoChargeMap';
import { SpecialistRegistration } from './components/screens/SpecialistRegistration';
import { ProfessionalRegistration } from './components/screens/ProfessionalRegistration';
import { RegistrationStatus } from './components/screens/RegistrationStatus';
import { Training } from './components/screens/Training';
import { Assessment } from './components/screens/Assessment';
import { CertificationSuccess } from './components/screens/CertificationSuccess';
import { DigitalCredentials } from './components/screens/DigitalCredentials';
import { WorkerAssignments } from './components/screens/WorkerAssignments';
import { BioSafeMonitor } from './components/screens/BioSafeMonitor';
import { IncidentLog } from './components/screens/IncidentLog';
import { IncidentReport } from './components/screens/IncidentReport';
import { InvestorDeck } from './components/screens/InvestorDeck';
import { InvestorFinancials } from './components/screens/InvestorFinancials';
import { SafetyOracle } from './components/screens/SafetyOracle';
import { PartnerPortal } from './components/screens/PartnerPortal';
import { AIPulse } from './components/screens/AIPulse';
import { EcosystemRankings } from './components/screens/EcosystemRankings';
import { ScienceFeed } from './components/screens/ScienceFeed';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('ENTRY');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'ENTRY':
        return <Entry onStart={setCurrentScreen} />;
      case 'PORTAL':
        return <Portal onNavigate={setCurrentScreen} />;
      case 'MARKET':
        return <Market onSelectProduct={setCurrentScreen} />;
      case 'NEXUS':
        return <Nexus onNavigate={setCurrentScreen} />;
      case 'PROFILE':
        return <Profile />;
      case 'SOLAR_DETAIL':
        return <SolarHubDetail onBack={setCurrentScreen} />;
      case 'EV_PERFORMANCE':
        return <EVPerformance onBack={setCurrentScreen} />;
      case 'MAP':
        return <EcoChargeMap onBack={setCurrentScreen} />;
      case 'REGISTRATION':
        return <SpecialistRegistration onBack={setCurrentScreen} onComplete={setCurrentScreen} />;
      case 'PROFESSIONAL_REGISTRATION':
        return <ProfessionalRegistration onBack={setCurrentScreen} onComplete={setCurrentScreen} />;
      case 'REGISTRATION_STATUS':
        return <RegistrationStatus onBack={setCurrentScreen} onNavigate={setCurrentScreen} />;
      case 'TRAINING':
        return <Training onBack={setCurrentScreen} onNavigate={setCurrentScreen} />;
      case 'ASSESSMENT':
        return <Assessment onBack={setCurrentScreen} onComplete={setCurrentScreen} />;
      case 'CERTIFICATION_SUCCESS':
        return <CertificationSuccess onNavigate={setCurrentScreen} />;
      case 'DIGITAL_CREDENTIALS':
        return <DigitalCredentials onNavigate={setCurrentScreen} />;
      case 'WORKER_ASSIGNMENTS':
        return <WorkerAssignments onNavigate={setCurrentScreen} />;
      case 'BIOSAFE_MONITOR':
        return <BioSafeMonitor onNavigate={setCurrentScreen} />;
      case 'INCIDENT_LOG':
        return <IncidentLog onNavigate={setCurrentScreen} />;
      case 'INCIDENT_REPORT':
        return <IncidentReport onNavigate={setCurrentScreen} />;
      case 'INVESTOR_DECK':
        return <InvestorDeck onNavigate={setCurrentScreen} />;
      case 'INVESTOR_FINANCIALS':
        return <InvestorFinancials onNavigate={setCurrentScreen} />;
      case 'SAFETY_ORACLE':
        return <SafetyOracle onNavigate={setCurrentScreen} />;
      case 'PARTNER_PORTAL':
        return <PartnerPortal onJoin={setCurrentScreen} />;
      case 'AI_PULSE':
        return <AIPulse onBack={setCurrentScreen} />;
      case 'RANKINGS':
        return <EcosystemRankings onBack={setCurrentScreen} />;
      case 'SCIENCE_FEED':
        return <ScienceFeed onNavigate={setCurrentScreen} />;
      default:
        return <Portal />;
    }
  };

  const showNav = !['ENTRY', 'SOLAR_DETAIL', 'EV_PERFORMANCE', 'MAP', 'REGISTRATION', 'PROFESSIONAL_REGISTRATION', 'REGISTRATION_STATUS', 'TRAINING', 'ASSESSMENT', 'CERTIFICATION_SUCCESS', 'DIGITAL_CREDENTIALS', 'WORKER_ASSIGNMENTS', 'BIOSAFE_MONITOR', 'INCIDENT_LOG', 'INCIDENT_REPORT', 'INVESTOR_DECK', 'INVESTOR_FINANCIALS', 'SAFETY_ORACLE', 'SCIENCE_FEED'].includes(currentScreen);

  if (currentScreen === 'ENTRY') {
    return <Entry onStart={setCurrentScreen} />;
  }

  return (
    <Layout currentScreen={currentScreen} setScreen={setCurrentScreen} showNav={showNav}>
      {renderScreen()}
    </Layout>
  );
}
