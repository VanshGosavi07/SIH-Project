import React, { useState, useEffect } from 'react';
import axios from 'axios';
import botLogo from '../assets/bot.png'; // Import your logo image

const Modal = ({ isOpen, onClose, title }) => {
  const [prompt, setPrompt] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initializeChat = async () => {
      if (isOpen && chatHistory.length === 0) {
        const defaultMessage = { sender: "bot", text: "Hello, I am AgriBot. How can I assist you?" };
        setChatHistory([defaultMessage]);

        // Send initial prompt to set context
        const initialPrompt = "From now on, your name is AgriBot. You are fine-tuned by my custom dataset to provide information about agriculture only. If asked about your name, do not refer to Google. Answer only agriculture-related questions.";
        try {
          await axios.post("http://127.0.0.1:8000/api/chatbot/", {
            prompt: initialPrompt,
          });
        } catch (error) {
          console.error("There was an error sending the initial prompt!", error);
        }
      }
    };

    initializeChat();
  }, [isOpen, chatHistory.length]);

  if (!isOpen) return null;

  const handleSendPrompt = async () => {
    if (prompt.trim() === "") return;

    const newMessage = { sender: "user", text: prompt };
    setChatHistory([...chatHistory, newMessage]);
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/chatbot/", {
        prompt,
      });
      const botMessage = { sender: "bot", text: response.data.response };
      setChatHistory([...chatHistory, newMessage, botMessage]);
    } catch (error) {
      console.error("There was an error sending the prompt!", error);
    } finally {
      setLoading(false);
    }

    setPrompt("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full flex flex-col">
        <div className="flex justify-between items-center px-4 py-2 border-b bg-blue-500 text-white">
          <div className="flex items-center">
            <img src={botLogo} alt="Bot Logo" className="w-8 h-8 mr-2" />
            <h2 className="text-lg font-bold">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            &times;
          </button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto" style={{ maxHeight: '400px' }}>
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded ${
                message.sender === "user" ? "bg-blue-100 text-right ml-auto w-1/2" : "bg-gray-100 text-left w-1/7"
              }`}
              dangerouslySetInnerHTML={{ __html: message.text }} // Render HTML content
            />
          ))}
          {loading && (
            <div className="text-center mt-4">
              <span className="loader"></span> {/* Add your loading spinner here */}
              <p>Loading...</p>
            </div>
          )}
        </div>
        <div className="flex items-center px-4 py-2 border-t bg-gray-100">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt"
            className="flex-1 p-2 border rounded mr-2"
          />
          <button
            onClick={handleSendPrompt}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;