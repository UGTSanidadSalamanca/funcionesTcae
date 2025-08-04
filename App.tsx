import React, { useState } from 'react';
import { SECTIONS } from './constants';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import type { SectionData } from './types';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>(SECTIONS[0].id);

  const activeSection = SECTIONS.find(s => s.id === activeSectionId) as SectionData;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Header />
      <div className="flex">
        <Sidebar 
          sections={SECTIONS}
          activeSectionId={activeSectionId}
          onSelectSection={setActiveSectionId}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-10">
          <MainContent section={activeSection} />
        </main>
      </div>
    </div>
  );
}
