import DogImage from '../assets/DogImage.png'

export default function PetBanner() {
  return (
    <div className='mx-auto max-w-[1440px] pt-10 md:pt-20 lg:pt-28 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-8 md:px-12 lg:px-40'>
      <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8 lg:gap-[64px] justify-between bg-[#E6EEFF] rounded-[20px] px-6 sm:px-10 md:px-16 lg:px-20 pt-8 md:py-0 relative">
        
 
     
          <img 
            src={DogImage} 
            alt="Cachorro estiloso com óculos escuros" 
            className="w-[261px] h-auto object-contain md:mt-[-48px]"
          />
    
        
        {/* Texto e botão */}
        <div className="text-center md:text-left order-2 md:order-2 md:py-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-title text-[#344363] font-bold mb-2">
            SEU PET MERECE ESSE CUIDADO!
          </h1>
          <p className="font-body text-base sm:text-lg text-[#41547C] mb-4 md:mb-[30px] max-w-md mx-auto md:mx-0">
            Tudo o que ele precisa, com praticidade na palma da sua mão.
          </p>
          <button className="font-body text-base sm:text-lg bg-[#3443631A] text-[#344363] py-2 px-6 rounded-full border border-[#344363] hover:bg-[#344363] hover:text-white transition-colors duration-300">
            Baixar agora
          </button>
        </div>
        
      </div>
    </div>
  )
}