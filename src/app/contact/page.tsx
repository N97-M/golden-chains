"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaPhone, FaMobileAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      errors.firstName = `${t('contactPage.form.firstName')} ${t('contactPage.form.required')}`;
    }

    if (!formData.email.trim()) {
      errors.email = `${t('contactPage.form.email')} ${t('contactPage.form.required')}`;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t('contactPage.form.invalidEmail');
    }

    if (!formData.message.trim()) {
      errors.message = `${t('contactPage.form.message')} ${t('contactPage.form.required')}`;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t('contactPage.form.error'));
      }

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      setValidationErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : t('contactPage.form.error'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

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
            {t('nav.contact')}
          </span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="mb-12 text-center md:text-start">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
            {t('contactPage.title')}
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl">
            {t('aboutPage.contactDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Map and Form (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Google Map Frame */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-[2px] border-black/20 bg-neutral-900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.024139778013!2d55.30641197414009!3d25.2697733776643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43003eb15571%3A0x712da1f0cd802ffd!2sGolden%20Chains%20Trading%20llc!5e0!3m2!1sen!2saz!4v1744879267993!5m2!1sen!2saz"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white p-7 sm:p-9 rounded-2xl shadow-2xl border-[2px] border-black/20 space-y-6">
              <div className="border-b border-gray-100 pb-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#722F37] mb-1">
                  {t('contactPage.title')}
                </h3>
                <p className="text-gray-500 text-sm">
                  Send us a message and our team will get back to you promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {t('contactPage.form.firstName')} *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl bg-gray-50/70 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#722F37]/30 transition-all ${
                      validationErrors.firstName ? 'border-red-500' : 'border-gray-300 focus:border-[#722F37]'
                    }`}
                    required
                  />
                  {validationErrors.firstName && (
                    <p className="text-red-600 text-xs mt-1.5 font-medium">{validationErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {t('contactPage.form.lastName')}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50/70 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#722F37]/30 focus:border-[#722F37] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  {t('contactPage.form.email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl bg-gray-50/70 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#722F37]/30 transition-all ${
                    validationErrors.email ? 'border-red-500' : 'border-gray-300 focus:border-[#722F37]'
                  }`}
                  required
                />
                {validationErrors.email && (
                  <p className="text-red-600 text-xs mt-1.5 font-medium">{validationErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  {t('contactPage.form.message')} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-xl bg-gray-50/70 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#722F37]/30 transition-all ${
                    validationErrors.message ? 'border-red-500' : 'border-gray-300 focus:border-[#722F37]'
                  }`}
                  required
                ></textarea>
                {validationErrors.message && (
                  <p className="text-red-600 text-xs mt-1.5 font-medium">{validationErrors.message}</p>
                )}
              </div>

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
                  {t('contactPage.form.success')}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full sm:w-auto inline-flex items-center justify-center bg-[#722F37] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#5a252c] shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 ${
                  status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {status === 'loading' ? t('contactPage.form.sending') : t('contactPage.form.send')}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info & Hours (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Business Hours Card */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-2xl border-[2px] border-black/20">
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-gray-100">
                <span className="p-2.5 rounded-xl bg-[#722F37]/10 text-[#722F37]">
                  <FaClock className="text-lg" />
                </span>
                <h3 className="text-xl font-bold text-[#722F37]">
                  {t('contactPage.businessHours')}
                </h3>
              </div>

              <div className="space-y-2.5 text-sm">
                {[
                  { day: t('contactPage.days.monday'), time: '9 AM–1:30 PM, 4–8:30 PM', open: true },
                  { day: t('contactPage.days.tuesday'), time: '9 AM–1:30 PM, 4–8:30 PM', open: true },
                  { day: t('contactPage.days.wednesday'), time: '9 AM–1:30 PM, 4–8:30 PM', open: true },
                  { day: t('contactPage.days.thursday'), time: '9 AM–1:30 PM, 4–8:30 PM', open: true },
                  { day: t('contactPage.days.friday'), time: '9 AM–1:30 PM, 4–8:30 PM', open: true },
                  { day: t('contactPage.days.saturday'), time: '9 AM–3 PM', open: true },
                  { day: t('contactPage.days.sunday'), time: t('contactPage.days.closed'), open: false }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                      !item.open ? 'bg-red-50 text-red-600 font-semibold' : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="font-medium">{item.day}</span>
                    <span dir="ltr" className="text-xs sm:text-sm font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3">
                  {t('contactPage.generalEnquiries')}
                </h4>
                <div className="space-y-1.5 text-sm text-gray-600 leading-relaxed">
                  <p className="font-semibold text-gray-900">{t('aboutPage.companyName')}</p>
                  <p>{t('quickInfo.address.poBox')}</p>
                  <p>{t('quickInfo.address.shop')}</p>
                  <p>{t('quickInfo.address.area')}</p>
                  <p className="text-gray-500">Baniyas Square, Deira Dubai – UAE</p>
                </div>
              </div>
            </div>

            {/* Quick Contact & Map Button Card */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-2xl border-[2px] border-black/20">
              <h3 className="text-xl font-bold text-[#722F37] mb-5 pb-3 border-b border-gray-100">
                Direct Channels
              </h3>

              <div className="space-y-3.5 mb-6 text-sm text-gray-700">
                <a
                  href="tel:+97142957412"
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#722F37]/10 text-[#722F37] group-hover:bg-[#722F37] group-hover:text-white transition-colors">
                    <FaPhone className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Telephone</span>
                    <span dir="ltr" className="font-semibold text-gray-900">+971 4 295 7412</span>
                  </div>
                </a>

                <a
                  href="tel:+971545032595"
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#722F37]/10 text-[#722F37] group-hover:bg-[#722F37] group-hover:text-white transition-colors">
                    <FaMobileAlt className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Mobile Hotline</span>
                    <span dir="ltr" className="font-semibold text-gray-900">+971 54 503 2595</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/971545032595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-emerald-50/60 border border-transparent hover:border-emerald-200 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <FaWhatsapp className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-600 block font-medium">WhatsApp Support</span>
                    <span dir="ltr" className="font-semibold text-gray-900">+971 54 503 2595</span>
                  </div>
                </a>

                <a
                  href="mailto:info@goldenchainstrd.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#722F37]/10 text-[#722F37] group-hover:bg-[#722F37] group-hover:text-white transition-colors">
                    <FaEnvelope className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Official Email</span>
                    <span className="font-semibold text-gray-900 break-all">info@goldenchainstrd.com</span>
                  </div>
                </a>
              </div>

              <Link
                href="https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#722F37] text-white rounded-xl hover:bg-[#8B3746] transition-all duration-200 w-full justify-center font-semibold shadow-lg hover:shadow-xl"
              >
                <FaMapMarkerAlt className="text-lg" />
                <span>{t('aboutPage.viewLocation')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
