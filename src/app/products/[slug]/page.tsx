import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define the product type
type Product = {
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  images: string[];
};

type ProductData = {
  [key: string]: Product;
};

// Product data with additional information and images
const productData: ProductData = {
  'hkt': {
    name: 'HKT',
    description: 'High-quality automotive parts and components',
    longDescription: `HKT specializes in manufacturing premium automotive components.
    Our product range includes:
    • Suspension components
    • Steering parts
    • Chassis components
    • Brake system parts
    • Engine components`,
    features: [
      'Premium quality materials',
      'Strict quality control',
      'Wide vehicle coverage',
      'Durability tested',
      'OEM specifications'
    ],
    images: [
      '/products/HKT/HKT.jpg',
      '/products/HKT/HKT1.jpg',
      '/products/HKT/HKT2.jpg',
      '/products/HKT/HKT3.jpg',
      '/products/HKT/HKT4.jpg'
    ]
  },
  'kyb': {
    name: 'KYB',
    description: 'High-quality shock absorbers and suspension parts',
    longDescription: `KYB is a world-leading manufacturer of shock absorbers and suspension components. 
    Our KYB products include:
    • Shock absorbers
    • Strut assemblies
    • Suspension mounting kits
    • Coil springs
    • Protection kits`,
    features: [
      'OE quality standards',
      'Extensive vehicle coverage',
      'Superior ride comfort',
      'Enhanced vehicle stability',
      'Improved safety performance'
    ],
    images: [
      '/products/KYB/kyb.jpg',
      '/products/KYB/KYB-1.jpg',
      '/products/KYB/KYB-2.jpg',
      '/products/KYB/KYB-3.jpg',
      '/products/KYB/KYB-4.jpg'
    ]
  },
  'perfect-rubber-parts': {
    name: 'PERFECT RUBBER PARTS',
    description: 'Premium rubber components and suspension parts',
    longDescription: `Perfect Rubber Parts specializes in high-quality rubber components for automotive suspension systems.
    Our product range includes:
    • Engine mounting
    • Shock mounting
    • Suspension bushes
    • Stabilizer links
    • Drive shaft boots`,
    features: [
      'ISO 9001:2015 certified',
      'Premium quality materials',
      'Precise fitment',
      'Extended durability',
      'Noise reduction technology'
    ],
    images: [
      '/products/PERFECT-RUBBER/perfect-rubber.jpg',
      '/products/PERFECT-RUBBER/PERFECT-1.jpg',
      '/products/PERFECT-RUBBER/PERFECT-2.jpg',
      '/products/PERFECT-RUBBER/PERFECT-3.jpg',
      '/products/PERFECT-RUBBER/PERFECT-4.jpg'
    ]
  },
  'ibn': {
    name: 'IBN',
    description: 'Quality shock absorbers and suspension components',
    longDescription: `IBN produces reliable shock absorbers and suspension parts made in Korea.
    Our product line includes:
    • Shock absorbers
    • Strut assemblies
    • Ball joints
    • Tie rod ends
    • Control arms`,
    features: [
      'Korean manufacturing',
      'Competitive pricing',
      'Reliable performance',
      'Wide vehicle coverage',
      'Warranty backed'
    ],
    images: [
      '/products/IBN/ibn.jpg',
      '/products/IBN/IBN-1.jpg',
      '/products/IBN/IBN-2.jpg',
      '/products/IBN/IBN-3.jpg',
      '/products/IBN/IBN-4.jpg'
    ]
  },
  'next-auto': {
    name: 'NEXT AUTO',
    description: 'Superior quality gas shock absorbers',
    longDescription: `Next Auto specializes in gas shock absorbers with superior quality standards.
    Product highlights:
    • Gas shock absorbers
    • MacPherson struts
    • Cartridges
    • Sport shock absorbers
    • Heavy-duty shocks`,
    features: [
      'Advanced gas technology',
      'Superior ride quality',
      'Enhanced stability',
      'Long service life',
      'Professional grade'
    ],
    images: [
      '/products/NEXT-AUTO/next-auto.jpg',
      '/products/NEXT-AUTO/NEXT-1.jpg',
      '/products/NEXT-AUTO/NEXT-2.jpg',
      '/products/NEXT-AUTO/NEXT-3.jpg',
      '/products/NEXT-AUTO/NEXT-4.jpg'
    ]
  },
  'smart': {
    name: 'SMART',
    description: 'High-quality brake pads and components',
    longDescription: `Smart produces high-performance brake components made in Korea.
    Our brake solutions include:
    • Brake pads
    • Brake shoes`,
    features: [
      'Non-asbestos materials',
      'Low noise operation',
      'Minimal brake dust',
      'Extended pad life',
      'Perfect fit guarantee'
    ],
    images: [
      '/products/SMART/smart.jpg',
      '/products/SMART/SMART-1.jpg',
      '/products/SMART/SMART-2.jpg',
      '/products/SMART/SMART-3.jpg',
      '/products/SMART/SMART-4.jpg'
    ]
  },
  'mikatakno': {
    name: 'MIKATAKNO',
    description: 'Engine tune-up and gasket products',
    longDescription: `Mikatakno provides essential engine maintenance and repair products.
    Our range includes:
    • Gasket makers
    • Engine cleaners
    • Carburetor cleaners
    • Foam cleaners
    • Engine tune-up kits`,
    features: [
      'Professional grade formulas',
      'Quick curing time',
      'Temperature resistant',
      'Easy application',
      'Long-lasting results'
    ],
    images: [
      '/products/MIKATAKNO/mikatakno.jpg',
      '/products/MIKATAKNO/MIKATAKNO-1.jpg',
      '/products/MIKATAKNO/MIKATAKNO-2.jpg',
      '/products/MIKATAKNO/MIKATAKNO-3.jpg',
      '/products/MIKATAKNO/MIKATAKNO-4.jpg'
    ]
  }
};

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ProductPage({ params, searchParams }: Props) {
  const product = productData[params.slug as keyof typeof productData];

  if (!product) {
    notFound();
  }

  // Filter out any undefined or empty image paths
  const validImages = product.images.filter(img => img && img.trim() !== '');

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-black hover:text-gray-700 mb-8 text-4xl font-bold"
        >
          ‹
        </Link>

        {/* Product header */}
        <h1 className="text-4xl font-bold text-black mb-4">{product.name}</h1>
        <p className="text-xl text-gray-600 mb-8">{product.description}</p>

        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {validImages.map((image, index) => (
            <div key={index} className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`${product.name} - Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Product details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Product Description</h2>
            <div className="prose max-w-none">
              {product.longDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    ✓
                  </span>
                  <span className="ml-3 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact section */}
        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-black mb-4">Interested in our products?</h2>
          <p className="text-gray-600 mb-6">
            Contact us for more information, pricing, and availability.
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
          </div>
        </div>
      </div>
    </div>
  );
} 