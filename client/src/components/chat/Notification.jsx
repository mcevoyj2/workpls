import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/chatContext";
import { unreadNotificationsFunc } from "../../utils/unreadNotification";
import moment from "moment";

const Notification = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {notifications, userChats, allUsers, markAllNotificationsAsRead, markNotificationAsRead} = useContext(ChatContext);
    const {user} = useContext(AuthContext);

    const unreadNotifications = unreadNotificationsFunc(notifications);
    const modifiedNotifications = notifications.map((n) => {
        const sender = allUsers.find((user) => user._id === n.senderId);
        return {
            ...n,   
            senderName: sender?.name,
        }
    });

    return ( 
        <div className="notifications">
            <div className="notifications-icon" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="currentColor" 
            className="bi bi-chat-fill" 
            viewBox="0 0 16 16">
                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                </svg>
                {unreadNotifications?.length === 0 ? null : (
                    <span className="notification-cout">
                        <span>{unreadNotifications?.length}</span>
                    </span>
                )}
            </div>
            {isOpen ? (
            <div className="notifications-box">
                <div className="notifications-header">
                    <h3>Notifications</h3>
                    <div className="mark-as-read" onClick={() => markAllNotificationsAsRead(notifications)}>
                        Mark all as read
                    </div>
                </div>
                {modifiedNotifications?.length === 0 ? 
                <span className="notification">No notifications yet...</span> : 
                null}
                {modifiedNotifications && modifiedNotifications.map((n, index) => {
                    return <div 
                    key={index} 
                    className={n.isRead ? 'notification' : 'notification not-read'}
                    onClick={() => {
                        markNotificationAsRead(n, userChats, user,notifications);
                        setIsOpen(false);
                    }}
                    >
                        <span>
                        {`${n.senderName} sent you a new message`}
                        </span>
                        <span className="notification-time">
                            {moment(n.date).calendar()}
                        </span>
                    </div>
                })}
            </div>
            ) : null}
        </div>
     );
}
 
export default Notification;