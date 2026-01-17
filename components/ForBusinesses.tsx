export default function ForBusinesses() {
  const features = [
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-2xl">↑</span>
        </div>
      ),
      title: "Premium International Clientele",
      description: "Connect with quality travelers who appreciate authentic experiences and are willing to invest in meaningful travel."
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">AI</span>
        </div>
      ),
      title: "AI Listing Optimization",
      description: "Our AI helps create compelling titles, descriptions, and pricing strategies. Optimize your listings for better visibility and bookings."
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-2xl">$</span>
        </div>
      ),
      title: "Secure Payments",
      description: "Escrow protection ensures you get paid after service delivery. 15% commission covers platform maintenance and marketing."
    }
  ]

  return (
    <section className="bg-[#1A1A1A] w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="bg-[#A07D33] rounded-xl p-8 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                African Business Owners
              </h3>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl">
                Connecting with international clients
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-left">
              For Businesses
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed text-left">
              Grow your business with international travelers. Connect with travelers seeking authentic African experiences.
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
        </div>
      </div>
    </section>
  )
}
