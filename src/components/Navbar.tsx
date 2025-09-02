'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

interface NavbarProps {
  scrollToHome: () => void;
  scrollToAbout: () => void;
  scrollToWork: () => void;
  scrollToContact: () => void;
}

const Navbar = ({ scrollToHome, scrollToAbout, scrollToWork, scrollToContact }: NavbarProps ) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 h-[80px] ${
        isScroll ? "bg-[#0a1f6a] shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo (Left) */}
      <div className="relative w-[180px] h-[80px] z-20 flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Aether Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Center Nav (Desktop only) */}
      <nav
        className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 font-medium text-sm uppercase tracking-wide transition-colors duration-300 text-white`}
      >
        <button onClick={scrollToHome} className="hover:font-bold">Home</button>
        <button onClick={scrollToAbout} className="hover:font-bold">About</button>
        <button onClick={scrollToWork} className="hover:font-bold">Work</button>
        <button onClick={scrollToContact} className="hover:font-bold">Contact</button>
      </nav>

      {/* Hamburger (Mobile Only - Right Side) */}
      <div className="md:hidden z-20">
        <button
          onClick={toggleMenu}
          className={`text-2xl text-white}`}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md flex flex-col items-center space-y-6 py-6 text-black text-sm font-medium md:hidden z-10 transition-all duration-300">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#work" onClick={toggleMenu}>Work</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
