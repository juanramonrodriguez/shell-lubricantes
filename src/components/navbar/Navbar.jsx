import React from "react";
import { useLocation } from "react-router-dom";
import { NavbarContainer,
        Container_li,
        StyledFaShoppingCart,
        ContainerCart,
        Box,
        StyledGiHamburgerMenu,
        ContainerMenu,
        NavbarBox} from "./StyledNavbar";
import { Link } from "react-router-dom";


const Navbar =()=>{
    const location = useLocation();
   
    return(
        <NavbarContainer>
            <NavbarBox>
            <Container_li>
            <ul>
                <li>
                    <Link to="/" className={location.pathname==='/'?'active':''}>INICIO</Link>
                </li>
                <li>
                    <Link to="/productos" className={location.pathname==='/productos'?'active':''}>PRODUCTOS</Link>
                </li>
                <li>
                    <Link to="/nosotros"className={location.pathname==='/contacto'?'active':''}>NOSOTROS</Link>
                </li>
                <li>
                    <Link to="/RegisterUser" className={location.pathname==='/RegisterUser'?'active':''}>Inicar sesion</Link>
                </li>  
            </ul>
            </Container_li>
            <ContainerCart>
                <StyledFaShoppingCart/>
                <Box/>
            </ContainerCart>
            <ContainerMenu>
                <StyledGiHamburgerMenu/>
            </ContainerMenu>
            </NavbarBox>   
        </NavbarContainer>  
    )
}
export default Navbar;