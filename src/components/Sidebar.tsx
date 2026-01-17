import type { FC } from 'react'

const Sidebar: FC = () => {
  const skills = [
    { name: 'Html', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'Js', level: 80 },
    { name: 'PHP', level: 75 },
    { name: 'WordPress', level: 85 },
  ]

  const languages = [
    { name: 'Bangla', level: 100 },
    { name: 'English', level: 80 },
    { name: 'Spanish', level: 60 },
  ]

  const extraSkills = [
    'Bootstrap, Materialize',
    'Stylus, Sass, Less',
    'Gulp, Webpack, Grunt',
    'GIT Knowledge',
  ]

  return (
    <aside className="fixed left-0 top-0 h-screen w-full lg:w-80 bg-[#FAFAFA] overflow-y-auto z-40 hidden lg:block">
      <div className="p-8">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <img
              src="/images/profile-main.png"
              alt="Rayan Adlardard"
              className="w-40 h-40 rounded-full object-cover mx-auto"
            />
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-[#7EB942] rounded-full border-2 border-white shadow-md" />
          </div>
          <h1 className="text-lg font-medium text-[#2B2B2B] mb-1">Rayan Adlardard</h1>
          <p className="text-sm text-[#767676]">Font-End Developer</p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-3 mt-6">
            {[
              { name: 'Facebook', icon: '/icons/facebook.svg' },
              { name: 'Instagram', icon: '/icons/instagram.svg' },
              { name: 'Twitter', icon: '/icons/twitter.svg' },
              { name: 'LinkedIn', icon: '/icons/linkedin.svg' },
              { name: 'YouTube', icon: '/icons/youtube.svg' },
              { name: 'Dribbble', icon: '/icons/dribbble.svg' },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-6 h-6 bg-[#FFB400] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <img src={social.icon} alt={social.name} className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>

        {/* Personal Info */}
        <div className="border-t border-[#F0F0F6] pt-6 space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-sm text-[#2B2B2B] font-medium">Age:</span>
            <span className="text-sm text-[#767676]">24</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-[#2B2B2B] font-medium">Residence:</span>
            <span className="text-sm text-[#767676]">BD</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-[#2B2B2B] font-medium">Freelance:</span>
            <span className="text-sm text-[#7EB942]">Available</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-[#2B2B2B] font-medium">Address:</span>
            <span className="text-sm text-[#767676]">Dhaka,Bangladesh</span>
          </div>
        </div>

        {/* Languages */}
        <div className="border-t border-[#F0F0F6] pt-6 mb-6">
          <h3 className="text-lg font-medium text-[#2B2B2B] mb-4">Languages</h3>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-[#767676]">{lang.name}</span>
                  <span className="text-sm text-[#767676]">{lang.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar-fill" style={{ width: `${lang.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="border-t border-[#F0F0F6] pt-6 mb-6">
          <h3 className="text-lg font-medium text-[#2B2B2B] mb-4">Skills</h3>
          <div className="space-y-3">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-[#767676]">{skill.name}</span>
                  <span className="text-sm text-[#767676]">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Skills */}
        <div className="border-t border-[#F0F0F6] pt-6 mb-6">
          <h3 className="text-lg font-medium text-[#2B2B2B] mb-4">Extra Skills</h3>
          <div className="space-y-2">
            {extraSkills.map((skill, index) => (
              <div key={index} className="flex items-start gap-2">
                <img src="/icons/check-square.svg" alt="check" className="w-4 h-4 mt-0.5" />
                <span className="text-sm text-[#767676]">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <div className="border-t border-[#F0F0F6] pt-6">
          <button className="btn-primary w-full justify-center rounded-none">
            <span className="text-sm">Download CV</span>
            <img src="/icons/download.svg" alt="download" className="w-3 h-3" />
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
