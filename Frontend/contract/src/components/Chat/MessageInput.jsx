// MessageInput.js
import React, { useState } from "react";
import { TextField, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function MessageInput({ onSend }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue("");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 1,
        bgcolor: '#e8f5e9',
      }}
    >
      <TextField
        placeholder="Type your message"
        variant="outlined"
        fullWidth
        multiline
        maxRows={3}
        value={inputValue}
        onChange={handleInputChange}
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '4px',
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: '#a5d6a7',
            },
            "&:hover fieldset": {
              borderColor: '#66bb6a',
            },
            "&.Mui-focused fieldset": {
              borderColor: '#388e3c',
            },
          },
          mr: 1,
        }}
      />
      <IconButton
        onClick={handleSendMessage}
        color="success"
        sx={{
          bgcolor: '#66bb6a',
          "&:hover": { bgcolor: '#388e3c' },
          color: '#ffffff',
          p: 1.5,
        }}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}

export default MessageInput;
