// import { useState } from 'react';

interface ConversationProps {
    imgSrc: string;
    username: string;
    time: string;
    message_preview: string;
}

function Conversation({ imgSrc, username, time, message_preview}: ConversationProps) {
    // const [isActive, setIsActive] = useState(false);

    // const handleClick = () => {
    //     setIsActive(!isActive);
    // };

    return (
        // <div className={`block ${isActive ? 'active' : ''}`} onClick={handleClick}>
        <div className="block">
            <div className="imgbox">
                <img src={imgSrc} className="cover"/>
            </div>
            <div className="details">
                <div className="listHead">
                    <h4>{username}</h4>
                    <p className="time">{time}</p>
                </div>
                <div className="message_preview">
                    <p>{message_preview}</p>
                    {/* <b>1</b> */}
                </div>
            </div>
        </div>
    );
}

export default Conversation;
