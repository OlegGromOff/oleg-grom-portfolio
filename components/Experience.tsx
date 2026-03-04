"use client";

import { motion } from "framer-motion";

// Mock data for your experience and education
const experienceData = [
  {
    id: 1,
    role: "Frontend Developer Trainee (Umschulung)",
    company: "Coding Bootcamp Berlin", // Update with your actual school
    date: "2024 — Present",
    description:
      "Intensive training in modern web development. Focusing on React, Next.js, TypeScript, and modern CSS frameworks. Building scalable applications and learning best practices for agile environments.",
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    date: "2023 — 2024",
    description:
      "Designed and developed responsive websites for local businesses using HTML, CSS, JavaScript, and CMS platforms. Managed client communication and project delivery.",
  },
  {
    id: 3,
    role: "Previous Professional Background",
    company: "Various Companies",
    date: "2018 — 2023",
    description:
      "Successfully transitioned into tech from a different industry, bringing strong soft skills, problem-solving abilities, and a high level of adaptability to new environments.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full max-w-4xl mx-auto px-8 py-12 md:py-24 relative"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Experience
        </h2>
        <div className="w-20 h-1 bg-white/20 rounded-full" />
      </motion.div>

      {/* Timeline Container */}
      <div className="relative border-l border-white/10 ml-3 md:ml-4">
        {experienceData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-12 ml-8 md:ml-12 relative group"
          >
            {/* Glowing Dot on the timeline */}
            <span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-neutral-500 group-hover:border-white group-hover:bg-white transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

            {/* Content */}
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h3 className="text-xl font-semibold text-white">{item.role}</h3>
              <span className="text-sm font-medium text-neutral-500 mt-1 md:mt-0">
                {item.date}
              </span>
            </div>

            <h4 className="text-lg font-medium text-neutral-400 mb-4">
              {item.company}
            </h4>

            <p className="text-neutral-400 font-light leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
