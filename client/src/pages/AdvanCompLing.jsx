import { useContext, useState } from "react";
import { Button, Card, Form, Stack } from "react-bootstrap";
import PotentialMatch from "../components/chat/PotentialMatch";
import UnderstandingOfUser from "../components/chat/UnderstandingOfUser";
import { AuthContext } from "../context/AuthContext";
import { MatchingContext } from "../context/matchingContext";

const AdvanCompLing = () => {
    const {user} = useContext(AuthContext);
    const { showUnderstanding, createUnderstanding, newUnderstanding, setUnderstandPls} = useContext(MatchingContext);
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
                <Button onClick={() => createUnderstanding("My understanding is Level 1, I could probably help teach others this subject.", user._id, setUnderstandPls)}>Level 1 (Good)</Button>
                <Button onClick={() => createUnderstanding("My understanding is Level 2, I could not teach this subject nor require help.", user._id, setUnderstandPls)}>Level 2 (Mediocre)</Button>
                <Button onClick={() => createUnderstanding("My understanding is Level 3, I could probably use help in this subject", user._id, setUnderstandPls)}>Level 3 (Poor)</Button>
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
        <h4 className="yearofstudy">CSU44062 - Advanced Computational Linguistics</h4>
        <h6 className="descriptorofmodule">Module Content</h6>
        <p className="insidecardstyle">
        Course is about how to have machines learn from data, 
        with emphasis on techniques which can be applied in language-related 
        areas such as Machine Translation, Speech Recognition and 
        Topic Modeling. The big emphasis is on unsupervised machine 
        learning, which is one trait distinguishing this from other 
        modules concerning machine learning. 
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
        <Card className="mathingcard ms-auto">
            <h4 className="yearofstudy">Suggested Matches Based on Understanding</h4>
            <br></br>
        <div>
         <PotentialMatch/>
        </div>
        </Card>
    </Stack>
    </div> 
    );
}
 
export default AdvanCompLing;