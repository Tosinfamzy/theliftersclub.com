import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import illustration from "../assets/illustration-working.svg";

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
            <img src={logo} alt="" />
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
      {/* <!-- Hero Section --> */}
      <section id="hero">
        {/* <!-- Hero Container --> */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          {/* <!-- Content Container --> */}
          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
              More than just exercises
            </h1>
            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              Build your workouts or add your own excercises
            </p>
            <div className="mx-auto lg:mx-0">
              <a
                href="#"
                className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* <!-- Image --> */}
          <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
            <img src={illustration} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
