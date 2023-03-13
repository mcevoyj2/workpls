import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/services";

export const MatchingContext = createContext();

export const MatchingContextProvider = ({ children, user }) => {
    const [understandingLevel, setUnderstandingLevel] = useState(null);
    const [storeUnderstanding, setStoreUnderstanding] = useState({
        understandingLevel: "",
    });
    const [showUnderstanding, setShowUnderstanding] = useState(null);
    const [understandingError, setUnderstandingError] = useState(null);
    const [potentialMatch, setPotentialMatch] = useState([]);
    

    useEffect(() => {
        const getUsers = async () => {
            const response = await getRequest(`${baseUrl}/users`);

            if (response.error) {
                return console.log(response);
            }

        const matchChats = response.filter((u) => {
            let isNotpotentialMatch = false;
            if(user?._id === u._id) return false;

            if(u?.showUnderstanding === true) {
                return isNotpotentialMatch;
            }
            return !isNotpotentialMatch;
            
        });    
        console.log("gdgdgdgdg",matchChats)
        setPotentialMatch(matchChats);
        }

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