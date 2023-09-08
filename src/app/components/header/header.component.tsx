import React, { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Routes, Link, useLocation } from 'react-router-dom'

import BellIcon  from '@heroicons/react/24/outline/BellIcon';
import Bars3Icon  from '@heroicons/react/24/outline/Bars3Icon';
import MoonIcon from '@heroicons/react/24/outline/MoonIcon';
import SunIcon from '@heroicons/react/24/outline/SunIcon';
//import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon';
const UserIcon = UserCircleIcon;

import { openRightDrawer } from '../../../features/common';
import { RIGHT_DRAWER_TYPES } from '../../constants';
import { useAuth } from '../../../features/auth/use-auth';

const AuthControls = () => {
  return (
  <>
      {/* Profile icon, opening menu on click */}
      <div className="dropdown dropdown-end ml-4">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <UserIcon className="w-10"/>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li className="justify-between">
            <Link to={'/login'}>Login</Link>
          </li>
          <li className=''>
            <Link to={'/register'}>Register</Link>
          </li>
        </ul>
      </div>
  </>
  )
};

const UserControls = ({ user }: any) => {
  const dispatch = useDispatch();
  const { noOfNotifications, pageTitle } = useSelector((state:any) => state.header);

  // Opening right sidebar for notification
  const openNotification = () => {
    dispatch(openRightDrawer({ 
      header: 'Notifications', 
      bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION,
    }));
  }

  const logoutUser = () => {
      localStorage.clear();
      window.location.href = '/';
  }

  return (
    <>
      {/* Notification icon */}
      <button className="btn btn-ghost ml-4 btn-circle" onClick={() => openNotification()}>
        <div className="indicator">
          <BellIcon className="h-6 w-6"/>
          {noOfNotifications > 0 ? <span className="indicator-item badge badge-secondary badge-sm">{noOfNotifications}</span> : null }
        </div>
      </button>

      {/* Profile icon, opening menu on click */}
      <div className="dropdown dropdown-end ml-4">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user.photoUrl} alt="profile" />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li className="justify-between">
            <Link to={'/app/settings-profile'}>
              Profile Settings
              <span className="badge">New</span>
            </Link>
          </li>
          <li className=''><Link to={'/app/settings-billing'}>Bill History</Link></li>
          <div className="divider mt-0 mb-0"></div>
          <li><a onClick={logoutUser}>Logout</a></li>
        </ul>
      </div>
    </>
  );
}

const Header = () => {
    const dispatch = useDispatch();
    const { noOfNotifications, pageTitle } = useSelector((state:any) => state.header);
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme'));
    const auth = useAuth();

    useEffect(() => {
        themeChange(false);
        // 👆 false parameter is required for react projects

        if (currentTheme === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
              setCurrentTheme('dark');
              //setCurrentTheme('dracula');
            }
            else {
              setCurrentTheme('light');
            }
        }
      }, [])

    return(
        <>
            <div className="navbar  flex justify-between bg-base-100  z-10 shadow-md ">

                {/* Menu toogle for mobile view or small screen */}
                <div className="">
                    <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
                    <Bars3Icon className="h-5 inline-block w-5"/></label>
                    <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
                </div>

            <div className="order-last">

                {/* Multiple theme selection, uncomment this if you want to enable multiple themes selection, 
                also includes corporate and retro themes in tailwind.config file */}
                
                <select className="select select-sm mr-4" data-choose-theme defaultValue="Theme">
                    <option disabled>Theme</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="corporate">Corporate</option>
                    <option value="business">Business</option>
                    <option value="dracula">Dracula</option>
                </select>

            {/* Light and dark theme selection toogle **/}
            {/*<label className="swap ">
                <input type="checkbox"/>
                <SunIcon data-set-theme="light" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 "+(currentTheme === "dracula" ? "swap-on" : "swap-off")}/>
                <MoonIcon data-set-theme="dracula" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 "+(currentTheme === "light" ? "swap-on" : "swap-off")} />
            </label> */}

{auth.user && <UserControls user={auth.user} /> || <AuthControls />}
            </div>
            </div>
        </>
    )
}

export {
  Header,
}

export default Header;
