import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const experiences = t('experiences');

  return (
    <section className="section">
      <div className="container">
        <h2>{t('experienceTitle')}</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-title">{exp.title}</div>
              <div className="timeline-company">{exp.company}</div>
              <p style={{ color: 'var(--text-primary)', fontWeight: '500', fontSize: '15px', marginBottom: '16px' }}>{exp.description}</p>
              <div>
                <strong className="timeline-key">{t('keyAchievements')}</strong>
                <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="timeline-key-hf" style={{ marginBottom: '4px' }}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
