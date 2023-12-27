import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import styles from "./Login.module.css";

// firebase
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const googleHandler = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then(()=>{
        navigate("/landingpage")
    });
  };
  const navigate = useNavigate();
  const signupHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredintial) => {
        const user = userCredintial.user;
        console.log(user);
        alert("Successfully Joined");
        setData({ email: "", password: "" });
        navigate("/landingpage");
      })
      .catch((error) => {
        alert(error);
      });
  };
  const signinHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredintial) => {
        const user = userCredintial.user;
        console.log(user);
        alert("Successfully Joined");
        setData({ email: "", password: "" });
        navigate("/landingpage");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className={styles.backgroundcontainer}>
      <div className={styles.container}>
        <h1>Welcome To Mini Shop</h1>
        <form className={styles.formContainer}>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={data.email}
            onChange={inputHandler}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={data.password}
            onChange={inputHandler}
          />
          <button onClick={signupHandler}>SignUp</button>
          <button onClick={signinHandler}>LogIn</button>
        </form>
        <div className={styles.googleSigninContainer}>
          <h4> Sign In With Google Account </h4>
          <button onClick={googleHandler}>
            <FcGoogle className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
