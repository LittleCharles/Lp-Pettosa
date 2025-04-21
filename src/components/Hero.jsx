import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/img-background.png";
import mobileBackgroundImage from "../assets/Mobile-background.png";
import user from "../assets/Faces-users.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen"
      style={{
        backgroundImage: `url(${
          isMobile ? mobileBackgroundImage : backgroundImage
        })`,
        backgroundSize: "cover",
        backgroundPosition: isMobile ? "center center" : "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 h-full container mx-auto max-w-[1440px] px-6 md:px-12 pt-32 md:pt-64 pb-20 md:pb-40">
        <div className="max-w-[700px]">
          <h1 className="text-4xl sm:text-5xl md:text-[64px] font-title text-[#F1F6FD] mb-4 md:mb-[30px] leading-tight">
            PARA QUEM AMA
            <br />
            CUIDAR DE VERDADE
          </h1>

          <p className="font-body text-[#F1F6FD] text-base md:text-xl mb-6 md:mb-8">
            Agende banhos, consultas e vacinas com facilidade, acompanhe o
            histórico do seu pet e encontre os melhores serviços perto de você.
          </p>

          <div className="max-[425px]:flex max-[425px]:justify-center">
            <button
              className="bg-[#F1F6FD33] text-[#F1F6FD] rounded-full py-2 px-4 md:py-3 md:px-6 
                         font-body text-base md:text-lg border border-white font-medium 
                         transition-all duration-300 hover:bg-[#F1F6FD] hover:text-[#344363]"
            >
              Baixe o nosso app agora
            </button>
          </div>

          <div className="mt-6 md:mt-10 flex items-center max-[425px]:flex-col gap-3 md:gap-4">
            <img src={user} alt="user" />
            <p className="font-body text-[#F1F6FD] text-lg">
              +45 mil usuários cadastrados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
