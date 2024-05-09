import {  Drawer } from "antd";
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleScroll = () => {
    setScrolled()
  };
  return (
    <>
      <div onScroll={handleScroll} className="absolute font-mont text-white flex justify-between items-center  container min-h-[80px] px-2   z-40 ">
        
        {/* LOGO.... */}
        
        <span className="tracking-[4px] font-semibold text-xl cursor-pointer">
        Jubaeer Nadim
        </span>

        {/* PAGE LINK ....... */}
        <ul className="hidden md:flex gap-4 cursor-pointer ">
          <li className="nav-style">Home</li>
          <li className="nav-style">About me</li>
          <li className="nav-style">Services</li>
          <li className="nav-style">Work</li>
          <li className="nav-style">Contact</li>
        </ul>
        {/* DRAWER */}
        <div className="md:hidden">
          <button onClick={showDrawer}>
            <TiThMenuOutline />
          </button>
          <Drawer style={{width: ''}}  title="" onClose={onClose} open={open}>
            <ul className="flex flex-col py-2 gap-2 cursor-pointer text-lg font-semibold text-black">
              <li className="list-style">Home</li>
              <li className="list-style">About me</li>
              <li className="list-style">Services</li>
              <li className="list-style">Work</li>
              <li className="list-style">Contact</li>
            </ul>
          </Drawer>

        </div>
      </div>
    </>
  );
};

export default Navbar;

