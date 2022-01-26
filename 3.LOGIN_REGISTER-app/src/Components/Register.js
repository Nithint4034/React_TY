import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Register(props) {
    const [userDetails, setuserDetails] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        cpassword: "",
    });

    //===================================================
    //! error values
    const [showFirstNameError, setShowFirstNameError] = useState(true);
    const [firstNameError, setFirstNameError] = useState("");

    const [showLastNameError, setShowLastNameError] = useState(true);
    const [lastNameError, setLastNameError] = useState("");

    const [showPhoneError, setShowPhoneError] = useState(true);
    const [phoneError, setPhoneError] = useState("");

    const [showEmailError, setShowEmailError] = useState(true);
    const [emailError, setEmailError] = useState("");

    const [showPasswordError, setShowPasswordError] = useState(true);
    const [passwordError, setPasswordError] = useState("");

    const [showCpasswordError, setShowCpasswordError] = useState(true);
    const [cpasswordError, setCpasswordError] = useState("");

    const [isSuccess, setIsSuccess] = useState(false);

    //===================================================
    //! Login function

    const login = (event) => {
        event.preventDefault();

        const isFirstNameValid = validateFirstName(userDetails.firstName);
        const isLastNameValid = validateLastName(userDetails.lastName);
        const isPhoneValid = validatePhone(userDetails.phone);
        const isEmailValid = validateEmail(userDetails.email);
        const isPasswordValid = validatePassword(userDetails.password);
        const isCpasswordValid = validateCpassword(userDetails.cpassword);

        if (isFirstNameValid && isLastNameValid && isPhoneValid && isEmailValid && isPasswordValid && isCpasswordValid) {
            setIsSuccess(true);
        } else {
            setIsSuccess(false);
        }
    };
    //============================================================
    // input value

    const handleChange = (event) => {
        console.log(event.target.name);
        const userDetailsCopy = { ...userDetails };
        userDetailsCopy[event.target.name] = event.target.value;
        setuserDetails(userDetailsCopy);
        console.log(userDetailsCopy);
    };
    //=============================================================
    //! validations
    //=============================================================
    const validateFirstName = (fname) => {
        const n = /[A-Za-z]/;
        if (n.test(fname)) {
            setShowFirstNameError(true);
            setFirstNameError("");
            return true;
        } else {
            setShowFirstNameError(false);
            setFirstNameError("Enter valid name");
            return false;
        }
    };
    //---------------------------------
    const validateLastName = (lname) => {
        const n = /[A-Za-z]/;
        if (n.test(lname)) {
            setShowLastNameError(true);
            setLastNameError("");
            return true;
        } else {
            setShowLastNameError(false);
            setLastNameError("Enter valid name");
            return false;
        }
    };
    //---------------------------------
    const validatePhone = (phone) => {
        const ph = /^[6-9][\d]{9}$/;
        if (ph.test(phone)) {
            setShowPhoneError(true);
            setPhoneError("");
            return true;
        } else {
            setShowPhoneError(false);
            setPhoneError("Enter valid phone number");
            return false;
        }
    };
    //---------------------------------
    const validateEmail = (mail) => {
        const m = /^([\w\.-]+)@([\w\-_]+).([a-z]){2,3}((.[a-z]{2})?)$/;
        if (m.test(mail)) {
            setShowEmailError(true);
            setEmailError("");
            return true;
        } else {
            setShowEmailError(false);
            setEmailError("Enter valid Email");
            return false;
        }
    };
    //---------------------------------
    const validatePassword = (password) => {
        const pass = /(?=.[0-9])(?=.[!@#$%^&*])/;
        if (pass.test(password)) {
            setShowPasswordError(true);
            setPasswordError("");
            return true;
        } else {
            setShowPasswordError(false);
            setPasswordError("Enter valid password");
            return false;
        }
    };
    //---------------------------------
    const validateCpassword = (cpassword) => {
        if (cpassword === userDetails.password) {
            console.log("cpass");
            setShowCpasswordError(true);
            setCpasswordError("");
            return true;
        } else {
            console.log("cfail");

            setShowCpasswordError(false);
            setCpasswordError("Password not matching");
            return false;
        }
    };

    //=============================================================
    //! return
    //=============================================================

    return (
        <div>
            <h3>New User Registration Form for FlipKart</h3>
            <fieldset>
                <form className="form" onSubmit={login} style={{ backgroundColor: "lightgrey" }}>
                    <div>
                        <label>First name :</label>
                        <input
                            type={"text"}
                            placeholder="First name"
                            name="firstName"
                            value={userDetails.firstName}
                            onChange={(event) => {
                                handleChange(event);
                            }}
                        />
                        {!showFirstNameError ? (
                            <p
                                className="span"
                                style={{
                                    color: "red",
                                    fontSize: "8px",
                                }}
                            >
                                {" "}
                                {firstNameError}{" "}
                            </p>
                        ) : null}
                    </div>
                    <div>
                        <label>Last name :</label>
                        <input
                            type={"text"}
                            placeholder="Last name"
                            name="lastName"
                            value={userDetails.lastName}
                            onChange={(event) => {
                                handleChange(event);
                            }}
                        />
                        {!showLastNameError ? (
                            <p
                                className="span"
                                style={{
                                    color: "red",
                                    fontSize: "8px",
                                }}
                            >
                                {" "}
                                {lastNameError}{" "}
                            </p>
                        ) : null}
                    </div>
                    <div>
                        <label>Phone No.:</label>
                        <input
                            type={"text"}
                            placeholder="Phone number"
                            name="phone"
                            value={userDetails.phone}
                            onChange={(event) => {
                                handleChange(event);
                            }}
                        />
                        {!showPhoneError ? (
                            <p
                                className="span"
                                style={{
                                    color: "red",
                                    fontSize: "8px",
                                }}
                            >
                                {" "}
                                {phoneError}{" "}
                            </p>
                        ) : null}
                    </div>
                    <div>
                        <label>Email :</label>
                        <input
                            type={"text"}
                            placeholder="Email "
                            name="email"
                            value={userDetails.email}
                            onChange={(event) => {
                                handleChange(event);
                            }}
                        />
                        {!showEmailError ? (
                            <p
                                className="span"
                                style={{
                                    color: "red",
                                    fontSize: "8px",
                                }}
                            >
                                {" "}
                                {emailError}{" "}
                            </p>
                        ) : null}
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type={"password"}
                            placeholder="Password"
                            name="password"
                            value={userDetails.password}
                            onChange={(event) => {
                                handleChange(event);
                            }}
                        />
                        {!showPasswordError ? (
                            <p
                                className="span"
                                style={{
                                    color: "red",
                                    fontSize: "8px",
                                }}
                            >
                                {" "}
                                {passwordError}{" "}
                            </p>
                        ) : null}
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input
                            type={"password"}
                            placeholder="Confirm"
                            name="cpassword"
                            value={userDetails.cpassword}
                            onChange={(event) => {
                                handleChange(event);
                            }}
                        />
                        {!showCpasswordError ? (
                            <p
                                className="span"
                                style={{
                                    color: "red",
                                    fontSize: "8px",
                                }}
                            >
                                {cpasswordError}
                            </p>
                        ) : null}
                    </div>
                    <div>
                        <input type={"submit"} value={"Register"} />
                        {isSuccess ? <span className="success">Success</span> : null}
                    </div>
                    <div style={{ fontSize: "12px" }}></div>
                    <h6>
                        Already you have account then ? <Link to="/login">Login</Link>
                    </h6>
                </form>
            </fieldset>
        </div>
    );
}

export default Register;
