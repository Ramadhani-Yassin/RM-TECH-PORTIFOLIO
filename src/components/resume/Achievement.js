import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-6"
    >
      {/* Left Column */}
      <div className="w-full lgl:w-1/2 px-2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">RECOGNITION</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates & Awards</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="East Africa Youth Business & Investment Expo Award"
            subTitle="Awarded August 2025"
            result="Regional Recognition"
            des="Honored by H.E. Mariam Mwinyi, First Lady of Zanzibar, recognizing exemplary impact as a Global Youth Empowerment Institute UNI Ambassador."
          />
          <ResumeCard
            title="Google Cybersecurity Certificate"
            subTitle="Certified 2024"
            result="Recognition"
            des="Recognized for foundational knowledge in cybersecurity principles and practices."
          />
          <ResumeCard
            title="COSTECH Ibua Innovation Certificate"
            subTitle="Awarded 2024"
            result="Excellence"
            des="Awarded for excellence in innovation and technology-driven solutions."
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lgl:w-1/2 px-2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">RECOGNITION</p>
          <h2 className="text-3xl md:text-4xl font-bold">Other Highlights</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Zanzibar Bureau of Standards Essay Competition"
            subTitle="Three-time participant"
            result="Acknowledgement"
            des="Acknowledged for outstanding analytical and writing skills."
          />
          <ResumeCard
            title="SUZASO Innovation & Entrepreneurship Bootcamp Certificate"
            subTitle="Certified 2024"
            result="Participation"
            des="Certified participation in a 3-day startup and entrepreneurship event."
          />
          <ResumeCard
            title="School of Business (SOB-SUZA) Workshop Certificate"
            subTitle="Certified 2024"
            result="Recognition"
            des="Recognized for engagement in business and academic development training."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
