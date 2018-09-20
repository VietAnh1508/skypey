import React, { Component } from "react";
import "./Chats.css";
import Message from "./Message";

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }

  scrollToBottom = () => {
    const chatContainer = this.chatsRef.current;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Message message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;
