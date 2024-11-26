import styled from "styled-components";

export const ContainerFooter = styled.div`
display: flex;
background: #232526; 
    background: -webkit-linear-gradient(to left, #414345, #232526); 
    background: linear-gradient(to left, #414345, #232526); 
width: 100%;
height: 230px;
text-decoration: none;
justify-content: center;
z-index: 2;

.footer-section{
    padding: 100px;
    display: flex;
    justify-content:center;
    align-items:start;
   
}
`
export const TextUbicacion = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
h2,p{
    color: gray;
}
`
export const TexLink = styled.div`
display: flex;
flex-direction: column;
a{
    color: gray; 
    text-decoration: none; 
    margin: 5px 0; 
    &:hover {
        color: #f39c12; 
     }
    }
`
export const Redes = styled.div`
display: flex;
flex-direction: column;

p{
    color: gray;
    font-size: 20px;
    cursor: pointer;
}

`
export const IconRedes = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
width: 200px;
height: auto;
gap: 20px;
.icon{
    width: 40px;
    height:40px;
    cursor: pointer;
    color: gray;
    margin-top: 40px;

    &:hover{
        transform: scale(1.5);
        color: black;
       transition-duration: 0.7s ;
    }
}
`