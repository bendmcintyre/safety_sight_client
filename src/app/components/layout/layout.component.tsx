import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import  { removeNotificationMessage } from '../../../features/common/header.slice';
import { PageContent } from '.';
import { LeftSidebar, RightSidebar } from '../../components/sidebar';
import { ModalLayout } from '.';

//import {NotificationContainer, NotificationManager} from 'react-notifications';
//import 'react-notifications/lib/notifications.css';

const NotificationContainer = () => { return(<></>) };

const Layout: React.FC = () => {
  const dispatch = useDispatch();
  const { newNotificationMessage, newNotificationStatus } = useSelector((state:any) => state.header)

  useEffect(() => {
    if (newNotificationMessage !== "") {
      if (newNotificationStatus === 1) {
        console.log("newNotificationMessage - success:", newNotificationMessage);
        //NotificationManager.success(newNotificationMessage, 'Success');
      }

      if (newNotificationStatus === 0) {
        console.log("newNotificationMessage - error:", newNotificationMessage);
        //NotificationManager.error( newNotificationMessage, 'Error');
      }

      dispatch(removeNotificationMessage);
    }
  }, [newNotificationMessage]);

  return (
    <>
      { /* Left drawer - containing page content and side bar (always open) */ }
      <div className="drawer drawer-mobile lg:drawer-open">
          <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
          <PageContent/>
          <LeftSidebar />
      </div>

      { /* Right drawer - containing secondary content like notifications list etc.. */ }
      <RightSidebar />


      {/** Notification layout container */}
      <NotificationContainer />

    {/* Modal layout container */}
      <ModalLayout />

    </>
  );
}

export {
  Layout,
}

export default Layout;
