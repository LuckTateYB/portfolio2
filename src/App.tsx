import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Community from './components/Community';
import Projects from './components/Proyects';
import TechStack from './components/Stack';
import SectionCard from './components/SectionCard';
import community from './assets/community.webp';
import Stack from './assets/descarga.webp';
import projects from './assets/structura.webp';
import about from './assets/aboutme.webp';

function App() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3">
        <Hero />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <SectionCard
              title="About"
              image={about}
              isExpanded={expandedSection === 'about'}
              onToggle={() => toggleSection('about')}
            >
              <About
                isExpanded={expandedSection === 'about'}
                onToggle={() => toggleSection('about')}
              />
            </SectionCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionCard
              title="Projects"
              image={projects}
              isExpanded={expandedSection === 'projects'}
              onToggle={() => toggleSection('projects')}
            >
              <Projects
                isExpanded={expandedSection === 'projects'}
                onToggle={() => toggleSection('projects')}
              />
            </SectionCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <SectionCard
              title="Tech Stack"
              image={Stack}
              isExpanded={expandedSection === 'techstack'}
              onToggle={() => toggleSection('techstack')}
            >
              <TechStack
                isExpanded={expandedSection === 'techstack'}
                onToggle={() => toggleSection('techstack')}
              />
            </SectionCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionCard
              title="Community"
              image={community}
              isExpanded={expandedSection === 'community'}
              onToggle={() => toggleSection('community')}
            >
              <Community
                isExpanded={expandedSection === 'community'}
                onToggle={() => toggleSection('community')}
              />
            </SectionCard>
          </motion.div>
        </motion.div>

      <AnimatePresence>
        {expandedSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setExpandedSection(null)}
          />
        )}
      </AnimatePresence>

    </div>
  </div>
  );
}

export default App;
