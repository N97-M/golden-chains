"use client";

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#722F37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-3 text-white">
              {t('about.welcomeTo')}
            </h2>
            <h1 className="text-5xl font-bold mb-10 text-white">
              {t('about.companyName')}
            </h1>
          </div>

          <div className="space-y-6 text-white/90 text-lg leading-relaxed">
            <p>
              {t('about.p1')}
            </p>

            <p>
              {t('about.p2')}
            </p>
          </div>

          <div className="text-right mt-12">
            <Link
              href="/about"
              className="inline-block bg-white text-[#722F37] px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors text-lg font-medium"
            >
              {t('about.readMore')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}