import { useContext } from "react";
import { MatchingContext } from "../../context/matchingContext";

const PotentialMatch = () => {
    const {potentialMatch} = useContext(MatchingContext);
    console.log("plsgodpls", potentialMatch)
    return ( 
    <>
    </>
    );
}
 
export default PotentialMatch;