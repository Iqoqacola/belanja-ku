import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ isProduct, isLogin, searchValue, onSearchChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClickHamburger = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="navbar">
      <div className="navbar border-b-1 border-border-color fixed bg-base-200 shadow-sm z-10 w-full px-4">
        {/* START */}
        <div className="navbar-start">
          <Link
            to={"/"}
            className="btn btn-ghost text-xl p-4 flex items-center gap-2"
          >
            <img src="/store.svg" alt="Icon Store" className="w-8" />
            <h4>BelanjaKu</h4>
          </Link>

          {/* Hamburger menu (mobile only) */}
          <button
            id="hamburger"
            className="lg:hidden "
            onClick={handleClickHamburger}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* CENTER: nav menu */}
        <div
          id="nav-menu"
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-base-200 py-2 px-4 lg:flex lg:static lg:w-auto lg:bg-transparent lg:p-0 lg:items-center lg:gap-6`}
        >
          <Link
            className="btn btn-ghost text-xl block lg:inline-block"
            to={"/"}
          >
            HOME
          </Link>
          <Link
            className="btn btn-ghost text-xl block lg:inline-block"
            to={"/product"}
          >
            PRODUCT
          </Link>
          <Link
            className="btn btn-ghost text-xl block lg:inline-block"
            to={"/about"}
          >
            ABOUT
          </Link>
        </div>

        {/* END */}
        <div className="navbar-end hidden lg:flex items-center gap-4 mr-4">
          {isProduct && (
            <div className="relative w-56">
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>
          )}

          {!isLogin && (
            <Link
              to={"/login"}
              className="btn btn-ghost text-xl p-2 flex items-center gap-2"
            >
              <img src="/profile.svg" alt="Icon Store" className="w-6" />
              <h4>Login</h4>
            </Link>
          )}

          {isLogin && (
            <Link
              to={"/login"}
              className="btn btn-ghost text-xl p-2 flex items-center gap-2"
            >
              <img src="/profile.svg" alt="Icon Store" className="w-6" />
              <h4>Username</h4>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
