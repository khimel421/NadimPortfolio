import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import RecenentWork from "./components/RecenentWork";
import SkillSet from "./components/SkillSet";
import Skills from "./components/Skills";


export default function App() {
  return (
    <div className="">

      <Hero></Hero>
      <Intro></Intro>
      <Skills></Skills>
      <SkillSet></SkillSet>
      <RecenentWork></RecenentWork>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}