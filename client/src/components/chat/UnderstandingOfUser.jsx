import { useContext } from "react";
import { Card } from "react-bootstrap";
import { MatchingContext } from "../../context/matchingContext";

const UnderstandingOfUser = () => {
    const {showUnderstanding} = useContext(MatchingContext)
    return ( 
    <div>
        <Card className="cardbygod">
         {showUnderstanding && showUnderstanding.map((un, index) => {
            return (
            <div key={index}>
                <h5 className="finallybygod">{un.understandingUser}</h5>
            </div>
            );
        })}
        </Card>
    </div> 
    );
}
 
export default UnderstandingOfUser;