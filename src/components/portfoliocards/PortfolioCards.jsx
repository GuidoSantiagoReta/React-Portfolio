import React from 'react'
import './PortfolioCards.css'
import vintagepilcha from '../../img/vintagepilcha.png'
import tasklist1 from '../../img/tasklist1.png'
import estudiojuridico from '../../img/estudioju2.png'
import portfoliobt from '../../img/portfoliobootstrap.png'
import sistemasolar from'../../img/sistemaSolar.png'
import cannabisoil from '../../img/cannabisoilarg.png'
import swarerouter from'../../img/swarerouterv6.png'
import rickandmorty from'../../img/rickandmorty.png'

import {FaGithub,FaLaptopCode } from 'react-icons/fa';


const PortfolioCards = () => {
  return (
    <div className="contenedor">
      <div className="galeria-port">
        <div className="imagen-port">
          <img src={cannabisoil} alt="" />
          <div className="hover-galeria">
            <h2>Cannabis Oil Arg.</h2>
            <p>Venta de aceites medicinales</p>
            <div className="demo1">
              <a
                className="demo-project"
                href="https://cannabis-oil-arg.vercel.app/"
              >
                <FaLaptopCode className="laptop" />
              </a>
              <a
                className="demo-project"
                href="https://github.com/GuidoSantiagoReta/Cannabis-Oil-Arg."
              >
                <FaGithub className="github" />
              </a>
            </div>
          </div>
        </div>

        <div className="imagen-port">
          <img src={rickandmorty} alt="Rick and Morty" />
          <div className="hover-galeria">
            <h2>Rick and Morty App</h2>
            <p>Consumo de la API de Rick and Morty</p>
            <div className="demo1">
              <a
                className="demo-project"
                href="https://rick-and-morty-app-pearl.vercel.app/"
              >
                <FaLaptopCode className="laptop" />
              </a>
              <a
                className="demo-project"
                href="https://github.com/GuidoSantiagoReta/Rick-and-Morty-App"
              >
                <FaGithub className="github" />
              </a>
            </div>
          </div>
        </div>

        <div className="imagen-port">
          <img src={estudiojuridico} alt="MPP Abogados" />
          <div className="hover-galeria">
            <h2>MPP Abogados</h2>
            <p>Desarrollo de Estudio Jurídico integral</p>
            <div className="demo1">
              <a
                className="demo-project"
                href="https://mppabogados.netlify.app/"
              >
                <FaLaptopCode className="laptop" />
              </a>
              <a
                className="demo-project"
                href="https://github.com/GuidoSantiagoReta/MPP-Abogados"
              >
                <FaGithub className="github" />
              </a>
            </div>
          </div>
        </div>

        <div className="imagen-port">
          <img src={swarerouter} alt="Swaregrap routerv6" />
          <div className="hover-galeria">
            <h2>Swaregrap</h2>
            <p>Desarrollo Web SPA ReactRouterv6</p>
            <div className="demo1">
              <a
                className="demo-project"
                href="https://swaregrap-reactrouterv6.vercel.app"
              >
                <FaLaptopCode className="laptop" />
              </a>
              <a
                className="demo-project"
                href="https://github.com/GuidoSantiagoReta/Swaregrap-reactrouterv6"
              >
                <FaGithub className="github" />
              </a>
            </div>
          </div>
        </div>

        <div className="imagen-port">
          <img src={tasklist1} alt="TO-DO List in React" />
          <div className="hover-galeria">
            <h2>TO-DO List React.js</h2>
            <p>Lista de tareas realizada en React.js</p>
            <div className="demo1">
              <a
                className="demo-project"
                href="https://guidosantiagoreta.github.io/To-Do-List/"
              >
                <FaLaptopCode className="laptop" />
              </a>
              <a
                className="demo-project"
                href="https://github.com/GuidoSantiagoReta/To-Do-List"
              >
                <FaGithub className="github" />
              </a>
            </div>
          </div>
        </div>

        <div className="imagen-port">
          <img src={vintagepilcha} alt="Vintage Pilcha" />
          <div className="hover-galeria">
            <h2>Vintage Pilcha</h2>
            <p>Diseño de tienda de venta de ropa vintage</p>
            {/*utilizando react icons en forma de componentes*/}
            <div className="demo1">
              <a
                className="demo-project"
                href="https://vintage-pilcha.netlify.app/"
              >
                <FaLaptopCode className="laptop" />
              </a>
              <a
                className="demo-project"
                href="https://github.com/GuidoSantiagoReta/Vintage-Pilcha"
              >
                <FaGithub className="github" />
              </a>
            </div>
          </div>
        </div>

        <div className="imagen-port">
          <img src={sistemasolar} alt="Portfolio in Bootstrap" />
          <div className="hover-galeria">
            <h2>APP Sistema Solar</h2>
            <p>Proyecto colaborativo para PrimerEmpleoIT</p>
            <div className="demo1">
              <a
                className="demo-project"
                href="https://peit-react2-solar-system-app.vercel.app/"
              >
                <FaLaptopCode className="laptop" />
              </a>
              <a
                className="demo-project"
                href="https://github.com/PrimerEmpleoIT/PEIT-react2-solar-system-app/"
              >
                <FaGithub className="github" />
              </a>
            </div>
          </div>
        </div>

        <div className="imagen-port">
          <img src={portfoliobt} alt="Portfolio" />
          <div className="hover-galeria">
            <h2>Portfolio Bootstrap</h2>
            <p>Portfolio realizado con bootstrap </p>
            <div className="demo1">
              <a
                className="demo-project"
                href="https://guidosantiagoreta.netlify.app/"
              >
                <FaLaptopCode className="laptop" />
              </a>
              <a
                className="demo-project"
                href="https://github.com/GuidoSantiagoReta/portfoliobt"
              >
                <FaGithub className="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCards;
