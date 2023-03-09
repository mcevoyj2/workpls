import { Button, Card, Stack } from "react-bootstrap";

const InternetApps = () => {
    function getUnderstandingLevelOne() {
        document.getElementById("levelOne").innerHTML='';
        document.getElementById("levelOne").innerHTML='My understanding is Level 1, I could probably help teach others this subject.';
    }
    function getUnderstandingLevelTwo() {
        document.getElementById("levelTwo").innerHTML='';
        document.getElementById("levelTwo").innerHTML='My understanding is Level 2, I would not be able to teach others this subject but neither do I require help.';
    }
    function getUnderstandingLevelThree() {
        document.getElementById("levelThree").innerHTML='';
        document.getElementById("levelThree").innerHTML='My understanding is Level 3, I could probably use some help with this subject.';
    }
    return ( 
    <div>
        <Stack direction="horizontal" gap={3}>
        <div className="dropdown">
            <button className="dropbtn">Understanding Level</button>
                <div className="dropdown-content">
                    <Stack direction="vertical">
                    <Button onClick={getUnderstandingLevelOne}>Level 1 (Good)</Button>
                    <Button onClick={getUnderstandingLevelTwo}>Level 2 (Mediocre)</Button>
                    <Button onClick={getUnderstandingLevelThree}>Level 3 (Poor)</Button>
                    </Stack>
                </div>
            </div>
            <p id="levelOne"></p>
            <p id="levelTwo"></p>
            <p id="levelThree"></p>
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
        <div>
            Matching goes here
        </div>
        </Card>
    </Stack>
    </div> );
}
 
export default InternetApps;