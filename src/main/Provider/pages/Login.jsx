/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Google from "./Google";

// import { useLocation, useHistory, useNavigate } from "react-router";
const Login = () => {
    const { loginUSer } = useContext(AuthContext);
  // const location = useLocation();
  // const history = useHistory();
  // let navigate = useNavigate();
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
      navigate("/")
    event.preventDefault();
    if ((email, password)) {
        loginUSer(email, password)
        .then((result) => {
          console.log(result.user);
        //   redirect("/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
      <div>
        <Google></Google>
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="col-md-6 ">
            <div className="border w-100 m-auto text-center p-5">
              <form action="">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="email p-3 m-2"
                  type="email"
                  placeholder="enter your email"
                />
               <div>
               <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="password p-3 m-2"
                  type="password"
                  placeholder="enter your password"
                />
               </div>
               <div>
               <button
                  onClick={handleLogin}
                  className="btn btn-info w-75 p-2 mt-3"
                >
                  Login
                </button>
               </div>
                <p className="p-2">
                  <Link to="/register">
                  <small className="text-info">
                    are you new? register here..
                  </small></Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-6">
          </div>
          {/* <SocialLoginBtn></SocialLoginBtn> */}
            <img
            src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
              className="w-100"
              alt=""
              />
        </div>
        
      </div>
    </div>
  );
};

export default Login;