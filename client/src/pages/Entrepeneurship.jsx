import { useContext, useState } from "react";
import { Button, Card, Form, Stack } from "react-bootstrap";
import PotentialMatch from "../components/chat/PotentialMatch";
import UnderstandingOfUser from "../components/chat/UnderstandingOfUser";
import { AuthContext } from "../context/AuthContext";
import { MatchingContext } from "../context/matchingContext";

const Entrepeneurship = () => {
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
 
export default Entrepeneurship;