import React from 'react';
import backgroundImage from '../assets/img-background.png';
import user from '../assets/Faces-users.png';

const Hero = () => {
  return (
    <section 
      className="relative w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient overlay para escurecer o lado esquerdo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b]/95 via-[#1e293b]/70 to-transparent"></div>
      
      {/* Container de conteúdo */}
      <div className="relative z-10 h-full container mx-auto max-w-[1440px] px-6 md:px-12 pt-64 pb-40">
        <div className="max-w-[700px]">
          <h1 className="text-[64px] md:text-6xl font-title text-[#F1F6FD] mb-[30px] leading-tight">
            PARA QUEM AMA 
            <br />
            CUIDAR DE VERDADE
          </h1>
          
          <p className="font-body text-[#F1F6FD] text-xl mb-8">
            Agende banhos, consultas e vacinas com facilidade, acompanhe o 
            histórico do seu pet e encontre os melhores serviços perto de você.
          </p>
          
          <button className="bg-[#F1F6FD33] text-[#F1F6FD] rounded-full py-3 px-6 font-body text-lg border border-white font-medium transition-colors">
            Baixe o nosso app agora
          </button>
          
          <div className="mt-10 flex items-center gap-4">
           <img src={user} alt="user" />
            <p className="font-body text-[#F1F6FD] text-lg">+45 mil usuários cadastrados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;