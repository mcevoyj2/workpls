import { useContext, useState } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import PotentialMatch from "../components/chat/PotentialMatch";
import UnderstandingOfUser from "../components/chat/UnderstandingOfUser";
import { AuthContext } from "../context/AuthContext";
import { MatchingContext } from "../context/matchingContext";

const Strategic = () => {
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
 
export default Strategic;