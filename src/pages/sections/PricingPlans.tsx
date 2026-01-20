import type { FC } from 'react'
import ScrollAnimation from '../../components/ScrollAnimation'
import pricingPlansData from '../../helper/pricingPlans.json'

const PricingPlans: FC = () => {
  return (
    <section id="pricing" className="py-20 px-6 lg:px-12 bg-[#F0F0F6]">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <h2 className="section-title text-center">{pricingPlansData.title}</h2>
          <p className="section-subtitle">
            {pricingPlansData.subtitle}
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlansData.plans.map((plan, index) => (
            <ScrollAnimation
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="scroll-delay-1"
            >
              <div
                className={`card bg-white relative ${
                  plan.popular ? 'shadow-xl scale-105' : ''
                }`}
              >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFB400] text-[#2B2B2B] text-xs font-medium px-4 py-1">
                  {pricingPlansData.popularBadge}
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-[#2B2B2B] capitalize mb-4">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-semibold text-[#2B2B2B]">{plan.price}</span>
                  <span className="text-sm text-[#767676]">{pricingPlansData.priceUnit}</span>
                </div>
                <p className="text-sm text-[#767676]">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 border-b border-[#FAFAFA] pb-3">
                    <img
                      src={
                        feature.included
                          ? plan.popular
                            ? '/icons/checkmark-filled.svg'
                            : '/icons/checkmark.svg'
                          : '/icons/cross.svg'
                      }
                      alt={feature.included ? 'check' : 'cross'}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-[#767676]">{feature.name}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 text-sm font-bold uppercase transition-all cursor-pointer ${
                  plan.popular
                    ? 'bg-[#FFB400] text-[#2B2B2B] hover:bg-yellow-500'
                    : 'border border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white'
                }`}
              >
                {pricingPlansData.buttonText}
              </button>
            </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
