import React, { useEffect, useRef } from 'react';

// Importando os logos
import Logo1 from '../assets/logos/Logo1.png';
import Logo2 from '../assets/logos/Logo2.png';
import Logo3 from '../assets/logos/Logo3.png';
import Logo4 from '../assets/logos/Logo4.png';
import Logo5 from '../assets/logos/Logo5.png';

const LogosCarousel = () => {
  const logos = [
    { id: 1, src: Logo1, alt: 'Logo 1' },
    { id: 2, src: Logo2, alt: 'Logo 2' },
    { id: 3, src: Logo3, alt: 'Logo 3' },
    { id: 4, src: Logo4, alt: 'Logo 4' },
    { id: 5, src: Logo5, alt: 'Logo 5' },
  ];
  
  // Refs para o slider e o interval
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  
  useEffect(() => {
    // Configuração para o slider automático
    const slider = sliderRef.current;
    
    // Configurações de velocidade e controle
    const SPEED = 1; // Velocidade do deslocamento em pixels por intervalo
    const INTERVAL = 20; // Intervalo de tempo em milissegundos
    
    // Duplicar o conteúdo para criar o efeito infinito
    // Primeiro, calcule a largura total de um conjunto de logos
    if (slider) {
      const cloneItems = () => {
        const children = Array.from(slider.children);
        
        // Clone cada logo e adicione ao final
        children.forEach(child => {
          const clone = child.cloneNode(true);
          slider.appendChild(clone);
        });
      };
      
      // Clone os logos
      cloneItems();
      
      // Função para mover os slides
      const moveSlides = () => {
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          // Quando atingir a metade (onde começam os clones), volte instantaneamente ao início
          slider.scrollLeft = 0;
        } else {
          // Caso contrário, continue movendo
          slider.scrollLeft += SPEED;
        }
      };
      
      // Inicie a animação
      intervalRef.current = setInterval(moveSlides, INTERVAL);
      
      // Limpe o intervalo quando o componente for desmontado
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Container principal */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative">
      {/* Versão com ainda mais branco */}
<div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white from-40% via-white via-70% to-transparent z-10"></div>

<div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white from-40% via-white via-70% to-transparent z-10"></div>
        
        {/* Container do carrossel - Sem animação CSS, usando JS para controle */}
        <div 
          className="flex overflow-x-hidden scrollbar-hide"
          ref={sliderRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Logos originais - serão duplicados via JavaScript */}
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="flex-shrink-0 flex items-center justify-center px-8"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosCarousel;