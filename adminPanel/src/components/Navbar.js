import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 px-12 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        Nomadic{" "}
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">
          Tours
        </Link>
        <Link to="/users" className="hover:bg-gray-700 px-3 py-2 rounded">
          Users
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
