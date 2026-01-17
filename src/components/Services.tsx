import type { FC } from 'react'

const Services: FC = () => {
  const services = [
    {
      icon: '/icons/web-development.svg',
      title: 'Web Development',
      description: 'Blog, E-Commerce',
    },
    {
      icon: '/icons/ui-design.svg',
      title: 'UI/UX Design',
      description: 'Mobile App, Website Design',
    },
    {
      icon: '/icons/microphone.svg',
      title: 'Sound Design',
      description: 'Voice Over, Beat Making',
    },
    {
      icon: '/icons/game-development.svg',
      title: 'Game Design',
      description: 'Character Design, Props & Objects',
    },
    {
      icon: '/icons/photographer.svg',
      title: 'Photography',
      description: 'Portrait, Product Photography',
    },
  ]

  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-[#F0F0F6]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">My Services</h2>
        <p className="section-subtitle">
          Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia
          Consequat Duis Enim Velit Mollit. Lorem Ipsum
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card card-hover text-center p-8 bg-white"
            >
              <div className="flex justify-center mb-6">
                <img src={service.icon} alt={service.title} className="w-16 h-16" />
              </div>
              <h3 className="text-lg font-medium text-[#2B2B2B] capitalize mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#767676]">{service.description}</p>
            </div>
          ))}

          {/* Advertising Card */}
          <div className="card card-hover text-center p-8 bg-white">
            <h3 className="text-lg font-medium text-[#2B2B2B] capitalize mb-4">Advertising</h3>
            <p className="text-sm text-[#767676] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac
              dictum a urna viverra morbi.
            </p>
            <a
              href="#"
              className="text-[#FFB400] text-xs font-bold uppercase inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              <span>Order Now</span>
              <img src="/icons/arrow-right-small.svg" alt="arrow" className="w-1.5 h-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
