import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded border border-[#30964D] text-[#30964D] hover:bg-[#30964D] hover:text-white transition-colors"
    >
      {language === 'fr' ? 'EN' : 'FR'}
    </button>
  );
}