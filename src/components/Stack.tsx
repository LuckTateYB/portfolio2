import { motion } from 'framer-motion';
import { Code, ChevronDown, ChevronUp, Database, Cloud, Wrench } from 'lucide-react';

interface TechStackProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const techCategories = [
  {
    title: 'Frontend',
    icon: Code,
    color: 'blue',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vue.js'],
  },
  {
    title: 'Backend',
    icon: Database,
    color: 'amber',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'slate',
    skills: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Nginx', 'Linux'],
  },
  {
    title: 'Tools & Methods',
    icon: Wrench,
    color: 'blue',
    skills: ['Git', 'Agile', 'TDD', 'CI/CD', 'Microservices', 'REST APIs'],
  },
];

export default function TechStack({ isExpanded, onToggle }: TechStackProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden ${
        isExpanded ? 'fixed inset-8 z-50 overflow-y-auto' : ''
      }`}
    >
      <motion.div
        layout="position"
        onClick={onToggle}
        className="p-6 cursor-pointer hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Code className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Tech Stack</h2>
              <p className="text-slate-600">Herramientas y tecnologías</p>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-slate-400" />
          ) : (
            <ChevronDown className="w-6 h-6 text-slate-400" />
          )}
        </div>
      </motion.div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="px-6 pb-6"
        >
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {techCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`p-6 rounded-xl border-2 ${
                    category.color === 'blue'
                      ? 'bg-blue-50 border-blue-200'
                      : category.color === 'amber'
                      ? 'bg-amber-50 border-amber-200'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        category.color === 'blue'
                          ? 'bg-blue-200'
                          : category.color === 'amber'
                          ? 'bg-amber-200'
                          : 'bg-slate-200'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          category.color === 'blue'
                            ? 'text-blue-700'
                            : category.color === 'amber'
                            ? 'text-amber-700'
                            : 'text-slate-700'
                        }`}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index + 0.05 * skillIndex }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-slate-700 border border-slate-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 p-6 bg-linear-to-r from-slate-800 to-slate-900 rounded-xl"
          >
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              GitHub & Contribuciones
            </h3>
            <p className="text-slate-200 mb-4">
              Activo en la comunidad open source, contribuyendo a proyectos y compartiendo
              conocimiento a través de código limpio y bien documentado.
            </p>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors"
            >
              Ver perfil de GitHub
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
