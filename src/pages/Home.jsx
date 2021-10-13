import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-main'>
            <div className='home-content'>
                <h1>Welcome to the Hotshot Automotive <br /> Customer Dashboard</h1>
                <Link to='/login'><button className='login-btn'>Go To Login Page</button></Link>
            </div>
        </div>
    );
};

export default Home;