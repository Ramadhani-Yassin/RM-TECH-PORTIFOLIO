import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="EXPLORE OUR PORTFOLIO AND SHARE YOUR FEEDBACK"
          des="Our Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a href="https://chwakahouse.co.tz" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Hospitality Website"
            des="A modern Showcase site built for The Chwaka House Zanzibar — chwakahouse.co.tz."
            src={projectOne}
            link="https://chwakahouse.co.tz"
          />
        </a>

        <a href="https://samokconsulting.co.tz" target="_blank" rel="noopener noreferrer">
        <ProjectsCard
          title="Consulting Website"
          des="A corporate website designed for SAMOK Consulting to present services and collect leads — samokconsulting.co.tz."
          src={projectThree}
          link="https://samokconsulting.co.tz"
        />
        </a>

        <a href="https://chwakahouse-booking.online" target="_blank" rel="noopener noreferrer">
        <ProjectsCard
          title="Hotel Booking System"
          des="A booking website designed for The Chwaka House Zanzibar — chwakahouse-booking.online."
          src={projectSeven}
          link="https://bookings.chwakahouse.co.tz"
        />
        </a>

        <a href="https://twist-taste.online" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Food Catering Web-App"
            des="An interactive food ordering platform developed for Twist & Taste Catering — twist-taste.online."
            src={projectTwo}
            link="https://twist-taste.online"
          />
        </a>

        <a href="https://github.com/Ramadhani-Yassin/NDUKO-SHOP" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Point of Sales System"
            des="A powerful POS System for Nduko-Shop, built with Laravel 10, MySQL, Inertia.js, and Vue.js. Streamlines sales, inventory, and purchasing with a smooth SPA experience."
            src={projectFour}
            link="https://github.com/Ramadhani-Yassin/NDUKO-SHOP"
          />
        </a>
        <a href="https://github.com/Ramadhani-Yassin/AquaAdventures" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="🌊 Aqua Adventure App"
            des="Boat Ride Booking System for Zanzibar tourists. Built with Android (Java) and Web Based Admin Portal, connecting travelers with boat operators for aquatic experiences."
            src={projectFive}
            link="https://github.com/Ramadhani-Yassin/AquaAdventures"
          />
        </a>
        <a href="https://github.com/Ramadhani-Yassin/UNIDOCS" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="UNIDOCS Web App"
            des="Full-stack Web app for managing UNIDOCSs for students and admins. Spring Boot backend & Angular frontend. Publish, view, and manage UNIDOCSs efficiently."
            src={projectSix}
            link="https://github.com/Ramadhani-Yassin/UNIDOCS"
          />
        </a>

        <a href="https://github.com/Ramadhani-Yassin/health-care" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Pharmaceutical Mobile App"
            des="A mobile app for managing pharmaceutical products and sales. Built with Android (Java) and Web Based Admin Portal, connecting pharmacists with Customers."
            src={projectEight}
            link="https://github.com/Ramadhani-Yassin/health-care"
          />
        </a>
        <a href="https://github.com/Ramadhani-Yassin/cafe-maruu" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Cafe Maruu Management System"
            des="A management system for Cafe Maruu, Streamlines sales, inventory, and purchasing with a smooth SPA experience."
            src={projectNine}
            link="https://github.com/Ramadhani-Yassin/cafe-maruu"
          />
        </a>
      </div>
    </section>
  );
}

export default Projects
