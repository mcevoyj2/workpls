import { Button, Card, Stack } from "react-bootstrap";

const HumanFactors = () => {
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
        <h4 className="yearofstudy">CCSU44051 - Human Factors</h4>
        <h6 className="descriptorofmodule">Module Content</h6>
        <p className="insidecardstyle">
        The module provides an introduction to the field of Human-Computer Interaction, 
        focused both on understanding human interactions with technology and on the design of useful 
        and usable interactive systems. Students will understand the main issues underlying the usability of systems, 
        and the main techniques and processes for interface design and evaluation. 
        They will also gain a basic understanding of the theories which account for human performance.
        </p>
        <h6 className="descriptorofmodule">Module Coordinator</h6>
        <p className="insidecardstyle"> Dr. Gavin Doherty</p>
        <h6 className="descriptorofmodule">Ects Weighting</h6>
        <p className="insidecardstyle"> 5 ECTS</p>
        <h6 className="descriptorofmodule">Semester Taught</h6>
        <p className="insidecardstyle"> Semester 1</p>
        <h6 className="descriptorofmodule">Assessment detials</h6>
        <p className="insidecardstyle"> 
        100% Assignments based.<br></br> 
        25% - Small written Assignments <br></br>
        10% - Reading Assignment <br></br>
        35% - Design Assignment<br></br>
        30% - Prototyping Assignment<br></br>
        </p>
        </Card>
        </div>
        <div className="ms-auto">
            Matching goes here
        </div>
        </Stack>
    </div>
    );
}
 
export default HumanFactors;