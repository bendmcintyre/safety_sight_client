import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../features/common';
import { ProfileSettings } from '../../../features/settings/profile-settings';

export const ProfileSettingsPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Settings"}))
      }, [])

    return(
        <ProfileSettings />
    )
}

export default ProfileSettingsPage;