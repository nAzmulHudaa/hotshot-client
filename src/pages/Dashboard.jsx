import React, { useContext } from 'react';
import { UserContext } from '../App';
import DashboardHome from '../Components/DashboardHome';
import NoMatch from './NoMatch';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const loginToken = sessionStorage.getItem('token');
    return (
        <div>
            {
                loginToken || loggedInUser.email ? <DashboardHome /> : <NoMatch />
            }
        </div>
    );
};

export default Dashboard;