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
      <Experience />
      <Education />
      <ProjectShowcase />
      <Contact />
    </>
  );
};

export default Home;
