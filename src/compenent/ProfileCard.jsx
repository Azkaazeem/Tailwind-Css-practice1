import React from 'react';

// Reusable Stat Component
const StatItem = ({ count, label }) => (
  <div className="text-center">
    <h3 className="text-xl font-bold text-gray-800">{count}</h3>
    <p className="text-xs text-gray-500">{label}</p>
  </div>
);

// Reusable Skill Bar Component
const SkillBar = ({ label, percentage, colorClass }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-600">{label}</span>
      <span className="text-sm text-gray-500">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-1.5">
      <div 
        className={`h-1.5 rounded-full ${colorClass}`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex flex-col items-center">
        <div className="relative mb-4">
           {/* Pink Background Circle */}
           <div className="h-20 w-20 bg-pink-100 rounded-full flex items-center justify-center overflow-hidden">
                <img src="/ava2.png" alt="User" className="h-18 w-18 object-cover" />
           </div>
           <span className="absolute bottom-0 right-0 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded">Pro</span>
        </div>
        
        <h2 className="text-lg font-bold text-gray-800">Anshan H.</h2>
        <p className="text-sm text-gray-500 mb-6">Project Manager</p>

        <div className="flex justify-between w-full px-4 mb-6">
          <StatItem count="86" label="Post" />
          <StatItem count="40" label="Project" />
          <StatItem count="4.5K" label="Members" />
        </div>

        <div className="w-full space-y-3">
           <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
             📧 anshan@gmail.com
           </button>
           <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
             📞 (+1-876) 8654 239 581
           </button>
           <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
             MZ New York
           </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-gray-700 mb-4 bg-gray-100 inline-block px-2 py-1 rounded text-xs uppercase">Skills</h3>
        <SkillBar label="Junior" percentage={30} colorClass="bg-blue-500" />
        <SkillBar label="UX Researcher" percentage={80} colorClass="bg-blue-500" />
        <SkillBar label="Wordpress" percentage={90} colorClass="bg-blue-500" />
        <SkillBar label="HTML" percentage={30} colorClass="bg-blue-500" />
        <SkillBar label="Graphic Design" percentage={95} colorClass="bg-blue-500" />
        <SkillBar label="Code Style" percentage={75} colorClass="bg-blue-500" />
      </div>
    </div>
  );
};

export default ProfileCard;