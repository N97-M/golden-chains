"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function WelcomeModal() {
  const [show, setShow] = useState(true);
  const { t, i18n } = useTranslation();

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center max-w-xs w-full">
        <Image
          src="/logo.png"
          alt="Golden Chains Logo"
          width={100}
          height={100}
          className="mb-4"
        />
        <h2
          className={`text-xl font-bold mb-2 text-black ${i18n.language === 'ar' ? 'text-right' : 'text-center'}`}
          dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
        >
          {t("welcome.title", "WELCOME TO GOLDEN CHAINS TRADING LLC")}
        </h2>
        <button
          onClick={() => setShow(false)}
          className="mt-6 px-6 py-2 bg-[#1a1f2e] text-white rounded hover:bg-black transition"
        >
          {t("welcome.close", "متابعة")}
        </button>
      </div>
    </div>
  );
}
