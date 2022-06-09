import { useMediaQuery } from '@chakra-ui/react';
import React, { Children, createContext, useContext, useState } from 'react'

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [isTablet, isDesktop] = useMediaQuery(['(min-width: 720px)', '(min-width: 1600px)']);

    const [hovered, setHovered] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    return (
        <AppContext.Provider value={{ isTablet, isDesktop, hovered, setHovered, isTyping, setIsTyping }}>
            { children }
        </AppContext.Provider>
    );
}

export const AppState = () => {
    return useContext(AppContext);
}
