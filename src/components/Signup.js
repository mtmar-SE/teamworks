import React, { useState } from "react";
import firebase from "../config/firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventdefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input name="email" type="email" id="email" placeholder="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="password"
          />
        </div>
        <button className="ui botton blue" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
