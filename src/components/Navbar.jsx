import React from 'react';


const Navbar = () => {
    return (
      <nav className="bg-black p-6 text-white h-20 fixed top-0 right-0 left-0">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">PORTOFOLIO</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/projects" className="hover:text-gray-300">Projects</a></li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;