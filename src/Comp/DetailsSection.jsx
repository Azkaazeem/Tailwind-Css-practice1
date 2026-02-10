import React from 'react';

const DetailsSection = () => {
  return (
    <div className="space-y-6">
      
      {/* About Me Card */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h3 className="font-bold text-gray-800 mb-4">About me</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
            Hello, I'm Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website, I create digital Products a more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at.
        </p>
      </div>

      {/* Personal Details Card */}
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h3 className="font-bold text-gray-800 mb-6">Personal Details</h3>
        
        {/* CSS Grid for Details List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
            
            <div>
                <p className="text-xs text-gray-400 mb-1">Full Name</p>
                <p className="text-sm font-medium text-gray-700">Anshan Handgun</p>
            </div>
            <div>
                <p className="text-xs text-gray-400 mb-1">Father Name</p>
                <p className="text-sm font-medium text-gray-700">Mr. Deepen Handgun</p>
            </div>

            <div>
                <p className="text-xs text-gray-400 mb-1">Phone</p>
                <p className="text-sm font-medium text-gray-700">(+1-876) 8654 239 581</p>
            </div>
            <div>
                <p className="text-xs text-gray-400 mb-1">Country</p>
                <p className="text-sm font-medium text-gray-700">New York</p>
            </div>

            <div>
                <p className="text-xs text-gray-400 mb-1">Email</p>
                <p className="text-sm font-medium text-gray-700">anshan.dh81@gmail.com</p>
            </div>
            <div>
                <p className="text-xs text-gray-400 mb-1">Zip Code</p>
                <p className="text-sm font-medium text-gray-700">956 754</p>
            </div>

            <div className="md:col-span-2">
                <p className="text-xs text-gray-400 mb-1">Address</p>
                <p className="text-sm font-medium text-gray-700">Street 110-B Kalians Bag, Dewan, M.P. New York</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsSection;