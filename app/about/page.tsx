import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* Navigation Bar */}
      <nav className="bg-[#1A1A1A] w-full px-4 sm:px-6 lg:px-8 py-4 fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Africonnect
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <Link href="#travelers" className="text-gray-300 hover:text-white transition-colors">
              For Travelers
            </Link>
            <Link href="#businesses" className="text-gray-300 hover:text-white transition-colors">
              For Businesses
            </Link>
            <Link href="#influencers" className="text-gray-300 hover:text-white transition-colors">
              For Influencers
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/sign-in"
              className="px-4 py-2 rounded-lg border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-black transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="px-4 py-2 rounded-lg bg-[#F59E0B] text-black hover:bg-[#F59E0B]/90 transition-colors font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About Africonnect
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              We're on a mission to transform African tourism by connecting authentic local experiences with the international community.
            </p>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-left">
                Our Story
              </h2>
              
              <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p className="text-left">
                  Africonnect was born from a simple observation: small, local African tourism businesses had incredible experiences to offer but virtually no access to the international market. We saw talented safari guides, cultural experts, and adventure operators struggling to reach potential customers beyond their immediate communities.
                </p>
                
                <p className="text-left">
                  Meanwhile, travelers were seeking authentic African experiences but had no reliable way to connect with verified local businesses. We realized that technology could bridge this gap, creating a platform that empowers local businesses while providing travelers with access to truly authentic experiences.
                </p>
              </div>

              {/* Callout Element */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-lg sm:text-xl">
                    Sustainable Tourism
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Supporting local communities
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5">
              <div className="border-2 border-yellow-500 rounded-2xl overflow-hidden">
                <div 
                  className="w-full h-64 sm:h-80 md:h-96 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
                  }}
                >
                  <div className="w-full h-full bg-black/30 flex items-end">
                    <p className="text-gray-300 text-base sm:text-lg p-6 w-full text-center">
                      Celebrating the beauty and diversity of Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
