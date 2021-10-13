import React, { useContext } from 'react';
import { UserContext } from '../App';

const DashboardHome = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <h3 style={{
                textAlign: 'center',
                margin: 'auto',
                height: '100vh'
            }}>
                Welcome to Hotshot Automotive Dashboard <br />
                Let's Explore The amazing features of our application
            </h3>
        </div>
    );
};

export default DashboardHome;