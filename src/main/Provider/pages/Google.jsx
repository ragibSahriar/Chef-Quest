import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../firebase.config';
import Home from '../../Home';
import { useNavigate } from 'react-router-dom';

const Google = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const handleGoogleSignIn = () => {
        
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log(error);
        })
        // navigate("/")
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then( result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
        
       
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='text-center mt-20'>
            {
                user ?
                    <button onClick={handleSignOut}>Sign out </button> :
                    <>         
                        <button className='bg-blue-500  px-7 py-2 rounded text-white' onClick={handleGoogleSignIn}>Google login </button>
                       
                       <button className='bg-black text-white px-7 py-2 m-2 rounded'  onClick={handleGithubSignIn}>Github Login</button>
                       
                    </>
            }
            {user && 
                 navigate("/")
            
            }
        </div>
    );
};
    
export default Google;