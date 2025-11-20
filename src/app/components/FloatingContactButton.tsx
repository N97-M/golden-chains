"use client";

import Link from "next/link";

export default function FloatingContactButton() {
  return (
    <Link
      href="/our-team"
      className="fixed bottom-6 left-6 z-50 bg-[#1a1f2e] hover:bg-black text-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 transition-colors"
      aria-label="Contact our team"
    >
      {/* Chat/Message Icon */}
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#fff" fill="#1a1f2e" />
        <line x1="9" y1="9" x2="15" y2="9" stroke="#fff" />
        <line x1="9" y1="13" x2="13" y2="13" stroke="#fff" />
      </svg>
    </Link>
  );
}
