import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-container  text-beige py-6">
      <div className="bg-container px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="text-center mt-5 tracking-wider font-ballet md:text-left text-lg font-normal">
          © 2025 Vikas reserved
        </div>
        <div className="flex flex-wrap font-small tracking-wide justify-center md:justify-end space-x-6 text-sm">
          <Link to="/" className="hover:text-smalltext">
            Home
          </Link>
          <Link to="/about" className="hover:text-smalltext">
            About
          </Link>
          <Link to="/projects" className="hover:text-smalltext">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-smalltext">
            Contact
          </Link>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
