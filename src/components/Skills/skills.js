import React from "react";
import "./skills.css";
import reactLogo from "./reactlogo.jpeg";
import pythonLogo from "./python-logo.png";
import QMIND from "./qmind_logo.png";
import QUANTT from "./quantt.png";
import ALAWA from "./alawalogo.png";
import TKS from "./tksnew.png";
import QUBE from "./QUBE.png";
import elevate from "./lightelevate.png";
import Title from "../layouts/Title";
import smith from "./smith eng.png";
import { FaExternalLinkAlt } from "react-icons/fa";
const Skills = () => {
  return (
    <section id="skills" className="border-b-[1px] border-b-white">
      <div className="flex justify-center items-center text-center text-white">
        <Title des="my experience"></Title>
      </div>
      <div class="text-white font-rubik pb-3 whitespace-pre-line">
        below are some of the major experiences I have, including my own
        business and many extracurricular clubs i have been part. feel free to
        hover on each card to learn more!
      </div>
      <div class="experience_cards">
        <div class="card">
          <img className="card__image" src={elevate} alt="Card Image" />
          <div class="card__content">
            <div class="card__title">Elevate Basketball</div>
            <p class="card__description">
              Founded in 2021, I started running an outdoor basketball class
              focused on providing a low cost opportunity that can help
              encourage kids to get more physical activity. Elevate Basketball
              now employs 3 coaches, and has served 200+ different families,
              generating an approximate net revenue of $20,000
            </p>
          </div>
        </div>
        <div class="card">
          <img className="card__image" src={QMIND} alt="Card Image" />
          <div class="card__content">
            <p class="card__title">QMIND</p>
            <p class="card__description">
              QMIND is Canada’s largest student-run organization, allowing
              members to tackle real-world problems through AI. My team
              developed a solution to optimize pricing for transient RV resorts
              for Summerhill Resorts using a Random Forest Classifier model
            </p>
          </div>
        </div>
        <div class="card">
          <img className="card__image" src={QUANTT} alt="Card Image" />
          <div class="card__content">
            <p class="card__title">QUANTT</p>
            <p class="card__description">
              Collaborated with a team to design, develop in Python and present
              a financial trading algorithm, leveraged quantitative models to
              create a robust algorithm that optimized trading strategies
            </p>
          </div>
        </div>
        <div class="card">
          <img className="card__image" src={ALAWA} alt="Card Image" />
          <div class="card__content">
            <p class="card__title">Alawa Financial Technology Company</p>
            <p class="card__description">
              Optimized pitch resources and refined key messaging, leading to a
              25% increase in investor interest, while also enhancing the user
              experience through front-end improvements that resulted in a 20%
              increase in customer satisfaction.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            id="smith"
            className="card__image"
            src={smith}
            alt="Card Image"
          />
          <div class="card__content">
            <p class="card__title">Teaching Assitant</p>
            <p class="card__description">
              Teaching assitant for courses: Introduction to Programming for
              Engineers (APSC 141/142). Assisted in teaching course material
              that provides an introduction to programming for engineers, taught
              through the language C.
            </p>
          </div>
        </div>
        <div class="card">
          <img id="TKSimg" className="card__image" src={TKS} alt="Card Image" />
          <div class="card__content">
            <p class="card__title">The Knowledge Society</p>
            <p class="card__description">
              The Knowledge Society is a human accelerator program that focuses
              on innovation, mindsets and emerging technology. Through the
              program, I researched deep into the AI/finance field and
              participated in various opportunities such as hackathons and a
              Harvard business case.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
