import IonIcon from '@reacticons/ionicons';

interface ChatHeaderProps {
    imgSrc: string;
    title: string;
}

function ChatHeader({ imgSrc, title }: ChatHeaderProps) {
    return (
        <div className="header">
            <div className="imgText">
                <div className="userimg">
                    <img src={imgSrc} className="cover"/>
                </div>
                <h4>{title}<br/><span>possible "online/offline" placeholder</span></h4>
            </div>
            <ul className="nav_icons">
                <li><IonIcon name="search-outline" /></li>
                <li><IonIcon name="ellipsis-vertical" /></li>
            </ul>
        </div>
    );
}

export default ChatHeader;
