import React from 'react';
import { ContainerF1,
    ContainerImg,
    TextPurePlus
 } from './StyledCardF1';
import ImgF1 from "./imagenF1/formula1.jpg"

function CardF1() {
  return (
    <>
      <ContainerF1>
        <ContainerImg>
            <img src={ImgF1} alt="" />
        </ContainerImg>
        <TextPurePlus>
            <h2>Shell Helix Ultra con tecnologia Pure Plus</h2>
            <p>El lubricante para motor reinventado. El primer lubricante sintético para motor diseñado a partir de gas natural, que otorga al motor rendimiento duradero.</p>
            <a href="https://www.shell.com.ar/conductores/aceites-para-motor/motores-de-autos/shell-helix-ultra-con-tecnologia-pureplus.html">
              <button>Visitá el sitio</button>
            </a>
        </TextPurePlus>

      </ContainerF1>
    </>
  );
}

export default CardF1;
