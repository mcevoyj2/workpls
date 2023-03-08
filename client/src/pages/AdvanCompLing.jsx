import { Button, Card, Stack } from "react-bootstrap";

const AdvanCompLing = () => {
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
        <h4 className="yearofstudy">CSU44062 - Advanced Computational Linguistics</h4>
        <h6 className="descriptorofmodule">Module Content</h6>
        <p className="insidecardstyle">
        Course is about how to have machines learn from data, 
        with emphasis on techniques which can be applied in language-related 
        areas such as Machine Translation, Speech Recognition and 
        Topic Modeling. The big emphasis is on unsupervised machine 
        learning, which is one trait distinguishing this from other 
        modules concerning machine learning. 
        Another trait is the concern with data items of arbitrary length.
        </p>
        <h6 className="descriptorofmodule">Module Coordinator</h6>
        <p className="insidecardstyle">		Dr Martin Emms</p>
        <h6 className="descriptorofmodule">Ects Weighting</h6>
        <p className="insidecardstyle"> 5 ECTS</p>
        <h6 className="descriptorofmodule">Semester Taught</h6>
        <p className="insidecardstyle"> Semester 1</p>
        <h6 className="descriptorofmodule">Assessment detials</h6>
        <p className="insidecardstyle"> 
        30% Assignment, 70% exam based.<br></br> 
        8% - CourseWork 1<br></br>
        9.5% - Coursework 2<br></br>
        12.5% - Coursework 3<br></br>
        70% - In Person Exam<br></br>
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
 
export default AdvanCompLing;