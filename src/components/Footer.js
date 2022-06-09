import { Box } from '@chakra-ui/react'
import React from 'react'
import { AppState } from '../provider/AppProvider'

export const Footer = () => {
    
    const { isTablet } = AppState();

    return (
        <Box
            height={isTablet ? '10rem' : '10rem'}
            //paddingInline={isTablet ? '25rem' : '1.5rem'}
            bgGradient='linear-gradient(to bottom right, appColor.600, appColor.900, appColor.900);'
        >
            
        </Box>
    )
}
