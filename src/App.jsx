import { useContext, useRef } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import RecenentWork from "./components/RecenentWork";
import SkillSet from "./components/SkillSet";
import Skills from "./components/Skills";
import { Context } from "./contextProvider/ContextProvider";
import ScrollToTop from "./components/ScrollToTop";
import MobileNavigation from "./components/MobileNavigation";


export default function App() {

  const {aboutSection, heroSection, serviceSection, recentWorkSection, contact} = useContext(Context)

  console.log(aboutSection);
  return (
    <div className="" >
      <ScrollToTop/>
      <div ref={heroSection}>
        <Hero></Hero>
      </div>

      <div ref={aboutSection}>
          <Intro></Intro>
          <Skills></Skills>
      </div>
      
      <div ref={serviceSection}>
        <SkillSet></SkillSet>
      </div>
     
     <div ref={recentWorkSection}>
        <RecenentWork></RecenentWork>
     </div>

     <div ref={contact}>  
        <Contact></Contact>
        <Footer></Footer>
        <MobileNavigation/>
     </div>
     
      
      
      
    </div>
  )
}