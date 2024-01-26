// import React, { Component } from "react";
// import {useHistory} from "react-router-dom"
// import "./Login.css";

// class Login extends Component {
//   state = {
//     email: "",
//     password: "",
//     itemsEmail: ["hadikhameed99@gmail.com", "hadikhameed999@gmail.com"],
//     itemsPassword: ["1234", "12345"],
//   };
//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//     console.log(this.state.input);
//   };
//   nextpage = (event) => {
//     event.preventDefault();
//     const { email, password, itemsEmail, itemsPassword } = this.state;
//     const emailIndex = itemsEmail.indexOf(email);
//     if (itemsEmail !== -1 && itemsPassword[emailIndex] === password) {
//       console.log("correct");
//       const history = useHistory();
//       history.push("/");
//     } else {
//       this.setState({
//         email: "",
//         password: "",
//       });
//     }
//   };
//   render() {
//     const { email, password } = this.state;
//     return (
//       <div className="container-login">
//         <form className="form-login">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//             placeholder="enter email here..."
//           />
//           <label htmlFor="Password">password:</label>
//           <input
//             type="Password"
//             value={password}
//             name="password"
//             onChange={this.handleChange}
//           />
//           <button onClick={this.nextpage}>submit</button>
//         </form>
//       </div>
//     );
//   }
// }
// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useReducer } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  const notify = (message) => toast(message);
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const nextpage = (event) => {
    event.preventDefault();
    // get all the emails and passwords form local storage
    let incomingDataFromLocalStorage =
      JSON.parse(localStorage.getItem("emailAndPassword")) || [];
    let getEmailAndPassword = incomingDataFromLocalStorage.find(
      (item) => item.email === email
    );
    if (!getEmailAndPassword) {
      notify("invalidEmail");
      return;
    }
    if (password === getEmailAndPassword.password) {
      navigate("/todoapp");
      return;
    }
    notify("invalid Password");

    // let getAllPasswordsFromStorage=incomingDataFromLocalStorage.map((item)=>item.password)
    // if(SameEmailAndPassword.includes(email)){
    //   const emailIndex=SameEmailAndPassword.indexOf(email);
    //   if(getAllPasswordsFromStorage[emailIndex]===password){
    //     navigate("/todoapp")
    //   }
    //   else{
    //     alert("incorrect password")
    //   }

    //   }
    //   else{
    //     alert("sign up now")
    //   }

    // find the email and password in state is equal to the email and password in localstorage (find or filter method can used)
    // if it is exist navigate other wise show error

    // const itemsEmail = ["hadikhameed99@gmail.com", "hadikhameed999@gmail.com"];
    // const itemsPassword = ["1234", "12345"];
    // localStorage.getItem()
    // const emailIndex = itemsEmail.indexOf(email);
    // if (emailIndex !== -1 && itemsPassword[emailIndex] === password) {
    //   console.log("correct");
    //   navigate("/todoapp");
    // } else {
    //   setEmail("");
    //   setPassword("");
    // }
  };
  const tosignin = () => {
    navigate("/signup");
  };
  return (
    <div className="body-container">
      <div className="button-div">
        <button onClick={() => setIsDark(!isDark)}>Change background</button>
      </div>
      <div className="main-container-login" >
  
      <div
        className="container-login"
        style={{ backgroundColor: isDark ? "black" : "white" }}
       
      >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <h1 style={{ color: isDark ? "white" : "black" }}>LOGIN</h1>
        <form className="form-login">
          <label htmlFor="Email" style={{ color: isDark ? "white" : "black"}}>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="enter email here..."
          />

          <label htmlFor="Password" style={{ color: isDark ? "white" : "black" }}>Password:</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
          <button onClick={nextpage}>SUBMIT</button>
          <h6 className="signup" onClick={tosignin} style={{ color: isDark ? "white" : "black" }}>
            Sign Up
          </h6>
        </form>
      </div>
      
      </div>
    </div>
  );
};

export default Login;
