import { useContext } from "react";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserChat from "../components/chat/UserChat";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/chatContext";

const Home = () => {
    const { user } = useContext(AuthContext);

    const { userChats, isUserChatsLoading, updateCurrentChat
    } = useContext(ChatContext);
    return ( 
    <div>
        <h3 style={{color: "#000"}}>PeerAcademy - Students helping Students</h3>
        <h5>PeerAcademy is a web application created to offer a platform for students
            to message and communicatite with each other about various computer science modules. 
            Users can message their peers for help with coding or other problems they my be struggling 
            with within the course. 
        </h5>
        <br></br>

        <Stack direction="horizontal" gap={3}>
        <Stack direction="vertical" gap={3}>
        <Link to="/" className="link-light text-decoration-none " >
        <h4 className="namebroname">Chats</h4>
        </Link>
            <Card className="card-all-three">
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
            </Stack>
            )}
            </Card>
            </Stack>
            <Stack direction="vertical" gap={3}>
            <Link to="/ModulePage" className="link-light text-decoration-none ms-auto" >
                <h4 className="namebroname">Modules Page</h4>
            </Link> 
            <Card className="card-all ms-auto"> 

            <br></br>
            <Link to="/internetapp" className="link-light text-decoration-none" >
                CSU44000 - Internet Applications
            </Link> 
            <br></br>

            <Link to="/humanfactors" className="link-light text-decoration-none" >
                CSU44051 - Human Factors
            </Link>
            <br></br>

            <Link to="/advancedcomputationallinguistics" className="link-light text-decoration-none" >
            CSU44062 - Advanced Computational Linguistics
            </Link>
            <br></br>

            <Link to="/entrepeneurship" className="link-light text-decoration-none" >
            CSU44082 - Entrepeneurship & High Teach Venture Creation
            </Link>
            <br></br>

            <Link to="/groupdesign" className="link-light text-decoration-none" >
            CSU44098 - Group Design Project
            </Link>
            <br></br>

            <Link to="/finalyearproject" className="link-light text-decoration-none" >
            CSU44099 - Final Year Project
            </Link>
            <br></br>
            
            <Link to="/stratinfosys" className="link-light text-decoration-none" >
            STU45006 - Strategic Information Systems
            </Link>
            </Card>
            </Stack>

            </Stack>
    </div> 
    );
}
 
export default Home;