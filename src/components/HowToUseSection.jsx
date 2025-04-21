import React from "react";
import WomanHoldingCat from "../assets/WomanHoldingCat.png";

const HowToUseSection = () => {
  return (
    <section
      className="pb-14 md:pb-28 relative overflow-hidden"
      id="como-funciona"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full md:w-1/2">
            <img
              src={WomanHoldingCat}
              alt="Mulher segurando gato enquanto usa o aplicativo PetTosa"
              className="relative z-10 w-full"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-title text-[#344363] mb-10">
              COMO USAR O NOSSO APP?
            </h2>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 md:w-10 md:h-10 mt-1">
                  <img
                    src="/icons/app.svg"
                    alt="Ícone de app"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#41547C] mb-2 font-body">
                    Baixe o app
                  </h3>
                  <p className="text-[#525050] text-lg md:text-xl font-body">
                    Tenha a Pettosa sempre com você, na hora que precisar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 md:w-10 md:h-10 mt-1">
                  <img
                    src="/icons/calendar.svg"
                    alt="Ícone de calendário"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#41547C] mb-2 font-body">
                    Agende com facilidade
                  </h3>
                  <p className="text-[#525050] text-lg md:text-xl font-body">
                    Escolha o serviço, o parceiro ideal e o horário que
                    preferir.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 md:w-10 md:h-10 mt-1">
                  <img
                    src="/icons/check.svg"
                    alt="Ícone de verificação"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#41547C] mb-2 font-body">
                    Acompanhe tudo de perto
                  </h3>
                  <p className="text-[#525050] text-lg md:text-xl font-body">
                    Você será notificado assim que o serviço do seu pet for
                    concluído.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
