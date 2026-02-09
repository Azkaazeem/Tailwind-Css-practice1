import React from 'react';

const Header = () => {
  return (
    <header className="bg-white h-16 border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-10 md:ml-64">
      <div className="flex items-center gap-4">
        <button className="text-gray-500">
            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
        <div className="relative hidden sm:block">
          <input 
            type="text" 
            placeholder="Ctrl + K" 
            className="bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-blue-500"
          />
          <span className="absolute left-3 top-2 text-gray-400">🔍</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Icons can be added here using props or slots */}
        <span className="p-2 bg-gray-50 rounded-full cursor-pointer">Tb</span>
        <span className="p-2 bg-gray-50 rounded-full cursor-pointer">⚙️</span>
        <div className="relative">
             <span className="p-2 bg-gray-50 rounded-full cursor-pointer">🔔</span>
             <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>
        <img src="/ava1.png" alt="Profile" className="h-8 w-8 rounded-full cursor-pointer border border-gray-200" />
      </div>
    </header>
  );
};

export default Header;