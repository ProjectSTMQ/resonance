import React from 'react';
import MenuHeader from '../components/MenuHeader';
import Search from '../components/SearchBox';
import Conversation from '../components/Conversation';
import ChatHeader from '../components/ChatHeader';
import MyMessage from '../components/MyMessage';
import FromMessage from '../components/FromMessage';
import IonIcon from '@reacticons/ionicons';

const Chat: React.FC = () => {

  // to be replaced with data from the server api call
  const conversations = [
    { imgSrc: "http://via.placeholder.com/150", username: "John Doe", time: "12:00", message_preview: "this is a preview" },
    { imgSrc: "http://via.placeholder.com/150", username: "John Doe", time: "12:00", message_preview: "this is a preview" },    
  ];

  // to be replaced with data from the server api call - needs to match backend database model
  const messages = [
    { type: "my_message", content: "Hello", time: "12:00" },
    { type: "from_message", content: "Hi", time: "12:00" },
  ];

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
                <Conversation imgSrc={conversation.imgSrc} username={conversation.username} time={conversation.time} message_preview={conversation.message_preview} />
              )}
            </div>
          </div>

          <div className="rightSide">
            <ChatHeader imgSrc="http://via.placeholder.com/150" title="<CURRENT USER/GROUP NAME>"/>
            <div className="chatbox">
              {messages.map((message) => {
                if (message.type === 'my_message') {
                  return <MyMessage content={message.content} time={message.time} />;
                } else {
                  return <FromMessage content={message.content} time={message.time} />;
                }
              })}
            </div>
            <div className="chatbox_input">
              {/* idk probably don't need these icons */}
              {/*<IonIcon name="happy-outline" className="ionicon"/>*/}
              {/*<IonIcon name="attach-outline" className="ionicon"/>*/}
              <input type="text" placeholder="Type a message" />
              <IonIcon name="send-outline" className="ionicon"/>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Chat;
