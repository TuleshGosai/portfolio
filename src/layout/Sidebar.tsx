import { useState, type FC } from 'react'
import Tooltip from '../components/Tooltip'
import { useNavigation } from '../hooks/useNavigation'
import sidebarData from '../helper/sidebar.json'
import navigationData from '../helper/navigation.json'

const Sidebar: FC = () => {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { activeSection, scrollToSection } = useNavigation()

  const handleScrollToSection = (id: string) => {
    setIsOpen(false) // Close sidebar on mobile when navigation item is clicked
    scrollToSection(id)
  }

  const handleDownloadResume = async () => {
    setIsDownloading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      const link = document.createElement('a')
      link.href = sidebarData.resume.path
      link.download = sidebarData.resume.path.split('/').pop() || 'resume.pdf'
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
      {/* Mobile Header with Hamburger and Navigation */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#FAFAFA] shadow-md z-50 flex items-center justify-between px-4 lg:hidden">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex flex-col gap-1"
          aria-label="Open Menu"
          style={{cursor: 'pointer'}}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

        {/* Navigation Items */}
        <div className="flex items-center gap-2">
          {navigationData.items.map((item) => (
            <Tooltip key={item.id} text={item.label} position="bottom">
              <button
                onClick={() => handleScrollToSection(item.id)}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-[#FFB400]'
                    : 'hover:bg-gray-100'
                }`}
                aria-label={item.label}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`w-5 h-5 ${activeSection === item.id ? '' : 'opacity-60'}`}
                />
              </button>
            </Tooltip>
          ))}
        </div>
      </header>

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
          onClick={(e) => {
            e.stopPropagation()
            setIsOpen(false)
          }}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-2xl text-[#2B2B2B] hover:bg-gray-100 rounded-full transition-colors z-50 lg:hidden"
          aria-label="Close Menu"
          style={{cursor: 'pointer'}}
        >
          ×
        </button>

        <div className="p-8 sidebar-content">
          {/* Profile Section */}
          <div className="text-center mb-8 sidebar-item">
            <div className="relative inline-block mb-4">
              <img
                src={sidebarData.profile.image}
                alt={sidebarData.profile.imageAlt}
                className="w-40 h-40 rounded-full object-contain mx-auto"
                loading="lazy"
              />
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-[#7EB942] rounded-full border-2 border-white shadow-md" />
            </div>
            <h1 className="text-lg font-medium text-[#2B2B2B] mb-1">
              {sidebarData.profile.name}
            </h1>
            <p className="text-sm text-[#767676]">{sidebarData.profile.title}</p>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-3 mt-6">
              {sidebarData.socialMedia.map((social) => (
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
          <div className="border-t border-[#F0F0F6] pt-6 space-y-3 mb-6 sidebar-item">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Age:</span>
              <span className="text-sm text-[#767676]">
                {new Date().getFullYear() - sidebarData.profile.birthYear}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Residence:</span>
              <span className="text-sm text-[#767676]">{sidebarData.personalInfo.residence}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Freelance:</span>
              <span className="text-sm text-[#7EB942]">{sidebarData.personalInfo.freelance}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Address:</span>
              <span className="text-sm text-[#767676]">
                {sidebarData.personalInfo.address}
              </span>
            </div>
          </div>

          {/* Languages */}
          <div className="border-t border-[#F0F0F6] pt-6 mb-6 sidebar-item">
            <h3 className="text-lg font-medium mb-4">Languages</h3>
            {sidebarData.languages.map((lang) => (
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
          <div className="border-t border-[#F0F0F6] pt-6 mb-6 sidebar-item">
            <h3 className="text-lg font-medium mb-4">Skills</h3>
            {sidebarData.skills.map((skill) => (
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
          <div className="border-t border-[#F0F0F6] pt-6 mb-6 sidebar-item">
            <h3 className="text-lg font-medium mb-4">Extra Skills</h3>
            {sidebarData.extraSkills.map((skill, index) => (
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
          <div className="border-t border-[#F0F0F6] pt-6 sidebar-item">
            <button
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className={`btn-primary w-full justify-center rounded-none ${
                isDownloading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {isDownloading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>{sidebarData.resume.downloadingText}</span>
                </>
              ) : (
                sidebarData.resume.downloadText
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
