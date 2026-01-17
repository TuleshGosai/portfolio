import type { FC } from 'react'

const Blog: FC = () => {
  const blogPosts = [
    {
      image: '/images/blog-web-templates.jpg',
      title: 'How To Make Web Templates',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
    },
    {
      image: '/images/blog-business-card.jpg',
      title: 'Make Business Card',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
    },
    {
      image: '/images/blog-flyer-design.jpg',
      title: 'How To Make Flyer Design',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
    },
  ]

  return (
    <section id="blog" className="py-20 px-6 lg:px-12 bg-[#F0F0F6]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Blog</h2>
        <p className="section-subtitle">
          Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia
          Consequat Duis Enim Velit Mollit. Lorem Ipsum
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="card card-hover bg-white p-0 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-[#2B2B2B] mb-3">{post.title}</h3>
                <p className="text-sm text-[#767676] mb-4 leading-relaxed">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-[#FFB400] text-base font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  <span>Learn More</span>
                  <img src="/icons/arrow-right-small.svg" alt="arrow" className="w-1.5 h-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
