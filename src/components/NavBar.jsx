import { Link, NavLink } from "react-router";
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();

  const handleWishlistClick = () => {
    navigate('/dashboard/wishlist');
  };
  const navLinkClasses = ({ isActive }) => 
    `inline-block px-4 py-2 transition-colors duration-200 hover:text-cyan-400 ${
      isActive 
        ? 'text-cyan-400 border-b-2 border-white' 
        : 'text-white hover:border-b-2 border-white'
    }`;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="lg:pt-5">
      <div className="lg:mx-5 bg-purple-600  rounded-t-3xl">
      <nav className="lg:flex lg:justify-around bg-purple-600  py-10 container mx-auto px-4 pt-5">
        <div className="text-white text-2xl font-semibold lg:order-1 text-center">
        <div className="lg:hidden">
          <button
            className="p-2 bg-white/10 rounded-full hover:bg-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
          
          Gadget Heaven</div>
        
        <div className={`lg:flex lg:items-center lg:space-x-8 lg:order-3 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="text-white space-x-6 lg:space-x-0 lg:order-2 text-center lg:text-left"> 
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/statistics" className={navLinkClasses}>
              Statistics
            </NavLink>
            <NavLink to="/dashboard" className={navLinkClasses}>
              Dashboard
            </NavLink>
          </div>
        </div>
        <div className="lg:flex lg:space-x-4 lg:order-4 flex items-center justify-between">
          <Link to="/dashboard/cart">
          <button className="p-2 bg-white/10 rounded-full hover:bg-white/20">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </Link>
          <button
      onClick={handleWishlistClick}
      variant="ghost"
      size="icon"
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      aria-label="View wishlist"
    >
      <Heart className="w-6 h-6 text-white" />
    </button>
          </div>
      </nav>
    </div>
    </div>
  );
};

export default NavBar;

