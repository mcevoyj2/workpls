import { useContext } from "react";
import { MatchingContext } from "../../context/matchingContext";

const UnderstandingOfUser = () => {
    const {showUnderstanding} = useContext(MatchingContext)
    return ( 
    <div>
         {showUnderstanding && showUnderstanding.map((un, index) => {
            return (
            <div key={index}>
                <p className="finallybygod">{un.understandingUser}</p>
            </div>
            );
        })}
    </div> 
    );
}
 
export default UnderstandingOfUser;