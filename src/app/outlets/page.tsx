'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function OutletsPage() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const uaeOutlets = [
    {
      type: 'warehouse',
      title: 'Golden Chains - Warehouse',
      location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
      image: '/outlets/warehouse-golden-chains/main.jpg',
      description: t('outletsPage.descriptions.warehouseGolden'),
      slug: 'warehouse-golden-chains-1'
    },
    {
      type: 'showroom',
      title: 'Golden Chains - Showroom',
      address: 'Shop No. 7, Al Habtoor Building,\nNaif Deira Dubai, UAE',
      location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
      image: '/outlets/golden-chains/main.jpg',
      description: t('outletsPage.descriptions.showroomGolden'),
      slug: 'golden-chains'
    }
  ];

  const sudanOutlets = [
    {
      type: 'showroom',
      title: 'Showroom (Hanco - Bahri)',
      address: 'KHARTOUM NORTH\nIndustrial Area\nBuilding No. 32/3\nBlock 1',
      location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
      image: '/outlets/hanco-bahri/main.jpg',
      description: t('outletsPage.descriptions.hancoBahri'),
      slug: 'hanco-bahri'
    },
    {
      type: 'showroom',
      title: 'Showroom (Hanco - Hilat Koko)',
      address: 'East Nile Branch\nBuilding No. 11\nBlock 5',
      location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
      image: '/outlets/hanco-hilat-koko/main.jpg',
      description: t('outletsPage.descriptions.hancoHilat'),
      slug: 'hanco-hilat-koko'
    },
    {
      type: 'warehouse',
      title: 'Warehouse (Hanco - Sudan)',
      location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
      image: '/outlets/warehouse-hanco/main.jpg',
      description: t('outletsPage.descriptions.warehouseHanco'),
      slug: 'warehouse-hanco'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <nav className="flex items-center text-gray-700" aria-label="Breadcrumb">
          <Link
            href="/"
            className="text-base text-black font-medium relative group"
          >
            {t('nav.home')}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <span className="mx-2 text-gray-400 text-lg">›</span>
          <span className="text-base text-gray-500 font-medium">
            {t('nav.outlets')}
          </span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight mb-4">
            {t('outletsPage.title')}
          </h1>
          <div className="w-16 h-1 bg-[#722F37] mx-auto rounded-full"></div>
        </div>

        {/* UAE Outlets Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-6 w-1.5 bg-[#722F37] rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
              {t('outletsPage.uae')}
            </h2>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
              {uaeOutlets.length} {isArabic ? 'فروع' : 'Branches'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {uaeOutlets.map((outlet, index) => (
              <Link key={index} href={`/outlets/${outlet.slug}`} className="block h-full group">
                <div className="bg-[#1a1f2e] rounded-2xl overflow-hidden shadow-xl border-[2px] border-slate-800/80 hover:border-[#722F37]/80 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                  {/* Outlet Image Banner */}
                  <div className="relative h-60 sm:h-64 w-full bg-slate-900 border-b border-white/10 overflow-hidden">
                    <Image
                      src={outlet.image}
                      alt={outlet.title}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent opacity-50"></div>

                    {/* Outlet Type Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md border ${
                        outlet.type === 'warehouse'
                          ? 'bg-blue-500/20 text-blue-200 border-blue-400/30'
                          : 'bg-amber-500/20 text-amber-200 border-amber-400/30'
                      }`}>
                        {outlet.type === 'warehouse' ? (isArabic ? 'مستودع' : 'Warehouse') : (isArabic ? 'معرض' : 'Showroom')}
                      </span>
                    </div>
                  </div>

                  {/* Outlet Details */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-amber-100 transition-colors">
                        {outlet.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {outlet.description}
                      </p>

                      {outlet.type !== 'warehouse' && outlet.address && (
                        <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 bg-white/5 border border-white/10 p-3 rounded-xl mb-4">
                          <svg className="w-4 h-4 text-[#722F37] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <div className="whitespace-pre-line leading-relaxed">
                            <span className="font-semibold text-white block mb-0.5">{t('outletsPage.addressLabel')}</span>
                            {outlet.address}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <div className="inline-flex items-center justify-between w-full bg-[#722F37] group-hover:bg-[#8B3746] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl shadow-md transition-colors">
                        <span>{isArabic ? 'عرض تفاصيل الفرع' : 'View Outlet Details'}</span>
                        <span className="transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sudan Outlets Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-6 w-1.5 bg-[#722F37] rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
              {t('outletsPage.sudan')}
            </h2>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
              {sudanOutlets.length} {isArabic ? 'فروع' : 'Branches'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {sudanOutlets.map((outlet, index) => (
              <Link key={index} href={`/outlets/${outlet.slug}`} className="block h-full group">
                <div className="bg-[#1a1f2e] rounded-2xl overflow-hidden shadow-xl border-[2px] border-slate-800/80 hover:border-[#722F37]/80 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                  {/* Outlet Image Banner */}
                  <div className="relative h-60 sm:h-64 w-full bg-slate-900 border-b border-white/10 overflow-hidden">
                    <Image
                      src={outlet.image}
                      alt={outlet.title}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent opacity-50"></div>

                    {/* Outlet Type Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md border ${
                        outlet.type === 'warehouse'
                          ? 'bg-blue-500/20 text-blue-200 border-blue-400/30'
                          : 'bg-amber-500/20 text-amber-200 border-amber-400/30'
                      }`}>
                        {outlet.type === 'warehouse' ? (isArabic ? 'مستودع' : 'Warehouse') : (isArabic ? 'معرض' : 'Showroom')}
                      </span>
                    </div>
                  </div>

                  {/* Outlet Details */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-amber-100 transition-colors">
                        {outlet.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {outlet.description}
                      </p>

                      {outlet.type !== 'warehouse' && outlet.address && (
                        <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 bg-white/5 border border-white/10 p-3 rounded-xl mb-4">
                          <svg className="w-4 h-4 text-[#722F37] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <div className="whitespace-pre-line leading-relaxed">
                            <span className="font-semibold text-white block mb-0.5">{t('outletsPage.addressLabel')}</span>
                            {outlet.address}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <div className="inline-flex items-center justify-between w-full bg-[#722F37] group-hover:bg-[#8B3746] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl shadow-md transition-colors">
                        <span>{isArabic ? 'عرض تفاصيل الفرع' : 'View Outlet Details'}</span>
                        <span className="transform group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
