import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';
import TopBar from './TopBar';
import FloatingShapes from "./decorator/FloatingShapes";


export default function Hero() {
  return (
    <>
    <TopBar />
    <FloatingShapes variant="section" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-20"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-blue-600 to-blue-800 mb-6"
      >
        <Code2 className="w-10 h-10 text-white" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-5xl md:text-6xl font-bold text-slate-900 mb-4"
      >
        Óscar Fabián Castro Severino
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl text-blue-900 font-medium mb-6"
      >
        Full Stack Developer & Systems Engineer
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-br from-[#480b6b] to-[#6b7599] backdrop-blur-sm rounded-full shadow-lg border border-blue-100">
          <Sparkles className="w-5 h-5 text-[#ffee00]" />
          <p className="text-white text-lg italic">
            Construyendo software con intención y mejora continua
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex justify-center gap-4"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-slate-800 text-white rounded-lg font-medium cursor-pointer hover:bg-slate-900 transition-colors"
        >
          Ver Proyectos
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-white text-slate-800 rounded-lg font-medium cursor-pointer hover:bg-green-700 transition-colors border hover:text-white"
        >
          Contacto
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  );
}
