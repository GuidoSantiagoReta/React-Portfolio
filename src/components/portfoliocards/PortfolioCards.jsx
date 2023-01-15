import React from 'react'
import './PortfolioCards.css'
import vintagepilcha from '../../img/vintagepilcha.png'
import sware from '../../img/swarefinal.png'
import tasklist1 from '../../img/tasklist1.png'
import estudiojuridico from '../../img/estudioju2.png'
import portfoliobt from '../../img/portfoliobootstrap.png'
import sistemasolar from'../../img/sistemaSolar.png'
import amw from '../../img/amw3.png'
import plotika from '../../img/plotika.png'
import {FaGithub,FaLaptopCode } from 'react-icons/fa';


const PortfolioCards = () => {
  return (

       <div className="contenedor">
                <div className="galeria-port">
                <div className="imagen-port">
                        <img src={estudiojuridico} alt="MPP Abogados"/>
                        <div className="hover-galeria">
                            <h2>MPP Abogados</h2>
                            <p>Desarrollo de Estudio Jurídico integral</p>
                            <div className="demo1">
                                <a  className= "demo-project" href="https://mppabogados.netlify.app/">
                                <FaLaptopCode className='laptop'/>
                                </a>
                                <a  className= "demo-project" href="https://github.com/GuidoSantiagoReta/MPP-Abogados">
                                <FaGithub className='github'/>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="imagen-port">
                        <img src={tasklist1} alt="TO-DO List in React"/>
                        <div className="hover-galeria">
                            <h2>TO-DO List React.js</h2>
                            <p>Lista de tareas realizada en React.js</p>
                            <div className="demo1">
                                <a  className= "demo-project"href="https://guidosantiagoreta.github.io/To-Do-List/">
                                <FaLaptopCode className='laptop'/>
                                </a>
                                <a className= "demo-project" href="https://github.com/GuidoSantiagoReta/To-Do-List">
                                <FaGithub className='github'/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="imagen-port">
                        <img src={sware} alt="Swaregrap Solutions"/>
                        <div className="hover-galeria">
                            <h2>Swaregrap</h2>
                            <p>Desarrollo web y mantenimiento de PC</p>
                            <div className="demo1">
                                <a  className= "demo-project"href="https://swaregrap.netlify.app">
                                <FaLaptopCode className='laptop'/>
                                </a>
                                <a  className= "demo-project" href="https://github.com/GuidoSantiagoReta/services">
                                <FaGithub className='github'/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="imagen-port">
                        <img src={vintagepilcha} alt="Vintage Pilcha"/>
                        <div className="hover-galeria">
                            <h2>Vintage Pilcha</h2>
                            <p>Diseño de tienda de venta de ropa vintage</p>
                            {/*utilizando react icons en forma de componentes*/}
                            <div className="demo1">
                                <a  className= "demo-project"href="https://vintage-pilcha.netlify.app/">
                                <FaLaptopCode className='laptop'/>
                                </a>
                                <a  className= "demo-project" href="https://github.com/GuidoSantiagoReta/Vintage-Pilcha">
                                <FaGithub className='github'/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="imagen-port">
                        <img src= {sistemasolar} alt="Portfolio in Bootstrap"/>
                        <div className="hover-galeria">
                            <h2>APP Sistema Solar</h2>
                            <p>Proyecto colaborativo para PrimerEmpleoIT</p>
                            <div className="demo1">
                                <a  className= "demo-project" href="https://peit-react2-solar-system-app.vercel.app/">
                                <FaLaptopCode className='laptop'/>
                                </a>
                                <a  className= "demo-project" href="https://github.com/PrimerEmpleoIT/PEIT-react2-solar-system-app/">
                                <FaGithub className='github'/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="imagen-port">
                        <img src={portfoliobt} alt="Portfolio"/>
                        <div className="hover-galeria">
                            <h2>Portfolio Bootstrap</h2>
                            <p>Portfolio realizado con bootstrap </p>
                            <div className="demo1">
                                <a  className= "demo-project" href="https://guidosantiagoreta.netlify.app/">
                                <FaLaptopCode className='laptop'/>
                                </a>
                                <a className= "demo-project" href="https://github.com/GuidoSantiagoReta/portfoliobt">
                                <FaGithub className='github'/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="imagen-port">
                        <img src={amw} alt=""/>
                        <div className="hover-galeria">
                            <h2>AMW</h2>
                            <p>Productora Audiovisual</p>
                            <div className="demo1">
                                <a  className= "demo-project" href="http://">
                                <FaLaptopCode className='laptop'/>
                                </a>
                                <a  className="demo-project" href="http://">
                                <FaGithub className='github'/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="imagen-port">
                        <img src={plotika} alt=""/>
                        <div className="hover-galeria">
                            <h2>Plotika</h2>
                            <p>Diseño de plotters para paredes</p>
                            <div className="demo1">
                                <a  className= "demo-project"href="http://">
                                <FaLaptopCode className='laptop'/>
                                </a>
                                <a  className="demo-project" href="http://">
                                <FaGithub className='github'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
  )
}

export default PortfolioCards;
