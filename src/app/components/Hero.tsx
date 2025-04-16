'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full relative">
      <div className={`w-full relative ${isMobile ? 'aspect-[3/4]' : 'aspect-[2/1]'}`}>
        {/* Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero/LAPTOP/video (2).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
} 