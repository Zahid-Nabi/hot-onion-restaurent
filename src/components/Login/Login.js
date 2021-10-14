import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <div className="login-form">
            <div className="form-box">
                <h2>Please Login</h2>
                <form>

                    <input className="mb-2" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <button className="btn btn-danger mt-3">Login</button>
                </form>
            </div>

        </div>
    );
};

export default Login;