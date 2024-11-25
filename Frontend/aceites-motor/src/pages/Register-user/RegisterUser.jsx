import { Container, ContainerTapa, IconRedes, Login, Register, UserLogin
 } from "./StyedRegisteruser";
 import { FaFacebook } from "react-icons/fa";
 import { FaInstagramSquare } from "react-icons/fa";
 import { FaXTwitter } from "react-icons/fa6";



 import { useState } from "react";
 
 const RegisterUser = () => {
   const [posicion, setPosicion]= useState(false);
   const [titulo, setTitulo]= useState("Uan no tienes una cuenta?")
   const[btnName, setBtnName]=useState("Registrarse")
   const [formVisible, setFromVisible]= useState(true)
  
   const CambiarRegistro =()=>{
     setPosicion(!posicion);
     setTitulo(posicion ?"Aun no tienes una cuenta?":"Ya tienes una cuenta?")
     setBtnName(posicion ? "Registrase": "Iniciar Sesion")
     setFromVisible(!formVisible)
   }
  return (
    <>
      <Container>
        <UserLogin>
          <Login>
          <div className={`form-container ${posicion ? "no-visible" : "visible"}`}>
              <p className="title">Login</p>
              <form className="form">
                <div className="input-group">
                  <label htmlFor="username">Usuario</label>
                  <input type="text" name="username" id="username" className="input" required  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" name="password" id="password" className="input" required />
                  <div className="forgot">
                    <a rel="noopener noreferrer" href="#">Olvidaste tu Contraseña?</a>
                  </div>
                </div>
                <button className="sign">Iniciar Sesión</button>
              </form>
            </div>
          </Login>
          <Register>
            <form className={`form ${posicion ? "visible":"no-visible"}`}>
              <p className="title">Register</p>
              
                <label>
                  <label htmlFor="name">Nombre</label>
               <input type="text" name="name" id="name" className="input" required />
                </label>
                <label>
                  <label htmlFor="lastname">Apellido</label>
                  <input className="input" type="text" id="lastname" required />
                </label>
              
              <label>
                <label htmlFor="email">Correo Electrónico</label>
                <input className="input" type="email" id="email" required />
              </label>
              <label>
                <label htmlFor="password">Contraseña</label>
                <input className="input" type="password" id="password-register" required />
              </label>
              <label>
                <label htmlFor="repitcontraseña">Confirmar Contraseña</label>
                <input className="input" type="password" id="password-repit" required />
              </label>
              <button className="submit">Registrar</button>
            </form>
          </Register>
        </UserLogin>
        <ContainerTapa className={`tapa ${posicion ?"derecha":"izquierda"}`}>
          <h2>{titulo}</h2>
          <button onClick={CambiarRegistro}  className="btn-register">{btnName} </button>
          <p>Seguinos en redes sociales</p>
          <IconRedes>  
            <FaFacebook className='icon'/>
              <a href="https://www.instagram.com/shellpizzorno.lopez/">
              <FaInstagramSquare  className='icon'/>
              </a>
            <FaXTwitter className='icon'/>
          </IconRedes>
        </ContainerTapa>
      </Container>
    </>
  );
}

export default RegisterUser;
