import { Button, Card, Stack } from "react-bootstrap";

const Strategic = () => {
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
        <h4 className="yearofstudy">STU45006 - Strategic Information Systems</h4>
        <h6 className="descriptorofmodule">Module Content</h6>
        <p className="insidecardstyle">
        The objective of this course is to introduce students to 
        Strategic Information Systems in the workplace and society.  
        It examines how existing Strategic Information Systems as 
        well as emerging, disruptive Information Systems can support 
        improved organisational and societal performance. 
        Additionally, discussion in class will focus on the 
        increasing need for industry and society to develop 
        information systems strategies and awareness regarding the 
        design of these systems in order to understand the potential 
        for change.
        </p>
        <h6 className="descriptorofmodule">Module Coordinator</h6>
        <p className="insidecardstyle">	Diana Wilson </p>
        <h6 className="descriptorofmodule">Ects Weighting</h6>
        <p className="insidecardstyle"> 10 ECTS</p>
        <h6 className="descriptorofmodule">Semester Taught</h6>
        <p className="insidecardstyle"> Semester 1 & 2</p>
        <h6 className="descriptorofmodule">Assessment detials</h6>
        <p className="insidecardstyle"> 
        100% Assignments.<br></br> 
        50% - Group     Assignment<br></br>
        50% - Individual Assignments<br></br>
        </p>
        </Card>
        </div>
        <Card className="mathingcard ms-auto">
        <div>
            Matching goes here
        </div>
        </Card>
        </Stack>
    </div> 
    );
}
 
export default Strategic;