export default function ForTravelers() {
  const features = [
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">AI</span>
        </div>
      ),
      title: "AI-Powered Trip Planning",
      description: "Our advanced AI creates personalized itineraries based on your preferences, budget, and schedule. Get tailored recommendations that match your travel style."
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-2xl">✓</span>
        </div>
      ),
      title: "Verified Local Partners",
      description: "Every business is thoroughly verified and trusted by the international community. Travel with confidence knowing you're in good hands."
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-2xl">★</span>
        </div>
      ),
      title: "Authentic African Experiences",
      description: "Discover truly authentic African experiences that no other platform can offer. Connect with local communities and create memories that last a lifetime."
    }
  ]

  return (
    <section className="bg-[#1A1A1A] w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              For Travelers
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Discover authentic African experiences tailored for travelers. Our AI-powered platform connects you with verified local businesses offering unforgettable adventures.
            </p>

            {/* Feature Blocks */}
            <div className="space-y-6 sm:space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 sm:gap-6">
                  {/* Icon */}
                  {feature.icon}
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl sm:text-2xl mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <div className="bg-[#4A3B2A] rounded-xl sm:rounded-2xl p-8 sm:p-12 text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                Happy Travelers
              </h3>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl">
                Admiring wildlife on safari adventures
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
