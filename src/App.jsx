// import React from 'react';
import Main from './Comp/Main';
import Sidebar from './Comp/Sidebar';

function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen font-['Poppins']">
        <Sidebar/>
        
        {/* Right Side Content Area */}
        {/* Yahan se padding hata di hai taakay Navbar full width ho */}
        <div className="flex-1 lg:ml-[280px] transition-all duration-300 w-full">
            <Main/>
        </div>
    </div>
  );
}

export default App;