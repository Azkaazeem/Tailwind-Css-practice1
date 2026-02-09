import React from 'react';

// Reusable Menu Item Component
const MenuItem = ({ icon, label, isActive, badge }) => (
  <li className={`flex items-cnter justify-between p-3 rounded-lg cursor-pointer transition-colors ${isActive ? 'text-blue-500 bg-blue-50' : 'text-gray-600 hover:bg-gray-100'}`}>
    <div className="flex items-center gap-3">
      <span className="text-lg">{icon}</span>
      <span className="font-medium text-sm">{label}</span>
    </div>
    {badge && (
      <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
        {badge}
      </span>
    )}
  </li>
);

// Group Header Component
const MenuGroup = ({ title }) => (
  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-6 mb-3 px-3">
    {title}
  </h3>
);

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen border-r border-gray-100 hidden md:block fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 flex items-center gap-2">
        <img src="/logo.png" alt="Able Pro" className="h-8" />
      </div>

      <nav className="px-4 pb-6">
        <MenuGroup title="Navigation" />
        <ul>
          <MenuItem icon="Of" label="Dashboard" badge="2" />
          <MenuItem icon="Ly" label="Layouts" />
        </ul>

        <MenuGroup title="Widget" />
        <ul>
          <MenuItem icon="St" label="Statistics" />
          <MenuItem icon="Dt" label="Data" />
          <MenuItem icon="Ch" label="Chart" />
        </ul>

        <MenuGroup title="Admin Panel" />
        <ul>
          <MenuItem icon="On" label="Online Courses" />
          <MenuItem icon="Mb" label="Membership" />
          <MenuItem icon="He" label="Helpdesk" />
          <MenuItem icon="In" label="Invoice" />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;