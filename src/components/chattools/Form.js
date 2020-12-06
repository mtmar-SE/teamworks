import React, { useState, useContext } from "react";
import { AuthContext } from "../../AuthService";
import { TextField } from "@material-ui/core";

import { db } from "../../config/firebase";

const Form = () => {
  const [text, setText] = useState("");
  const user = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      alert("文字を入力してください");
      return;
    }
    db.collection("messages")
      .add({
        content: text,
        username: user.displayName,
        createAt: new Date(),
      })
      .then(() => {
        setText("");
      });
  };

  return (
    <from onSubmit={handleSubmit}>
      <TextField
        variant="filled"
        size="small"
        placeholder="メッセージを入力"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="ui botton blue" type="submit">
        送信
      </button>
    </from>
  );
};
export default Form;
