import React from 'react';
import MenuHeader from '../components/MenuHeader';
import Search from '../components/SearchBox';
import Conversation from '../components/Conversation';
import ChatHeader from '../components/ChatHeader';
import MyMessage from '../components/MyMessage';
import FromMessage from '../components/FromMessage';
import IonIcon from '@reacticons/ionicons';

import io from "socket.io-client";

import { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const socket = io("http://localhost:5000" , { transports : ['websocket'] });

interface conversation {
  convoId : string
  imgSrc : string
  convoName : string
  time : string
  messagePreview : string
}

interface message {
  sender : string
  messageId : string
  content : string
  time : string
 
}

socket.on("connect", () => {
  console.log( " Connected to server");

});

socket.on("connectionConfirm", (socketid : string) => {
console.log( "Your id is: " + socketid);
});






const Chat: React.FC = () => {

  // to be replaced with data from the server api call - needs to match backend database model
  // to be replaced with data from the server api call
  const [conversations, setConversations] = useState<conversation[]>([
    { convoId : "1", imgSrc: "http://via.placeholder.com/150", convoName: "John Doe", time: "12:00", messagePreview: "this is a preview" },
    { convoId : "2",  imgSrc: "http://via.placeholder.com/150", convoName: "John Doe", time: "12:00", messagePreview: "this is a preview" }
  ]);

  const [messages, setMessages] = useState<message[]>([
    { sender : "other1" , messageId : "1", content: "Hello", time: "12:00" },
    { sender : "other2" , messageId : "2", content: "Hi", time: "12:00" }
  ]);
   
  const [input , setInput] = useState("");

  const location = useLocation();
  const username = location.state.username;
  const convoId = location.state.convoId;
 
  
  useEffect(() => {
    
      console.log("User: "+ username + "trying to join room: "+ convoId);
      socket.emit("joinRoom", {username, convoId});
   
  
  }, []);


  //socket.on creates new instance on each render, must be cleaned with .off
  useEffect(() => {

    socket.on("messageUpdate" , (newMessage : message) => { 
      console.log("Dab");       setMessages([
        ...messages,
        newMessage
      ]);
    });
    return () => {
      socket.off('messageUpdate');
    };
  }, [messages]);


  const sendMessage = (): void => {

    if(input){
      const newMessage : message = {
        sender : socket.id!,
        messageId : "5",
        content : input,
        time : "rn lol",

      }
      socket.emit("newMessage" , newMessage);
      console.log(newMessage)
      setInput("");
    }
  }

  const updateInput = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setInput(e.currentTarget.value);
   
  }




  return (
    <section className="chat-page">
      <div className="body">
        <div className="container">

          <div className="leftSide">
            <MenuHeader imgSrc="http://via.placeholder.com/150" />
            <Search placeholder="Search for a chat" />
            <div className="chatlist">
              {conversations.map(
                (conversation) => 
                <Conversation key = {conversation.convoId} imgSrc={conversation.imgSrc} convoName={conversation.convoName} time={conversation.time} messagePreview={conversation.messagePreview} />
              )}
            </div>
          </div>

          <div className="rightSide">
            <ChatHeader imgSrc="http://via.placeholder.com/150" title="<CURRENT USER/GROUP NAME>"/>
            <div className="chatbox">
              {messages.map((message , index) => {
                if (message.sender === socket.id) {
                  return <MyMessage key = {index} content={message.content} time={message.time} />;
                } else {
                  return <FromMessage key = {index} content={message.content} time={message.time} />;
                }
              })}
             
            </div>
            <div className="chatbox_input">
              {/* idk probably don't need these icons */}
              {/*<IonIcon name="happy-outline" className="ionicon"/>*/}
              {/*<IonIcon name="attach-outline" className="ionicon"/>*/}
              <input type="text" placeholder="Type a message" value = {input} onChange = {updateInput}/>
              <button onClick = {sendMessage}>
              <IonIcon name="send-outline" className="ionicon"/>
              </button>
            </div>
           
            
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Chat;
