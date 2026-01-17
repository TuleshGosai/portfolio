import type { FC } from 'react'

const Contact: FC = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-[#F0F0F6]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="section-title mb-8">Leave Us Your Info</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-base font-medium text-[#2B2B2B] mb-2">
                  Your Full Name ( Required)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-4 bg-[#F0F0F6] border-2 border-[#2B2B2B] outline-none text-[#2B2B2B]"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-[#2B2B2B] mb-2">
                  Your Email ( Required)
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-4 bg-[#F0F0F6] border-2 border-[#2B2B2B] outline-none text-[#2B2B2B]"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-[#2B2B2B] mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-4 bg-[#F0F0F6] border-2 border-[#2B2B2B] outline-none text-[#2B2B2B]"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-[#2B2B2B] mb-2">
                  Your Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-4 bg-[#F0F0F6] border-2 border-[#2B2B2B] outline-none text-[#2B2B2B] resize-none"
                />
              </div>
              <button type="submit" className="btn-primary rounded-none">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="section-title mb-8">Contact Information</h2>
            <div className="space-y-6">
              {/* Address */}
              <div className="card bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFB400] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/icons/location.svg" alt="location" className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-y-2">
                      <span className="text-base font-medium text-[#2B2B2B]">Country:</span>
                      <span className="text-sm text-[#767676]">India</span>
                      <span className="text-base font-medium text-[#2B2B2B]">City:</span>
                      <span className="text-sm text-[#767676]">Junagadh</span>
                      <span className="text-base font-medium text-[#2B2B2B]">Streat:</span>
                      <span className="text-sm text-[#767676]">Pawan park, Khalilpur road</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFB400] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/icons/email.svg" alt="email" className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-y-2">
                      <span className="text-base font-medium text-[#2B2B2B]">Email:</span>
                      <span className="text-sm text-[#767676]">gosaituleshn@gmail.com</span>
                      <span className="text-base font-medium text-[#2B2B2B]">Skype:</span>
                      <span className="text-sm text-[#767676]">@tuleshgosai</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFB400] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/icons/phone.svg" alt="phone" className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-y-2">
                      <span className="text-base font-medium text-[#2B2B2B]">Personal:</span>
                      <span className="text-sm text-[#767676]">+91 88490 80849</span>
                      <span className="text-base font-medium text-[#2B2B2B]">Office:</span>
                      <span className="text-sm text-[#767676]">+91 95379 98695</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-16">
          <img src="/images/junagadh.jpg" alt="Map" className="w-full h-80 object-contain" />
        </div>

        {/* Footer Logos
        <div className="mb-8">
          <img
            src="/images/footer-logos.svg"
            alt="Partner Logos"
            className="w-full h-auto"
          />
        </div> */}

        {/* Copyright */}
        <div className="flex items-center justify-center gap-2 py-6 border-t border-gray-200">
          <img src="/icons/copyright.svg" alt="copyright" className="w-5 h-5" />
          <p className="text-sm text-[#2B2B2B]">2021 All Rights Reserved.Ojjomedia</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
