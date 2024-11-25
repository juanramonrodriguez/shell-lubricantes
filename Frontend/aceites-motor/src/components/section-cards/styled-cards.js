import styled from "styled-components"; 

export const ContainerCards = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 800px;
`
export  const ContainerTitle = styled.div`
display: flex;
width: 100%;
height: auto;
margin-top: 100px;
justify-content: center;

h1{
  color: gray;
  font-size:55px;
}
`
export const ContainerButton = styled.div`
display: flex;
justify-content:flex-start;
margin-top: 80px;
width: 1200px;
height: 40px;
gap: 10px;
border-bottom: 2px solid gray;
button{
    display: flex;
    position: relative;
    border: none;
    width: 180px;
    height: 30px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
}
button:hover{
  background-color: #ebebeb;
}
.active{
  background-color: #ebebeb;
  border-bottom: 4px solid #ffb017; 
  transform: scale(20deg);
  transition: all 0.2s ease-in-out;
}
`


export const ContainerInfo = styled.div`
display: flex;
width:1200px;
height: 900px;
`
export const ContainerImg = styled.div`
display: flex;
width: 400px;
height: 400px;
`
export const ContainerDescrip = styled.div`
display:flex;
flex-direction: column;
width: 800px;
height: 400px;
padding: 50px 20px;
gap: 20px;

h1{
  font-size: 30px;
}
p, h1{
  color: gray;
}
`