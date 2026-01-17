import Link from 'next/link'
import WhyChooseAfriconnect from '@/components/WhyChooseAfriconnect'
import ForTravelers from '@/components/ForTravelers'
import ForBusinesses from '@/components/ForBusinesses'
import ForInfluencers from '@/components/ForInfluencers'
import ThreePowerfulForces from '@/components/ThreePowerfulForces'
import FeatureCards from '@/components/FeatureCards'
import TrustedSecure from '@/components/TrustedSecure'
import CTAHero from '@/components/CTAHero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
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

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Connect to Authentic</span>
            <br />
            <span className="text-[#F59E0B] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">African</span>
            <br />
            <span className="text-[#F59E0B] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Experiences</span>
          </h1>

          {/* Subheading */}
          <p className="text-white text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            AI-powered platform connecting travelers to verified local tourism businesses across Africa, while bridging businesses with travel influencers for strategic collaborations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="#plan-trip"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-[#F59E0B] text-black hover:bg-[#F59E0B]/90 transition-colors font-semibold text-base sm:text-lg w-full sm:w-auto"
            >
              Plan Your Trip
            </Link>
            <Link
              href="/business/setup"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-transparent border-2 border-[#F59E0B] text-white hover:bg-[#F59E0B] hover:text-black transition-colors font-semibold text-base sm:text-lg w-full sm:w-auto"
            >
              List Your Business
            </Link>
            <Link
              href="#collabs"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-[#F59E0B] text-black hover:bg-[#F59E0B]/90 transition-colors font-semibold text-base sm:text-lg w-full sm:w-auto"
            >
              Start Collabs
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Africonnect Section */}
      <WhyChooseAfriconnect />

      {/* For Travelers Section */}
      <ForTravelers />

      {/* For Businesses Section */}
      <ForBusinesses />

      {/* For Influencers Section */}
      <ForInfluencers />

      {/* Three Powerful Forces Section */}
      <ThreePowerfulForces />

      {/* Feature Cards Section */}
      <FeatureCards />

      {/* Trusted & Secure Section */}
      <TrustedSecure />

      {/* CTA Hero Section */}
      <CTAHero />

      {/* Footer */}
      <Footer />
    </div>
  )
}

