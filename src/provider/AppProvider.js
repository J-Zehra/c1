import { useMediaQuery } from '@chakra-ui/react';
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [isTablet, isDesktop] = useMediaQuery(['(min-width: 720px)', '(min-width: 1000px)']);

    const [hovered, setHovered] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [pageInView, setPageInView] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <AppContext.Provider value={{ 
            isTablet, 
            isDesktop, 
            hovered, 
            setHovered, 
            isTyping, 
            setIsTyping, 
            pageInView, 
            setPageInView ,
            isHovered, 
            setIsHovered,
            isDarkMode, 
            setIsDarkMode
        }}>
            { children }
        </AppContext.Provider>
    );
}

export const AppState = () => {
    return useContext(AppContext);
}
