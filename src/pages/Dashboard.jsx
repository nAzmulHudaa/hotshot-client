import React, { useContext } from 'react';
import { UserContext } from '../App';
import DashboardHome from '../Components/DashboardHome';
import NoMatch from './NoMatch';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const loginToken = sessionStorage.getItem('token');
    const loginUser = async()=>{
        const userFromStorage = await sessionStorage.getItem('user')
        return userFromStorage;
    }
    console.log(loginUser)
    return (
        <div>
            {
                loginToken || loggedInUser.email ? <DashboardHome /> : <NoMatch />
            }
        </div>
    );
};

export default Dashboard;