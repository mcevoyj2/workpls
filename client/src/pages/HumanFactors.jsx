import { useContext, useState } from "react";
import { Button, Card, Form, Stack } from "react-bootstrap";
import PotentialMatch from "../components/chat/PotentialMatch";
import UnderstandingOfUser from "../components/chat/UnderstandingOfUser";
import { AuthContext } from "../context/AuthContext";
import { MatchingContext } from "../context/matchingContext";

const HumanFactors = () => {
    const { user } = useContext(AuthContext);
    const { storeUnderstanding, updateUnderstanding, showUnderstanding, } = useContext(MatchingContext);
    const [understandingInput, setUnderstandingInput] = useState("");
    return ( 
        <div>
        <Stack direction="horizontal" gap={3}>
            <div>
                {showUnderstanding?.length === 0 ? 
                <Stack direction="horizontal">
                <Form className="formsizetwo">
                <Form.Control 
                placeholder="Understanding Level"
                value={understandingInput}
                onChange={setUnderstandingInput}
                />
            <Button variant='primary' type='submit'>Submit</Button>
            </Form>
            </Stack> : 
                    <div>
                        <UnderstandingOfUser/>
                    </div>   
                }
                 
            </div>
            </Stack>
            

    <Stack direction="horizontal" gap={3}>
        <div>
            <br></br>
        <Card className="card-descriptor">
        <h4 className="yearofstudy">CCSU44051 - Human Factors</h4>
        <h6 className="descriptorofmodule">Module Content</h6>
        <p className="insidecardstyle">
        The module provides an introduction to the field of Human-Computer Interaction, 
        focused both on understanding human interactions with technology and on the design of usable interactive systems. Students will understand the main issues underlying the usability of systems, 
        and the main techniques and processes for interface design and evaluation. 
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
 
export default HumanFactors;