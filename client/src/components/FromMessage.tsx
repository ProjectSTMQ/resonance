// temporary, needs to match backend database model
interface FromMessageProps {
    content: string;
    time: string;
}

function FromMessage({ content, time }: FromMessageProps) {
    return(
        <div className="message from_message">
            <p>{content}<br/><span>{time}</span></p>
        </div>
    );
}

export default FromMessage;