import { useState, type FC } from 'react'
import ScrollAnimation from '../../components/ScrollAnimation'
import blogData from '../../helper/blog.json'

const Blog: FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  return (
    <section id="blog" className="py-20 px-6 lg:px-12 bg-[#F0F0F6]">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <h2 className="section-title text-center">{blogData.title}</h2>
          <p className="section-subtitle">
            {blogData.subtitle}
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogData.posts.map((post, index) => (
            <ScrollAnimation
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="scroll-delay-1"
            >
              <div className="card card-hover bg-white p-0 overflow-hidden flex flex-col h-full">
                <div 
                  className="w-full h-48 md:h-64 overflow-hidden bg-[#F0F0F6] flex items-center justify-center p-4 border-white border-2 rounded-lg cursor-pointer"
                  onClick={() => setPreviewImage(post.image)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-medium text-[#2B2B2B] mb-3">{post.title}</h3>
                  <p className="text-sm text-[#767676] mb-4 leading-relaxed flex-1">{post.excerpt}</p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFB400] text-base font-medium inline-flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                  >
                    <span>Learn More</span>
                    <img src="/icons/arrow-right-small.svg" alt="arrow" className="w-1.5 h-2" />
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setPreviewImage(null)}
        >
          <div 
            className="max-w-4xl w-full max-h-[90vh] flex items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-2 shadow-2xl">
              <img
                src={previewImage}
                alt="Project preview"
                className="max-w-full max-h-[90vh] object-contain rounded-lg block"
                loading="eager"
              />
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white text-2xl font-bold hover:text-gray-300 hover:bg-white/20 bg-black/70 rounded-full transition-all z-10 cursor-pointer shadow-lg leading-none"
                aria-label="Close preview"
                style={{ lineHeight: '1', padding: 0 }}
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Blog
