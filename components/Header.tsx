import React from 'react';
import { LifebuoyIcon } from './icons/LifebuoyIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <LifebuoyIcon className="h-10 w-10 text-teal-600" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
                El TCAE: Un Pilar en la Atención Sanitaria
              </h1>
              <p className="text-sm text-slate-500 hidden sm:block">Guía sobre el rol, responsabilidades y competencias</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
