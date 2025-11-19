"use client";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lng;
      document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    }
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${i18n.language === "en"
            ? "bg-black text-white shadow-sm"
            : "text-gray-500 hover:text-black"
          }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("ar")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${i18n.language === "ar"
            ? "bg-black text-white shadow-sm"
            : "text-gray-500 hover:text-black"
          }`}
        aria-label="التبديل إلى العربية"
      >
        AR
      </button>
    </div>
  );
}
