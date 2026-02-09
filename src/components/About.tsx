import { motion } from 'framer-motion';
import { User, Target, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

interface AboutProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function About({ isExpanded, onToggle }: AboutProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
              <User className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Sobre Mí</h2>
              <p className="text-slate-600">Perfil técnico y mentalidad</p>
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
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-linear-to-br from-blue-50 to-slate-50 rounded-xl border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-700" />
                <h3 className="text-xl font-bold text-slate-900">Enfoque Técnico</h3>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Ingeniero de Sistemas con especialización en desarrollo Full Stack.
                Mi enfoque está en construir soluciones escalables y mantenibles que
                resuelvan problemas reales.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Arquitectura de software bien diseñada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Clean code y mejores prácticas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Testing y documentación exhaustiva</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-linear-to-br from-amber-50 to-slate-50 rounded-xl border border-amber-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-amber-700" />
                <h3 className="text-xl font-bold text-slate-900">Mentalidad</h3>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Creo en la mejora continua y el aprendizaje constante. Cada proyecto
                es una oportunidad para crecer y perfeccionar mis habilidades.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Aprendizaje continuo y adaptación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Pensamiento estructurado y organizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Empatía con usuarios y equipos</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 p-6 bg-linear-to-r from-slate-800 to-slate-900 rounded-xl text-white"
          >
            <h3 className="text-xl font-bold mb-3">Filosofía de Desarrollo</h3>
            <p className="text-slate-200 leading-relaxed">
              "El código no solo debe funcionar, debe comunicar intención. Cada línea
              escrita es una conversación con futuros desarrolladores, incluyendo tu
              yo del mañana. La excelencia técnica y la empatía humana no son
              opuestos, son complementarios."
            </p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
