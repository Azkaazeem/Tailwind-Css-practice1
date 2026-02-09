import React from 'react';

// Reusable Info Row Component
const InfoRow = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-50 last:border-0">
    <span className="text-sm text-gray-500 w-1/3 uppercase font-medium">{label}</span>
    <span className="text-sm text-gray-800 font-medium w-2/3">{value}</span>
  </div>
);

const ProfileDetails = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 relative">
       {/* Tab Navigation (Visual only for now) */}
       <div className="flex items-center gap-6 border-b border-gray-100 mb-6 overflow-x-auto">
         {['Profile', 'Personal Details', 'My Account', 'Change Password', 'Role', 'Settings'].map((tab, index) => (
             <button 
                key={index}
                className={`pb-3 text-sm font-medium whitespace-nowrap ${index === 0 ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
             >
                {index === 0 ? `👤 ${tab}` : index === 1 ? `📄 ${tab}` : tab}
             </button>
         ))}
       </div>

       {/* About Me Section */}
       <div className="mb-8">
         <h3 className="text-sm font-bold text-gray-800 mb-3 uppercase">About me</h3>
         <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-600 leading-relaxed">
            Hello, I'm Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website, I create digital Products a more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at.
         </div>
       </div>

       {/* Personal Details Section */}
       <div>
         <h3 className="text-sm font-bold text-gray-800 mb-4 uppercase">Personal Details</h3>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            <InfoRow label="Full Name" value="Anshan Handgun" />
            <InfoRow label="Father Name" value="Mr. Deepen Handgun" />
            <InfoRow label="Phone" value="(+1-876) 8654 239 581" />
            <InfoRow label="Country" value="New York" />
            <InfoRow label="Email" value="anshan.dh81@gmail.com" />
            <InfoRow label="Zip Code" value="956 754" />
         </div>
         
         <div className="mt-2">
            <InfoRow label="Address" value="Street 110-B Kalians Bag, Dewan, M.P. New York" />
         </div>
       </div>

       {/* Floating Buy Now Button (As seen in image) */}
       <button className="fixed bottom-8 right-8 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg font-bold hover:bg-red-700 transition flex items-center gap-2 z-50">
          🛒 Buy Now
       </button>
    </div>
  );
};

export default ProfileDetails;