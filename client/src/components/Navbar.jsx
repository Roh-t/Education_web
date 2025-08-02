import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const navLinkClass = ({ isActive }) =>
  isActive
    ? "pb-1 border-b-2 border-white"
    : "pb-1 hover:border-b-2 border-white hover:opacity-80 transition";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    navigate("/login");
  };

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-4">
        <nav className="bg-[#1e1c1c] text-white rounded-3xl px-6 py-3 flex items-center justify-between border border-white/10 shadow-lg">
          {/* Logo */}
          <div className="text-lg sm:text-xl font-bold">
            <NavLink to="/" className="hover:opacity-90 transition">
              <span className="text-red-500">DHRUV RATHEE </span>ACADEMY
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-4 lg:gap-6 text-sm md:text-base font-medium">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/youtube-blueprint" className={navLinkClass}>YouTube Blueprint</NavLink></li>
            <li><NavLink to="/course-curriculum" className={navLinkClass}>Curriculum</NavLink></li>
            <li><NavLink to="/faq" className={navLinkClass}>Doubts</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/contact-us" className={navLinkClass}>Contact</NavLink></li>
          </ul>

          {/* Right section: Auth + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Mobile Auth Buttons */}
            <div className="md:hidden flex gap-2 items-center">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="border border-white px-3 py-1 rounded-full text-xs font-medium hover:bg-white hover:text-black transition"
                >
                  Logout
                </button>
              ) : (
                <>
                  <NavLink
                    to="/signup"
                    className="border border-white px-3 py-1 rounded-full text-xs font-medium hover:bg-white hover:text-black transition"
                  >
                    Signup
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="border border-white px-3 py-1 rounded-full text-xs font-medium hover:bg-white hover:text-black transition"
                  >
                    Login
                  </NavLink>
                </>
              )}
            </div>

            {/* Hamburger Icon on far right */}
            <button
              onClick={handleToggleMenu}
              className="md:hidden text-white text-2xl"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
            </button>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {isLoggedIn ? (
                <>
                  <span className="text-green-400 font-semibold text-sm">Logged in</span>
                  <button
                    onClick={handleLogout}
                    className="border border-white px-4 py-1.5 rounded-full font-medium hover:bg-white hover:text-black transition text-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/signup"
                    className="border border-white px-5 py-1.5 rounded-full font-medium hover:bg-white hover:text-black transition text-sm"
                  >
                    Signup
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="border border-white px-5 py-1.5 rounded-full font-medium hover:bg-white hover:text-black transition text-sm"
                  >
                    Login
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-3 bg-[#1e1c1c] text-white rounded-2xl shadow-lg py-5 px-6 space-y-5 text-sm font-medium"
          >
            <ul className="flex flex-col space-y-3">
              <li><NavLink to="/" onClick={handleToggleMenu} className={navLinkClass}>Home</NavLink></li>
              <li><NavLink to="/youtube-blueprint" onClick={handleToggleMenu} className={navLinkClass}>YouTube Blueprint</NavLink></li>
              <li><NavLink to="/course-curriculum" onClick={handleToggleMenu} className={navLinkClass}>Curriculum</NavLink></li>
              <li><NavLink to="/faq" onClick={handleToggleMenu} className={navLinkClass}>Doubts</NavLink></li>
              <li><NavLink to="/about" onClick={handleToggleMenu} className={navLinkClass}>About</NavLink></li>
              <li><NavLink to="/contact-us" onClick={handleToggleMenu} className={navLinkClass}>Contact</NavLink></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
