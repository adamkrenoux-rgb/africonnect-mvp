export default function TrustedSecure() {
  const features = [
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-[#22C55E] flex items-center justify-center">
          <span className="text-white text-2xl sm:text-3xl">✓</span>
        </div>
      ),
      title: "Verified Businesses",
      description: "Every business undergoes comprehensive verification including document checks and quality assessments"
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center">
          <span className="text-white text-xl sm:text-2xl">🔒</span>
        </div>
      ),
      title: "Secure Payments",
      description: "All transactions are processed through Stripe with bank-level security and fraud protection"
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-[#F59E0B] flex items-center justify-center relative">
          <span className="text-white text-xl sm:text-2xl">🛡️</span>
        </div>
      ),
      title: "Escrow Protection",
      description: "Payments are held in secure escrow until your experience is completed to your satisfaction"
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-full bg-[#A855F7] flex items-center justify-center">
          <span className="text-white text-xl sm:text-2xl">★</span>
        </div>
      ),
      title: "Review System",
      description: "Comprehensive review system helps you make informed decisions and maintains quality standards"
    }
  ]

  return (
    <section className="bg-[#191924] w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Trusted & Secure
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl">
            Your safety and security are our top priorities
          </p>
        </div>

        {/* Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Icon */}
              <div className="mb-6 sm:mb-8">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">
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
