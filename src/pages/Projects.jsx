import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { t, projects } = useLanguage();
  const [filter, setFilter] = useState('All');

  const allProjects = useMemo(() => {
    return Object.values(projects).sort((a, b) => {
      if (a.type === 'Work' && b.type !== 'Work') return -1;
      if (a.type !== 'Work' && b.type === 'Work') return 1;
      return 0;
    });
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return allProjects;
    return allProjects.filter(p => p.type === filter);
  }, [filter, allProjects]);

  const projectCounts = {
    All: allProjects.length,
    School: allProjects.filter(p => p.type === 'School').length,
    Work: allProjects.filter(p => p.type === 'Work').length
  };

  const filterLabels = {
    All: t('allProjects'),
    School: t('schoolProjects'),
    Work: t('workProjects')
  };

  const pillActiveColor = (type) => {
    if (type === 'School') return { background: '#10B981', borderColor: '#10B981' };
    if (type === 'Work') return { background: 'var(--color-accent)', borderColor: 'var(--color-accent)' };
    return {};
  };

  const visibleFilters = Object.entries(projectCounts).filter(([, count]) => count > 0);

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header Section */}
      <section style={{ padding: '40px 0 24px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1>{t('projectsTitle')}</h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              {t('projectsSubtitle')}
            </p>
          </div>

          <div className="filter-pills" style={{ justifyContent: 'center' }}>
            {visibleFilters.map(([type]) => (
              <button
                key={type}
                className={`filter-pill ${filter === type ? 'active' : ''}`}
                onClick={() => setFilter(type)}
                style={filter === type ? pillActiveColor(type) : {}}
              >
                {filterLabels[type]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '24px 0 96px' }}>
        <div className="container">
          <div className="grid grid-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
