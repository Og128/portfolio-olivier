import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Education from '../components/Education';
import ProjectShowcase from '../components/ProjectShowcase';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <div style={{ borderTop: '1px solid var(--border-color)', maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }} />
      <Experience />
      <Education />
      <ProjectShowcase />
      <Contact />
    </>
  );
};

export default Home;
