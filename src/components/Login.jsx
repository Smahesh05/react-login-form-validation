import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset previous error messages
    setEmailError("");
    setPasswordError("");

    // Validation
    if (email.trim() === "") {
      setEmailError("Please enter emaill address");
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
    }

    if (email && password && validateEmail(email)) {
      // Successful login
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);
      history("/profile");
    }
  };

  const validateEmail = (email) => {
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");

    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
      return false;
    }
    return true;
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={emailError ? styles.invalidInput : ""}
          />
          {emailError && <span className={styles.error}>{emailError}</span>}
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={passwordError ? styles.invalidInput : ""}
          />
          {passwordError && (
            <span className={styles.error}>{passwordError}</span>
          )}
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
