import logo from "../assets/navbar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose, IoArrowUp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between mx-8 my-5">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="" className="object-cover w-14" />
        <div>
          <p className="text-lg font-bold">Rujakgaram</p>
          <p>Jogja</p>
        </div>
      </Link>
      <div className="flex items-center px-4 cursor-pointer">
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <IoClose size="32px" /> : <GiHamburgerMenu size="24px" />}
        </button>
        <div onClick={toggleMenu}
          className={`absolute py-5 bg-white shadow-md rounded-lg max-w-[150px] w-full right-4 top-20 md:block md:static md:bg-transparent md:max-w-full md:shadow-none md:rounded-none text-black ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="block px-5 md:flex md:gap-10 cursor-pointer z-20">
            <li className="group hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="group hover:underline">
              <Link to="/store">Store</Link>
            </li>
            <li className="group hover:underline">
              <Link to="/menu">Menu</Link>
            </li>
          </ul>
        </div>
      </div>


      <button
        onClick={scrollToTop}
        className={`fixed justify-center items-center cursor-pointer bottom-4 right-4 z-[9999] h-12 w-12 rounded-full bg-black p-4  ${
          isVisible ? "flex" : "hidden"
        }`}
      >
        <IoArrowUp size="32px" color="white" />
      </button>
    </div>
  );
}
