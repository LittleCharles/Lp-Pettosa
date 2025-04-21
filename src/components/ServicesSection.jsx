import React from "react";
import ShowerIcon from "../assets/icons/shower.svg";
import CutIcon from "../assets/icons/cut.svg";
import VaccinesIcon from "../assets/icons/vaccines.svg";
import StethoscopeIcon from "../assets/icons/stethoscope.svg";
import NotificationIcon from "../assets/icons/notification.svg";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      name: "Banho",
      icon: ShowerIcon,
      alt: "Ícone de chuveiro representando serviço de banho",
    },
    {
      id: 2,
      name: "Tosa",
      icon: CutIcon,
      alt: "Ícone de tesoura representando serviço de tosa",
    },
    {
      id: 3,
      name: "Vacinas",
      icon: VaccinesIcon,
      alt: "Ícone de seringa representando serviço de vacinas",
    },
    {
      id: 4,
      name: "Consultas",
      icon: StethoscopeIcon,
      alt: "Ícone de estetoscópio representando serviço de consultas",
    },
    {
      id: 5,
      name: "Lembretes",
      icon: NotificationIcon,
      alt: "Ícone de sino representando funcionalidade de lembretes",
    },
  ];

  return (
    <section id="servicos">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-title text-[#344363] md:text-center mb-10 break-words hyphens-auto">
          Servicos e Funcionalidades
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-[#E6EEFF] rounded-[40px] flex items-center justify-center mb-4">
                <img
                  src={service.icon}
                  alt={service.alt}
                  className="w-12 h-12"
                />
              </div>
              <span className="text-lg text-[#525050] font-body font-medium">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
