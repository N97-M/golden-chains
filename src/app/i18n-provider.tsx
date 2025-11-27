"use client";


import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

function DirWrapper({ children }: { children: React.ReactNode }) {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    return (
        <div dir={isArabic ? "rtl" : undefined} className={isArabic ? "text-right" : undefined}>
            {children}
        </div>
    );
}

export default function I18nProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <I18nextProvider i18n={i18n}>
            <DirWrapper>
                {children}
            </DirWrapper>
        </I18nextProvider>
    );
}
