import React from 'react';
import type { SectionData, ContentItem, AccordionItem, QuizQuestion } from '../types';
import Accordion from './Accordion';
import Quiz from './Quiz';

interface MainContentProps {
  section: SectionData;
}

const renderContentItem = (item: ContentItem, index: number) => {
  switch (item.type) {
    case 'paragraph':
      return (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-bold text-teal-700 mb-2">{item.title}</h3>
          <p className="text-slate-600 leading-relaxed">{item.text}</p>
        </div>
      );
    case 'list':
      return (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-xl font-bold text-teal-700 mb-3">{item.title}</h3>
          {item.text && <p className="text-slate-600 leading-relaxed mb-4">{item.text}</p>}
          <ul className="space-y-3">
            {(item.items as string[]).map((listItem, i) => (
              <li key={i} className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">{listItem}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case 'accordion':
        return <Accordion key={index} items={item.items as AccordionItem[]} />;
    case 'quiz':
      return (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm mt-8 border-t-4 border-teal-500">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-4">{item.title}</h3>
            <Quiz questions={item.questions as QuizQuestion[]} />
        </div>
      );
    default:
      return null;
  }
};

const MainContent: React.FC<MainContentProps> = ({ section }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">{section.title}</h2>
        <div className="mt-2 h-1.5 w-24 bg-teal-500 rounded-full"></div>
      </div>
      <div>
        {section.content.map(renderContentItem)}
      </div>
    </div>
  );
};

export default MainContent;
