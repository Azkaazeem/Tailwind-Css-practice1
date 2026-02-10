import React from 'react';

const SkillsCard = () => {
  const skills = [
    { name: 'Junior', width: '30%' },
    { name: 'UX Researcher', width: '80%' },
]

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 mt-6">
      <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
        Skills
        <i className="fa-solid fa-pen text-gray-300 text-xs ml-auto cursor-pointer"></i>
      </h3>

      <div className="space-y-4">
        {skills.map((skill, index) => (
            <div key={index}>
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.width}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: skill.width }}></div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;