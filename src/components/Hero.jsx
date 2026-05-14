import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="container">

        {/* Name + Title + CTAs */}
        <div className="hero-name-block">
          <h1 className="hero-name">Olivier Gautheron</h1>
          <p className="hero-role">{t('heroTitle')}</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              {t('viewProjects')}
            </Link>
            <a href="#contact" className="btn btn-secondary">
              {t('getInTouch')}
            </a>
          </div>
        </div>

        {/* Photo + About */}
        <div className="layout-photo">

          {/* Photo */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              background: 'var(--card-bg)',
              border: '4px solid var(--border-color)',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 8px 32px var(--shadow-color)'
            }}>
              <img
                src='/imgs/photo-profile.jpg'
                alt="Olivier Gautheron"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
            <a
              href="/resume.pdf"
              download
              className="btn btn-secondary"
              style={{ marginTop: '16px', fontSize: '14px', height: '40px', padding: '0 20px', display: 'inline-flex' }}
            >
              ↓ {t('downloadResume')}
            </a>
          </div>

          {/* Text + Skills */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '12px' }}>
                {t('aboutIntro')}
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                {t('aboutBackground')}
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                {t('aboutPassion')}
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '12px' }}>
                {t('coreSkills')}
              </h3>
              <div className="skills-grid">
                {t('aboutSkills').map((skill, index) => (
                  <div key={index} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
