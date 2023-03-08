import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const ModulePage = () => {
    return ( 
    <div>
        <Card className="card-yos">
        <h3 className="yearofstudy">Year of Study - 4th Year </h3>
        </Card>
        <br></br>
        <Stack direction="horizontal" gap={3}>

        <Card className="card-all"> 
            <h3 className="namebroname">Modules</h3>
            <br></br>
            <Link to="/internetapp" className="link-light text-decoration-none" >
                CSU44000 - Internet Applications
            </Link> 
            <br></br>

            <Link to="/humanfactors" className="link-light text-decoration-none" >
                CSU44051 - Human Factors
            </Link>
            <br></br>

            <Link to="/advancedcomputationallinguistics" className="link-light text-decoration-none" >
            CSU44062 - Advanced Computational Linguistics
            </Link>
            <br></br>

            <Link to="/entrepeneurship" className="link-light text-decoration-none" >
            CSU44082 - Entrepeneurship & High Teach Venture Creation
            </Link>
            <br></br>

            <Link to="/groupdesign" className="link-light text-decoration-none" >
            CSU44098 - Group Design Project
            </Link>
            <br></br>

            <Link to="/finalyearproject" className="link-light text-decoration-none" >
            CSU44099 - Final Year Project
            </Link>
            <br></br>

            <Link to="/stratinfosys" className="link-light text-decoration-none" >
            STU45006 - Strategic Information Systems
            </Link>

        </Card>
        <Link to="/" className="link-light text-decoration-none ms-auto" >
            <h4>Chats will go here</h4>
        </Link>
        </Stack>
    </div> 
    );
}
 
export default ModulePage;