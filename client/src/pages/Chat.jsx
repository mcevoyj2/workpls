import { useContext } from "react";
import { Container, Stack } from "react-bootstrap";
import PotentialChat from "../components/chat/PotentialChat";
import UserChat from "../components/chat/UserChat";
import { ChatContext } from "../context/chatContext";
import { AuthContext } from "../context/AuthContext";
import ChatBox from "../components/chat/ChatBox";

const Chat = () => {
    const { user } = useContext(AuthContext);
    console.log(user)

    const { userChats, isUserChatsLoading, updateCurrentChat
    } = useContext(ChatContext);

    return (
    <Container>
        <PotentialChat />
        {userChats?.length < 1 ? null : (
        <Stack direction="horizontal" gap={4} className="align-items-start">
            <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
            {isUserChatsLoading && <p>Loading chats...</p>}
            {userChats?.map((chat,index) => {
                return (
                <div 
                key={index} 
                onClick={() => updateCurrentChat(chat)}
                >
                    <UserChat chat={chat} user={user}/>
                </div>
                );
            })}
            </Stack>
            <ChatBox />
            </Stack>
            )}
    </Container>
    );
};

export default Chat;
