import React, { useState } from 'react';
import type { AccordionItem } from '../types';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const Icon = item.icon;
        return (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => handleClick(index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <div className="flex items-center space-x-4">
                 <Icon className="h-8 w-8 text-teal-600" />
                <span className="text-lg font-semibold text-slate-800">{item.title}</span>
              </div>
              <ChevronDownIcon
                className={`h-6 w-6 text-slate-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
              />
            </button>
            <div
              className={`transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <div className="p-5 pt-0">
                <ul className="space-y-2 pl-2 border-l-2 border-teal-200">
                  {item.content.map((point, i) => (
                    <li key={i} className="text-slate-600 leading-relaxed ml-4">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
