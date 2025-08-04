import React from 'react';
import type { SectionData } from '../types';

interface SidebarProps {
  sections: SectionData[];
  activeSectionId: string;
  onSelectSection: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeSectionId, onSelectSection }) => {
  return (
    <aside className="w-64 bg-slate-100 p-4 border-r border-slate-200 h-screen sticky top-20">
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => {
            const isActive = section.id === activeSectionId;
            const Icon = section.icon;
            return (
              <li key={section.id}>
                <button
                  onClick={() => onSelectSection(section.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                  }`}
                >
                  <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-teal-600'}`} />
                  <span className="font-semibold">{section.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
