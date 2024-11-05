import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <!-- Nav Container --> */}
      <nav className="relative container mx-auto p-6">
        {/* <!-- Flex Container For All Items --> */}
        <div className="flex items-center justify-between">
          {/* <!-- Flex Container For Logo/Menu --> */}
          <div className="flex items-center space-x-20">
            {/* <!-- Logo --> */}
            <img src="images/logo.svg" alt="" />
            {/* <!-- Left Menu --> */}
            <div className="space-x-8 font-bold lg:flex">
              <NavLink
                to="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Features
              </NavLink>
              <NavLink
                to="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Pricing
              </NavLink>
              <NavLink
                to="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Resources
              </NavLink>
            </div>
          </div>

          {/* <!-- Right Buttons Menu --> */}
          <div className="items-center space-x-6 font-bold text-grayishViolet lg:flex">
            <div className="hover:text-veryDarkViolet">Login</div>
            <NavLink
              to="#"
              className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
            >
              Sign Up
            </NavLink>
          </div>

          {/* <!-- Hamburger Button --> */}
          <button
            id="menu-btn"
            className="block hamburger lg:hidden focus:outline-none"
            type="button"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div
          id="menu"
          className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <NavLink to="#" className="w-full text-center">
              Features
            </NavLink>
            <NavLink to="#" className="w-full text-center">
              Pricing
            </NavLink>
            <NavLink to="#" className="w-full text-center">
              Resources
            </NavLink>
            <NavLink
              to="#"
              className="w-full pt-6 border-t border-gray-400 text-center"
            >
              Login
            </NavLink>
            <NavLink
              to="#"
              className="w-full py-3 text-center rounded-full bg-cyan"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
