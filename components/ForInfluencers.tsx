export default function ForInfluencers() {
  const features = [
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-2xl">↑</span>
        </div>
      ),
      title: "AI Campaign Projections",
      description: "Get data-driven insights on reach, engagement, and ROI. Make informed decisions about your collaboration partnerships."
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">H</span>
        </div>
      ),
      title: "Authentic Partnerships",
      description: "Connect with verified local businesses that align with your values. Build meaningful relationships while creating impactful content."
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-2xl">$</span>
        </div>
      ),
      title: "Fair Compensation",
      description: "Transparent pricing with secure escrow payments. Fair compensation for your creative work and influence."
    }
  ]

  return (
    <section className="bg-[#1A1A1A] w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-left">
              For Influencers
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed text-left">
              Create meaningful content with authentic African businesses. Our AI-powered insights help you maximize your reach and ROI while supporting local communities.
            </p>

            {/* Feature Blocks */}
            <div className="space-y-6 sm:space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 sm:gap-6">
                  {/* Icon */}
                  {feature.icon}
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2 sm:mb-3 text-left">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-left">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <div className="bg-[#A07D33] rounded-3xl p-8 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Influencer Partnership
              </h3>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl">
                Shaking hands with African business owners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
