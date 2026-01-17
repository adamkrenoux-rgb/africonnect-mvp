export default function ThreePowerfulForces() {
  const features = [
    {
      icon: (
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#F59E0B] flex items-center justify-center">
          <span className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">A</span>
        </div>
      ),
      borderColor: "border-[#F59E0B]",
      indicator: (
        <div className="absolute top-4 right-4 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center">
          <span className="text-[#F59E0B] text-sm sm:text-base">✓</span>
        </div>
      ),
      title: "Authentic Local Experiences",
      description: "AI-powered trip discovery connects you to verified local businesses offering authentic African experiences with wildlife, culture, and adventure. Discover unique experiences that showcase the real Africa."
    },
    {
      icon: (
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#2A2A2A] border-2 border-gray-500 flex items-center justify-center">
          <span className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">T</span>
        </div>
      ),
      borderColor: "border-gray-500",
      indicator: (
        <div className="absolute top-4 right-4 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center">
          <span className="text-gray-500 text-sm sm:text-base">✓</span>
        </div>
      ),
      title: "Trustworthy International Clientele",
      description: "Verified travelers with reliable booking patterns and high-value travel experiences. Connect with quality travelers who appreciate authentic experiences."
    },
    {
      icon: (
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#F59E0B] flex items-center justify-center">
          <span className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">I</span>
        </div>
      ),
      borderColor: "border-[#F59E0B]",
      indicator: (
        <div className="absolute top-4 right-4 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center">
          <span className="text-[#F59E0B] text-sm sm:text-base">✓</span>
        </div>
      ),
      title: "High-Impact Influencer Marketing",
      description: "AI-driven campaign projections help businesses connect with the right influencers for maximum reach and ROI. Amplify your business through strategic influencer partnerships."
    }
  ]

  return (
    <section className="bg-[#1A1A1A] w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 uppercase">
            Three Powerful Forces in Travel
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover how Africonnect transforms African tourism through technology, trust, and authentic connections.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-[#2A2A2A] rounded-lg p-6 sm:p-8 flex flex-col items-center text-center relative border-2 ${feature.borderColor}`}
            >
              {/* Indicator Icon */}
              {feature.indicator}

              {/* Large Circular Icon */}
              <div className="mb-6 sm:mb-8">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 sm:mb-6">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
