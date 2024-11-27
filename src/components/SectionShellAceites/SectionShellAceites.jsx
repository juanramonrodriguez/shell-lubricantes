import React from 'react';
import { ContainerSections,
  ContainerTitle,
  Section1,
  Section2,
  Section3,
  ContainerDescripcion,
  ContainerImg,
  Divider,
  ContainerBtn,
 } from "./StyledShellAceites";
 import auto from "./img/auto.png"
 import moto from "./img/moto.png"
 import camion from "./img/camion.avif"
 

function SectionShellAceites() {
  return (
    <>
      <ContainerSections>
      <Divider>
        <div className="custom-shape-divider-bottom-1730228137">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
      </Divider>
        <ContainerTitle>
        <p>Nuestra gama de Aceites para motor</p>
        <h2>Lubricantes SHELL</h2>
        </ContainerTitle>
        <Section1>
            <ContainerDescripcion>
                <h2>Aceites para autos y camionetas Shell Helix</h2>
                <p>Diseñados pata supetat sus expectactivas al conducir.
                  Descubra toda la gama de productos.
                </p>
                <ContainerBtn>
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Ver Mas</span>
                </button>
                </ContainerBtn>

            </ContainerDescripcion>
            <ContainerImg>
                <img src={auto} alt="" />
            </ContainerImg>
        </Section1>
        <Section2>
          <ContainerImg>
            <img src={moto} alt="" />
          </ContainerImg>
          <ContainerDescripcion>
            <h2>Aceites para Motos Shell Advance</h2>
            <p>Proteja su motor y disfrute de cada trayecto con los lubricantes para motor Shell Advance con tecnologia PurePlus.
            </p>
            <ContainerBtn>
            <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Ver Mas</span>
                </button>
            </ContainerBtn>
           
          </ContainerDescripcion>
        </Section2>
        <Section3>
          <ContainerDescripcion>

          <h2>Aceites para camiones y motores pesados Shell Rimula</h2>
          <p>Nuestros cientificos desarrollaron los lubricantes Shell Rimula para motores diésel de uso
            intenso, diseñados para proteger su motor contribuyendo a reducir su mantenimiento
          </p>
          <ContainerBtn>
            <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Ver Mas</span>
                </button>
            </ContainerBtn>
          </ContainerDescripcion>
          <ContainerImg>
            <img src={camion} alt="" />
          </ContainerImg>
        </Section3>
      </ContainerSections>
    </>
  );
}

export default SectionShellAceites;
