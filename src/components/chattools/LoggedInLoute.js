import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../AuthService";

//componentとして受け取った値をComponentという名前に変更
const LoggedInLoute = ({ component: Component, ...otherProps }) => {
  const user = useContext(AuthContext);

  return (
    <Route
      {...otherProps}
      render={(props) => {
        user ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};
export default LoggedInLoute;
