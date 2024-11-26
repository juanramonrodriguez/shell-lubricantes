
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer"
import { LayoutWrapper } from "./StyledLayout";


function Layout({children}) {
  return (
    
    <LayoutWrapper>
        <Navbar/>
          {children}   
        <Footer/>  
    </LayoutWrapper>
    
  );
}

export default Layout;
