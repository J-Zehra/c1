import { Box } from '@chakra-ui/react'
import React from 'react'
import { AppState } from '../provider/AppProvider'

export const Footer = () => {
    
    const { isTablet, isDarkMode } = AppState();

    return (
        <Box
            height={isTablet ? '10rem' : '10rem'}
            //paddingInline={isTablet ? '25rem' : '1.5rem'
            bgGradient= {isDarkMode ? '' : 'linear-gradient(to bottom right, appColor.600, appColor.900, appColor.900);'}
            bg={isDarkMode ? 'appColor.100': ''}
        >
        </Box>
    )
}
