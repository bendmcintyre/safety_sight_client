import React from 'react';
import { ActiveLink } from './active-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faHistory, faUserCog, faCog, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const LeftNavbar: React.FC = () => {
  return (
    <div className="rounded mx-8 grid grid-cols-1 place-items-center bg-transparent">
      <div className="w-auto h-full rounded grid grid-cols-1 place-items-center ">
        <nav className="grid grid-cols-1 place-items-center text-sm space-y-4 ">
          <ActiveLink to="/dashboard" className="text-white text-center hover:border-dmoutline hover:bg-primary dark:bg-dmseccont dark:hover:bg-dmonsec hover:shadow-dmbg font-bold py-2 px-8 block rounded-full shadow-inner">
            <FontAwesomeIcon icon={faHome} />
          </ActiveLink>
          <ActiveLink to="/inspection" className="text-white text-center hover:border-dmoutline hover:bg-primary dark:bg-dmseccont dark:hover:bg-dmonsec hover:shadow-dmbg hover:text-white font-bold py-2 px-7 block rounded-full shadow-inner">
            <FontAwesomeIcon icon={faSearch} />
          </ActiveLink>
          <ActiveLink to="/inspection-history" className="text-white text-center hover:border-dmoutline hover:bg-primary dark:bg-dmseccont dark:hover:bg-dmonsec hover:shadow-dmbg hover:text-white font-bold py-2 px-6 block rounded-full shadow-inner">
            <FontAwesomeIcon icon={faHistory} />
          </ActiveLink>
          <ActiveLink to="/manage-inspection" className="text-white text-center hover:border-dmoutline hover:bg-primary dark:bg-dmseccont dark:hover:bg-dmonsec hover:shadow-dmbg hover:text-white font-bold py-2 px-6 block rounded-full shadow-inner">
            <FontAwesomeIcon icon={faClipboardList} />
          </ActiveLink>
          <ActiveLink to="/manage-users" className="text-white text-center hover:border-dmoutline hover:bg-primary dark:bg-dmseccont dark:hover:bg-dmonsec hover:shadow-dmbg hover:text-white font-bold py-2 px-4 block rounded-full shadow-inner">
            <FontAwesomeIcon icon={faUserCog} />
          </ActiveLink>
          <ActiveLink to="/settings" className="text-white text-center hover:border-dmoutline hover:bg-primary dark:bg-dmseccont dark:hover:bg-dmonsec hover:shadow-dmbg hover:text-white font-bold py-2 px-4 block rounded-full shadow-inner">
            <FontAwesomeIcon icon={faCog} />
          </ActiveLink>
        </nav>
      </div>
    </div>
  );
}

export { LeftNavbar };
