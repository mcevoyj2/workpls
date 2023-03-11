import { useContext } from "react";
import { ChatContext } from "../../context/chatContext";
import { AuthContext } from "../../context/AuthContext";
import { Container, Stack } from "react-bootstrap";

const PotentialModuleChats = () => {
    const { user } = useContext(AuthContext);
    const { potentialChats, createChat, onlineUsers } = useContext(ChatContext);
    return ( 
    <>
    <div className="possible-users-module">
        <Container className="workdirection">
        {potentialChats && potentialChats.map((u, index) => {
            return (
            <Stack direction="vertical">
            <div className="single-user-module" key={index} >
                {u.name}
            </div>
            </Stack>
            );
        })}
        </Container>
    </div>

    </>
    );
};

 
export default PotentialModuleChats;