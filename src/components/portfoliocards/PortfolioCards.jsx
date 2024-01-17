import React from "react";
import "./PortfolioCards.css";
import tasklist1 from "../../img/tasklist1.png";
import estudiojuridico from "../../img/estudioju2.png";
import sistemasolar from "../../img/sistemaSolar.png";
import cannabisoil from "../../img/cannabisoilarg.png";
import swarerouter from "../../img/swarerouterv6.png";
import rickandmorty from "../../img/rickandmorty.png";
import shiftciclo from "../../img/shiftciclo.png"
import bancamv from "../../img/banca.PNG"

import { FaGithub, FaLaptopCode } from "react-icons/fa";

const PortfolioCards = () => {
  const portfolioData = [
    {
      image: bancamv,
      altText: "BancaMV",
      title: "BancaMV",
      description: "SPA bancaria con Next, TypeScript y Tailwind.css",
      demoUrl: "https://banca-mv.vercel.app/",
      codeUrl: "https://github.com/GuidoSantiagoReta/BancaMV"
    },
    {
      image: swarerouter,
      altText: "Swaregrap routerv6",
      title: "Swaregrap",
      description: "Desarrollo Web SPA ReactRouterv6",
      demoUrl: "https://swaregrap-reactrouterv6.vercel.app",
      codeUrl: "https://github.com/GuidoSantiagoReta/Swaregrap-reactrouterv6"
    },
    {
      image: cannabisoil,
      altText: "CannabisOilArg",
      title: "Cannabis Oil Arg.",
      description: "Venta de aceites medicinales con React.js",
      demoUrl: "https://cannabis-oil-arg.vercel.app",
      codeUrl: "https://github.com/GuidoSantiagoReta/Cannabis-Oil-Arg."
    },
    {
      image: sistemasolar,
      altText: "APP Sistema Solar",
      title: "APP Sistema Solar",
      description: "PWA con React.js, Next.js y TypeScript",
      demoUrl: "https://peit-react2-solar-system-app.vercel.app/",
      codeUrl: "https://github.com/PrimerEmpleoIT/PEIT-react2-solar-system-app"
    },
    {
      image: shiftciclo,
      altText: "Shift.Ciclo",
      title: "Desarrollo de SPA",
      description: "Fiesta Shift.Ciclo",
      demoUrl: "https://shift-ciclo.vercel.app/",
      codeUrl: ""
    },
    {
      image: estudiojuridico,
      altText: "MPP Abogados",
      title: "MPP Abogados",
      description: "Desarrollo de Estudio Jurídico Integral",
      demoUrl: "https://mppabogados.netlify.app",
      codeUrl: "https://github.com/GuidoSantiagoReta/MPP-Abogados"
    },
    {
      image: rickandmorty,
      altText: "Rick and Morty",
      title: "Rick and Morty App",
      description: "Consumo de la API de Rick and Morty",
      demoUrl: "https://rick-and-morty-app-pearl.vercel.app/",
      codeUrl: "https://github.com/GuidoSantiagoReta/Rick-and-Morty-App"
    },
    {
      image: tasklist1,
      altText: "TO-DO List en React",
      title: "TO-DO List React.js",
      description: "Lista de tareas realizada en React.js",
      demoUrl: "https://guidosantiagoreta.github.io/To-Do-List",
      codeUrl: "https://github.com/GuidoSantiagoReta/To-Do-List"
    }

  ];


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
                  <a className="demo-project" href={card.demoUrl}>
                    <FaLaptopCode className="laptop" />
                  </a>
                  <a className="demo-project" href={card.codeUrl}>
                    <FaGithub className="github" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default PortfolioCards;
