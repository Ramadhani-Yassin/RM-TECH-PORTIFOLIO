import React, { useState } from 'react';
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title';
import { testimonialOne, testimonialTwo, testimonialThree } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => setDotActive(next),
    appendDots: (dots) => (
      <div style={{ borderRadius: "10px", padding: "10px" }}>
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section id="testimonial" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Why Us" des="Our Core Strengths" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* Slide 1 */} 
          <div className="w-full flex flex-col items-center text-center gap-6 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
            <img
              className="h-32 w-32 rounded-full object-cover border-4 border-designColor"
              src={testimonialTwo}
              alt="slide"
            />
            <h3 className="text-2xl font-bold text-white">Business & Tech Mindset</h3>
            <p className="text-base text-gray-400 leading-6">
              With a foundation in both ICT and Accounting, we build scalable, data-driven solutions with financial viability in mind.
            </p>
          </div>
          {/* Slide 2 */}
         <div className="w-full flex flex-col items-center text-center gap-6 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
            <img
              className="h-32 w-32 rounded-full object-cover border-4 border-designColor"
              src={testimonialOne}
              alt="slide"
            />
            <h3 className="text-2xl font-bold text-white">Full-Stack Versatility</h3>
            <p className="text-base text-gray-400 leading-6">
              From mobile apps to web systems—and networking to accounting—we integrate technology seamlessly with business needs.
            </p>
          </div>
          {/* Slide 3 */}
          <div className="w-full flex flex-col items-center text-center gap-6 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
            <img
              className="h-32 w-32 rounded-full object-cover border-4 border-designColor"
              src={testimonialThree}
              alt="slide"
            />
            <h3 className="text-2xl font-bold text-white">Proven Track Record</h3>
            <p className="text-base text-gray-400 leading-6">
              From UNIDOCS to Aqua Adventures, our real-world projects demonstrate innovation, impact, and reliability.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
