import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Shield, Home, Info, Mail, Zap, Grid } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper for Link Styles
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
      isActive
        ? "text-cyan-400 bg-white/5 shadow-[0_0_15px_-5px_rgba(34,211,238,0.3)]"
        : "text-gray-400 hover:text-white hover:bg-white/5"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-cyan-500 to-purple-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Shield className="text-white fill-white/20 h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              AI <span className="text-gray-500">SUITE</span>
            </span>
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={linkClass}>
              <Home size={18} /> Home
            </NavLink>

            {/* Link to Tools Grid Page */}
            <NavLink to="/tools" className={linkClass}>
              <Grid size={18} /> AI Tools
            </NavLink>

            <NavLink to="/blog" className={linkClass}>
              <Grid size={18} /> Blog
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              <Info size={18} /> About
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              <Mail size={18} /> Contact
            </NavLink>

            {/* Pricing Button */}
            <NavLink
              to="/pricing"
              className="ml-4 bg-white text-black hover:bg-cyan-400 px-5 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 hover:scale-105"
            >
              <Zap size={16} className="fill-current" /> Premium
            </NavLink>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 absolute w-full left-0 top-16">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10"
            >
              Home
            </NavLink>
            <NavLink
              to="/tools"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10"
            >
              AI Tools
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10"
            >
              Blog
            </NavLink>
            <NavLink
              to="/pricing"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-cyan-400 font-bold bg-white/5"
            >
              Upgrade Plan
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
