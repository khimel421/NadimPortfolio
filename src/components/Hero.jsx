import Button from "../sharedComponent/Button";
import Navbar from "./Navbar";





const Hero = () => {
  return (
    <div className="font-mont relative h-dvh " >
      {/* Overlay ............... */}
      <div className="bg-black absolute   top-0 left-0 w-full h-full opacity-75"></div>
      <div className=" container">
        <div className="   text-white text-5xl md:text-6xl px-4 h-full font-semibold flex flex-col justify-center gap-4 z-20  absolute ">
          <h1>Turning Videos to a Cinematic Masterpiece</h1>
          <div className="">
           <Button name={"Contact Me"}></Button>
          </div>
        </div>
      </div>
      
      <Navbar></Navbar>
      <video
        className="absolute top-0 left-0 w-full -z-10 object-cover h-dvh"
      
        src="video.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      
    </div>
  );
};

export default Hero;
