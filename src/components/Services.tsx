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
      description: 'Website Design',
    },
    {
      icon: '/icons/game-development.svg',
      title: 'Product Development',
      description: 'Product Development, Product Management',
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
        </div>
      </div>
    </section>
  )
}

export default Services
