import type { FC } from 'react'

const Education: FC = () => {
  const educationItems = [
    {
      institution: 'University Of Toronto',
      certificate: 'Certificate Of Web Training',
      duration: 'Jan 1016 - Dec 2021',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
    },
    {
      institution: 'Programming Course',
      certificate: 'Certificate Of Web Training',
      duration: 'Jan 1016 - Dec 2021',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
    },
    {
      institution: 'Web Developer Courses',
      certificate: 'Certificate Of Web Training',
      duration: 'Jan 1016 - Dec 2021',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
    },
  ]

  return (
    <section className="py-20 px-6 lg:px-12 bg-[#F0F0F6]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Education</h2>
        <p className="section-subtitle">
          Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia
          Consequat Duis Enim Velit Mollit. Lorem Ipsum
        </p>

        <div className="card bg-white">
          {educationItems.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
                <div>
                  <h3 className="text-lg font-medium text-[#2B2B2B] mb-4">{item.institution}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#767676]">Student</span>
                    <span className="text-xs text-white bg-[#FFB400] px-3 py-1">
                      {item.duration}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#2B2B2B] mb-4">{item.certificate}</h4>
                  <p className="text-sm text-[#767676] leading-relaxed">{item.description}</p>
                </div>
              </div>
              {index < educationItems.length - 1 && (
                <div className="border-t border-[#F0F0F6]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
