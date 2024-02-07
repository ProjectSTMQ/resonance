import IonIcon from '@reacticons/ionicons';

interface MenuHeaderProps {
    imgSrc: string;
}

function MenuHeader({ imgSrc }: MenuHeaderProps) {
    return (
        <div className="header">
            <div className="userimg">
                <img src={imgSrc} className="cover"/>
            </div>
            <ul className="nav_icons">
                {/* <li><IonIcon name="scan-circle-outline" /></li> */}
                <li><IonIcon name="chatbox" /></li> {/* create new chat? */}
                <li><IonIcon name="ellipsis-vertical" /></li> {/* maybe just a settings icon instead? */}
            </ul>
        </div>
    );
}

export default MenuHeader;
