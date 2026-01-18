import { useState, type FC } from 'react'
import Tooltip from '../components/Tooltip'

const Sidebar: FC = () => {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript(ES6+)', level: 85 },
    { name: 'React', level: 85 },
  ]

  const languages = [
    { name: 'Gujarati', level: 100 },
    { name: 'English', level: 50 },
    { name: 'Hindi', level: 80 },
  ]

  const extraSkills = [
    'Redux, Next.js',
    'TypeScript',
    'Tailwind CSS, Bootstrap',
    'Material UI',
    'Ant Design',
    'Git / Version Control',
    'Sass',
    'Node.js, Express, Jira',
    'Performance Optimization',
    'MongoDB, MySQL',
    'Redux Toolkit',
    'Docker, CI/CD',
    'REST API, Joint.js',
    'Jest, D3.js, Three.js',
    'Postman, Swagger',
  ]

  const handleDownloadResume = async () => {
    setIsDownloading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      const link = document.createElement('a')
      link.href = '/resume/Resume Tulesh Gosai.pdf'
      link.download = 'Resume Tulesh Gosai.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download error:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <>
      {/* Hamburger Button (Mobile) */}
      {
        !isOpen && (
          <header className="sticky top-0 z-50 bg-white h-16 flex items-center px-4 lg:hidden" style={{backgroundColor: '#f0f0f6'}}>
            
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 flex flex-col gap-1 lg:hidden"
        aria-label="Open Menu"
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>
      </header>
      )
      }

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        style={{zIndex: '2000'}}
        className={`fixed left-0 top-0 h-screen w-80 bg-[#FAFAFA] overflow-y-auto z-40
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:block`}
      >
        {/* Close Button (Mobile) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl lg:hidden"
          aria-label="Close Menu"
        >
          ×
        </button>

        <div className="p-8">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              <img
                src="/images/tuleshgosai.png"
                alt="Tulesh Gosai"
                className="w-40 h-40 rounded-full object-contain mx-auto"
              />
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-[#7EB942] rounded-full border-2 border-white shadow-md" />
            </div>
            <h1 className="text-lg font-medium text-[#2B2B2B] mb-1">
              Tulesh Gosai
            </h1>
            <p className="text-sm text-[#767676]">Senior Front-End Developer</p>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-3 mt-6">
              {[
                {
                  name: 'Instagram',
                  icon: '/icons/instagram.svg',
                  link: 'https://www.instagram.com/tulesh_nileshgiri_gosai',
                },
                {
                  name: 'LinkedIn',
                  icon: '/icons/linkedin.svg',
                  link: 'https://www.linkedin.com/in/tulesh-gosai-5b4a011a4/',
                },
                {
                  name: 'GitHub',
                  icon: '/icons/github.svg',
                  link: 'https://github.com/TuleshGosai',
                },
              ].map((social) => (
                <Tooltip key={social.name} text={social.name} position="top">
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 bg-[#FFB400] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-3 h-3"
                    />
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Personal Info */}
          <div className="border-t border-[#F0F0F6] pt-6 space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Age:</span>
              <span className="text-sm text-[#767676]">
                {new Date().getFullYear() - 1996}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Residence:</span>
              <span className="text-sm text-[#767676]">India</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Freelance:</span>
              <span className="text-sm text-[#7EB942]">Available</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Address:</span>
              <span className="text-sm text-[#767676]">
                Junagadh, Gujarat
              </span>
            </div>
          </div>

          {/* Languages */}
          <div className="border-t border-[#F0F0F6] pt-6 mb-6">
            <h3 className="text-lg font-medium mb-4">Languages</h3>
            {languages.map((lang) => (
              <div key={lang.name} className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-[#767676]">
                    {lang.name}
                  </span>
                  <span className="text-sm text-[#767676]">
                    {lang.level}%
                  </span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${lang.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="border-t border-[#F0F0F6] pt-6 mb-6">
            <h3 className="text-lg font-medium mb-4">Skills</h3>
            {skills.map((skill) => (
              <div key={skill.name} className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-[#767676]">
                    {skill.name}
                  </span>
                  <span className="text-sm text-[#767676]">
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Extra Skills */}
          <div className="border-t border-[#F0F0F6] pt-6 mb-6">
            <h3 className="text-lg font-medium mb-4">Extra Skills</h3>
            {extraSkills.map((skill, index) => (
              <div key={index} className="flex items-start gap-2 mb-2">
                <img
                  src="/icons/check-square.svg"
                  alt="check"
                  className="w-4 h-4 mt-0.5"
                />
                <span className="text-sm text-[#767676]">{skill}</span>
              </div>
            ))}
          </div>

          {/* Download CV */}
          <div className="border-t border-[#F0F0F6] pt-6">
            <button
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className={`btn-primary w-full justify-center rounded-none ${
                isDownloading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isDownloading ? 'Downloading...' : 'Download CV'}
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
