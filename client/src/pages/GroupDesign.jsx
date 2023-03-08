import { Button, Card, Stack } from "react-bootstrap";

const GroupDesign = () => {
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
        <h4 className="yearofstudy">CSU44098 - Group Design Project</h4>
        <h6 className="descriptorofmodule">Module Content</h6>
        <p className="insidecardstyle">
        On successful completion of this module, students will be able to
        Apply Agile development methods,
        Work successfully within an inter-disciplinary development team,
        Appreciate team dynamics and the workflow management needed to achieve successful teamwork,
        Relate to customer needs and requirements and transform these into product tasks and also
        Appreciate the role of iterative product testing and end user evaluation in a development process.
        </p>
        <h6 className="descriptorofmodule">Module Coordinator</h6>
        <p className="insidecardstyle">	Goetz Boterweck</p>
        <h6 className="descriptorofmodule">Ects Weighting</h6>
        <p className="insidecardstyle"> 10 ECTS</p>
        <h6 className="descriptorofmodule">Semester Taught</h6>
        <p className="insidecardstyle"> Semester 2</p>
        <h6 className="descriptorofmodule">Assessment detials</h6>
        <p className="insidecardstyle"> 
        100% Assignments based.<br></br> 
        10% - Individual Class Contribution<br></br>
        30% - Individual Group Contribution <br></br>
        60% - Group Achievement<br></br>
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
 
export default GroupDesign;