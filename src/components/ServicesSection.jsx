import React from "react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      name: "Banho",
      icon: "/icons/shower.svg",
      alt: "Ícone de chuveiro representando serviço de banho",
    },
    {
      id: 2,
      name: "Tosa",
      icon: "/icons/cut.svg",
      alt: "Ícone de tesoura representando serviço de tosa",
    },
    {
      id: 3,
      name: "Vacinas",
      icon: "/icons/vaccines.svg",
      alt: "Ícone de seringa representando serviço de vacinas",
    },
    {
      id: 4,
      name: "Consultas",
      icon: "/icons/stethoscope.svg",
      alt: "Ícone de estetoscópio representando serviço de consultas",
    },
    {
      id: 5,
      name: "Lembretes",
      icon: "/icons/notification.svg",
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
