import React from 'react';
import { ActiveLink } from './active-link';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useAppStore } from '../../store';
import { AuthService } from '../../services/auth.service';
import { IconButton, SpeedDial, SpeedDialHandler, SpeedDialContent, SpeedDialAction} from "@material-tailwind/react";
// import { PlusIcon, HomeIcon, CogIcon, Square3Stack3DIcon} from "@heroicons/react/24/outline";

const TopNavbar: React.FC = () => {
  const user = useAppStore.use.user();

  const logOut = () => {
    new AuthService().logout();
  }

  return (
    <div className="flex items-center text-sm bg-dmonsec rounded-xl">
      <ActiveLink to="/notifications" className="text-dm text-center shadow-inner font-bold py-2 px-4 block rounded-full">
        <FontAwesomeIcon icon={faBell} />
      </ActiveLink>
      { user ? (
        <>
          <Link to="" className="text-dmcont text-center shadow-inner hover:bg-dmons hover:text-dmonseccont font-bold py-2 px-4 block rounded-full" onClick={logOut}>
            Logout
          </Link>
          <Link to="/profile">
            <img src={user.photoUrl} alt="Profile" className="w-16 h-16 text-dmcont text-center shadow-inner hover:bg-dmons  hover:text-dms font-bold block rounded-full" />
          </Link>
        </>
      ) : (
        <>
          <ActiveLink to="/login" className="text-dmonseccont text-center shadow-inner focus:text-dmonsec focus:bg-dmseccont font-bold py-2 px-4 block rounded-full">Login</ActiveLink>
          <ActiveLink to="/register" className="text-dmonseccont text-center shadow-inner focus:text-dmonsec focus:bg-dmseccont font-bold py-2 px-4 block rounded-full">Register</ActiveLink>
        </>
      )}
    </div>
  );
}

export {
  TopNavbar,
};