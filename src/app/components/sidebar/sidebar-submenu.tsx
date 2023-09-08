import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import ChevronDownIcon from  '@heroicons/react/24/outline/ChevronDownIcon'

function SidebarSubmenu({ submenu, name, icon }:any){
  const location = useLocation()
  const [isExpanded, setIsExpanded] = useState(false)

  /** Open Submenu list if path found in routes, this is for directly loading submenu routes  first time */
  useEffect(() => {
    const shouldExpand = submenu.filter((m:any) => { return m.path === location.pathname })[0];
    if (shouldExpand) {
      setIsExpanded(true);
    }
  }, [])

  return (
    <div className='flex flex-col'>
      <div className='w-full' onClick={() => setIsExpanded(!isExpanded)}>
        {icon} {name} 
        <ChevronDownIcon className={'w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all  ' + (isExpanded ? 'rotate-180' : '')}/>
      </div>

      {/** Submenu list */}
      <div className={` w-full `+ (isExpanded ? "" : "hidden")}>
        <ul className={`menu menu-compact`}>
        {
          submenu.map((route:any, k:any) => {
            const isActive = location.pathname === route.path;
            return(
              <li key={k}>
                {/*
                <Link to={route.path}>
                  {route.icon} {route.name}
                  {
                    isActive ? (<span className="absolute mt-1 mb-1 inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary " aria-hidden="true"></span>) : null
                  }
                </Link>
                */}
                <NavLink 
                    to={route.path}
                    end
                    className={`${isActive ? 'font-semibold bg-base-200 ' : 'font-normal'}`}
                  >
                  {route.icon} {route.name}
                  {
                    isActive ? (<span className="absolute mt-1 mb-1 inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary " aria-hidden="true"></span>) : null
                  }
                </NavLink>
              </li>
            )
          })
        }
        </ul>
      </div>
    </div>
  )
}

export {
  SidebarSubmenu,
}

export default SidebarSubmenu;