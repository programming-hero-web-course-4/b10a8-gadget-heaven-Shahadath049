import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className=" mx-5 bg-purple-600 mt-5 rounded-t-3xl">
      <nav className="flex justify-between items-center  bg-purple-600  py-10 container mx-auto px-4">
        <div className="text-white text-2xl font-semibold ">Gadget Heaven</div>
        <div className="flex items-center space-x-8">
          <div className="text-white space-x-6">
            <Link
              className="hover:text-gray-200 hover:border-b-2 border-white"
              to={"/"}
            >
              {" "}
              Home{" "}
            </Link>
            <Link
              to={"/statistics"}
              className="hover:text-gray-200 hover:border-b-2 border-white"
            >
              Statistics
            </Link>
            <Link
              to={"/dashboard"}
              className="hover:text-gray-200 hover:border-b-2 border-white"
            >
              Dashboard
            </Link>
          </div>
          <div className="flex space-x-4">
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
                  d="M3 3h18v18H3z"
                />
              </svg>
            </button>
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
