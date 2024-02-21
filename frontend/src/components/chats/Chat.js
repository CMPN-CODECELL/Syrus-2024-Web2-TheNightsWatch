import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chat.css"; 

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [text, setText] = useState("");
  const [googleId, setGoogleId] = useState(""); 

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    try {
      const response = await axios.get("http://localhost:5000/forumChat/getAllChats");
      setChats(response.data.chats);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/forumChat/addChat", { googleId, text });
      setText("");
      setGoogleId("");
      fetchChats(); 
    } catch (error) {
      console.error("Error adding chat:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="chat-container">
      <div className="chat-messages">
        {chats.map((chat, index) => (
          <div key={index} className="chat-message">
            <span className="chat-username">{chat.googleId}: </span>
            <span>{chat.text}</span>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="chat-input-form">
          <input type="text" value={googleId} onChange={(e) => setGoogleId(e.target.value)} className="chat-input" placeholder="Enter your Google ID..." />
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="chat-input" placeholder="Type your message..." />
          <button type="submit" className="chat-submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Chat;