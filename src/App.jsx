// import React from 'react';
import Main from './Comp/Main';
import Sidebar from './Comp/Sidebar';

function App() {
  return (
    // 1. 'flex' hata diya (Zaroorat nahi kyun ke Sidebar fixed hai)
    // 2. 'h-screen overflow-hidden' rakha taakay body scroll na ho
    <div className="bg-gray-50 h-screen overflow-hidden font-['Poppins']">
        
        <Sidebar/>
        
        {/* Right Side Content Area */}
        {/* 1. 'w-full' aur 'flex-1' hata diya (Horizontal scroll fix) */}
        {/* 2. 'h-full overflow-y-auto' rakha (Vertical scroll fix) */}
        <div className="lg:ml-[280px] transition-all duration-300 h-full overflow-y-auto custom-scrollbar">
            <Main/>
        </div>

    </div>
  );
}

export default App;