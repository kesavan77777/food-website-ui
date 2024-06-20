import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
const LoginPopup = ({ setshowLogin }) => {
    const [currState, setcurrState] = useState("Login");
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type="text" placeholder='your name' />}

                    <input type="email" placeholder='your email id' />
                    <input type="password" placeholder='your password' />
                </div>
                <button>{currState === 'Sign up' ? "Create acc" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>i have read the terms and conditions</p>

                </div>
                {
                    currState === "Login" ?
                        <p>Create a new account?<span onClick={() => setcurrState("Sign up")}>click here</span></p> :
                        <p>Already have an account?<span onClick={() => setcurrState("Login")}>login here</span></p>
                }

            </form>

        </div>
    )
}

export default LoginPopup
