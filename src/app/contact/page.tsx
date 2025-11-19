"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaPhone, FaMobileAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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
            {t('nav.contact')}
          </span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          {t('contactPage.title')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Map and Form */}
          <div>
            {/* Google Map */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.024139778013!2d55.30641197414009!3d25.2697733776643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43003eb15571%3A0x712da1f0cd802ffd!2sGolden%20Chains%20Trading%20llc!5e0!3m2!1sen!2saz!4v1744879267993!5m2!1sen!2saz"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 text-gray-700 font-medium">{t('contactPage.form.firstName')} *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md bg-gray-50 text-gray-700 placeholder-gray-400 ${validationErrors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    required
                  />
                  {validationErrors.firstName && (
                    <p className="text-red-600 text-sm mt-1">{validationErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-700 font-medium">{t('contactPage.form.lastName')}</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-700 font-medium">{t('contactPage.form.email')} *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md bg-gray-50 text-gray-700 placeholder-gray-400 ${validationErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  required
                />
                {validationErrors.email && (
                  <p className="text-red-600 text-sm mt-1">{validationErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-700 font-medium">{t('contactPage.form.message')} *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md h-32 bg-gray-50 text-gray-700 placeholder-gray-400 ${validationErrors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  required
                ></textarea>
                {validationErrors.message && (
                  <p className="text-red-600 text-sm mt-1">{validationErrors.message}</p>
                )}
              </div>

              {status === 'error' && (
                <div className="text-red-600">{errorMessage}</div>
              )}

              {status === 'success' && (
                <div className="text-green-600">{t('contactPage.form.success')}</div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`bg-[#722F37] text-white px-6 py-2 rounded-md hover:bg-[#5a252c] transition-colors ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                {status === 'loading' ? t('contactPage.form.sending') : t('contactPage.form.send')}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div>
            <div className="mb-8 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#722F37] mb-4">{t('contactPage.businessHours')}</h3>
              <div className="space-y-2 text-gray-600 mb-8">
                <div className="flex justify-between">
                  <span className="font-medium">{t('contactPage.days.monday')}</span>
                  <span dir="ltr">9 AM–1:30 PM, 4–8:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">{t('contactPage.days.tuesday')}</span>
                  <span dir="ltr">9 AM–1:30 PM, 4–8:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">{t('contactPage.days.wednesday')}</span>
                  <span dir="ltr">9 AM–1:30 PM, 4–8:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">{t('contactPage.days.thursday')}</span>
                  <span dir="ltr">9 AM–1:30 PM, 4–8:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">{t('contactPage.days.friday')}</span>
                  <span dir="ltr">9 AM–1:30 PM, 4–8:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">{t('contactPage.days.saturday')}</span>
                  <span dir="ltr">9 AM–3 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-red-600">{t('contactPage.days.sunday')}</span>
                  <span className="text-red-600">{t('contactPage.days.closed')}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#722F37] mb-4">{t('contactPage.generalEnquiries')}</h3>
              <div className="space-y-4 text-gray-600">
                <p>{t('aboutPage.companyName')}</p>
                <p>{t('quickInfo.address.poBox')}</p>
                <p>{t('quickInfo.address.shop')}</p>
                <p>{t('quickInfo.address.area')}</p>
                <p>Baniyas Square, Deira Dubai – UAE</p>
              </div>
            </div>

            <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
              <div className="flex flex-col space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-[#722F37] text-xl" />
                  <p dir="ltr">Pho: +971 4 295 7412</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMobileAlt className="text-[#722F37] text-xl" />
                  <p dir="ltr">Mob: +971 54 503 2595</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaWhatsapp className="text-[#722F37] text-xl" />
                  <p dir="ltr">WApp: +971 54 503 2595</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-[#722F37] text-xl" />
                  <p>Email: info@goldenchainstrd.com</p>
                </div>
              </div>
              <div className="mt-4">
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
      </div>
    </div>
  );
} 