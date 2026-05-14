import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';

const SHOWCASE_IDS = ['projet17', 'projet14', 'projet16'];

const ProjectShowcase = () => {
  const { t, projects } = useLanguage();

  const showcaseProjects = SHOWCASE_IDS
    .map(id => projects[id])
    .filter(Boolean)
    .sort((a, b) => {
      if (a.type === 'Work' && b.type !== 'Work') return -1;
      if (a.type !== 'Work' && b.type === 'Work') return 1;
      return 0;
    });

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2>{t('projectShowcaseTitle')}</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            {t('projectShowcaseSubtitle')}
          </p>
        </div>

        <div className="grid grid-3">
          {showcaseProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/projects" className="btn btn-primary">
            {t('viewAllProjects')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
