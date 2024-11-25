import styled from "styled-components"
export const Divider = styled.div`
width: 100%;
margin-top:-160px;

.custom-shape-divider-bottom-1730228137 {
    position: relative;
    width: 100%;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1730228137 svg {
    position: relative;
    display: block;
    width: calc(150% + 1.3px);
    height: 163px;
}

.custom-shape-divider-bottom-1730228137 .shape-fill {
    fill: #f5f5f5;
}
`


export const ContainerSections = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: auto;
gap: 10px;

`
export const ContainerTitle = styled.div`

z-index: 1;
display: flex;
width: 100%;
height: 300px;
justify-content: center;
align-items: center;
flex-direction: column;

p{
    color: gray;
    font-size: 30px;
}
h2{
    color: gray;
    font-size: 50px;
}
`
/*------------------------------------SECTION-1------------------------------------ */
export const Section1 = styled.div`
display: flex;
gap: 20px;
padding: 20px;

`
export const ContainerDescripcion = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
width: 500px;
h2{
    color: gray;
    font-size: 35px;
}
p{
    color: gray;
    font-size: 19px;
}
`
export const ContainerImg = styled.div`
display: flex;
img{
    border-radius: 15px;
    width: 450px;
    height: 280px;
}
:hover{
    transition:all 1.5s;
    transform: scale(1.1);
    border: 1px solid red;
}
`
export const ContainerBtn = styled.div`

width:200px;
height: 50px;
align-items: center;

width: 200px;
  height: 50px;
  align-items: center;

  .learn-more {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    background: transparent;
    font-size: inherit;
    font-family: inherit;
    width: 12rem;
    height: auto;
  }

  .learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    width: 3rem;
    height: 3rem;
    background: #282936;
    border-radius: 1.625rem;
  }

  .learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }

  .learn-more .circle .icon.arrow {
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  .learn-more .circle .icon.arrow::before {
    content: "";
    position: absolute;
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }

  .learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin-left: 1.85rem;
    color: #282936;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  .learn-more:hover .circle {
    width: 100%;
  }

  .learn-more:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
  }

  .learn-more:hover .button-text {
    color: #fff;
  }
`;


/*----------------------------------------SECTION-2---------------------------------*/

export const Section3 = styled.div`

display: flex;
gap: 100px;
padding: 30px;
`
/*-------------------------------------SECTION-3------------------------------------ */

export const Section2 = styled.div`

display: flex;
gap: 100px;
padding: 30px;
`