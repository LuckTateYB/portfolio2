import { motion } from "framer-motion";
import { Linkedin, Instagram, GithubIcon, FileDownIcon } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import cv from "../doc/OSCAR_CASTRO (1).pdf";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/oscar-castros/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/oscar_fabian05/", label: "Instagram" },
  { icon: GithubIcon, href: "https://github.com/LuckTateYB/", label: "GitHub" },
  { icon: SiWhatsapp, href: "https://chat.whatsapp.com/IGkzVgCKm8Y1jTLbRxcnmH", label: "WhatsApp" },
    { icon: FileDownIcon, href: cv, label: "Resume" },
];

const TopBar = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-secondary py-2"
    >
      <div className="container mx-auto px-4 flex justify-end items-center gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-blue-900 transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={label}
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default TopBar;