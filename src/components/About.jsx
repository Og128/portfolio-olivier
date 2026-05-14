import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  const skills = {
    en: [
      'Project Planning & Scheduling',
      'Agile & Waterfall Methodologies',
      'Stakeholder Communication',
      'Digital Tools (Jira, Trello)',
      'User Stories & Ticket Writing',
      'Testing & UAT (User Acceptance Testing)',
      'HTML / CSS / Javascript / ReactJS',
      'Git / VSCode / Windows / Linux'
    ],
    fr: [
      'Planification & Programmation de Projets',
      'Méthodologies Agile & Waterfall',
      'Communication Parties Prenantes',
      'Outils Numériques (Jira, Trello)',
      'Rédaction de Tickets / User Stories',
      'Recettage & Tests Utilisateur (UAT)',
      'HTML / CSS / Javascript / ReactJS',
      'Git / VSCode / Windows / Linux'
    ]
  };

  return (
    <section className="section">
      <div className="container">
        <h2>{t('aboutTitle')}</h2>

        {/* About Content Layout with Photo */}
        <div className="layout-photo">

          {/* Photo Section */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'var(--card-bg)',
              border: '4px solid var(--border-color)',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 300ms ease',
              boxShadow: '0 8px 32px var(--shadow-color)'
            }}>
              {/* Placeholder for Photo - Replace with actual image */}
              <img
                src='../imgs/photo-profile.jpg'
                alt="Olivier Gautheron - Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
              />

              {/* Optional: Replace the above img with actual photo */}
              {/* 
              
              />
              */}
            </div>

            <div style={{
              marginTop: '24px',
              color: 'var(--text-secondary)',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Olivier Gautheron
            </div>
            <div style={{
              color: 'var(--color-accent)',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              {t('photoDesc')}
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div style={{ marginBottom: '32px' }}>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: 'var(--text-primary)',
                marginBottom: '20px'
              }}>
                {t('aboutIntro')}
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '20px'
              }}>
                {t('aboutBackground')}
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: 'var(--text-secondary)'
              }}>
                {t('aboutPassion')}
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--color-primary)',
                marginBottom: '20px'
              }}>
                {t('coreSkills')}
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '12px'
              }}>
                {skills[language].map((skill, index) => (
                  <div
                    key={index}
                    className="tag"
                    style={{
                      textAlign: 'center',
                      padding: '12px 16px',
                      fontSize: '14px',
                      borderRadius: '8px',
                      background: 'var(--button-secondary-hover)',
                      color: 'var(--color-primary)',
                      border: 'none',
                      transition: 'all 200ms ease'
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Responsive adjustments */}
        <style jsx>{`
          @media (max-width: 768px) {
            .about-content {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
              text-align: center;
            }
            
            .about-photo {
              margin: 0 auto;
            }
            
            .about-skills {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default About;