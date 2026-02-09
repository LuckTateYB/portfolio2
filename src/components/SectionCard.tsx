import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface SectionCardProps {
  title: string;
  image: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const SectionCard = ({ title, image, isExpanded, onToggle, children }: SectionCardProps) => {
  return (
    <div className="rounded-lg shadow-lg bg-white overflow-hidden">
      <div
        className="relative h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <button
          onClick={onToggle}
          aria-label={`Toggle ${title}`}
          className="absolute inset-0 flex items-end p-4 text-left"
        >
          <span className="text-white font-semibold text-lg drop-shadow">{title}</span>
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="p-4 border-t"
          >
            <div>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionCard;
