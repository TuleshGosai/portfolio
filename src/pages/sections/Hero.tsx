import type { FC } from "react";
import heroData from '../../helper/hero.json'

const Hero: FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#F0F0F6] px-6 lg:px-12 overflow-hidden pt-8 lg:pt-0"
    >
      {/* Decorative Elements */}
      <div className="absolute top-8 left-1/4 w-4 h-4 border-2 border-[#FFB400] rounded-full opacity-80 drift" />
      <div className="absolute top-12 right-1/3 w-4 h-4 border-2 border-green-500 rounded-full opacity-80 drift" />
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 border-2 border-[#FFB400] rounded-full opacity-60 drift" />
      <div className="absolute bottom-1/3 right-1/4 w-5 h-5 border-2 border-blue-500 rotate-45 opacity-60 drift" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">
        
        {/* Content */}
        <div className="flex-1 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6 leading-tight fade-up">
            I'm {heroData.name}
            <br />
            <span className="text-[#FFB400]">{heroData.title}</span>
          </h1>

          <p className="text-base text-[#767676] mb-8 max-w-lg leading-relaxed fade-up delay-1">
            {heroData.description}
          </p>

          <div className="fade-up delay-2">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary rounded-none transition-transform hover:translate-x-1 cursor-pointer"
            >
              <span>{heroData.buttonText}</span>
              <img src={heroData.buttonIcon} alt="arrow" className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center relative fade-up delay-3">
          <div className="relative float">
            <img
              src={heroData.profileImage}
              alt={heroData.profileImageAlt}
              className="w-80 h-auto object-contain relative z-10"
              loading="lazy"
            />
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[#FFB400] rounded-full opacity-50" />
            <div className="absolute bottom-20 -left-6 w-16 h-16 border-2 border-green-500 rounded-full opacity-50" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
