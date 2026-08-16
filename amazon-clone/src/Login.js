import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/');
            })
            .catch(error => alert(error.message));
    }
    
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
                    alt='Amazon Logo'
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form onSubmit={signIn}>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;