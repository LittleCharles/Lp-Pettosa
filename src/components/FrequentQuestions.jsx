import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-[0px_0px_17.3px_0px_rgba(52,67,99,0.1)] overflow-hidden transition-all duration-300 ease-in-out">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          p-4 cursor-pointer flex justify-between items-center
          transition-colors duration-300
        `}
      >
        <span className="font-semibold text-lg text-[#41547C]">{question}</span>
        <div 
          className={`
            flex items-center justify-center w-7 h-7 rounded-full bg-[#8B9CC0] border-2 border-[#ffffff33] text-white
            transition-all duration-300 transform
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `}
        >
          <FaChevronDown className="h-3 w-3" />
        </div>
      </div>
      <div 
        className={`
          transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'}
        `}
      >
        <div 
          className={`
            px-4 pb-4  text-gray-700 text-sm md:text-base
            transform transition-transform duration-500 ease-out
            ${isOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-10 opacity-0'}
          `}
        >
          <div className="animate-text-reveal text-base text-[#41547C]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FrequentQuestions = () => {
  const questions = [
    {
      question: 'O que é o Pettosa?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et leo interdum, malesuada metus sed, porttitor tellus. Cras faucibus consequat risus, vitae tincidunt orci ullamcorper mattis. Sed aliquet mi et nisl vestibulum, eu elementum velit ultrices.'
    },
    {
      question: 'Como agendar um serviço pelo app?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et leo interdum, malesuada metus sed, porttitor tellus. Cras faucibus consequat risus, vitae tincidunt orci ullamcorper mattis. Sed aliquet mi et nisl vestibulum, eu elementum velit ultrices.'
    },
    {
      question: 'O app envia lembretes de vacinas e consultas?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et leo interdum, malesuada metus sed, porttitor tellus. Cras faucibus consequat risus, vitae tincidunt orci ullamcorper mattis. Sed aliquet mi et nisl vestibulum, eu elementum velit ultrices.'
    },
    {
      question: 'Posso cadastrar mais de um pet?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et leo interdum, malesuada metus sed, porttitor tellus. Cras faucibus consequat risus, vitae tincidunt orci ullamcorper mattis. Sed aliquet mi et nisl vestibulum, eu elementum velit ultrices.'
    },
    {
      question: 'O Pettosa é gratuito?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et leo interdum, malesuada metus sed, porttitor tellus. Cras faucibus consequat risus, vitae tincidunt orci ullamcorper mattis. Sed aliquet mi et nisl vestibulum, eu elementum velit ultrices.'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-5xl font-title text-[#344363] text-center mb-10">
        Perguntas Frequentes
      </h2>
      <div className="flex flex-col gap-4">
        {questions.map((item, index) => (
          <AccordionItem 
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FrequentQuestions;