import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Left Column */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4"><br></br>
          <h2 className="text-3xl md:text-4xl font-bold">Company Background</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ICT & Accounting Expertise"
            subTitle="Integrated Technology and Finance Focus"
            result="Core Competency"
            des="We combine information technology and accounting expertise to deliver secure, compliant, and scalable business systems."
          />

          <ResumeCard
            title="Full-Stack Coding"
            subTitle="Web, Mobile, and Systems Integration"
            result="Capability"
            des="We architect, build, and maintain end‑to‑end solutions across web, mobile, APIs, and infrastructure."
          />
        </div>
      </div>

      {/* Right Column */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4"><br></br>
          <h2 className="text-3xl md:text-4xl font-bold">Business Focus</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Process Automation"
            subTitle="Operations, Finance, and Customer Journeys"
            result="Efficiency"
            des="We streamline workflows, automate repetitive tasks, and enhance data accuracy to drive measurable outcomes."
          />
          <ResumeCard
            title="Quality & Compliance"
            subTitle="Security, Reliability, and Standards"
            result="Assurance"
            des="Our delivery emphasizes secure architectures, maintainability, and adherence to best practices and standards."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
