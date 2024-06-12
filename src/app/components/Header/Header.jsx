import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const Navbar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <nav className="w-full h-auto bg-black lg:px-24 md:px-16 sm:px-14 px-12 py-2 shadow-md">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/" className="text-3xl text-red-700 font-semibold tracking-[0.1rem]">
                Codigo Certo
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaTimes
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  ) : (
                    <FaBars
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16">
              {Navbar.map((item, index) => (
                <li key={index} className="mt-2 ml-5 uppercase hover:cursor-pointer">
                  <Link
                    to={item.link}
                    className="text-red-700 text-[1.15rem] font-medium tracking-wider hover:text-red-900 ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <button className="bg-red-700 text-[1.1rem] font-normal text-black px-5 py-1.5 rounded hover:bg-red-900 ease-out duration-700 lg:ml-10 md:ml-6 sm:ml-0 ml-0">
                REGISTER
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;