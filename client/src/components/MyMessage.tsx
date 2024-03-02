// temporary, needs to match backend database model
interface MyMessageProps {
    content: string;
    time: Date;
}

function MyMessage({ content, time }: MyMessageProps) {
    return(
        <div className="message my_message">
            <p>{content}<br/><span>{time.toDateString()}</span></p>
        </div>
    );
}

export default MyMessage;