import { useContext, useState } from "react";
import { Button, Card, Form, Stack } from "react-bootstrap";
import PotentialMatch from "../components/chat/PotentialMatch";
import UnderstandingOfUser from "../components/chat/UnderstandingOfUser";
import { AuthContext } from "../context/AuthContext";
import { MatchingContext } from "../context/matchingContext";

const FinalYearProject = () => {
    const { user } = useContext(AuthContext);
    const { storeUnderstanding, updateUnderstanding, showUnderstanding, } = useContext(MatchingContext);
    const [understandingInput, setUnderstandingInput] = useState("");
    return ( 
        <div>
        <Stack direction="horizontal" gap={3}>
            <Stack direction="horizontal">
            <div>
                {showUnderstanding?.length === 0 ? 
                <Form className="formsizetwo">
                <Form.Control 
                placeholder="Understanding Level"
                value={understandingInput}
                onChange={setUnderstandingInput}
                />
            <Button variant='primary' type='submit'>Submit</Button>
            </Form> : 
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
        <h4 className="yearofstudy">CSU44099 - Final Year Project</h4>
        <h6 className="descriptorofmodule">Module Content</h6>
        <p className="insidecardstyle">
        The capstone project in computer science is an individual large 
        scale project supervised by an academic from one of the School 
        of Computer Science and Statistics Disciplines. 
        Supervisors propose possible project topics for which 
        students can then apply. If students do not select a project 
        within the first 2 weeks of the first semester, a supervisor 
        is allocated to them and they must negotiate the topic of 
        the project with the supervisor.
        </p>
        <h6 className="descriptorofmodule">Module Coordinator</h6>
        <p className="insidecardstyle">	Conor Sheedy</p>
        <h6 className="descriptorofmodule">Ects Weighting</h6>
        <p className="insidecardstyle"> 20 ECTS</p>
        <h6 className="descriptorofmodule">Semester Taught</h6>
        <p className="insidecardstyle"> Semester 1 & 2</p>
        <h6 className="descriptorofmodule">Assessment detials</h6>
        <p className="insidecardstyle"> 
        100% Coursework.<br></br> 
        5% - MCQ 1<br></br>
        10% - Interim Report<br></br>
        80% - Project Report<br></br>
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
 
export default FinalYearProject;