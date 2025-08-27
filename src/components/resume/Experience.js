import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Client & Operations Engagements */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">ENGAGEMENTS</p>
          <h2 className="text-3xl md:text-4xl font-bold">Client Delivery</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AFRICOM LIMITED"
            subTitle="Network Setup & IT Support (2023 - 2024)"
            result="Operational Uptime"
            des="Deployed LAN/WLAN and provided ongoing support to improve connectivity, reliability, and workplace productivity."
          />
          <ResumeCard
            title="SAMOK CONSULTING"
            subTitle="Corporate Website Delivery (2024)"
            result="Lead Generation"
            des="Delivered a professional web presence to showcase services, capture leads, and support business growth."
          />
          <ResumeCard
            title="CRDB – MICHENZANI MALL"
            subTitle="Customer Onboarding Enablement (2024)"
            result="Acquisition"
            des="Supported onboarding workflows and digital registration to enhance customer acquisition efficiency."
          />
        </div>
      </div>

      {/* Finance & Planning Support */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">ENGAGEMENTS</p>
          <h2 className="text-3xl md:text-4xl font-bold">Finance & Operations</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AFRICOM LIMITED"
            subTitle="Sales, Delivery & Accounting Support (2023 - 2024)"
            result="Process Control"
            des="Improved record‑keeping and reconciliation practices to strengthen financial visibility and controls."
          />
          <ResumeCard
            title="SAMOK CONSULTING"
            subTitle="Budgeting & Forecasting (2024)"
            result="Planning"
            des="Contributed to budgeting and forecasting cycles to align operations with financial targets."
          />
          <ResumeCard
            title="CRDB – MICHENZANI MALL"
            subTitle="Customer Onboarding Enablement (2024)"
            result="Acquisition"
            des="Supported onboarding workflows and digital registration to enhance customer acquisition efficiency."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
