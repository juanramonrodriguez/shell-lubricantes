import styled from "styled-components";
export const ContainerF1 = styled.div`
display: flex;
position: relative;
width: 100%;
height: 700px;

`
export const ContainerImg = styled.div`
img{
    width: 100%;
    height: 100%;
}
`
export const TextPurePlus = styled.div`
display: flex;
position: absolute;
top: 80px;
right: 400px;
justify-content: center;
flex-direction: column;
border-radius: 20px;
border: 1px solid white;
gap: 10px;
background-color:#ffc800;
width: 350px;
height: 180px;
padding: 20px;

p,h2{
    color: #4a4a4a;
} 
button{
    width: 100px;
    height: 50px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: red;
    color: white;
    font-size: 15px;
    cursor: pointer;
}
`