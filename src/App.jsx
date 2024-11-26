import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage/NoPage"
import RegisterUser from "./pages/Register-user/RegisterUser"
import Layout from "./Layout/Layout";
import Home from "./pages/home/home";
import Productos from "./pages/Productos/Productos";
import Nosotros from "./pages/Nosotros/Nosotros"





function App() {
 

  return (
    <>
    <BrowserRouter>
    <Layout>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="productos" element={<Productos/>}/>
       <Route path="nosotros" element={<Nosotros/>}/>
       <Route path="RegisterUser" element={<RegisterUser/>}/>
       <Route path="*" element={<NoPage/>}/>
    </Routes>
    </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
