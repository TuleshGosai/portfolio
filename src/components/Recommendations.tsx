import type { FC } from 'react'

const Recommendations: FC = () => {
  const testimonials = [
    {
      name: 'James Gouse',
      role: 'Graphic Designer',
      image: '/images/testimonial-james.jpg',
      rating: 5,
      title: 'Great Quality!',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
    },
    {
      name: 'Tiana Philips',
      role: 'Photographer',
      image: '/images/testimonial-tiana.jpg',
      rating: 5,
      title: 'Amazing Work!',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
    },
    {
      name: 'Talan Westervelt',
      role: 'Business Man',
      image: '/images/testimonial-talan.jpg',
      rating: 5,
      title: 'Great Quality!',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
    },
  ]

  return (
    <section className="py-20 px-6 lg:px-12 bg-[#F0F0F6]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Recommendations</h2>
        <p className="section-subtitle">
          Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia
          Consequat Duis Enim Velit Mollit. Lorem Ipsum
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-white">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <img key={i} src="/icons/star.svg" alt="star" className="w-4 h-4" />
                ))}
              </div>
              <h3 className="text-lg font-medium text-[#2B2B2B] mb-3">{testimonial.title}</h3>
              <p className="text-sm text-[#767676] mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-base font-medium text-[#2B2B2B]">{testimonial.name}</h4>
                  <p className="text-sm text-[#767676]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FFB400]" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  )
}

export default Recommendations
