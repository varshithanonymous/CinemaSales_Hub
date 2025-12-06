"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="#">Logo</a>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <a href="#features" className="nav-link">Features</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#testimonials" className="nav-link">Testimonials</a>
        <a href="#pricing" className="nav-link">Pricing</a>
        <a href="#faq" className="nav-link">FAQ</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}