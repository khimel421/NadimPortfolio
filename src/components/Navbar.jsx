import {  Drawer } from "antd";
import { useContext, useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { Context } from "../contextProvider/ContextProvider";

const Navbar = () => {
  const {aboutSection, heroSection, serviceSection, recentWorkSection, contact} = useContext(Context)
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleScroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  };


  return (
    <>
      <div onScroll={handleScroll} className="absolute lg:left-14 font-mont text-white flex justify-between items-center  container min-h-[80px] px-4   z-40 ">
        
        {/* LOGO.... */}
        
        <span className="tracking-[4px] font-semibold text-xl cursor-pointer">
        Jubaeer Nadim
        </span>

        {/* PAGE LINK ....... */}
        <ul className="hidden md:flex gap-4 cursor-pointer ">
          <li  className="nav-style">Home</li>
          <li onClick={() => {handleScroll(aboutSection)}} className="nav-style">About me</li>
          <li onClick={() => {handleScroll(serviceSection)}} className="nav-style">Services</li>
          <li onClick={() => {handleScroll(recentWorkSection)}} className="nav-style">Work</li>
          <li onClick={() => {handleScroll(contact)}} className="nav-style">Contact</li>
        </ul>
        {/* DRAWER */}
        <div className="md:hidden">
          <button onClick={showDrawer}>
            <TiThMenuOutline />
          </button>
          <Drawer width={240} style={{width: ''}}  title="" onClose={onClose} open={open}>
            <ul className="flex flex-col py-2 gap-2 cursor-pointer text-lg font-semibold text-black">
              <li className="list-style">Home</li>
              <li  onClick={() => {handleScroll(aboutSection)}} className="list-style">About me</li>
              <li onClick={() => {handleScroll(serviceSection)}} className="list-style">Services</li>
              <li onClick={() => {handleScroll(recentWorkSection)}} className="list-style">Work</li>
              <li  onClick={() => {handleScroll(contact)}} className="list-style">Contact</li>
            </ul>
          </Drawer>

        </div>
      </div>
    </>
  );
};

export default Navbar;

