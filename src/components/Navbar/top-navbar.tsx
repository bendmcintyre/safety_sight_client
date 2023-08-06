import React from 'react';
import { ActiveLink } from './active-link';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useAppStore } from '../../store';
import { AuthService } from '../../services/auth.service';

const TopNavbar: React.FC = () => {
  const user = useAppStore.use.user();

  const logOut = () => {
    new AuthService().logout();
  }

  return (
    <div className="flex items-center text-sm bg-dms">
      <ActiveLink to="/notifications" className="text-white text-center shadow-inner hover:bg-secondary hover:text-white font-bold py-2 px-4 block rounded-full">
        <FontAwesomeIcon icon={faBell} />
      </ActiveLink>
      { user ? (
        <>
          <Link to="" className="text-white text-center shadow-inner hover:bg-secondary hover:text-white font-bold py-2 px-4 block rounded-full" onClick={logOut}>
            Logout
          </Link>
          <Link to="/profile">
            <img src={user.photoUrl} alt="Profile" className="w-16 h-16 text-white text-center shadow-inner hover:bg-secondary  hover:text-white font-bold block rounded-full" />
          </Link>
        </>
      ) : (
        <>
          <ActiveLink to="/login" className="text-white text-center shadow-inner hover:bg-secondary hover:text-white font-bold py-2 px-4 block rounded-full">Login</ActiveLink>
          <ActiveLink to="/register" className="text-white text-center shadow-inner hover:bg-secondary hover:text-white font-bold py-2 px-4 block rounded-full">Register</ActiveLink>
        </>
      )}
    </div>
  );
}

export {
  TopNavbar,
};