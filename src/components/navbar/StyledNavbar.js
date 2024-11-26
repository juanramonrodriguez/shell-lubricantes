import styled, {keyframes} from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


export const NavbarContainer = styled.div`
display: flex;
position: absolute;
top: 30px;
z-index: 1;
width:100%;
height:60px;
justify-content: center;
align-items: center;


`
export const NavbarBox = styled.div`
backdrop-filter: blur(17px) saturate(78%);
    -webkit-backdrop-filter: blur(17px) saturate(78%);
    background-color: rgba(255, 255, 255, 0.54);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
display: flex;
margin-top: 0px;
width: 40%;
height: 60px;
align-items: center;
justify-content: center;
gap: 25px;
`

export const Container_li = styled.div`
  width: fit-content;

  ul {
    display: flex;
    gap: 50px;
  }
  
  li {
    position: relative;
    list-style: none;
    font-size: 18px;

    .active{
      border-bottom: 2px solid red;
    }

    a {
      text-decoration: none;
      color: gray;
    }

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      transition: width 0.3s ease-in-out;
    }

    :hover::after {
      width: 100%;
      background-color: red;
    }
  }
`;


const dropBox=keyframes`
 0% {
    top: -30px;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: -1px;
    opacity: -1;
  }
`

export const ContainerCart = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
`
export const Box = styled.div`
background-image: url("https://e7.pngegg.com/pngimages/135/758/png-clipart-kemerovo-royal-dutch-shell-motor-oil-%D0%9C%D0%BE%D1%82%D0%BE%D1%80%D0%BD%D0%BE%D0%B5-%D0%BC%D0%B0%D1%81%D0%BB%D0%BE-shell-shell-diesel-fuel-oil-thumbnail.png") ;
background-size: contain;
background-position: center;
background-repeat: no-repeat;
width: 25px;
height: 25px;
position: absolute;
z-index: -1;
top: -30px;
opacity: 0;
transition: all 0.5s ease;

`
export const StyledFaShoppingCart = styled(FaShoppingCart)`
display: flex;
font-size: 30px;
cursor: pointer;
margin-top: -5px;
position: relative;


&:hover ~ div{
    animation: ${dropBox} 0.8s ease ;
}
`
export const ContainerMenu = styled.div`
display: none;

`
export const StyledGiHamburgerMenu = styled(GiHamburgerMenu)`
display: flex;
font-size: 22px;
cursor: pointer;
margin-top: -5px;
`