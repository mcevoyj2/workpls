import { Button, Card, Stack } from "react-bootstrap";

const Entrepeneurship = () => {
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
        <h4 className="yearofstudy">CSU44082 - Entrepeneurship & High Teach Venture Creation</h4>
        <h6 className="descriptorofmodule">Module Content</h6>
        <p className="insidecardstyle">
        On successful completion of this module, students will be able to 
        Explain how high tech venture creation operates,
        Understand and give examples of some of the basic skills needed to recognise commercial opportunities, 
        Describe how high-tech industry in general and ICT in particular has evolved and continues to evolve and
        Describe a product or service to a non-technical audience.
        </p>
        <h6 className="descriptorofmodule">Module Coordinator</h6>
        <p className="insidecardstyle">	Prof. Donal O'Mahony</p>
        <h6 className="descriptorofmodule">Ects Weighting</h6>
        <p className="insidecardstyle"> 5 ECTS</p>
        <h6 className="descriptorofmodule">Semester Taught</h6>
        <p className="insidecardstyle"> Semester 2</p>
        <h6 className="descriptorofmodule">Assessment detials</h6>
        <p className="insidecardstyle"> 
        100% Assignments based.<br></br> 
        20% - Quiz 1<br></br>
        50% - Business Plan<br></br>
        20% - Quiz 2<br></br>
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
 
export default Entrepeneurship;