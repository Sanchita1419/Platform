import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/authRedux";
import classes from "./Login.module.css";
import logoImage from "../../images/LOGO.png";
import Button from "../UI/Button";
import { axiosInstance } from "../../config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const usernameRef= useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    dispatch(authActions.loginStart());
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(authActions.loginSuccess(res.data));
      navigate("/visualization", { replace: true });
    } catch (err) {
      dispatch(authActions.loginFailure());
    }
    
  };
  
  return (
    <div className={classes.app}>
      <div className={classes.logo}>
        <img src={logoImage} alt="logo" />
      </div>
      <div className={classes.loginForm}>
        <div className={classes.form}>
          <form onSubmit={handleSubmit}>
            <div className={classes.inputContainer}>
              <input
                type="text"
                name="uname"
                ref={usernameRef}
                placeholder="Username*"
                required
              />
            </div>
            <div className={classes.inputContainer}>
              <input
                type="password"
                name="pass"
                ref={passwordRef}
                placeholder="Password*"
                required
              />
            </div>
            <div className={classes.buttonContainer}>
              <Button name="Login" bgcolor="#f67f2f" bordercolor="#f6932f" />
            </div>
            <div className={classes.linkContainer}>
              <a className={classes.link} href="*">
                Forgot password
              </a>
              <a className={classes.link} href="*">
                Contact us
              </a>
            </div>
          </form>
        </div>
      </div>
      <p>©2022 Myelin Foundry PVT. Ltd. All rights reserved.</p>
    </div>
  );
};

export default Login;
