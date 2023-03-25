import { Button, Card, Container, Form, Stack } from "react-bootstrap";
import PotentialModuleChats from "../components/chat/PotentialModuleChats";
import { MatchingContext } from "../context/matchingContext";
import { useContext, useState } from "react";
import UnderstandingOfUser from "../components/chat/UnderstandingOfUser";
import PotentialMatch from "../components/chat/PotentialMatch";
import { AuthContext } from "../context/AuthContext";

const InternetApps = () => {
    const {user} = useContext(AuthContext);
    const { showUnderstanding, createUnderstanding, newUnderstanding } = useContext(MatchingContext);
    return ( 
    <div>
        <Stack direction="horizontal" gap={3}>
            <Stack direction="horizontal">
            <div>
                {showUnderstanding?.length === 0 ? 
                <div className="dropdown">
                <button className="dropbtn">Understanding Level</button>
                <div className="dropdown-content">
                <Stack direction="vertical">
                <Button onClick={() => createUnderstanding(user._id, newUnderstanding?.understandingUser)}>Level 1 (Good)</Button>
                <Button onClick={() => createUnderstanding(user._id, newUnderstanding?.understandingUser)}>Level 2 (Mediocre)</Button>
                <Button onClick={() => createUnderstanding(user._id, newUnderstanding?.understandingUser)}>Level 3 (Poor)</Button>
                </Stack>
                </div>
                </div>
             : 
                    <div>
                        <UnderstandingOfUser/>
                    </div>   
                }
            </div>
            </Stack>
            </Stack>
            

    <Stack direction="horizontal" gap={3}>
        <div>

            <br></br>
        <Card className="card-descriptor">
        <h4 className="yearofstudy">CSU44000 - Internet Applications</h4>
        <h6 className="descriptorofmodule">Module Content</h6>
        <p className="insidecardstyle">
            Key Technologies involved include Javascript, NPM.
            Enviornment includes Client and server side using 
            Node JS and support tools using Clound Computing Architecture.
        </p>
        <h6 className="descriptorofmodule">Module Coordinator</h6>
        <p className="insidecardstyle"> Conor Sheedy</p>
        <h6 className="descriptorofmodule">Ects Weighting</h6>
        <p className="insidecardstyle"> 5 ECTS</p>
        <h6 className="descriptorofmodule">Semester Taught</h6>
        <p className="insidecardstyle"> Semester 1</p>
        <h6 className="descriptorofmodule">Assessment detials</h6>
        <p className="insidecardstyle"> 
        100% Assignments based.<br></br> 
        30% - 1st Assignment <br></br>
        40% - 2nd Assignment <br></br>
        30% - 3rd Assignment<br></br>
        </p>
        </Card>
        </div>
        <Card className="mathingcard ms-auto">
            <h4 className="yearofstudy">Suggested Matches Based on Understanding</h4>
            <br></br>
        {showUnderstanding?.length === 0 ? 
        <p>Please click on the button to enter your level of understanding </p>
        :
        <div>
         <PotentialMatch/>
        </div>
}
        </Card>

    </Stack>
    </div> 
    );
}
 
export default InternetApps;

