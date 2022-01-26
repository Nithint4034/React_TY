import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Register() {
    return (
        <div>
            <div>
                <h3>New User Registration Form for FlipKart</h3>
                <fieldset>
                    <form style={{ backgroundColor: "lightgrey" }}>
                        <div>
                            <div>
                                <label>First Name</label>
                                <input
                                    placeholder='First Name'
                                    type='text'
                                    name='firstName'
                                />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input
                                    placeholder='Last Name'
                                    type='text'
                                    name='lastName'
                                />
                            </div>
                        </div>
                        <div>
                            <label >Phone Number</label>
                            <input
                                placeholder='Number'
                            />
                        </div>
                        <div>
                            <label >Email</label>
                            <input
                                placeholder='Email Id'
                                type='email'
                                name='email'
                            />
                        </div>
                        <div>
                            <label >DOB</label>
                            <input
                                placeholder='Date of Birth'
                                type='date'
                                name='date'
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                placeholder='Password'
                                type='password'
                                name='password'
                            />
                        </div>
                        <div>
                            <label>Confirm Password</label>
                            <input
                                placeholder='Password'
                                type='password'
                                name='confirm password'
                            />
                        </div>
                        <div>
                            <label>Gender</label>
                            <input
                                type='checkbox' name='gender' />Male
                            <input
                                type='checkbox' name='gender' />FeMale
                        </div>
                        <div>
                            <button type='submit'>Create Account</button>
                        </div>
                        <h6>Already you have account then <Link to="/login">Login</Link></h6>
                    </form>
                </fieldset>
            </div>


        </div>
    )

}

export default Register
