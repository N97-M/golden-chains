"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function WelcomeModal() {
  const [show, setShow] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const seen = localStorage.getItem("welcome_seen");
      if (!seen) {
        setShow(true);
        localStorage.setItem("welcome_seen", "1");
      }
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center max-w-xs w-full">
        <Image
          src="/icons/logo.png"
          alt="Golden Chains Logo"
          width={100}
          height={100}
          className="mb-4"
        />
        <h2 className="text-xl font-bold text-center mb-2 text-black">
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
