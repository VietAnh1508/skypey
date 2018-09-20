import React from "react";
import "./Message.css";

const Message = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Message ${is_user_msg ? "is-user-msg" : ""}`}>
      {text}
    </span>
  );
};

export default Message;
