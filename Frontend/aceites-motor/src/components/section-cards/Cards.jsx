import React from 'react';
import { ContainerCards,
    ContainerTitle,
    ContainerButton,
    ContainerInfo,
    ContainerImg,
    ContainerDescrip
 } from './styled-cards';
 import { beneficios } from './cards-info';
 import { useState } from 'react';
 

const Cards = () => {
  const [infoActual, setInfoActual]= useState(beneficios[0]);
  const [botonClick, setBotonClick]= useState(0);

  const mostrarInfo = (index)=>{
    setInfoActual(beneficios[index]);
    setBotonClick(index);
  };

    
  return (
    <ContainerCards>
        <ContainerTitle>
            <h1>Beneficios de Shell Helix Ultra</h1>
        </ContainerTitle>
        <ContainerButton>
            <button className={botonClick === 0? 'active':''} onClick={()=>mostrarInfo(0)}>Rendimiento</button>
            <button className={botonClick === 1? 'active':''} onClick={()=>mostrarInfo(1)}>Limpieza del Motor</button>
            <button className={botonClick === 2? 'active':''} onClick={()=>mostrarInfo(2)}>Menos necesidad de recarga</button>
            <button className={botonClick === 3? 'active':''} onClick={()=>mostrarInfo(3)}>Ahorro de combustible</button>
        </ContainerButton>
        <ContainerInfo>
          <ContainerImg>
            <img src={infoActual.Imagen} alt="" />
          </ContainerImg>
          <ContainerDescrip>
            <h1>{infoActual.title}</h1>
            {infoActual.descripcion && infoActual.descripcion[0]&&(
              <>
              <p>{infoActual.descripcion[0].nota1}</p>
              <p>{infoActual.descripcion[0].nota2}</p>
              <p>{infoActual.descripcion[0].nota3}</p>
              <p>{infoActual.descripcion[0].nota4}</p>
              <p>{infoActual.descripcion[0].nota5}</p>
              </>
            )}
          </ContainerDescrip>
        </ContainerInfo>
    </ContainerCards>
  
  );
}

export default Cards;
