import { useContext } from "react";
import { ChatContext } from "../../context/chatContext";
import { AuthContext } from "../../context/AuthContext";

const PotentialChat = () => {
    const { user } = useContext(AuthContext);
    const { potentialChats, createChat } = useContext(ChatContext);
    return ( 
    <>
    <div className="possible-users">
        {potentialChats && potentialChats.map((u, index) => {
            return (
            <div className="single-user" key={index} 
            onClick={() => createChat(user._id, u._id)}
            >
                {u.name}
            </div>
            );
        })}
    </div>

    </>
    );
};
 
export default PotentialChat;