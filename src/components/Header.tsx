import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const HamburgerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800" onClick={closeMenu}>
            Skidemy
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500 transition-colors"}>Home</NavLink>
            <NavLink to="/courses" className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500 transition-colors"}>Courses</NavLink>
            <NavLink to="/admissions" className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500 transition-colors"}>Admissions</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500 transition-colors"}>About us</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500 transition-colors"}>Contacts</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-800 font-medium hover:text-blue-500 transition-colors">Log In</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Sign Up
            </Link>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </header>

      <div 
        className={`fixed inset-0 z-40 bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-16">
          <nav className="flex flex-col items-center space-y-8 text-xl">
            <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-700"} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/courses" className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-700"} onClick={closeMenu}>Courses</NavLink>
            <NavLink to="/admissions" className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-700"} onClick={closeMenu}>Admissions</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-700"} onClick={closeMenu}>About us</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-700"} onClick={closeMenu}>Contacts</NavLink>
          </nav>
          <div className="mt-12 flex flex-col items-center space-y-6 w-full px-8">
            <Link to="/login" className="w-full text-center py-3 text-xl text-gray-800 font-medium border border-gray-300 rounded-lg" onClick={closeMenu}>
              Log In
            </Link>
            <Link to="/signup" className="w-full text-center py-3 text-xl bg-blue-600 text-white rounded-lg font-medium" onClick={closeMenu}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;