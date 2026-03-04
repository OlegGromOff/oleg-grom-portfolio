"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react"; // Generic icons still work fine in Lucide
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Brand icons from react-icons/fa (FontAwesome)

export default function Header() {
  // Animation configuration for a smooth dropdown effect
  const headerVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      // Fixed position, transparent dark background with a blur effect (glassmorphism)
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#050505]/80 backdrop-blur-md border-b border-white/5"
    >
      {/* Brand / Logo */}
      <Link href="/" className="text-xl font-bold tracking-tighter text-white">
        Oleg Grom
      </Link>

      {/* Main Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
        {/* Added '/' before '#' to ensure cross-page navigation works correctly */}
        <Link href="/#projects" className="hover:text-white transition-colors">
          Projects
        </Link>
        <Link
          href="/#experience"
          className="hover:text-white transition-colors"
        >
          Experience
        </Link>
      </nav>

      {/* Social Links & Contact */}
      <div className="flex items-center gap-5 text-neutral-400">
        {/* Update your real links in the href attribute later */}
        <a
          href="https://github.com/OlegGromOff"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/oleg-gromov"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:rekops13@gmail.com"
          className="hover:text-white transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </motion.header>
  );
}
