import React from 'react';
import logo from '../assets/Logo-pettosa.png';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 py-10 px-6 md:px-12 max-w-1440 mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="PetTosa Logo" className="h-10" />
        </div>
        <div className='flex items-center gap-8'>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="font-body text-[#F1F6FD] text-lg">Início</a>
          <a href="#" className="font-body text-[#F1F6FD] text-lg">Como Funciona</a>
          <a href="#" className="font-body text-[#F1F6FD] text-lg">Serviços</a>
          <a href="#" className="font-body text-[#F1F6FD] text-lg">Depoimentos</a>
          <a href="#" className="font-body text-[#F1F6FD] text-lg">FAQ</a>
        </nav>
        <button className="bg-[#F1F6FD33] text-[#F1F6FD] rounded-full py-2 px-4 text-lg font-body font-medium border border-white">
          Baixe o app
        </button>
        </div>
      </div>
    </header>
  );
};

export default Header;