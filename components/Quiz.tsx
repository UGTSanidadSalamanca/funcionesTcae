import React, { useState } from 'react';
import type { QuizQuestion } from '../types';
import { CheckIcon } from './icons/CheckIcon';
import { XIcon } from './icons/XIcon';

interface QuizProps {
  questions: QuizQuestion[];
}

type AnswerStatus = 'unanswered' | 'correct' | 'incorrect';

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [status, setStatus] = useState<AnswerStatus>('unanswered');
  const [score, setScore] = useState(0);

  const question = questions[currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    if (status !== 'unanswered') return;

    setSelectedOption(option);
    if (option === question.correctAnswer) {
      setStatus('correct');
      setScore(score + 1);
    } else {
      setStatus('incorrect');
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      resetState();
    } else {
      // End of quiz
      alert(`Quiz Finished! Your score: ${score}/${questions.length}`);
      setCurrentQuestionIndex(0);
      setScore(0);
      resetState();
    }
  };
  
  const resetState = () => {
      setSelectedOption(null);
      setStatus('unanswered');
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4">
        <p className="text-sm text-slate-500 text-center">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>
        <h4 className="text-lg font-semibold text-center mt-1 text-slate-700">{question.question}</h4>
      </div>
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === option;
          let buttonClass = "bg-white hover:bg-slate-100 border-slate-300";
          if (isSelected) {
            if (status === 'correct') buttonClass = "bg-green-100 border-green-500 text-green-800";
            if (status === 'incorrect') buttonClass = "bg-red-100 border-red-500 text-red-800";
          } else if (status !== 'unanswered' && option === question.correctAnswer) {
             buttonClass = "bg-green-100 border-green-500 text-green-800";
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              disabled={status !== 'unanswered'}
              className={`w-full p-4 rounded-lg border-2 text-left font-medium transition-colors duration-200 flex justify-between items-center ${buttonClass}`}
            >
              <span>{option}</span>
              {isSelected && status === 'correct' && <CheckIcon className="h-6 w-6 text-green-600"/>}
              {isSelected && status === 'incorrect' && <XIcon className="h-6 w-6 text-red-600"/>}
            </button>
          );
        })}
      </div>
      {status !== 'unanswered' && (
        <div className="p-4 rounded-lg bg-slate-100 text-center">
            <p className="font-semibold text-slate-800">Explicación:</p>
            <p className="text-slate-600">{question.explanation}</p>
            <button onClick={handleNext} className="mt-4 px-6 py-2 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors">
                {currentQuestionIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Quiz'}
            </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
