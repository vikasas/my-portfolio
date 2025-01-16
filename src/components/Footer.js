import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-container text-beige py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left text-lg font-semibold">
          © 2025 YourCompanyName
        </div>

        <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
          <Link to="/" className="hover:text-hovercol">
            Home
          </Link>
          <Link to="/about" className="hover:text-hovercol">
            About
          </Link>
          <Link to="/services" className="hover:text-hovercol">
            Services
          </Link>
          <Link to="/contact" className="hover:text-hovercol">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
