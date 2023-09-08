import React from 'react';
//import moment from "moment"
//import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TitleCard } from '../../app/components/cards';
import { showNotification } from '../common';
import { InputText } from '../../app/components/input';
import { TextareaInput } from '../../app/components/input';
import { ToogleInput } from '../../app/components/input';
import { useAuth } from '../auth/use-auth';
import { userAgent } from 'next/server';

const ProfileSettings: React.FC = () => {
    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "Profile Updated", status : 1}))    
    }

    const updateFormValue = ({ updateType, value }:any) => {
        console.log(updateType)
    }

    const auth = useAuth();

    return(
        <>
            <TitleCard title="Profile Settings" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Name" defaultValue={auth.user.name} updateFormValue={updateFormValue}/>
                    <InputText disabled={true} labelTitle="Email" defaultValue={auth.user.email} updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Title" defaultValue="Console Cowboy" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Place" defaultValue="California" updateFormValue={updateFormValue}/>
                    <TextareaInput labelTitle="About" defaultValue="Doing what I love" updateFormValue={updateFormValue}/>
                </div>
                <div className="divider" ></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Language" defaultValue="English" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Timezone" defaultValue="PST" updateFormValue={updateFormValue}/>
                    <ToogleInput updateType="syncData" labelTitle="Sync Data" defaultValue={true} updateFormValue={updateFormValue}/>
                </div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>Update</button></div>
            </TitleCard>
        </>
    )
}

export {
  ProfileSettings,
}

export default ProfileSettings