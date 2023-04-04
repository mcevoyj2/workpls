import { Button, Card, Stack } from "react-bootstrap";

const GroupDesign = () => {
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
        <Card className="mathingcard ms-auto">
        <div>
            Matching goes here
        </div>
        </Card>
        </Stack>
        </div> 
        );
}
 
export default GroupDesign;