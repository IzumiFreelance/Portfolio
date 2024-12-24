import React from 'react';
import { Banner } from './components/Banner';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <main>
        <Banner />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;