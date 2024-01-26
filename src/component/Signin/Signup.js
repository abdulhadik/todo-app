import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as EmailValidator from "email-validator";

import "./Signin.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  console.log(email);
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const signupButton = (event) => {
    event.preventDefault();
    const datas = {
      email: email,
      password: password,
    };

    // navigate("/");
    let oldEmailsAndPasswords =
      JSON.parse(localStorage.getItem("emailAndPassword")) || [];
    console.log(oldEmailsAndPasswords);
    let getAllEmails = oldEmailsAndPasswords?.map((item) => item.email) || [];

    if (EmailValidator.validate(email)) {
      if (getAllEmails?.includes(email)) {
        alert("you have already signup");
        console.log("same email");
      } else {
        let totalEmailsAndPasswords = [...oldEmailsAndPasswords, datas];
        console.log(totalEmailsAndPasswords);
        localStorage.setItem(
          "emailAndPassword",
          JSON.stringify(totalEmailsAndPasswords)
        );

        navigate("/todoapp");
      }
    } else {
      alert("enter valid email");
    }
  };
  const goBackToLogin = () => {
    navigate("/");
  };
  // localStorage.removeItem("emailAndPassword");

  return (
    <div className="signup-container">
      <h1>SIGN UP</h1>
      <form className="signup-form">
        <label htmlFor="email">Email</label>
        <input type="email" onChange={handleEmail} />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={handlePassword} />
        <button onClick={signupButton}>SUBMIT</button>
        <h6 className="goto-login" onClick={goBackToLogin}>
          Back to login
        </h6>
      </form>
    </div>
  );
};
export default Signup;
