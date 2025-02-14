import { Link, NavLink } from "react-router";


const NavBar = () => {
  const navLinkClasses = ({ isActive }) => 
    `inline-block px-4 py-2 transition-colors duration-200 hover:text-cyan-400 ${
      isActive 
        ? 'text-cyan-400 border-b-2 border-white' 
        : 'text-white hover:border-b-2 border-white'
    }`;
  return (
    <div className=" mx-5 bg-purple-600 mt-5 rounded-t-3xl">
      <nav className="flex justify-around bg-purple-600  py-10 container mx-auto px-4">
        <div className="text-white text-2xl font-semibold ">Gadget Heaven</div>
        <div className="flex items-center space-x-8">
        <div className="text-white space-x-6">
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
        <div className="flex space-x-4">
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
          </Link >
          <Link to="/dashboard/wishlist">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </Link>
          </div>
      </nav>
    </div>
  );
};

export default NavBar;
