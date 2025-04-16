import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Fixed logo background */}
      <div className="fixed inset-0 flex items-start justify-center opacity-10 pointer-events-none overflow-hidden pt-20 z-0">
        <Image
          src="/logo.png"
          alt="Golden Chains Trading LLC Logo"
          width={800}
          height={800}
          className="object-contain transform scale-125"
        />
      </div>

      {/* Scrollable content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Back button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-black hover:text-gray-700 mb-8 text-4xl font-bold"
        >
          ‹
        </Link>

        {/* About content */}
        <div>
          <h1 className="text-4xl font-bold text-black mb-8">
            ABOUT GOLDEN CHAINS TRADING LLC
          </h1>

          <div className="prose max-w-none text-gray-600 mb-12">
            <p className="mb-6 text-lg">
              Golden Chains TRADING LLC, a Dubai-based company, operates in the dynamic sector of auto spare parts and components trading. This industry plays a crucial role in the automotive ecosystem, focusing on the supply and distribution of a diverse range of parts and accessories needed for vehicle maintenance, repairs, and enhancements. The product range spans from essential mechanical components like engines, brakes, and suspensions to electrical items, filters, and lighting solutions. With a global reach, this sector sources parts from manufacturers worldwide and involves both wholesale and retail transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4">Mission Statement</h2>
              <p className="text-gray-600 text-lg">
                Our mission is to deliver exceptional services in the spare parts domain, ensuring unparalleled customer satisfaction through high-quality products and outstanding service.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4">Vision Statement</h2>
              <p className="text-gray-600 text-lg">
                Our vision is to emerge as a leading provider of spare parts, renowned for our dedication to quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Contact section */}
          <div className="mt-16 p-8 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Get in touch with us for more information about our products and services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://wa.me/97125128817"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Contact via WhatsApp
              </Link>
              <Link
                href="tel:+97125128817"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Call Us
              </Link>
              <Link
                href="https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                View Location
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 