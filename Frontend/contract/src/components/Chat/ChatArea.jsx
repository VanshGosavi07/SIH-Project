// ChatArea.js
import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";
import MessageInput from "./MessageInput";
import Message from "./Message";
import axios from "axios";
import Navbar from "../Navbar";

function ChatArea({ selectedUserId }) {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [chatUserEmail, setChatUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios
        .get("http://127.0.0.1:8000/api/user/me/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setCurrentUserEmail(response.data.email);
        })
        .catch((error) => {
          console.log("Error fetching current user", error);
        });
    }
  }, []);

  useEffect(() => {
    if (selectedUserId) {
      const token = localStorage.getItem("authToken");
      const ws = new WebSocket(
        `ws://127.0.0.1:8000/ws/chat/${selectedUserId}/?token=${token}`
      );
      setSocket(ws);
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, data]);
      };
      ws.onclose = () => {
        console.log("WebSocket closed");
      };
      return () => {
        ws.close();
      };
    }
  }, [selectedUserId]);

  useEffect(() => {
    if (selectedUserId) {
      const token = localStorage.getItem("authToken");
      axios
        .get(`http://127.0.0.1:8000/chat/history/${selectedUserId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setMessages(response.data);
        })
        .catch((error) => {
          console.log("Error fetching chat history", error);
        });

      // Fetch the user's details and log the name
      axios
        .get(`http://127.0.0.1:8000/user/${selectedUserId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setChatUserEmail(response.data.email);
          console.log("Chatting with:", response.data.email);
        })
        .catch((error) => {
          console.log("Error fetching user details", error);
        });
    }
  }, [selectedUserId]);

  const handleSendMessage = (text) => {
    if (socket) {
      socket.send(JSON.stringify({ message: text }));
    }
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 64px)",
          marginLeft: "360px",
          bgcolor: "#e8f5e9",
          marginTop: "5px",
        }}
      >
        <Divider />
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#26D07C",
            color: "black",
            textAlign: "center",
            padding: "10px 20px",
          }}
        >
          {chatUserEmail}
        </Box>
        <Box
          sx={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            bgcolor: "#f1f8e9",
          }}
        >
          {messages.map((msg, index) => (
            <Message
              key={index}
              text={msg.message}
              sender={msg.sender}
              currentUserEmail={currentUserEmail}
            />
          ))}
        </Box>
        <MessageInput onSend={handleSendMessage} />
      </Box>
    </>
  );
}

export default ChatArea;