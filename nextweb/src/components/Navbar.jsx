import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <nav className="md:px-20 border p-4">
        <div className="container mx-auto flex justify-between items-center">
        <Link to="/"><div className="text-black text-lg font-bold">My Website</div></Link>
          <button onClick={changeToggle} className="text-black block md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div className="hidden md:flex space-x-4">
            <Link to="/"><a href="#" className="text-black">Home</a></Link>
            <Link to="/about"><a href="#" className="text-black">Sobre</a></Link>
            <Link to="services"><a href="#" className="text-black">Serviços</a></Link>
            <Link to="contact"><a href="#" className="text-black">Contato</a></Link>
          </div>
        </div>
      </nav>
      <div
        className={`absolute top-full left-0 w-full bg-gray-800 transition-all duration-300 ease-out ${
          toggle ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden md:hidden`}
      >
        <a href="#" className="block py-2 px-4 text-white">Home</a>
        <a href="#" className="block py-2 px-4 text-white">About</a>
        <a href="#" className="block py-2 px-4 text-white">Services</a>
        <a href="#" className="block py-2 px-4 text-white">Contact</a>
      </div>
    </div>
  );
}
