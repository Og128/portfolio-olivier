import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  const education = t('education');
  const certifications = t('certifications');
  const languages = t('languages');

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2>{t('educationTitle')}</h2>

        {/* Degrees */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          {education.map((edu, i) => (
            <div key={i} style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: '10px',
              padding: '24px'
            }}>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '500', marginBottom: '4px' }}>
                {edu.year}
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{edu.degree}</h3>
              <div style={{ color: 'var(--color-accent)', fontSize: '14px', fontWeight: '500', marginBottom: '16px' }}>
                {edu.school}
              </div>
              <ul style={{ paddingLeft: '18px', margin: 0 }}>
                {edu.bullets.map((b, j) => (
                  <li key={j} style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', marginBottom: '6px' }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications + Languages */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          <div>
            <h3 style={{ fontSize: '17px', marginBottom: '14px' }}>{t('certificationsTitle')}</h3>
            <ul style={{ paddingLeft: '18px', margin: 0 }}>
              {certifications.map((cert, i) => (
                <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', marginBottom: '8px' }}>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '17px', marginBottom: '14px' }}>{t('languagesTitle')}</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {languages.map((lang, i) => (
                <div key={i} style={{
                  background: 'var(--button-secondary-hover)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  fontSize: '14px',
                  color: 'var(--text-primary)'
                }}>
                  <span style={{ fontWeight: '600' }}>{lang.name}</span>
                  <span style={{ color: 'var(--text-muted)', marginLeft: '6px' }}>— {lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
