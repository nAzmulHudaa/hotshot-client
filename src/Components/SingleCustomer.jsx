import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import db from '../firebase.config';
import 'firebase/firestore';


const SingleCustomer = () => {
    const [singleCustomer, setSingleCustomer] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        db.collection("customers").get()
            .then(snapshot => {
                snapshot.forEach(customer => {
                    if (customer.data().email === id) {
                        setSingleCustomer(customer.data());
                    }
                })
            })
            .catch(err => {
                console.log(err);
            })

    }, [])



    // console.log(singleCustomer)



    return (
        <div style={{height: '100vh'}}>
            <h1 style={{ textAlign: 'center', }}> Details Of Customer</h1>
            <div className="singleBox">
                <h5>
                    Name:
                    {
                        singleCustomer.first_name ? singleCustomer.first_name : 'No Name'
                    }
                </h5>
                <h5>Email:{singleCustomer.email}</h5>

            </div>

        </div>
    );
};

export default SingleCustomer;