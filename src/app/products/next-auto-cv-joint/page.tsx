"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function NextAutoCvJointPage() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const products = [
    {
      name: t('nextAutoCvJointPage.outer'),
      image: '/products/NEXT-AUTO/outer-cv-joint.jpg',
      description: t('nextAutoCvJointPage.outerDesc')
    },
    {
      name: t('nextAutoCvJointPage.inner'),
      image: '/products/NEXT-AUTO/inner-cv-joint.jpg',
      description: t('nextAutoCvJointPage.innerDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <nav className="flex items-center text-gray-700 mb-8" dir={isArabic ? 'rtl' : 'ltr'}>
          <Link
            href="/"
            className="text-base text-black font-medium relative group"
          >
            {t('nav.home')}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <span className="mx-2 text-gray-400 text-lg">›</span>
          <span className="text-base text-gray-500">
            {t('nextAutoCvJointPage.title')}
          </span>
        </nav>

        {/* Header */}
        <div className="mb-12" dir={isArabic ? 'rtl' : 'ltr'}>
          <h1 className="text-4xl font-bold text-black mb-4">{t('nextAutoCvJointPage.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('nextAutoCvJointPage.description')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" dir={isArabic ? 'rtl' : 'ltr'}>
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-80 bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="mt-16 p-8 bg-gray-50 rounded-lg" dir={isArabic ? 'rtl' : 'ltr'}>
          <h2 className="text-2xl font-bold text-black mb-4">{t('contactPage.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('aboutPage.contactDesc')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/971545032595"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </Link>
            <Link
              href="tel:+97142957412"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {t('contactPage.title')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
