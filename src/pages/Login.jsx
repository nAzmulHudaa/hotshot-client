import React, { useEffect } from 'react';
import * as firebase from 'firebase/app';
import "firebase/auth";
import firebaseApp from '../firebase.config';
import { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();



    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, photoURL, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    img: photoURL
                }
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.push('/dashboard')
            

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)

            });
    }

    const storeAuthToken=()=>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token',idToken);
           
          }).catch(function(error) {
            
          });
    }
    

    return (

        <div style={{ textAlign: 'center' }}>
            <div
                style={{
                    padding: '60px 0px 0px 0px',
                }}
            >
                <h3>Please sign in to access the dashboard</h3>
                <button className='login-btn' onClick={handleGoogleSignIn}>Sign Up With Google</button>
            </div>
        </div>

    );
};

export default Login;