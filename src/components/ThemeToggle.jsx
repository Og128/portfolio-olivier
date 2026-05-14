import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '8px 16px',
        background: isDark ? '#374151' : '#EAF0FF',
        border: `1px solid ${isDark ? '#4B5563' : '#2A5298'}`,
        borderRadius: '8px',
        color: isDark ? '#F9FAFB' : '#172A54',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 200ms ease',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        minWidth: '80px',
        justifyContent: 'center'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
      }}
      title={isDark ? t('switchToLight') : t('switchToDark')}
    >
      {isDark ? (
        <>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          {t('light')}
        </>
      ) : (
        <>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          {t('dark')}
        </>
      )}
    </button>
  );
};

export default ThemeToggle;