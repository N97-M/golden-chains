import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    name: 'HKT',
    image: '/products/HKT/HKT.jpg',
    description: 'High-quality automotive parts and components'
  },
  {
    name: 'KYB',
    image: '/products/KYB/kyb.jpg',
    description: 'High-quality shock absorbers and suspension parts'
  },
  {
    name: 'PERFECT RUBBER PARTS',
    image: '/products/PERFECT-RUBBER/perfect-rubber.jpg',
    description: 'Premium rubber components and suspension parts'
  },
  {
    name: 'IBN',
    image: '/products/IBN/ibn.jpg',
    description: 'Quality shock absorbers and suspension components'
  },
  {
    name: 'NEXT AUTO',
    image: '/products/NEXT-AUTO/next-auto.jpg',
    description: 'Superior quality gas shock absorbers'
  },
  {
    name: 'SMART',
    image: '/products/SMART/smart.jpg',
    description: 'High-quality brake pads and components'
  },
  {
    name: 'MIKATAKNO',
    image: '/products/MIKATAKNO/mikatakno.jpg',
    description: 'Engine tune-up and gasket products'
  },
  {
    name: 'RELIABLE CHOICE (RC)',
    image: '/products/RC/rc.jpg',
    description: 'Trusted automotive parts including shock absorbers, brake pads, and suspension components'
  }
];

export default function Products() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">BRANDS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link 
              key={product.name}
              href={`/products/${product.name.toLowerCase().replace(/[\s()]+/g, '-')}`}
              className="group"
            >
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-center mb-2 text-black">{product.name}</h3>
                  <p className="text-gray-600 text-center text-sm">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 