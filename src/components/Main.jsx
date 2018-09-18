import React from "react";
import "./Main.css";
import Empty from "./Empty";
import ChatWindow from "../containers/ChatWindow";

const Main = ({ user, activeUserId }) => {
  const mainContent = activeUserId ? (
    <ChatWindow activeUserId={activeUserId} />
  ) : (
    <Empty user={user} activeUserId={activeUserId} />
  );

  return <main className="Main">{mainContent}</main>;
};

export default Main;
