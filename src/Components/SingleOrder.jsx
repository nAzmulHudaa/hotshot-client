import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import db from '../firebase.config';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const SingleOrder = () => {
    const [singleOrder, setSingleOrder] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        db.collection("customers").get()
            .then(snapshot => {
                snapshot.forEach(customer => {
                    if (customer.data().email === id) {
                        setSingleOrder(customer.data());
                        console.log(customer.data());
                    }
                })

            })
            .catch(err => {
                console.log(err);
            })


    }, [])

    return (
        <div className='singleCusomter' style={{
            height: '100vh'
        }}>
            Orders details
            <div className='singleBox' >
                <h5>Email:{singleOrder.email}</h5>
            </div>
        </div>
    );
};

export default SingleOrder;