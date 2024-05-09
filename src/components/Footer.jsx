
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import LinkLogo from './LinkLogo';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
    const handleBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    return (
        <div className=' pb-10 bg-[#1b242f] relative'>
            <button onClick={handleBtn} className=' bg-pink-600 py-2 absolute -top-8 mx-auto right-0 left-0 w-[47px] flex   justify-center'><MdKeyboardDoubleArrowUp  className='text-white text-4xl font-bold'/></button>
            
            <div className='flex gap-4 justify-center pt-16'>
                <LinkLogo><FaLinkedinIn></FaLinkedinIn></LinkLogo>
                <LinkLogo><FaFacebookF></FaFacebookF></LinkLogo>
                <LinkLogo><FaInstagram></FaInstagram></LinkLogo>
            </div>
        </div>
    );
}

export default Footer;