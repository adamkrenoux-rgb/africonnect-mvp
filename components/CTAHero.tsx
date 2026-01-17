import Link from 'next/link'

export default function CTAHero() {
  return (
    <section className="bg-[#1A1A1A] w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8">
          Ready to Transform African Travel?
        </h2>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the platform that's making authentic African travel more accessible and profitable for everyone.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/sign-up"
            className="px-8 py-4 rounded-lg bg-[#F59E0B] text-black hover:bg-[#F59E0B]/90 transition-colors font-bold text-base sm:text-lg w-full sm:w-auto"
          >
            Start Your Journey
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 rounded-lg bg-transparent border-2 border-[#F59E0B] text-white hover:bg-[#F59E0B] hover:text-black transition-colors font-bold text-base sm:text-lg w-full sm:w-auto"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
