import React from 'react';
import Hero from "../../components/hero/Hero";
import Cards from "../../components/section-cards/Cards";
import CardF1 from '../../components/cardF1/CardF1';
import SectionShellAceites from "../../components/SectionShellAceites/SectionShellAceites";


function home() {
  return (
    <>
      <Hero/>  
      <Cards/>
      <CardF1/>
      <SectionShellAceites/>

    </>
  );
}

export default home;
