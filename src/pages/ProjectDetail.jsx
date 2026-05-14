import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Gallery from '../components/Gallery';

const ProjectDetail = () => {
  const { id } = useParams();
  const { language, t, projects } = useLanguage();

  const project = projects[id];

  if (!project) {
    return (
      <div style={{ paddingTop: '96px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'var(--text-primary)', marginBottom: '24px' }}>Project Not Found</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="btn btn-primary">{t('backToProjects')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '20px', background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section style={{ padding: '10px 0 24px', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="project-detail-hero">
            <div className="project-detail-content">
              <div className="project-meta">
                <span className="tag tag-type" style={{
                  background: project.type === 'Work' ? 'var(--color-accent)' : '#10B981',
                  color: 'white'
                }}>
                  {project.type === 'Work' ? t('workProjects') : t('schoolProjects')}
                </span>
              </div>
              <h1 className="project-detail-title">{project.title}</h1>
              <p className="project-detail-description">{project.description}</p>

              <div className="tech-section">
                <p className="tech-label">{t('technologiesUsed')}</p>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-main-image">
              <img src={project.image} alt={project.id} />
              {project.link && (
                <div style={{ textAlign: 'center', marginTop: '12px' }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: '14px', height: '40px', padding: '0 20px' }}
                  >
                    {language === 'en' ? '↗ View Live Site' : '↗ Voir le site'}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery before details */}
      <div className="project-image-section">
        <Gallery
          images={Array.isArray(project.images) ? project.images : [project.image]}
          alt={project.title}
        />
      </div>

      {/* Project Details */}
      <section style={{ padding: '40px 0 48px', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="project-detail-main">
            <div className="project-content">
              <div className="content-section">
                <h2 className="section-title">{t('challenge')}</h2>
                <p className="section-text">{project.challenge}</p>
              </div>

              <div className="content-section">
                <h2 className="section-title">{t('solution')}</h2>
                <p className="section-text">{project.solution}</p>
              </div>
            </div>

            <div className="skills-sidebar">
              <div className="skills-card">
                <h3 className="sidebar-title">{t('skills')}</h3>
                <ul className="skills-list">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="skill-item">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section style={{ padding: '32px 0', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Link to="/projects" className="btn btn-secondary">
            {t('backToProjects')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
