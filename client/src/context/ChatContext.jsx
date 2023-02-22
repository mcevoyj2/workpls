import { useState, useEffect, createContext } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/services";


export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
    const [userChats, setUserChats] = useState([]);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatError, setUserChatError] = useState(null);

    useEffect(() => {
        const getUserChats = async()=> {
            if(user?._id) {

                setIsUserChatsLoading(true);
                setUserChatError(null)

                const response = await getRequest(`${baseUrl}/chats/${user?._id}`);

                setIsUserChatsLoading(false);

                if(response.error) {
                    return setUserChatError(response);
                }
                setUserChats(response);
            }
        }

        getUserChats();
    }, [user])

    return (
    <ChatContext.Provider 
    value={{
        userChats,
        isUserChatsLoading,
        userChatError,
    }}
    >
        {children}
    </ChatContext.Provider>
    );
};