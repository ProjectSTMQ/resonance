// temporary, needs to match backend database model
interface FromMessageProps {
    content: string;
    time: Date;
}

function FromMessage({ content, time }: FromMessageProps) {
    return(
        <div className="message from_message">
            <p>{content}<br/><span>{time.toDateString()}</span></p>
        </div>
    );
}

export default FromMessage;