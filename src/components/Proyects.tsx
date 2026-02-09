import { motion } from 'framer-motion';
import { Folder, ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const projects = [
  {
    title: 'E-Commerce Platform',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    problem: 'Pequeños comercios necesitaban presencia online sin costos excesivos',
    solution: 'Plataforma modular y escalable con panel de administración intuitivo',
    impact: '15+ negocios locales digitalizados, incremento promedio del 40% en ventas',
    color: 'blue',
  },
  {
    title: 'Task Management System',
    stack: ['TypeScript', 'Express', 'MongoDB', 'Redis'],
    problem: 'Equipos perdían contexto entre múltiples herramientas de gestión',
    solution: 'Sistema unificado con integraciones y automatizaciones inteligentes',
    impact: '50% de reducción en tiempo de coordinación para equipos medianos',
    color: 'amber',
  },
  {
    title: 'Real-time Analytics Dashboard',
    stack: ['Next.js', 'WebSockets', 'Supabase', 'Vercel'],
    problem: 'Decisiones de negocio basadas en datos desactualizados',
    solution: 'Dashboard en tiempo real con visualizaciones interactivas y alertas',
    impact: 'Reducción del 60% en tiempo de detección de anomalías críticas',
    color: 'slate',
  },
];

export default function Projects({ isExpanded, onToggle }: ProjectsProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
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
              <Folder className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Proyectos</h2>
              <p className="text-slate-600">Soluciones con impacto real</p>
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
          <div className="space-y-4 mt-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.01 }}
                className={`p-6 rounded-xl border-2 ${
                  project.color === 'blue'
                    ? 'bg-blue-50 border-blue-200 hover:border-blue-300'
                    : project.color === 'amber'
                    ? 'bg-amber-50 border-amber-200 hover:border-amber-300'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                } transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-white hover:bg-slate-100 transition-colors"
                    >
                      <Github className="w-5 h-5 text-slate-700" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-white hover:bg-slate-100 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-slate-700" />
                    </motion.button>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-slate-700 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-600 mb-1">Problema:</h4>
                    <p className="text-slate-700">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-600 mb-1">Solución:</h4>
                    <p className="text-slate-700">{project.solution}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${
                    project.color === 'blue'
                      ? 'bg-blue-100'
                      : project.color === 'amber'
                      ? 'bg-amber-100'
                      : 'bg-slate-100'
                  }`}>
                    <h4 className="text-sm font-semibold text-slate-600 mb-1">Impacto:</h4>
                    <p className="text-slate-800 font-medium">{project.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
