import { createContext, useCallback, useState } from "react";

export const MatchingContext = createContext();

export const MatchingContextProvider = ({ children }) => {
    const [understandingLevel, setUnderstandingLevel] = useState(null);
    const [storeUnderstanding, setStoreUnderstanding] = useState({
        understandingLevel: "",
    });

    console.log("storeUnderstanding", storeUnderstanding);

    const updateUnderstanding = useCallback((info) => {
        setStoreUnderstanding(info);
    }, [])

    return (
    <MatchingContext.Provider 
    value=
    {{
        understandingLevel,
        storeUnderstanding,
        updateUnderstanding,
    }}
    >
        {children}
    </MatchingContext.Provider>
    )
};