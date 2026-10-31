"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaPhone, FaMobileAlt, FaEnvelope, FaMapMarkerAlt, FaBullseye, FaEye } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#722F37]">
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
          <span className="text-base text-gray-300 font-medium">
            {t('nav.about')}
          </span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
        {/* Page Header */}
        <div className="mb-12 text-center md:text-start">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t('aboutPage.title')}
          </h1>
          <div className="w-16 h-1 bg-white/40 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Company Overview Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl border-[2px] border-black/20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-6 w-1.5 bg-[#722F37] rounded-full"></span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#722F37]">
              {t('about.companyName')}
            </h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
            {t('aboutPage.description')}
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission Card */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border-[2px] border-black/20 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-gray-100">
                <div className="p-3 rounded-xl bg-[#722F37]/10 text-[#722F37] group-hover:bg-[#722F37] group-hover:text-white transition-colors">
                  <FaBullseye className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-[#722F37]">
                  {t('aboutPage.missionTitle')}
                </h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {t('aboutPage.missionText')}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border-[2px] border-black/20 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-gray-100">
                <div className="p-3 rounded-xl bg-[#722F37]/10 text-[#722F37] group-hover:bg-[#722F37] group-hover:text-white transition-colors">
                  <FaEye className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-[#722F37]">
                  {t('aboutPage.visionTitle')}
                </h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {t('aboutPage.visionText')}
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border-[2px] border-black/20">
          <div className="mb-6 pb-4 border-b border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#722F37] mb-2">
              {t('aboutPage.contactTitle')}
            </h2>
            <p className="text-gray-600 text-base">
              {t('aboutPage.contactDesc')}
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <a
              href="tel:+97142957412"
              className="flex items-center gap-3.5 p-4 rounded-xl bg-gray-50/80 border border-gray-200/80 hover:bg-white hover:border-[#722F37]/40 hover:shadow-md transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-[#722F37]/10 text-[#722F37] group-hover:bg-[#722F37] group-hover:text-white transition-colors">
                <FaPhone className="text-lg" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-medium block">Phone</span>
                <span dir="ltr" className="text-sm font-semibold text-gray-900">+971 4 295 7412</span>
              </div>
            </a>

            <a
              href="tel:+971545032595"
              className="flex items-center gap-3.5 p-4 rounded-xl bg-gray-50/80 border border-gray-200/80 hover:bg-white hover:border-[#722F37]/40 hover:shadow-md transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-[#722F37]/10 text-[#722F37] group-hover:bg-[#722F37] group-hover:text-white transition-colors">
                <FaMobileAlt className="text-lg" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-medium block">Mobile</span>
                <span dir="ltr" className="text-sm font-semibold text-gray-900">+971 54 503 2595</span>
              </div>
            </a>

            <a
              href="https://wa.me/971545032595"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-xl bg-gray-50/80 border border-gray-200/80 hover:bg-white hover:border-emerald-500/40 hover:shadow-md transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <FaWhatsapp className="text-lg" />
              </div>
              <div>
                <span className="text-xs text-emerald-600 font-medium block">WhatsApp</span>
                <span dir="ltr" className="text-sm font-semibold text-gray-900">+971 54 503 2595</span>
              </div>
            </a>

            <a
              href="mailto:info@goldenchainstrd.com"
              className="flex items-center gap-3.5 p-4 rounded-xl bg-gray-50/80 border border-gray-200/80 hover:bg-white hover:border-[#722F37]/40 hover:shadow-md transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-[#722F37]/10 text-[#722F37] group-hover:bg-[#722F37] group-hover:text-white transition-colors">
                <FaEnvelope className="text-lg" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-medium block">Email</span>
                <span className="text-sm font-semibold text-gray-900 truncate block max-w-[170px]">info@goldenchainstrd.com</span>
              </div>
            </a>
          </div>

          <Link
            href="https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-[#722F37] text-white rounded-xl hover:bg-[#8B3746] transition-all duration-200 w-full font-semibold shadow-lg hover:shadow-xl"
          >
            <FaMapMarkerAlt className="text-lg" />
            <span>{t('aboutPage.viewLocation')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
