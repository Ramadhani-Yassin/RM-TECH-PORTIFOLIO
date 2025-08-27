import React from 'react'
import { FaMobile, FaGlobe, FaRegChartBar, FaRegIdBadge } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Capabilities" des="What We Do" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="We design and build responsive, high-performance websites tailored to business goals and user needs."
          icon={<FaGlobe />}
        />
        <Card
          title="Accounting & Planning"
          des="We are highly skilled in Accounting principles and financial analysis, with the added advantage of ICT expertise — enabling us to design intelligent accounting systems."
          icon={<FaRegChartBar />}
        />
        <Card
          title="SEO Optimisation"
          des="We improve website visibility through effective SEO strategies, ensuring better ranking and organic growth."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Apps Development"
          des="We develop cross-platform mobile apps with intuitive interfaces and robust functionality to solve real problems."
          icon={<FaMobile />}
        />
        <Card
          title="Social Media Management"
          des="We manage and grow digital presence through strategic content, analytics, and audience engagement tactics."
          icon={<SiAntdesign />}
        />
        <Card
          title="Digital Branding"
          des="We create impactful digital identities that strengthen brand recognition across web and social platforms."
          icon={<FaRegIdBadge />}
        />
      </div>
    </section>
  );
};

export default Features