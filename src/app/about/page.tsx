"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaPhone, FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#722F37]">
      {/* Navigation */}
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
            {t('nav.about')}
          </span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">
            {t('aboutPage.title')}
          </h1>

          <div className="prose max-w-none text-gray-300 mb-12">
            <p className="mb-6 text-lg">
              {t('aboutPage.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#722F37] mb-4">{t('aboutPage.missionTitle')}</h2>
              <p className="text-[#722F37] text-lg">
                {t('aboutPage.missionText')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#722F37] mb-4">{t('aboutPage.visionTitle')}</h2>
              <p className="text-[#722F37] text-lg">
                {t('aboutPage.visionText')}
              </p>
            </div>
          </div>

          {/* Contact section */}
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#722F37] mb-4">{t('aboutPage.contactTitle')}</h2>
            <p className="text-[#722F37] mb-6">
              {t('aboutPage.contactDesc')}
            </p>
            <div className="flex flex-col space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#722F37] text-xl" />
                <span className="text-gray-700" dir="ltr">Pho: +971 4 295 7412</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMobileAlt className="text-[#722F37] text-xl" />
                <span className="text-gray-700" dir="ltr">Mob: +971 54 503 2595</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-[#722F37] text-xl" />
                <span className="text-gray-700" dir="ltr">WApp: +971 54 503 2595</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#722F37] text-xl" />
                <span className="text-gray-700">Email: info@goldenchainstrd.com</span>
              </div>
            </div>
            <Link
              href="https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-[#722F37] text-white rounded-md hover:bg-[#8B3746] transition-colors w-full justify-center"
            >
              <FaMapMarkerAlt className="text-xl" />
              <span>{t('aboutPage.viewLocation')}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 