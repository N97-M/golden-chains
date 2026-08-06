"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Brand {
  id: number;
  name: string;
  image: string;
  video?: string;
  description: string;
  products?: string[];
}

export default function Brands() {
  const { t } = useTranslation();
  // State to track which brand's video is currently playing
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState<number | null>(null);
  const [isVideoPaused, setIsVideoPaused] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

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
    },
    {
      id: 10,
      name: 'GGA',
      image: '/products/GGA/GGA-LOGO.jpeg',
      description: t('brands.gga'),
      products: [
        'Brake Master',
        'Wheel Cylinder',
        'Clutch Operating',
        'Brake Wheel Cylinder'
      ]
    },
    {
      id: 11,
      name: 'FWF',
      image: '/products/FWF/fwf-logo.jpg',
      description: t('brands.fwf'),
      products: [
        'Brake Pad',
        'Brake Shoe',
        'Handbrake'
      ]
    },
    {
      id: 12,
      name: 'CERA',
      image: '/products/CERA/cera-logo.png',
      description: t('brands.cera'),
      products: [
        'Ball Joints',
        'Rack End',
        'Rod End'
      ]
    }
  ];

  // Function to toggle video playback
  const toggleVideo = (brandId: number) => {
    if (playingVideo === brandId) {
      setPlayingVideo(null);
      setIsVideoPaused(null);
    } else {
      setPlayingVideo(brandId);
      setIsVideoLoading(brandId);
      setIsVideoPaused(null);
    }
  };

  // Function to toggle play/pause
  const togglePlayPause = (brandId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[brandId];
    if (video) {
      if (video.paused) {
        video.play();
        setIsVideoPaused(null);
      } else {
        video.pause();
        setIsVideoPaused(brandId);
      }
    }
  };

  // Function to toggle fullscreen
  const toggleFullscreen = (brandId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[brandId];
    if (video) {
      if (!document.fullscreenElement) {
        video.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  // Handle video loaded
  const handleVideoLoaded = (brandId: number) => {
    setIsVideoLoading(null);
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
                <div className={`relative h-[300px] bg-gray-50 rounded-lg overflow-hidden group ${brand.video ? 'cursor-pointer' : ''}`} onClick={() => brand.video && toggleVideo(brand.id)}>
                  {playingVideo === brand.id && brand.video ? (
                    <div className="relative w-full h-full bg-black">
                      {/* Loading Spinner */}
                      {isVideoLoading === brand.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent"></div>
                        </div>
                      )}

                      {/* Video Element */}
                      <video
                        ref={(el) => { videoRefs.current[brand.id] = el; }}
                        src={brand.video}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        onLoadedData={() => handleVideoLoaded(brand.id)}
                        onClick={(e) => togglePlayPause(brand.id, e)}
                      />

                      {/* Custom Video Controls Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Top Controls */}
                        <div className="absolute top-4 right-4 flex gap-2 z-20">
                          {/* Close Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleVideo(brand.id);
                            }}
                            className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                            aria-label="Close video"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>

                        {/* Center Controls */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* Play/Pause Button */}
                          <button
                            onClick={(e) => togglePlayPause(brand.id, e)}
                            className="bg-white/90 hover:bg-white text-[#9B2C2C] p-4 rounded-full shadow-2xl transition-all duration-200 transform hover:scale-110"
                            aria-label={isVideoPaused === brand.id ? "Play" : "Pause"}
                          >
                            {isVideoPaused === brand.id ? (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                              </svg>
                            )}
                          </button>
                        </div>

                        {/* Bottom Controls */}
                        <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                          {/* Fullscreen Button */}
                          <button
                            onClick={(e) => toggleFullscreen(brand.id, e)}
                            className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                            aria-label="Fullscreen"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
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
                      {brand.video && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/90 p-4 rounded-full shadow-2xl transform transition-transform duration-200 group-hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#9B2C2C]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      )}
                      {/* Video Label */}
                      {brand.video && (
                      <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        {t('brandsPage.watchVideo') || 'Watch Video'}
                      </div>
                      )}
                    </>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold text-[#9B2C2C] mb-4">{brand.name}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{brand.description}</p>

                  {/* Products List */}
                  {brand.products && brand.products.length > 0 && (
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
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 