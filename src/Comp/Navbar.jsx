import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white h-16 px-6 flex items-center justify-between sticky top-0 z-40">
      {/* Search Bar */}
      <div className="flex items-center gap-4">
         {/* Mobile Menu Button (Visible only on small screens) */}
        <button className="lg:hidden text-gray-500 text-lg">
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className="relative hidden md:block">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input 
                type="text" 
                placeholder="Ctrl + K" 
                className="bg-gray-50 border border-gray-200 text-sm rounded-md pl-9 pr-4 py-1.5 focus:outline-none focus:border-blue-500 w-64 text-gray-600"
            />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4 text-gray-500">
        <button className="hover:text-blue-500 transition"><i className="fa-regular fa-sun"></i></button>
        <button className="hover:text-blue-500 transition"><i className="fa-solid fa-language"></i></button>
        <button className="hover:text-blue-500 transition"><i className="fa-solid fa-gear"></i></button>
        <button className="relative hover:text-blue-500 transition">
            <i className="fa-solid fa-bell"></i>
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center">3</span>
        </button>
        <img src="/ava1.png" alt="Profile" className="w-8 h-8 rounded-full border border-gray-200 cursor-pointer" />
      </div>
    </header>
  );
};

export default Navbar;