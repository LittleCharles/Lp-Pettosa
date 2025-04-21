import React, { useState } from "react";
import logo from "../assets/Logo-pettosa.png";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      const headerOffset = 150;

      window.scrollTo({
        top: offsetTop - headerOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-20 py-6 md:py-10 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="PetTosa Logo" className="h-8 md:h-10" />
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              <a
                href="#inicio"
                className="font-body text-[#F1F6FD] text-lg hover:text-white transition-colors"
                onClick={(e) => scrollToSection(e, "inicio")}
              >
                Início
              </a>
              <a
                href="#como-funciona"
                className="font-body text-[#F1F6FD] text-lg hover:text-white transition-colors"
                onClick={(e) => scrollToSection(e, "como-funciona")}
              >
                Como Funciona
              </a>
              <a
                href="#servicos"
                className="font-body text-[#F1F6FD] text-lg hover:text-white transition-colors"
                onClick={(e) => scrollToSection(e, "servicos")}
              >
                Serviços
              </a>
              <a
                href="#depoimentos"
                className="font-body text-[#F1F6FD] text-lg hover:text-white transition-colors"
                onClick={(e) => scrollToSection(e, "depoimentos")}
              >
                Depoimentos
              </a>
              <a
                href="#faq"
                className="font-body text-[#F1F6FD] text-lg hover:text-white transition-colors"
                onClick={(e) => scrollToSection(e, "faq")}
              >
                FAQ
              </a>
            </nav>
            <button className="bg-[#F1F6FD33] text-[#F1F6FD] rounded-full py-2 px-4 text-lg font-body font-medium border border-white transition-all duration-300 hover:bg-[#F1F6FD] hover:text-[#344363]">
              Baixe o app
            </button>
          </div>

          <button
            className="lg:hidden text-[#F1F6FD] focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
          </button>
        </div>

        <div
          className={`lg:hidden bg-[#344363] mt-4 p-4 rounded-lg shadow-lg absolute left-4 right-4 z-30 transform transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col gap-4">
            <a
              href="#inicio"
              className="font-body text-[#F1F6FD] text-lg py-2 hover:bg-[#F1F6FD20] px-4 rounded-md transition-colors"
              onClick={(e) => scrollToSection(e, "inicio")}
            >
              Início
            </a>
            <a
              href="#como-funciona"
              className="font-body text-[#F1F6FD] text-lg py-2 hover:bg-[#F1F6FD20] px-4 rounded-md transition-colors"
              onClick={(e) => scrollToSection(e, "como-funciona")}
            >
              Como Funciona
            </a>
            <a
              href="#servicos"
              className="font-body text-[#F1F6FD] text-lg py-2 hover:bg-[#F1F6FD20] px-4 rounded-md transition-colors"
              onClick={(e) => scrollToSection(e, "servicos")}
            >
              Serviços
            </a>
            <a
              href="#depoimentos"
              className="font-body text-[#F1F6FD] text-lg py-2 hover:bg-[#F1F6FD20] px-4 rounded-md transition-colors"
              onClick={(e) => scrollToSection(e, "depoimentos")}
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              className="font-body text-[#F1F6FD] text-lg py-2 hover:bg-[#F1F6FD20] px-4 rounded-md transition-colors"
              onClick={(e) => scrollToSection(e, "faq")}
            >
              FAQ
            </a>
            <button className="bg-[#F1F6FD33] text-[#F1F6FD] rounded-full py-2 px-4 text-lg font-body font-medium border border-white mt-2 transition-all duration-300 hover:bg-[#F1F6FD] hover:text-[#344363]">
              Baixe o app
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
