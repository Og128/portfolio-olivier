import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { isDark } = useTheme();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          O.G
        </Link>
        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                {t('home')}
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
              >
                {t('projects')}
              </Link>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                {t('contact')}
              </a>
            </li>
          </ul>
          
          <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              style={{
                padding: '8px 16px',
                background: language === 'en' ? '#EAF0FF' : '#F0FDF4',
                border: `1px solid ${language === 'en' ? '#2A5298' : '#166534'}`,
                borderRadius: '8px',
                color: language === 'en' ? '#172A54' : '#166534',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 200ms ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              {language === 'en' ? '🇺🇸' : '🇫🇷'} {language.toUpperCase()}
            </button>

            {/* Theme Toggle Button */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;