// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file
import { useState } from 'react'; // Import useState for toggling the mobile menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo on the left */}
    <div className='navbaritem'>
      
      
      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
      <li className="logo">
      <img className="img1" src="src/assets/img/blissfullogo.png" alt="" />
        </li>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/services">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact">Contact us</Link>
        </li>
        <li className="nav-item">
        <button className='footerbut'>Get Started</button>
        </li>
      </ul>
     
        

      {/* Burger Menu (appears on mobile) */}
      <div className="burger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;