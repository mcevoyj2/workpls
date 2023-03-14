import { useContext } from "react";
import { MatchingContext } from "../../context/matchingContext";

const PotentialMatch = () => {
    const {potentialMatch} = useContext(MatchingContext);
    console.log("plsgodpls", potentialMatch)
    return ( 
    <>
    <div>
    <ul>
        {potentialMatch.map((match) => (
          <li key={match.user._id}>{match.user.name}</li>
        ))}
      </ul>
    </div>

    </>
    );
}
 
export default PotentialMatch;