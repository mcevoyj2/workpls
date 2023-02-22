import { useContext } from "react";
import { ChatContext } from "../context/chatContext";


const Chat = () => {

    const { userChats,
        isUserChatsLoading,
        userChatError,
    } = useContext(ChatContext);

    console.log("userchats", userChats);
    return (<>Chat</>);
};

export default Chat;