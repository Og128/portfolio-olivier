import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer style={{
      background: '#FFFFFF',
      padding: '48px 0',
      marginTop: '96px',
      borderTop: '1px solid #E5E7EB'
    }}>
      <div className="container" style={{textAlign: 'center'}}>
        <p style={{color: '#4B5563', marginBottom: '16px'}}>
          {t('copyright')}
        </p>
        <p style={{color: '#4B5563', fontSize: '14px'}}>
          {t('footerDescription')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;