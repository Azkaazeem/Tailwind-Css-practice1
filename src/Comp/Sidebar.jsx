import React from 'react';

// 1. Data ko component se bahar nikal diya taakay code clean rahe
const MENU_ITEMS = [
  {
    group: 'NAVIGATION',
    items: [
      { icon: 'fa-gauge-high', label: 'Dashboard', badge: '2', active: true },
      { icon: 'fa-layer-group', label: 'Layouts', arrow: true },
    ],
  },
  {
    group: 'WIDGET',
    items: [
      { icon: 'fa-chart-pie', label: 'Statistics' },
      { icon: 'fa-database', label: 'Data' },
      { icon: 'fa-chart-area', label: 'Chart' },
    ],
  },
  {
    group: 'ADMIN PANEL',
    items: [
      { icon: 'fa-book', label: 'Online Courses', arrow: true },
      { icon: 'fa-user', label: 'Membership', arrow: true },
      { icon: 'fa-headset', label: 'Helpdesk', arrow: true },
      { icon: 'fa-file-invoice', label: 'Invoice', arrow: true },
    ],
  },
  {
    group: 'UI COMPONENTS',
    items: [
      { icon: 'fa-box-open', label: 'Components' },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="w-[280px] h-screen bg-white border-r border-dashed border-gray-300 fixed left-0 top-0 overflow-y-auto hidden lg:flex flex-col font-['Poppins'] z-50">
      
      {/* --- Logo Section --- */}
      <div className="px-6 py-6 flex items-center gap-2">
        <img src="/logo.png" alt="Able Pro" className="h-8" />
        <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full mt-1">
          v9.6.2
        </span>
      </div>

      {/* --- Profile Card --- */}
      <div className="mx-6 mb-6 p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3 hover:bg-gray-100 transition-colors cursor-pointer group">
        <img src="/ava1.png" alt="User" className="w-10 h-10 rounded-full object-cover" />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-gray-700 leading-tight truncate">Jonh Smith</div>
          <div className="text-xs text-gray-500 mt-0.5">Administrator</div>
        </div>
        <i className="fa-solid fa-bars-staggered text-xs text-gray-400 group-hover:text-gray-600"></i>
      </div>

      {/* --- Navigation Menu --- */}
      <nav className="flex-1 px-3 space-y-6 pb-10">
        {MENU_ITEMS.map((group, index) => (
          <div key={index}>
            {/* Group Heading */}
            <div className="px-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
              {group.group}
            </div>
            
            {/* Items List */}
            <ul className="space-y-1">
              {group.items.map((item, i) => (
                <li key={i}>
                  <div className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-[14px] transition-all duration-200 cursor-pointer group mx-1
                    ${item.active 
                      ? 'text-blue-500 font-medium bg-blue-50/50' 
                      : 'text-gray-600 hover:text-blue-500 hover:bg-gray-50'
                    }`}>
                    
                    {/* Icon & Label */}
                    <div className="flex items-center gap-3">
                      <span className={`w-5 text-center text-sm ${item.active ? 'text-blue-500' : 'text-gray-400 group-hover:text-blue-500'}`}>
                        <i className={`fa-solid ${item.icon}`}></i>
                      </span>
                      <span>{item.label}</span>
                    </div>

                    {/* Badge or Arrow */}
                    <div>
                      {item.badge && (
                        <span className="bg-blue-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.arrow && (
                        <i className="fa-solid fa-chevron-right text-[10px] text-gray-400 group-hover:text-blue-500"></i>
                      )}
                    </div>

                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

    </aside>
  );
};

export default Sidebar;