import React from 'react';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LANGUAGES = [
  // Preferred languages
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' },
  { code: 'zh', name: '中文' },
  // Other languages in alphabetical order
  { code: 'ar', name: 'العربية' },
  { code: 'bs', name: 'Bosanski' },
  { code: 'bg', name: 'Български' },
  { code: 'ca', name: 'Català' },
  { code: 'hr', name: 'Hrvatski' },
  { code: 'cs', name: 'Čeština' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'et', name: 'Eesti' },
  { code: 'fi', name: 'Suomi' },
  { code: 'gl', name: 'Galego' },
  { code: 'el', name: 'Ελληνικά' },
  { code: 'id', name: 'Indonesia' },
  { code: 'it', name: 'Italiano' },
  { code: 'ja', name: '日本語' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'ko', name: '한국어' }
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="flex items-center text-[#A9A7A7]">
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4062 18.125H18.75L15 8.75H13.5312L9.78125 18.125H11.125L12.125 15.625H16.4062L17.4062 18.125ZM12.625 14.375L14.2625 10.275L15.9062 14.375H12.625ZM11.25 4.375V3.125H6.875V1.25H5.625V3.125H1.25V4.375H7.9625C7.61643 5.80344 6.93272 7.12801 5.96875 8.2375C5.3405 7.45844 4.85587 6.57383 4.5375 5.625H3.225C3.61886 6.8977 4.2556 8.08203 5.1 9.1125C4.16669 10.0186 3.07312 10.7434 1.875 11.25L2.34375 12.4125C3.68952 11.8438 4.91532 11.0252 5.95625 10C6.97779 11.0398 8.2035 11.857 9.55625 12.4L10 11.25C8.79543 10.784 7.70439 10.0658 6.8 9.14375C7.99661 7.77997 8.83816 6.14196 9.25 4.375H11.25Z" fill="currentColor"/>
      </svg>
      <div className="relative group">
        <select
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="appearance-none bg-transparent text-[#A9A7A7] hover:text-white transition-colors cursor-pointer pr-4 focus:outline-none rounded-md min-w-[87px] text-left pl-1"
          style={{
            backgroundImage: 'none'
          }}
        >
          {LANGUAGES.map(({ code, name }) => (
            <option 
              key={code} 
              value={code} 
              className="bg-[#DCD8D6] text-[#121212] py-2 pl-12 pr-4 border-b border-[#A9A7A7] last:border-b-0 hover:bg-[#A9A7A7] rounded-none first:rounded-t-md last:rounded-b-md text-[14px] font-normal text-left"
              style={{
                borderColor: '#A9A7A7',
                backgroundColor: '#DCD8D6',
                color: '#121212',
                textAlign: 'left',
                paddingLeft: '48px'
              }}
            >
              {name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#A9A7A7] group-hover:text-white transition-colors">
            <path d="M9.47357 0.473572C9.41108 0.411628 9.33784 0.361479 9.25664 0.327635C9.17544 0.293791 9.08824 0.276367 9.00024 0.276367C8.91224 0.276367 8.82504 0.293791 8.74384 0.327635C8.66264 0.361479 8.5894 0.411628 8.52691 0.473572L5.47357 3.52691C5.41108 3.58885 5.33784 3.639 5.25664 3.67285C5.17544 3.70669 5.08824 3.72411 5.00024 3.72411C4.91224 3.72411 4.82504 3.70669 4.74384 3.67285C4.66264 3.639 4.5894 3.58885 4.52691 3.52691L1.47357 0.473572C1.41108 0.411628 1.33784 0.361479 1.25664 0.327635C1.17544 0.293791 1.08824 0.276367 1.00024 0.276367C0.912241 0.276367 0.825041 0.293791 0.743841 0.327635C0.662641 0.361479 0.5894 0.411628 0.526907 0.473572C0.402741 0.598572 0.333008 0.767541 0.333008 0.943572C0.333008 1.1196 0.402741 1.28857 0.526907 1.41357L3.58691 4.47357C3.96191 4.84814 4.47024 5.05857 5.00024 5.05857C5.53024 5.05857 6.03857 4.84814 6.41357 4.47357L9.47357 1.41357C9.59774 1.28857 9.66747 1.1196 9.66747 0.943572C9.66747 0.767541 9.59774 0.598572 9.47357 0.473572Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
  );
};