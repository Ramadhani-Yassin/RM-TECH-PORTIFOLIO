import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Left Column */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Capabilities</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          {[
            { name: "Web Development", skills: "HTML, CSS, JavaScript, Angular, React, PHP, Laravel, WordPress", percent: 95 },
            { name: "Database Management", skills: "MySQL, SQLite, Postgres, MongoDB", percent: 90 },
            { name: "Mobile Development", skills: "React Native, Android (Java, Kotlin)", percent: 85 },
            { name: "Networking", skills: "LAN Setup, Router Configuration, CCTV System", percent: 80 },
            { name: "Cybersecurity", skills: "Ethical Hacking, Network Security Principles", percent: 75 },
          ].map(({ name, skills, percent }, i) => (
            <div key={i} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{name}</p>
              <p className="text-xs italic mb-1">{skills}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: `${percent}%` }}
                >
                  <span className="absolute -top-7 right-0">{percent}%</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold">Business Capabilities</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          {[
            { name: "Financial Accounting & Corporate Reporting", skills: "Prepare financial statements", percent: 90 },
            { name: "Computerized Accounting & Audit Applications", skills: "QuickBooks, Tally", percent: 85 },
            { name: "Cost Accounting & Quantitative Decision Making", skills: "Expertise in cost control", percent: 80 },
            { name: "Graphic Design & Branding", skills: "Photoshop, Canva", percent: 75 },
          ].map(({ name, skills, percent }, i) => (
            <div key={i} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{name}</p>
              <p className="text-xs italic mb-1">{skills}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: `${percent}%` }}
                >
                  <span className="absolute -top-7 right-0">{percent}%</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
