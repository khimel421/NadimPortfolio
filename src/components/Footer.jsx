import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import LinkLogo from './LinkLogo';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa"; // Correct import for location icon
import { BiLogoGmail } from "react-icons/bi";
import { useEffect, useState } from "react";

const Footer = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const contactInfo = [
        { icon: <FaPhoneAlt />, text: "+8801834813859", link: "tel:+8801834813859" },
        { icon: <BiLogoGmail />, text: "mjnadim83@gmail.com", link: "mailto:mjnadim83@gmail.com" },
        { icon: <FaMapMarkerAlt />, text: "Kazi Nazrul Islam Road, Dhaka 1207", link: "https://maps.google.com/?q=Kazi+Nazrul+Islam+Road,+Dhaka+1207" }
    ];

    const socialLinks = [
        { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
        { icon: <FaFacebookF />, url: "https://www.facebook.com/safoan.nadim.da" },
        { icon: <FaInstagram />, url: "https://instagram.com" }
    ];

    return (
        <footer className="bg-[#1b242f] text-white pt-16 pb-10 relative">
            {showScrollButton && (
                <button 
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="bg-pink-600 hover:bg-pink-700 transition-colors duration-300 py-3 px-4 absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-t-lg flex justify-center items-center"
                >
                    <MdKeyboardDoubleArrowUp className="text-white text-2xl" />
                </button>
            )}

            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="space-y-4 text-center md:text-left">
                    {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <span className="text-pink-600">{item.icon}</span>
                            <a 
                                href={item.link} 
                                className="info-style hover:text-pink-400 transition-colors duration-200"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                {item.text}
                            </a>
                        </div>
                    ))}
                </div>

                {/* <div className="flex gap-5">
                    {socialLinks.map((social, index) => (
                        <LinkLogo 
                            key={index} 
                            href={social.url}
                            aria-label={`Visit our ${social.icon.type.name} page`}
                        >
                            {social.icon}
                        </LinkLogo>
                    ))}
                </div> */}
            </div>

            <div className="text-center mt-10 text-gray-400 text-sm">
                <p>© {currentYear} All Rights Reserved. Designed with ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;