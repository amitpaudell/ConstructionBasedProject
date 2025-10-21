import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Dashboard() {
  const navigations = [
    {
      name: 'Dashboard',
      path: '/admin',
    },
    {
      name: 'Services',
      path: '/admin/serviced',
    },
    {
      name: 'Projects',
      path: '/admin/projectd',
    },
  ];
  return (
    <div className="flex flex-row items-center">
      <nav>
        <div className="flex flex-col bg-[#f2f4f7]  justify-between relative container mx-auto  p-6">
          {/* Logo */}
          <div>
            <h1 className="font-bold  text-xl text-dark-grayish-blue">
              Admin Panel
            </h1>
          </div>

          {/* Items */}
          <div className="flex flex-col  space-y-32 text-md">
            {navigations.map((item) => {
              return (
                <NavLink
                  className="hover:text-dark-grayish-blue"
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Dashboard;
