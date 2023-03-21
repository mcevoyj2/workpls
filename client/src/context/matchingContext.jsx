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
    const [userUnderstanding, setUserUnderstanding] = useState(null);
    const [newUnderstanding, setNewUnderstanding] = useState(null);



    

    useEffect(() => {
        const getUsers = async () => {
          const response = await getRequest(`${baseUrl}/users`);
          if (response.error) {
            return console.log(response);
          }
          const currentUserResponse = await getRequest(`${baseUrl}/understandings/${user?._id}`);
          if (currentUserResponse.error) {
            return console.log(currentUserResponse);
          }
          if (currentUserResponse.length === 0) {
            return;
          }
          const currentUserUnderstandingUser = currentUserResponse[0]?.understandingUser;
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
          const potentialMatchesWithUnderstanding = potentialForMatches.filter(match => match.understanding[0]?.understandingUser !== currentUserUnderstandingUser);
          console.log("PotentialMatches", potentialMatchesWithUnderstanding);
          setPotentialMatch(potentialMatchesWithUnderstanding);
        };
        getUsers();
      }, [user]);
      
      const createUnderstanding = useCallback(
        async (currentUserId, understandingOfCurrentUser, setUnderstandingOfCurrentUser) => {
        const response = await postRequest(
            `${baseUrl}/understandings`,
            JSON.stringify({
            userId: currentUserId, 
            understandingUser : understandingOfCurrentUser
        })
        );

        if(response.error) {
            return console.log("error creating understanding data ", response);
        }
        setNewUnderstanding(response);
        setUserUnderstanding(response);
        setUnderstandingOfCurrentUser = "";
    }, []);

      
      
        
    

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
        createUnderstanding,
    }}
    >
        {children}
    </MatchingContext.Provider>
    )
};