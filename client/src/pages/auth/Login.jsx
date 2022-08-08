import React from 'react';
import './login.css';
import Google from '../../img/google-icon.png';
import Linkedin from '../../img/linkedin.png';
import Github from '../../img/github.png';

const Login = () => {

    const google = () => {
        window.open('http://localhost:5000/auth/google', "_self");
    }

    const github = () => {
        window.open('http://localhost:5000/auth/github', "_self");
    }

    return (
        <div className='login-container'>
            <div className='login-wrapper'>
            <h3 className="login-title">Dev<span style={{ color: '#1D9BF0' }}>Hire</span></h3>
                <div className='button-wrapper'>
                    <div className='login-button google' onClick={google}>
                        <img src={Google} alt="google-button" className='icon' />
                        <span className="google-text">Sign in with Google</span>
                    </div>
                    <div className='login-button linkedin'>
                        <img src={Linkedin} alt="google-button" className='icon' />
                        <span className="button-text">Sign in with Linkedin</span>
                    </div>
                    <div className='login-button github' onClick={github}>
                        <img src={Github} alt="github-button" className='icon' />
                        <span className="button-text">Sign in with Github</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
