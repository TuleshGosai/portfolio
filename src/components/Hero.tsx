import type { FC } from 'react'

const Hero: FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#F0F0F6] px-6 lg:px-12">
      {/* Decorative Elements */}
      <div className="absolute top-8 left-1/4 w-4 h-4 border-2 border-[#FFB400] rounded-full opacity-80" />
      <div className="absolute top-12 right-1/3 w-4 h-4 border-2 border-green-500 rounded-full opacity-80" />
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 border-2 border-[#FFB400] rounded-full opacity-60" />
      <div className="absolute bottom-1/3 right-1/4 w-5 h-5 border-2 border-blue-500 rotate-45 opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-500 rotate-45 opacity-60" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">
        {/* Content */}
        <div className="flex-1 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6 leading-tight">
            I'm Rayan Adlrdard
            <br />
            <span className="text-[#FFB400]">Front-end</span> Developer
          </h1>
          <p className="text-base text-[#767676] mb-8 max-w-lg leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Et, Volutpat Feugiat Placerat
            Lobortis. Natoque Rutrum Semper Sed Suspendisse Nunc Lectus.
          </p>
          <button className="btn-primary rounded-none">
            <span>Hire Me</span>
            <img src="/icons/arrow-right.svg" alt="arrow" className="w-3 h-3" />
          </button>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative">
            <img
              src="/images/profile-main.png"
              alt="Rayan Adlardard"
              className="w-80 h-auto object-contain relative z-10"
            />
            {/* Decorative background circles */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[#FFB400] rounded-full opacity-50" />
            <div className="absolute bottom-20 -left-6 w-16 h-16 border-2 border-green-500 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
