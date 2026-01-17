export default function WhyChooseAfriconnect() {
  const features = [
    {
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F5B300] flex items-center justify-center">
          <span className="text-black font-bold text-lg sm:text-xl">AI</span>
        </div>
      ),
      title: "AI-Powered Matching",
      description: "Our advanced AI algorithms match travelers with the perfect local experiences based on preferences, budget, and interests. Get personalized recommendations that match your travel style."
    },
    {
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2D3748] border-2 border-gray-500 flex items-center justify-center">
          <span className="text-white text-2xl sm:text-3xl">✓</span>
        </div>
      ),
      title: "Verified Partners",
      description: "Every business on our platform is thoroughly verified, ensuring safety, authenticity, and quality for all travelers. Travel with confidence knowing you're in good hands."
    },
    {
      icon: (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F5B300] flex items-center justify-center">
          <span className="text-black text-2xl sm:text-3xl">★</span>
        </div>
      ),
      title: "Authentic Experiences",
      description: "Discover truly authentic African experiences that no other platform can offer. Connect with local communities and create memories that last a lifetime."
    }
  ]

  return (
    <section className="bg-[#1A1A1A] w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Why Choose Africonnect?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with deep respect for African culture and communities.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#2D3748] rounded-lg p-6 sm:p-8 flex flex-col items-center text-center"
            >
              {/* Icon */}
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
