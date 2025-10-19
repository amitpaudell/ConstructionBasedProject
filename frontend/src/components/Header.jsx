import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const navigations = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About Us',
      href: 'aboutus',
    },
    {
      name: 'Services',
      href: 'services',
    },
    {
      name: 'Projects',
      href: 'projects',
    },
    {
      name: 'Contact Us',
      href: 'contact',
    },
  ];
  return (
    <div>
      <nav>
        <div className="flex justify-between relative container mx-auto h-[4rem] p-6">
          {/* Logo */}
          <div>
            <h1 className="font-bold uppercase text-xl text-dark-grayish-blue">
              Unity Construction
            </h1>
          </div>

          {/* Items */}
          <div className="hidden md:flex space-x-6 text-md">
            {navigations.map((item) => {
              return (
                <NavLink
                  className="hover:text-dark-grayish-blue"
                  to={item.href}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
