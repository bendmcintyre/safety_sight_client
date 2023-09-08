//import moment from "moment"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs';
import { TitleCard } from '../../app/components/cards';
import { showNotification } from '../common';

const TopSideButtons = () => {

    const dispatch = useDispatch()

    const addNewTeamMember = () => {
        dispatch(showNotification({
            message: 'Add New Member clicked',
            status: 1,
        }));
    }

    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => addNewTeamMember()}>Invite New</button>
        </div>
    )
}


const TEAM_MEMBERS = [
    {name: 'Myke', avatar: 'https://reqres.in/img/faces/1-image.jpg', email: 'myke@safetysight.net', role: 'Owner', joinedOn: dayjs().subtract(5*7, 'day').format('DD MMM YYYY'), lastActive: '5 hr ago'},
    {name: 'Ben', avatar: "https://reqres.in/img/faces/2-image.jpg", email: 'ben@safetysight.net', role: 'Owner', joinedOn: dayjs().subtract(5*5, 'day').format('DD MMM YYYY'), lastActive: '15 min ago'},
    {name: 'John', avatar: 'https://reqres.in/img/faces/3-image.jpg', email: 'john@safetysight.net', role: 'Admin', joinedOn: dayjs().subtract(5*4, 'day').format('DD MMM YYYY'), lastActive: '20 hr ago'},
    {name: 'Matrix', avatar: "https://reqres.in/img/faces/4-image.jpg", email: 'matrix@safetysight.net', role: 'Manager', joinedOn: dayjs().subtract(5*3, 'day').format('DD MMM YYYY'), lastActive: '1 hr ago'},
    {name: 'Virat', avatar: 'https://reqres.in/img/faces/5-image.jpg', email: 'virat@safetysight.net', role: 'Inspector', joinedOn: dayjs().subtract(5*2, 'day').format('DD MMM YYYY'), lastActive: '40 min ago'},
    {name: 'Miya', avatar: 'https://reqres.in/img/faces/6-image.jpg', email: 'miya@safetysight.net', role: 'Inspector', joinedOn: dayjs().subtract(5*1, 'day').format('DD MMM YYYY'), lastActive: '5 hr ago'},

]

const Team = () => {
    const [members, setMembers] = useState(TEAM_MEMBERS)

    const getRoleComponent = (role: string) => {
        if (role  === 'Admin') {
            return <div className="badge badge-secondary">{role}</div>
        } else if (role  === 'Manager') {
            return <div className="badge">{role}</div>
        } else if (role  === 'Owner') {
            return <div className="badge badge-primary">{role}</div>
        } else if (role  === 'Inspector') {
            return <div className="badge badge-accent">{role}</div>
        } else {
            return <div className="badge badge-ghost">{role}</div>
        }
    }

    return(
        <>
            
            <TitleCard title="Active Members" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Team Member list in table format loaded constant */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined On</th>
                        <th>Role</th>
                        <th>Last Active</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            members.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-12 h-12">
                                                    <img src={l.avatar} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{l.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{l.email}</td>
                                    <td>{l.joinedOn}</td>
                                    <td>{getRoleComponent(l.role)}</td>
                                    <td>{l.lastActive}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
        </>
    )
}

export {
  Team,
}

export default Team;