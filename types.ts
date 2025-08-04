import type React from 'react';

export interface ContentItem {
  type: 'paragraph' | 'list' | 'accordion' | 'quiz';
  title?: string;
  text?: string;
  items?: string[] | AccordionItem[];
  questions?: QuizQuestion[];
}

export interface AccordionItem {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  content: string[];
}

export interface SectionData {
  id: string;
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  content: ContentItem[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}
