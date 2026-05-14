import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ project }) => {
  const { t } = useLanguage();

  const getTypeText = (type) => {
    const typeMap = {
      'Work': t('workProjects'),
      'School': t('schoolProjects')
    };
    return typeMap[type] || type;
  };

  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNGM0Y0RjYiLz48dGV4dCB4PSIyMDAiIHk9IjEwNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNEI1NTYzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iUHJvamVjdCBJbWFnZTwvdGV4dD48L3N2Zz4=';
  };

  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          onError={handleImageError}
        />
        <div className="project-image-overlay">
          <Link
            to={`/projects/${project.id}`}
            className="btn btn-primary project-view-btn"
          >
            {t('viewDetails')}
          </Link>
        </div>
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span className="tag tag-type" style={{
            background: project.type === 'Work' ? 'var(--color-accent)' : '#10B981',
            color: 'white'
          }}>
            {getTypeText(project.type)}
          </span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-details">
          <div className="project-tech" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '8px', marginTop: '4px' }}>
            <strong className="tech-label">{t('technologies')}</strong>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
