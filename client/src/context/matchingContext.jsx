import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/services";

export const MatchingContext = createContext();

export const MatchingContextProvider = ({ children, user }) => {
    const [understandingLevel, setUnderstandingLevel] = useState(null);
    const [storeUnderstanding, setStoreUnderstanding] = useState({
        understandingLevel: "",
    });
    const [showUnderstanding, setShowUnderstanding] = useState("");
    const [understandingError, setUnderstandingError] = useState(null);
    const [potentialMatch, setPotentialMatch] = useState([]);
    const [potentialMatchesWithUsers, setPotentialMatchesWithUsers] = useState([]);

    

    useEffect(() => {
        const getUsers = async () => {
          const response = await getRequest(`${baseUrl}/users`);
          if (response.error) {
            return console.log(response);
          }
          const potentialForMatches = [];
          for (const u of response) {
            if (user?._id === u._id) {
              continue; 
            }
            const understandingResponse = await getRequest(`${baseUrl}/understandings/${u._id}`);
            const userResponse = await getRequest(`${baseUrl}/users/find/${u._id}`);
            if (understandingResponse.length === 0) {
              continue;
            }
            const match = {
              user: userResponse,
              understanding: understandingResponse,
            };
            potentialForMatches.push(match);
          }
          console.log("PotentialMatches", potentialForMatches);
          setPotentialMatch(potentialForMatches);
        };
        getUsers();
      }, [user]);
      
      
        
    

    const updateUnderstanding = useCallback((info) => {
        setStoreUnderstanding(info);
    }, []);

    useEffect(() => {
        const getUnderstanding = async () => {

                const response = await getRequest(`${baseUrl}/understandings/${user?._id}`);

                if (response.error) {
                    setUnderstandingError(response);
                }
                setShowUnderstanding(response);
            
    }
        getUnderstanding();
    }, [user]);


    return (
    <MatchingContext.Provider 
    value=
    {{
        understandingLevel,
        storeUnderstanding,
        updateUnderstanding,
        showUnderstanding,
        potentialMatch,
    }}
    >
        {children}
    </MatchingContext.Provider>
    )
};