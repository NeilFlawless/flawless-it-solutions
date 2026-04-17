import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-lg font-bold text-primary">
        Flawless IT Solutions
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#services" className="hover:text-primary">Services</a>
        <a href="#about" className="hover:text-primary">About</a>
        <a href="#contact" className="hover:text-primary">Contact</a>
      </div>

      {/* Hamburger Button */}
<button
  className="md:hidden flex flex-col justify-center items-center"
  onClick={() => setOpen(!open)}
>
  <span className={`w-6 h-[2px] bg-white transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
  <span className={`w-6 h-[2px] bg-white my-1 transition ${open ? "opacity-0" : ""}`}></span>
  <span className={`w-6 h-[2px] bg-white transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
</button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-6 py-6 md:hidden transition-all duration-300">
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
