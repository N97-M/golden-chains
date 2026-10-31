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
      image: '/brands/next-auto-image.jpg',
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
      id: 13,
      name: 'Next Auto Brake Disc',
      image: '/brands/next-auto-image.jpg',
      description: t('brands.nextAutoBrakeDisc'),
      products: [
        'Ventilated Brake Disc',
        'Balanced Brake Disc (TRSEEP)',
        'Heavyweight Construction Rotors'
      ]
    },
    {
      id: 14,
      name: 'NRR Rubber Parts',
      image: '/products/NRR/nrr-logo.jpg',
      description: t('brands.nrrEngineMount'),
      products: [
        'Engine Mount',
        'Transmission Mount',
        'Torque Strut Mount',
        'Rubber Bushings'
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-9">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-2xl shadow-xl border-[2px] border-slate-900/50 overflow-hidden flex flex-col h-full hover:shadow-2xl hover:border-slate-950 transition-all duration-300 group"
            >
              {/* Media Section */}
              <div
                className={`relative h-64 sm:h-72 w-full bg-neutral-900 border-b-2 border-gray-200 overflow-hidden ${brand.video ? 'cursor-pointer' : ''}`}
                onClick={() => brand.video && toggleVideo(brand.id)}
              >
                {playingVideo === brand.id && brand.video ? (
                  <div className="relative w-full h-full bg-black">
                    {/* Loading Spinner */}
                    {isVideoLoading === brand.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Top Controls */}
                      <div className="absolute top-3 right-3 flex gap-2 z-20">
                        {/* Close Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleVideo(brand.id);
                          }}
                          className="bg-black/70 hover:bg-black text-white p-2.5 rounded-full transition-all duration-200 backdrop-blur-md border border-white/10"
                          aria-label="Close video"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {/* Center Controls */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Play/Pause Button */}
                        <button
                          onClick={(e) => togglePlayPause(brand.id, e)}
                          className="bg-white/95 hover:bg-white text-emerald-500 p-4 rounded-full shadow-2xl transition-all duration-200 transform hover:scale-110 border border-emerald-500/20"
                          aria-label={isVideoPaused === brand.id ? "Play" : "Pause"}
                        >
                          {isVideoPaused === brand.id ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                          )}
                        </button>
                      </div>

                      {/* Bottom Controls */}
                      <div className="absolute bottom-3 right-3 flex gap-2 z-20">
                        {/* Fullscreen Button */}
                        <button
                          onClick={(e) => toggleFullscreen(brand.id, e)}
                          className="bg-black/70 hover:bg-black text-white p-2.5 rounded-full transition-all duration-200 backdrop-blur-md border border-white/10"
                          aria-label="Fullscreen"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={brand.id <= 4}
                    />
                    {/* Play Button Overlay */}
                    {brand.video && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/95 p-4 rounded-full shadow-2xl transform transition-transform duration-200 group-hover:scale-110 border border-emerald-500/20">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                    {/* Video Badge */}
                    {brand.video && (
                      <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md text-white border border-white/20 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>{t('brandsPage.watchVideo') || 'Click to Watch Video'}</span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#9B2C2C] mb-3 tracking-tight transition-colors group-hover:text-[#6E1423]">
                    {brand.name}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {brand.description}
                  </p>
                </div>

                {/* Products Section with Divider */}
                {brand.products && brand.products.length > 0 && (
                  <div className="pt-5 border-t border-gray-200/90 mt-auto">
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2">
                        <span className="h-4 w-1 bg-[#9B2C2C] rounded-full"></span>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                          {t('brandsPage.productsLabel')}
                        </h3>
                      </div>
                      <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full border border-gray-200/80">
                        {brand.products.length} {brand.products.length === 1 ? 'item' : 'items'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {brand.products.map((product, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50/80 border border-gray-200/70 text-xs sm:text-sm text-gray-800 font-medium hover:bg-white hover:border-[#9B2C2C]/30 hover:shadow-sm transition-all"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9B2C2C] flex-shrink-0"></span>
                          <span className="truncate">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
