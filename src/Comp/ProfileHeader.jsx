import React from 'react';

const ProfileHeader = () => {
  const tabs = ['Profile', 'Personal Details', 'My Account', 'Change Password', 'Role', 'Settings'];

  return (
    <div className="mb-6">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-2 flex items-center gap-2">
        <span>Home</span> <i className="fa-solid fa-chevron-right text-[8px]"></i>
        <span>Users</span> <i className="fa-solid fa-chevron-right text-[8px]"></i>
        <span className="text-gray-700">Account Profile</span>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Profile</h2>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-gray-100 p-1 px-4 flex flex-wrap gap-6 items-center overflow-x-auto">
        {tabs.map((tab, index) => (
            <button 
                key={index}
                className={`py-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap flex items-center gap-2
                ${index === 0 ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
                {index === 0 && <i className="fa-regular fa-user"></i>}
                {index === 1 && <i className="fa-regular fa-file-lines"></i>}
                {/* Icons for other tabs can be added similarly */}
                {tab}
            </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileHeader;