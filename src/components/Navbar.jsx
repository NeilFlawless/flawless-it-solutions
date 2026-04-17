export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black/60 backdrop-blur-md">
      <h1 className="text-xl font-bold text-primary">
        Flawless IT Solutions
      </h1>

      <div className="space-x-6 hidden md:flex">
        <a href="#services" className="hover:text-primary">Services</a>
        <a href="#about" className="hover:text-primary">About</a>
        <a href="#contact" className="hover:text-primary">Contact</a>
      </div>
    </nav>
  );
}
