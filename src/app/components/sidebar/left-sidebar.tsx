import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import XMarkIcon  from '@heroicons/react/24/outline/XMarkIcon';

import { SidebarSubmenu } from './sidebar-submenu';
import { LeftSidebarRoutes } from '../../routes';

const LeftSidebar: React.FC = () => {
  const location = useLocation();

  const close = (evt: any) => {
    document.getElementById('left-sidebar-drawer')?.click();
  }

  const createNavLink = (route: any) => {
    const isActive = location.pathname === route.path;
    return (
      <NavLink
        end
        to={route.path}
        className={`${isActive ? 'font-semibold bg-base-200 ' : 'font-normal'}`}>
          {route.icon} {route.name}
          {
            isActive ? (<span className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
            aria-hidden="true"></span>) : null
          }
      </NavLink>
    );
  };
  
  return(
    <div className="drawer-side ">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label> 
      <ul className="menu pt-2 w-80 bg-base-100 text-base-content">
        <button className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden" onClick={close}>
          <XMarkIcon className="h-5 inline-block w-5"/>
        </button>

        <li className="mb-2 font-semibold text-xl">
          <Link to={'/app/welcome'}><img className="mask mask-squircle w-10" src="/logo192.png" alt="SafetySight Logo"/>SafetySight</Link> 
        </li>
        {
          LeftSidebarRoutes.map((route, k) => {
            return(
              <li key={k}>
              {
                route.submenu ? 
                  <SidebarSubmenu {...route}/> : 
                  createNavLink(route)
              }
              </li>
            )
          })
        }
    </ul>
  </div>
  )
}

export {
  LeftSidebar,
}

export default LeftSidebar;