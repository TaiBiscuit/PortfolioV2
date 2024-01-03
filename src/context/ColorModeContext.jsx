import React, { createContext, useState } from "react";

export const ColorModeContext = createContext();

export const ColorModeProvider = ({children}) => {
    const [lightMode, setLightMode] = useState(false)

    return (
        <ColorModeContext.Provider value={{lightMode, setLightMode}}>
        {children}
        </ColorModeContext.Provider>
    );
};