import React from 'react';

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 relative overflow-hidden text-center h-fit">
        {/* Pro Badge */}
        <span className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">Pro</span>
        
        {/* Avatar */}
        <div className="relative inline-block mb-3">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto overflow-hidden">
                 <img src="/ava2.png" alt="Anshan" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer shadow-sm border border-gray-100 text-gray-500 text-xs">
                 <i className="fa-solid fa-camera"></i>
            </div>
        </div>

        <h3 className="text-lg font-bold text-gray-800">Anshan H.</h3>
        <p className="text-xs text-gray-500 mb-6">Project Manager</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 mb-6 border-b border-gray-100 pb-6">
            <div>
                <h4 className="font-bold text-gray-800">86</h4>
                <p className="text-xs text-gray-400">Post</p>
            </div>
            <div>
                <h4 className="font-bold text-gray-800">40</h4>
                <p className="text-xs text-gray-400">Project</p>
            </div>
            <div>
                <h4 className="font-bold text-gray-800">4.5K</h4>
                <p className="text-xs text-gray-400">Members</p>
            </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-left">
            <div className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-regular fa-envelope text-gray-400"></i>
                <span>anshan@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-phone text-gray-400"></i>
                <span>(+1-876) 8654 239 581</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
                <i className="fa-solid fa-location-dot text-gray-400"></i>
                <span>New York</span>
            </div>
             <div className="flex items-center gap-3 text-sm text-blue-500">
                <i className="fa-solid fa-link text-gray-400"></i>
                <a href="#">https://anshan.dh.url</a>
            </div>
        </div>
    </div>
  );
};

export default ProfileCard;