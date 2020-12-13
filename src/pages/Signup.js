import React, { useState } from "react";
import firebase from "../config/firebase";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log("ユーザー作成成功！", response);
        response.user.updateProfile({
          displayName: username,
        });
      });
  };
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="ユーザー名"
          variant="filled"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="メールアドレス"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          label="パスワード"
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="ui botton blue" type="submit">
          Sign Up
        </button>
        <Link to="/Login">既にアカウントをお持ちの方</Link>
      </form>
    </div>
  );
};

export default Signup;
