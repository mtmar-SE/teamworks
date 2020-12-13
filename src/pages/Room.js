import React from "react";
import { auth } from "../config/firebase";
import List from "../components/./chattools/List";
import Form from "../components/./chattools/Form";

import { Button } from "@material-ui/core";

const Room = () => {
  const signout = () => {
    auth.signOut();
  };

  return (
    <>
      <h1>チャット</h1>
      <List />
      <Form />
      <Button onClick={signout} variant="contained">
        ログアウト
      </Button>
    </>
  );
};
export default Room;
