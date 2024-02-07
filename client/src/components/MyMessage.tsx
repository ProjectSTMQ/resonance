// temporary, needs to match backend database model
interface MyMessageProps {
    content: string;
    time: string;
}

function MyMessage({ content, time }: MyMessageProps) {
    return(
        <div className="message my_message">
            <p>{content}<br/><span>{time}</span></p>
        </div>
    );
}

export default MyMessage;