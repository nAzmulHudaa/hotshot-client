import React from 'react';
import * as firebase from 'firebase/app';
import "firebase/auth";
import { useHistory } from 'react-router-dom';


const Login = () => {

    let history = useHistory();


    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                const { displayName, photoURL, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    img: photoURL
                }
                storeAuthToken();
                sessionStorage.setItem('user', signedInUser.email)
                history.push('/dashboard')

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)

            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken);

        }).catch(function (error) {

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