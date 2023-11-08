import React from 'react';
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase';


const Login = () => {
    const googleHandler =(e) => {
        e.preventDefault();
        const provider =new GoogleAuthProvider();
        return signInWithPopup(auth,provider)
        
    }
    return (
        <div>
            <button onClick={googleHandler}>Sign In</button>
        </div>
    );
};

export default Login;