import React from 'react';
import { ActiveLink } from './ActiveLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faHistory, faUserCog, faCog, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const LeftNavbar: React.FC = () => {
  return (
    <div className="rounded mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full h-full bg-primary rounded flex flex-col items-center">
        <nav className="items-center text-sm space-y-4">
          <ActiveLink to="/dashboard" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">
            <FontAwesomeIcon icon={faHome} />
          </ActiveLink>
          <ActiveLink to="/inspection-form" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">
            <FontAwesomeIcon icon={faSearch} />
          </ActiveLink>
          <ActiveLink to="/inspection-history" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">
            <FontAwesomeIcon icon={faHistory} />
          </ActiveLink>
          <ActiveLink to="/inspection-detail" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">
            <FontAwesomeIcon icon={faClipboardList} />
          </ActiveLink>
          <ActiveLink to="/manage-users" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">
            <FontAwesomeIcon icon={faUserCog} />
          </ActiveLink>
          <ActiveLink to="/settings" className="text-white text-center shadow-background hover:bg-secondary hover:text-white font-bold py-2 px-4 block">
            <FontAwesomeIcon icon={faCog} />
          </ActiveLink>
        </nav>
      </div>
    </div>
  );
}

export { LeftNavbar };
