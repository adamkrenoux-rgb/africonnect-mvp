export default function FeatureCards() {
  const features = [
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-[#F5BF45] flex items-center justify-center">
          <span className="text-black text-xl font-bold">$</span>
        </div>
      ),
      title: "Fair Pricing",
      description: "Transparent pricing with escrow protection ensures fair deals for both travelers and local businesses. Fair pricing with full refund guarantee."
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-[#F5BF45] flex items-center justify-center">
          <span className="text-black text-xl font-bold">C</span>
        </div>
      ),
      title: "Influencer Collaborations",
      description: "Connect with travel influencers for authentic content creation and expanded reach for your business. Amplify your business through strategic influencer partnerships."
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-[#F5BF45] flex items-center justify-center">
          <span className="text-black text-xl font-bold">S</span>
        </div>
      ),
      title: "Sustainable Impact",
      description: "Every booking supports local communities and contributes to sustainable tourism development across Africa. Make a positive impact through your travel choices."
    }
  ]

  return (
    <section className="bg-[#151820] w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#232833] rounded-xl p-6 sm:p-8 flex flex-col items-center text-center"
            >
              {/* Circular Icon */}
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
