import styled from "styled-components";

export const Container = styled.div`
display: flex;
outline: none;
align-items: center;
justify-content: center;
width: 100%;
height: 1000px;
color: #6e7b84;
background-image: url("https://www.reporteminero.cl/files/5e3a4e08cf490_890x533.jpg");
background-size:cover;


`
export const UserLogin = styled.div`
border-radius: 0.50rem;
align-items: center;
display: flex;
width: 1000px;
height: 700px;
backdrop-filter: blur(17px) saturate(78%);
    -webkit-backdrop-filter: blur(17px) saturate(78%);
    background-color: rgba(10, 10, 11, 0.54);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
`
export const ContainerTapa = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 540px;
    height: 700px;
    position:absolute;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    right: 445px;
    z-index: 1;
    border: 1px solid white;
    background: #232526; 
    background: -webkit-linear-gradient(to left, #414345, #232526); 
    background: linear-gradient(to left, #414345, #232526); 

    h2{
      font-size: 30px;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
    }
    p{
      color: white;
    }
   
&.izquierda {
    transform: translateX(-0px);
    border-bottom-left-radius:20%;
    border-top-left-radius:20%;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}
&.derecha {
    transform: translateX(-460px);
    border-bottom-right-radius: 20%;
    border-top-right-radius: 20%;
    border-bottom-left-radius:0.5rem;
    border-top-left-radius:0.5rem;
}

.btn-register{
 background-color: transparent;
 border: 0.125em solid #fff;
 border-radius: 0.9375em;
 box-sizing: border-box;
 color: #fff;
 cursor: pointer;
 font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
 font-size: 16px;
 font-weight: 600;
 line-height: normal;
 margin: 0;
 min-height: 3.75em;
 min-width: 0;
 outline: none;
 padding: 1em 2.3em;
 text-align: center;
 text-decoration: none;
 transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);

    &.btn-register:hover {
      border:none;
    color: #fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
    }

}
`

export const IconRedes = styled.div`
display: flex;
width: auto;
height: auto;
justify-content: center;
align-items: center;
gap: 20px;


.icon{
    width: 40px;
    height:40px;
    cursor: pointer;
    color: gray;

    &:hover{
        transform: scale(1.5);
        color: black;
       transition-duration: 0.7s ;
    }
}
`
/*----------------------------Login------------------------------------------------- */

export const Login= styled.div`

.form-container {
    justify-content:center;
    width: 420px;
    padding: 2rem;
    color: rgba(243, 244, 246, 1);
    
    &.visible{
        opacity: 1;
        transition: all 1.5s ease-in;
    }
    &.no-visible{
        opacity: 0;
        transition: all 1s;
    }
}

.title {
  text-align: center;
  font-size: 28px;
  line-height: 2rem;
  font-weight: 700;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

}

.input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.50rem;
}

.input-group label {
  display: block;
  color: white;
  margin-bottom: 10px;
}

.input-group input {
  border-radius: 0.375rem;
  border: 1px solid white;
  outline: 0;
  background-color: transparent;
  padding: 0.75rem 1rem;
  color: rgba(243, 244, 246, 1);
}

.input-group input:focus {
  border-color: rgba(167, 139, 250);
}

.forgot {
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175,1);
  margin: 8px 0 14px 0;
}

.forgot a,.signup a {
  color: rgba(243, 244, 246, 1);
  text-decoration: none;
  font-size: 14px;
}


.sign {
  width: 300px;
  background-color: rgba(167, 139, 250, 1);
  padding: 0.75rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
}
`
/*------------------------------------Register------------------------------ */

export const Register = styled.div`
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 450px;
  padding: 20px;
  border-radius: 20px;
  position: relative;

  &.no-visible{
        opacity: 0;
        transition: all 1s;
    }
  &.visible{
        opacity: 1;
        transition: all 1.5s ease-in;
    }
}

.title {
  font-size: 28px;
  color: white;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  justify-content: center;
}

.form label {
  position: relative;
  display: block;
  color:white;
  margin-bottom: 10px;
  
}

.form label .input {
  width:200px;
  border-radius: 0.375rem;
  border: 1px solid white;
  background-color: transparent;
  padding: 0.75rem 1rem;
  color: rgba(243, 244, 246, 1);

}
.form label .input:focus{
  border-color: rgba(167, 139, 250);
  outline: none;
}


.submit {
  width: 300px;
  background-color: rgba(167, 139, 250, 1);
  padding: 0.75rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
}

`