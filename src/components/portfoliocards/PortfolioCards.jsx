import React from "react";
import "./PortfolioCards.css";
import portfolioData from "./PortfolioData";

import { FaGithub, FaLaptopCode } from "react-icons/fa";


const PortfolioCards = () => {


  return (
    <div className="contenedor">
      <div className="galeria-port">
        {portfolioData.map((card, index) => (
          <div className="imagen-port hvr-shrink" key={index}>
            <img src={card.image} alt={card.altText} />
            <div className="hover-galeria">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <div className="demo1">
                {card.demoUrl &&(
                <a className="demo-project" href={card.demoUrl}>
                  <FaLaptopCode className="laptop" />
                </a>)}
                {card.codeUrl &&(
                <a className="demo-project" href={card.codeUrl}>
                  <FaGithub className="github" />
                </a>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCards;
