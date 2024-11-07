import React from "react";

function Message({ text, sender, currentUserEmail }) {
  const messageClass = sender.email === currentUserEmail ? "sent" : "received";
  const displayName = sender.email === currentUserEmail ? "You" : sender.email;
  return (
    <div className={`message ${messageClass}`}>
      <div className="message-bubble">
        <strong>{displayName}: </strong>{text}
      </div>
    </div>
  );
}

export default Message;