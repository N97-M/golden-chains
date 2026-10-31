"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

// Define types for team members
interface TeamMember {
  name: string;
  role: string;
  image: string;
  email: string;
  whatsapp?: string;
}

export default function OurTeam() {
  const { t } = useTranslation();

  // Team data
  const manager: TeamMember = {
    name: "Hafiz Khairi",
    role: t('teamPage.roles.founder'),
    image: "/team/hafiz-khairi.jpg",
    email: "hafiz@goldenchains.ae"
  };

  const employees: TeamMember[] = [
    {
      name: "Mohamed Nour",
      role: t('teamPage.roles.relManager'),
      image: "/team/mohamed-nour.jpeg",
      email: "mohamednour@goldenchainstrd.com",
      whatsapp: "971545032595",
    },
    {
      name: "Musab Nour",
      role: t('teamPage.roles.warehouseManager'),
      image: "/team/musab-nour.jpg",
      whatsapp: "971547281970",
      email: "info@goldenchainstrd.com"
    },
    {
      name: "Mohamed Tarig",
      role: t('teamPage.roles.salesManager'),
      image: "/team/mohamed-tarig.jpg",
      whatsapp: "971556835949",
      email: "tarig@goldenchainstrd.com"
    },
    {
      name: "Faisal Kv",
      role: t('teamPage.roles.salesExec'),
      image: "/team/faisal-kv.jpg",
      whatsapp: "971569036566",
      email: "faisal@goldenchainstrd.com"
    },
    {
      name: "Ivy Goco",
      role: t('teamPage.roles.adminManager'),
      image: "/team/ivy-goco.jpg",
      whatsapp: "971522400594",
      email: "ivy@goldenchainstrd.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <nav className="flex items-center text-gray-700">
          <Link
            href="/"
            className="text-base text-black font-medium relative group"
          >
            {t('nav.home')}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <span className="mx-2 text-gray-400 text-lg">›</span>
          <span className="text-base text-gray-500 font-medium">
            {t('nav.ourTeam')}
          </span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight mb-4">
            {t('teamPage.title')}
          </h1>
          <div className="w-16 h-1 bg-[#722F37] mx-auto rounded-full"></div>
        </div>

        {/* Executive Leadership Section */}
        <div className="flex justify-center mb-16 sm:mb-20">
          <div className="w-full max-w-3xl bg-[#1a1f2e] rounded-2xl overflow-hidden shadow-2xl border-[2px] border-slate-800/80 hover:border-[#722F37]/60 transition-all duration-300 group">
            <div className="p-8 sm:p-10">
              <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                {/* Manager Image with Glowing Accent Ring */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex-shrink-0 rounded-full p-1 bg-gradient-to-tr from-[#722F37] via-amber-600/40 to-[#722F37]/20 shadow-xl">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={manager.image}
                      alt={manager.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 176px, 192px"
                      priority
                    />
                  </div>
                </div>

                {/* Manager Details */}
                <div className="flex flex-col flex-grow items-center md:items-start">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#722F37]/30 text-amber-200 border border-[#722F37]/50 mb-2.5">
                    Leadership
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                    {manager.name}
                  </h2>
                  <h3 className="text-base sm:text-lg text-gray-300 font-medium">
                    {manager.role}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider with Label */}
        <div className="flex items-center gap-4 mb-10 max-w-7xl mx-auto">
          <div className="h-[1px] bg-gray-200 flex-grow"></div>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400">
            Operations & Management Team
          </span>
          <div className="h-[1px] bg-gray-200 flex-grow"></div>
        </div>

        {/* Employees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-7">
          {employees.map((employee) => (
            <div
              key={employee.name}
              className="bg-[#1a1f2e] rounded-2xl overflow-hidden shadow-xl border-[2px] border-slate-800/80 hover:border-[#722F37]/70 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Photo Section with Gradient Overlay */}
              <div className="relative w-full pt-[120%] bg-slate-900 overflow-hidden">
                <Image
                  src={employee.image}
                  alt={employee.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Details & Actions Section */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5 text-center tracking-tight group-hover:text-amber-100 transition-colors">
                    {employee.name}
                  </h3>
                  <div className="flex justify-center mb-5">
                    <span className="inline-block text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-center">
                      {employee.role}
                    </span>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="mt-auto space-y-2.5 pt-3 border-t border-white/10">
                  {employee.whatsapp && (
                    <Link
                      href={`https://wa.me/${employee.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-[#722F37] hover:bg-[#8B3746] text-white text-xs sm:text-sm font-semibold py-2.5 px-3 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg"
                    >
                      <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.184 1.564 5.938l-1.664 6.082 6.221-1.632c1.701.93 3.649 1.462 5.729 1.462 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.85c-1.928 0-3.716-.546-5.234-1.492l-.375-.233-3.696.97 1.002-3.603-.257-.394c-1.042-1.597-1.59-3.469-1.59-5.408 0-5.373 4.37-9.74 9.75-9.74 5.379 0 9.75 4.367 9.75 9.74 0 5.374-4.371 9.75-9.75 9.75z"/>
                      </svg>
                      <span>{t('teamPage.contactWApp')}</span>
                    </Link>
                  )}
                  <Link
                    href={`mailto:${employee.email}`}
                    className="inline-flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white text-white hover:text-[#1a1f2e] text-xs sm:text-sm font-semibold py-2.5 px-3 rounded-xl border border-white/20 hover:border-white transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-none stroke-current flex-shrink-0" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{t('teamPage.emailMe')}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
