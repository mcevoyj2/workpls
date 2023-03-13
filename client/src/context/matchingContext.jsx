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
    }}
    >
        {children}
    </MatchingContext.Provider>
    )
};