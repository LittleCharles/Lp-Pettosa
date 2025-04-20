import React, { useRef, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import MariaAvatar from '../assets/maria.png';
import QuotesIcon from '../assets/icons/Quotes.svg';

// Componente para exibir as estrelas de avaliação
const Rating = ({ value = 5 }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FaStar 
          key={i} 
          className={`w-5 h-5 ${i < value ? 'text-yellow-400' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Flávia Carvalho',
      title: 'Tutora da Luna',
      avatar: MariaAvatar,    
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lacus in hendrerit suscipit, mauris libero fermentum erat, vitae facilisis nulla justo in lacus. Morbi ut risus nec metus congue blandit. Integer vitae purus et nulla laoreet posuere.'
    },
    {
      id: 2,
      name: 'Daniel Andrade',
      title: 'Tutor do Bob',
      avatar: MariaAvatar,
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lacus in hendrerit suscipit, mauris libero fermentum erat, vitae facilisis nulla justo in lacus. Morbi ut risus nec metus congue blandit. Integer vitae purus et nulla laoreet posuere.'
    },
    {
      id: 3,
      name: 'Maria Silva',
      title: 'Tutora do Max',
      avatar: MariaAvatar,
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lacus in hendrerit suscipit, mauris libero fermentum erat, vitae facilisis nulla justo in lacus. Morbi ut risus nec metus congue blandit. Integer vitae purus et nulla laoreet posuere.'
    },
    {
      id: 4,
      name: 'Matheus Souza',
      title: 'Tutor do Marley',
      avatar: MariaAvatar,
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lacus in hendrerit suscipit, mauris libero fermentum erat, vitae facilisis nulla justo in lacus. Morbi ut risus nec metus congue blandit. Integer vitae purus et nulla laoreet posuere.'
    },
    {
      id: 5,
      name: 'Amanda Martins',
      title: 'Tutora da Julie',
      avatar: MariaAvatar,
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lacus in hendrerit suscipit, mauris libero fermentum erat, vitae facilisis nulla justo in lacus. Morbi ut risus nec metus congue blandit. Integer vitae purus et nulla laoreet posuere.'
    },
    {
      id: 6,
      name: 'João Barbosa',
      title: 'Tutor do Spyke',
      avatar: MariaAvatar,
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lacus in hendrerit suscipit, mauris libero fermentum erat, vitae facilisis nulla justo in lacus. Morbi ut risus nec metus congue blandit. Integer vitae purus et nulla laoreet posuere.'
    }
  ];

  // Referências para os carrosséis
  const topCarouselRef = useRef(null);
  const bottomCarouselRef = useRef(null);

  // Função para configurar a animação
  useEffect(() => {
    const setupCarousel = (carouselRef, direction = 1, speed = 0.5) => {
      if (!carouselRef.current) return;

      let scrollPosition = 0;
      const container = carouselRef.current;
      
      // Clone os itens para criar um efeito infinito
      const items = container.querySelectorAll('.testimonial-item');
      items.forEach(item => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
      });

      // Função para animar o scroll
      const animateScroll = () => {
        if (!container) return;
        
        // Incrementa a posição com a direção e velocidade
        scrollPosition += speed * direction;
        
        // Reinicia quando chegar ao final
        const maxScroll = container.scrollWidth / 2;
        if (Math.abs(scrollPosition) >= maxScroll) {
          scrollPosition = 0;
        }
        
        // Aplica o scroll
        container.scrollLeft = Math.abs(scrollPosition);
        
        requestAnimationFrame(animateScroll);
      };
      
      // Inicia a animação
      const animation = requestAnimationFrame(animateScroll);
      
      return () => cancelAnimationFrame(animation);
    };

    // Configurar carrosséis com direções opostas
    const topCleanup = setupCarousel(topCarouselRef, 1, 0.5); // Direita para esquerda
    const bottomCleanup = setupCarousel(bottomCarouselRef, -1, 0.5); // Esquerda para direita

    return () => {
      topCleanup && topCleanup();
      bottomCleanup && bottomCleanup();
    };
  }, []);

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="text-5xl font-title text-[#344363] text-center mb-10">
          Experiencias de quem ja usou
        </h2>
        
        {/* Primeiro carrossel - com movimento da direita para esquerda */}
        <div className="relative">
          {/* Gradiente à esquerda */}
          <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          
          {/* Gradiente à direita */}
          <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div 
            ref={topCarouselRef}
            className="flex overflow-x-auto scrollbar-hide gap-8 pb-4 pt-4" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={`top-${testimonial.id}`} 
                className="testimonial-item flex-shrink-0 bg-white rounded-xl relative p-5"
                style={{ 
                  boxShadow: '0px 0px 17.3px 0px rgba(52, 67, 99, 0.1)',
                  padding: '20px',
                  width: '450px',
                  minWidth: '450px'
                }}
              >
                <img 
                  src={QuotesIcon} 
                  alt="" 
                  className="absolute top-5 left-5 w-8 h-8 text-[#E6EEFF]"
                />
                
                <div className="flex justify-end mb-6">
                  <Rating value={testimonial.rating} />
                </div>
                
                <p className="text-[#344363] mb-6 text-sm">
                  {testimonial.text}
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-[#344363] font-bold">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#6B7A99] text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Segundo carrossel - com movimento da esquerda para direita e deslocado 30px para baixo */}
        <div className="relative"> 
          {/* Gradiente à esquerda */}
          <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          
          {/* Gradiente à direita */}
          <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div 
            ref={bottomCarouselRef}
            className="flex overflow-x-auto scrollbar-hide gap-8 pb-4 pt-4 pl-24" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={`bottom-${testimonial.id}`} 
                className="testimonial-item flex-shrink-0 bg-white rounded-xl relative p-5"
                style={{ 
                  boxShadow: '0px 0px 17.3px 0px rgba(52, 67, 99, 0.1)',
                  padding: '20px',
                width: '450px',
                  minWidth: '450px'
                }}
              >
                <img 
                  src={QuotesIcon} 
                  alt="" 
                  className="absolute top-5 left-5 w-8 h-8 text-[#E6EEFF]"
                />
                
                <div className="flex justify-end mb-6">
                  <Rating value={testimonial.rating} />
                </div>
                
                <p className="text-[#344363] mb-6 text-sm">
                  {testimonial.text}
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-[#344363] font-bold">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#6B7A99] text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;