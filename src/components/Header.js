import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex sticky top-0 justify-center z-50">
      <div className="flex w-11/12 md:w-2/3 lg:w-1/3 z-20 h-16 justify-between md:justify-center items-center gap-x-8 md:bg-navbg  lg:bg-navbg mt-8 md:border-2 md:border-bordercol lg:border-2 lg:border-bordercol ">
        <div>
          <p className="text-beige hidden md:block font-normal text-xl cursor-pointer">
            <Link to="/">Vikas.</Link>
          </p>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-x-4 items-center cursor-pointer">
            <li className="relative group text-beige text-sm tracking-wide">
              <Link to="/">
                HOME
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-beige transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group text-beige text-sm">
              <Link to="/about">
                ABOUT
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-beige transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group text-beige text-sm">
              <Link to="/projects">
                PROJECTS
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-beige transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="bg-btnbg text-btntextcol px-3 py-2 text-sm hover:opacity-80">
                  LET'S TALK
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-beige text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="bg-navbg w-full h-screen absolute  left-0 z-30 border-t-2 border-bordercol">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li className="text-beige text-sm tracking-wide">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li className="text-beige text-sm">
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                ABOUT
              </Link>
            </li>
            <li className="text-beige text-sm">
              <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="bg-btnbg text-btntextcol px-4 py-2 text-sm hover:opacity-80">
                  LET'S TALK
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
