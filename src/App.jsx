import React from 'react';
import Sidebar from './compenent/Sidebar';
import Header from './compenent/Header'
import ProfileCard  from './compenent/ProfileCard';
import ProfileDetails from './compenent/ProfileDetails';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Sidebar - Fixed on Left */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="md:ml-64 transition-all duration-300">
        
        {/* Header - Sticky Top */}
        <Header />

        {/* Page Content */}
        <main className="p-6">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <span>Home</span> <span>&gt;</span>
            <span>Users</span> <span>&gt;</span>
            <span className="text-gray-800 font-medium">Account Profile</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-6">Account Profile</h1>

          {/* Grid Layout for Profile Sections */}
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Left Column (33%) */}
            <div className="w-full lg:w-1/3">
              <ProfileCard />
            </div>

            {/* Right Column (66%) */}
            <div className="w-full lg:w-2/3">
              <ProfileDetails />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;