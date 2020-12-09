import React, { useState, useContext } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { AuthContext } from "../AuthService";
import { auth } from "../config/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const user = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        console.error("ログイン失敗", error);
      });
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
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
          Login
        </button>
        <Link to="/signup">アカウントをお持ちでない方</Link>
      </form>
    </>
  );
};

export default Login;
