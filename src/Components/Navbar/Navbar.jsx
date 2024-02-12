import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Homeicon } from "../../Icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="flex flex-wrap justify-between p-5 "
      style={{ backgroundColor: "#d1f076" }}
    >
      <Link to="/">
        <button><Homeicon /></button>
      </Link>

      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="blue"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`lg:flex lg:flex-wrap lg:gap-5 ${
          menuOpen ? "block flex-col w-full lg:w-auto lg:ml-auto" : "hidden"
        }`}
      >
        <Link to="/Community">
          <button type="button" className="w-full lg:w-auto">
            Community
          </button>
        </Link>

        <Link to="/Products">
          <button className="w-full lg:w-auto">Products</button>
        </Link>

        <Link to="/Shop">
          <button className="w-full lg:w-auto">Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
