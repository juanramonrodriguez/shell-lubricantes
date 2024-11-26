import styled from "styled-components";


export const ContainerHero = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin-top: 100px;
width: 100%;

`
export const ContainerPiso = styled.div`
 display: flex;
  background-color: #d3d3d3;
  top: 750px;
  height: 250px;
  width:100%; 
  left: 0;
  right:0; 
  margin: 0; 
  padding: 0;  
 
 .custom-shape-divider-bottom-1728068972 {
   bottom:0px;
   width: 100%;
   left: 0;
   overflow: hidden;
   line-height: 0;
   transform: rotate(180deg);
    
} 

  .custom-shape-divider-bottom-1728068972 svg {
    display: block;
    width:100%;
    height: 106px;
}

.custom-shape-divider-bottom-1728068972 .shape-fill {
    fill:  #f5f5f5;
}


` 

export const ContainerImage = styled.div`   
   display: flex;
   top: 110px;
  left:400px;
  justify-content: center;
  align-items: center;
  position: relative;
  

  img {
    z-index: 2;
    width: 600px;
    height:auto;
    -webkit-box-reflect: below -155px -webkit-linear-gradient(bottom, rgba(55, 55, 55, 0.2) 0%, rgba(55, 55, 55, 0) 40%);
    animation-name: traslate;
    animation:traslate 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) backwards;
    animation-delay: 0.9s;

 @keyframes traslate {
   0% {
     transform: translateX(150px);
     opacity: 0;
   }
   40% {
     opacity: 0.6;
   }
   100% {
    transform: translateX(0);
     opacity: 1;
   }
 }
  }

  
`
export const ContainerHeroTex = styled.div`
display: flex;
flex-direction: column;
position: absolute;
width:100%;
align-items: center;
top: 550px;
z-index: 1;
gap: 40px;
`
export const Text = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
top: -300px;
left: 280px;
position: absolute;
width: 750px;
height: auto;
padding: 40px;
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
animation-name: in-expand;
  animation: in-expand 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation-delay: 0.5s;

 @keyframes in-expand {
   0% {
     
     opacity: 0;
   }
   40% {
     opacity: 0.6;
   }
   100% {
     opacity: 1;
   }
 }

h1{
  font-size: 60px;
   color: gray;
   font-weight: 700;
  


}
h2{
  font-size: 30px;
  font-weight: 400;
  color: gray;
 
}

`