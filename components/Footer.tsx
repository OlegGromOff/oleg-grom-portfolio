"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    // The footer container with a subtle top border to separate it from the content
    <footer className="w-full border-t border-white/10 bg-[#050505] pt-24 pb-8 px-8 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
            Let&apos;s build together.
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto mb-10 text-lg font-light leading-relaxed">
            I&apos;m currently looking for new opportunities in Berlin or
            remote. Whether you have a question, a project in mind, or just want
            to say hi, my inbox is always open.
          </p>

          <a
            href="mailto:your.email@example.com" // Don't forget to put your real email here!
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
        </motion.div>

        {/* Bottom Social Links, Copyright & Legal */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-neutral-500 text-sm font-medium gap-6 md:gap-0">
          {/* Copyright and Legal Links Wrapper */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <p>© {new Date().getFullYear()} Oleg Grom. All rights reserved.</p>

            {/* Essential German Legal Links */}
            <div className="flex gap-6">
              <Link
                href="/impressum"
                className="hover:text-white transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/OlegGromOff"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/oleg-gromov"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
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
        </div>
      </div>
    </footer>
  );
}
