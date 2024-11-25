import React from 'react';
import { ContainerFooter,
  TexLink,
  TextUbicacion,
  Redes,
  IconRedes
 } from './StyledFooter';
 import {Link}from "react-router-dom"
 import { FaFacebook } from "react-icons/fa";
 import { FaInstagramSquare } from "react-icons/fa";
 import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <ContainerFooter>
      <TextUbicacion className="footer-section">
        <h2>Donde estamos?</h2>
        <p>📍 General Paz 163 Villa Maria-Cba</p>
        <p>📍 Av Presidente Perón 1002 Villa Maria-Cba</p>
        <p>📍 Autopista Ruta 7Km. 779 Juana Koslay-San Luis</p>

      </TextUbicacion>
      <TexLink className="footer-section">
        <Link to="/"><h2>INICIO</h2></Link>
        <Link to="productos"><h2>PRODUCTOS</h2></Link>
        <Link to="nosotros"><h2>NOSOTROS</h2></Link>
        <Link to="RegisterUser"><h2>INICAR SESION</h2></Link>

      </TexLink>
      <Redes className="footer-section">
        <p>Terminos de uso</p>
        <p>Politica de Privacidas</p>
        <IconRedes>  
        <FaFacebook className='icon'/>
        <a href="https://www.instagram.com/shellpizzorno.lopez/">
        <FaInstagramSquare  className='icon'/>
        </a>
        <FaXTwitter className='icon'/>
        </IconRedes>
      </Redes>
    </ContainerFooter>
  );
}

export default Footer;
