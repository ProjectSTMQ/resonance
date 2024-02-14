// import { useState } from 'react';

interface ConversationProps {
    imgSrc: string;
    convoName: string;
    time: string;
    messagePreview: string;
}

  
function Conversation({ imgSrc, convoName, time, messagePreview}: ConversationProps) {
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
                    <h4>{convoName}</h4>
                    <p className="time">{time}</p>
                </div>
                <div className="message_preview">
                    <p>{messagePreview}</p>
                    {/* <b>1</b> */}
                </div>
            </div>
        </div>
    );
}

export default Conversation;
