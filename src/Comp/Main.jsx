import React from 'react';
import Navbar from './Navbar';
import ProfileHeader from './ProfileHeader';
import ProfileCard from './ProfileCard';
import SkillsCard from './SkillsCard';
import DetailsSection from './DetailsSection';

const Main = () => {
  return (
    // 'w-full' added to ensure it takes full available width
    <div className="min-h-screen bg-gray-50/50 w-full overflow-hidden">
      <Navbar />
      
      <div className="p-6 lg:p-10 w-full">
        
        <ProfileHeader />

        {/* MAIN GRID LAYOUT */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            
            {/* Left Column (Profile + Skills) */}
            <div className="xl:col-span-4 space-y-6">
                <ProfileCard />
                <SkillsCard />
            </div>

            {/* Right Column (Details) */}
            <div className="xl:col-span-8">
                <DetailsSection />
            </div>

        </div>
      </div>
    </div>
  );
};

export default Main;