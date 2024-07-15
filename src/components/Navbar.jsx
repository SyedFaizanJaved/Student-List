// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/'); // Ensure we are on the Student List page
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Student Management</div>
        <div className='flex flex-row-reverse '>
        <form onSubmit={handleSearchSubmit} className="flex">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-l mx-2"
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-r"
          >
            Search
          </button>
        </form>
        <div className="flex space-x-1 text-white">
          <Link to="/form"  className="p-2 bg-blue-700 rounded hover:bg-blue-800 transition duration-300 mr-2" >Form</Link>
          <Link to="/StudentList" className="p-2 bg-blue-700 rounded hover:bg-blue-800 transition duration-300">Student List</Link>
        </div>
       
        </div>
      </div>
    </nav>
  );
};

export default Navbar;