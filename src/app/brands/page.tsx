"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Brand {
  id: number;
  name: string;
  image: string;
  video: string;
  description: string;
  products: string[];
}

export default function Brands() {
  const { t } = useTranslation();
  // State to track which brand's video is currently playing
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const brands: Brand[] = [
    {
      id: 1,
      name: 'KYB',
      image: '/brands/kyb-image.jpg',
      video: '/brands/kyb-video.mp4',
      description: t('brands.kyb'),
      products: [
        'Ball Joint',
        'Tie Rod End',
        'Rack End',
        'Stabilizer Link'
      ]
    },
    {
      id: 2,
      name: 'Perfect Rubber Parts',
      image: '/brands/perfect-rubber-image.jpg',
      video: '/brands/perfect-rubber-video.mp4',
      description: t('brands.perfectRubber'),
      products: [
        'Suspension Bush',
        'Arm Bush',
        'Stabilizer Link',
        'Stabilizer Bush',
        'Engine Mounting',
        'Drive Shaft Boot',
        'Steering Boot',
        'Shock Mounting'
      ]
    },
    {
      id: 3,
      name: 'IBN',
      image: '/brands/ibn-image.jpg',
      video: '/brands/ibn-video.mp4',
      description: t('brands.ibn'),
      products: [
        'Suspension Bush',
        'Arm Bush',
        'Ball Joint',
        'Tie Rod End',
        'Rack End',
        'Stabilizer Link',
        'Stabilizer Bush'
      ]
    },
    {
      id: 4,
      name: 'Next Auto Shock Absorbers',
      image: '/brands/next-auto-image.jpg',
      video: '/brands/next-auto-video.mp4',
      description: t('brands.nextAuto'),
      products: [
        'Steering Rack',
        'Shock Absorber',
        'Power Steering'
      ]
    },
    {
      id: 9,
      name: 'Next Auto CV Joint',
      image: '/products/NEXT-AUTO/outer-cv-joint.jpg',
      video: '/brands/next-auto-video.mp4',
      description: t('brands.nextAutoCvJoint'),
      products: [
        'Outer CV Joint',
        'Inner CV Joint'
      ]
    },
    {
      id: 5,
      name: 'Smart',
      image: '/brands/smart-image.jpg',
      video: '/brands/smart-video.mp4',
      description: t('brands.smart'),
      products: [
        'Brake Pad',
        'Brake Shoe'
      ]
    },
    {
      id: 6,
      name: 'Mikatakno',
      image: '/brands/mikatakno-image.jpg',
      video: '/brands/mikatakno-video.mp4',
      description: t('brands.mikatakno'),
      products: [
        'Grey Gasket Maker'
      ]
    },
    {
      id: 7,
      name: 'Reliable Choice (RC)',
      image: '/brands/rc-image.jpg',
      video: '/brands/rc-video.mp4',
      description: t('brands.reliableChoice'),
      products: [
        'Suspension Bush',
        'Arm Bush',
        'Stabilizer Link',
        'Stabilizer Bush',
        'Engine Mounting',
        'Drive Shaft Boot',
        'Steering Boot',
        'Shock Mounting'
      ]
    },
    {
      id: 8,
      name: 'HKT',
      image: '/brands/hkt-image.jpg',
      video: '/brands/hkt-video.mp4',
      description: t('brands.hkt'),
      products: [
        'In Tank Fuel Pump'
      ]
    }
  ];

  // Function to toggle video playback
  const toggleVideo = (brandId: number) => {
    if (playingVideo === brandId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(brandId);
    }
  };

  return (
    <div className="min-h-screen bg-[#6E1423]">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <nav className="flex items-center text-gray-700">
          <Link
            href="/"
            className="text-base text-white font-medium relative group"
          >
            {t('nav.home')}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <span className="mx-2 text-gray-400 text-lg">›</span>
          <span className="text-base text-gray-300">
            {t('nav.brands')}
          </span>
        </nav>
      </div>

      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">{t('brandsPage.title')}</h1>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 gap-12">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Media Section */}
                <div className="relative h-[300px] bg-gray-50 rounded-lg overflow-hidden group cursor-pointer" onClick={() => toggleVideo(brand.id)}>
                  {playingVideo === brand.id ? (
                    <video
                      src={brand.video}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      controls
                    />
                  ) : (
                    <>
                      <Image
                        src={brand.image}
                        alt={`${brand.name} Preview`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/80 p-3 rounded-full shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9B2C2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold text-[#9B2C2C] mb-4">{brand.name}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{brand.description}</p>

                  {/* Products List */}
                  <div className="mt-auto">
                    <h3 className="text-xl font-semibold mb-3 text-black">{t('brandsPage.productsLabel')}</h3>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {brand.products.map((product, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <span className="mr-2 text-[#9B2C2C]">•</span>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 