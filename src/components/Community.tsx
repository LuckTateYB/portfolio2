import { motion } from 'framer-motion';
import { Users, ChevronDown, ChevronUp, Award, Heart, TrendingUp } from 'lucide-react';

interface CommunityProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function Community({ isExpanded, onToggle }: CommunityProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
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
              <Users className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Comunidad & Liderazgo</h2>
              <p className="text-slate-600">Construyendo juntos</p>
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
          <div className="mt-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-linear-to-br from-blue-600 to-blue-800 rounded-xl text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8" />
                <div>
                  <h3 className="text-2xl font-bold">Fundador & Vicepresidente</h3>
                  <p className="text-blue-100">Comunidad Universitaria de Desarrollo</p>
                </div>
              </div>
              <p className="text-blue-50 leading-relaxed mb-4">
                Lideré la creación y crecimiento de una comunidad universitaria enfocada en
                el desarrollo de software y la innovación tecnológica.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-blue-100 text-sm">Miembros Activos</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-blue-100 text-sm">Workshops & Eventos</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">12+</div>
                  <div className="text-blue-100 text-sm">Proyectos Colaborativos</div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-amber-50 rounded-xl border-2 border-amber-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-200 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-amber-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Valores de Comunidad</h3>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Aprendizaje colaborativo y mentoría entre pares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Inclusión y diversidad en tecnología</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Compartir conocimiento sin barreras</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 bg-slate-50 rounded-xl border-2 border-slate-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Impacto & Logros</h3>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold mt-1">•</span>
                    <span>Organización de hackathons universitarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold mt-1">•</span>
                    <span>Programas de mentoría técnica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-600 font-bold mt-1">•</span>
                    <span>Alianzas con empresas tecnológicas</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-linear-to-r from-slate-800 to-slate-900 rounded-xl text-white"
            >
              <h3 className="text-lg font-bold mb-2">Liderazgo con Propósito</h3>
              <p className="text-slate-200 leading-relaxed">
                "El liderazgo no es solo sobre dirigir, es sobre empoderar. Mi objetivo ha
                sido crear espacios donde estudiantes puedan crecer, experimentar y
                construir juntos, sin miedo a equivocarse. Una comunidad fuerte es aquella
                donde todos aportan y todos aprenden."
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
