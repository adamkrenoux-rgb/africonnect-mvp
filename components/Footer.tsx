import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A1A] w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Column 1 - Branding */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Africonnect
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Connecting the world to authentic African experiences through AI-powered technology, sustainable tourism, and community empowerment.
            </p>
            {/* Stylized Acronym */}
            <div className="flex gap-2">
              <span className="text-[#F59E0B] font-bold text-lg">A</span>
              <span className="text-[#F59E0B] font-bold text-lg">C</span>
              <span className="text-[#F59E0B] font-bold text-lg">S</span>
              <span className="text-[#F59E0B] font-bold text-lg">P</span>
              <span className="text-[#F59E0B] font-bold text-lg">I</span>
            </div>
          </div>

          {/* Column 2 - For Travelers */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              For Travelers
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#safari-tours" className="text-gray-300 text-base hover:text-white transition-colors">
                  Safari Tours
                </Link>
              </li>
              <li>
                <Link href="#cultural-experiences" className="text-gray-300 text-base hover:text-white transition-colors">
                  Cultural Experiences
                </Link>
              </li>
              <li>
                <Link href="#wildlife-conservation" className="text-gray-300 text-base hover:text-white transition-colors">
                  Wildlife Conservation
                </Link>
              </li>
              <li>
                <Link href="#adventure-activities" className="text-gray-300 text-base hover:text-white transition-colors">
                  Adventure Activities
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - For Businesses */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              For Businesses
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/business/setup" className="text-gray-300 text-base hover:text-white transition-colors">
                  List Your Business
                </Link>
              </li>
              <li>
                <Link href="#get-verified" className="text-gray-300 text-base hover:text-white transition-colors">
                  Get Verified
                </Link>
              </li>
              <li>
                <Link href="#influencer-collaborations" className="text-gray-300 text-base hover:text-white transition-colors">
                  Influencer Collaborations
                </Link>
              </li>
              <li>
                <Link href="#analytics-dashboard" className="text-gray-300 text-base hover:text-white transition-colors">
                  Analytics Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
