import React from 'react';
import DashboardHome from '../Components/DashboardHome';
import NoMatch from './NoMatch';

const Dashboard = () => {
    // const loggedInUser = async()=>{
    //     const userFromStorage = await sessionStorage.getItem('user')
    //     // console.log(userFromStorage);
    //     return userFromStorage;
    // }
    // loggedInUser();
    // console.log(loggedInUser);
    const userFromStorage =  sessionStorage.getItem('user')
     console.log(userFromStorage);

    return (
        <div>

            {
                userFromStorage  === "nhr.developer@gmail.com" ? <DashboardHome /> : <NoMatch />
            }
        </div>
    );
};

export default Dashboard;