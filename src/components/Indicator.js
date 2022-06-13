import React from 'react'
import { Box, Flex, Link } from '@chakra-ui/react'
import { AppState } from '../provider/AppProvider'
import { motion } from 'framer-motion'


export const Indicator = () => {

    // GET THE VARIABLES FROM THE PROVIDER
    const { pageInView, isDarkMode, isTablet } = AppState();

    // INITIALIZE AN INDICATOR LIST
    const indicator = [
        '#home',
        '#about',
        '#projects',
        '#contact',
    ]

    return (
        <>
            {isTablet && (
                    <Flex
                    pos='fixed'
                    top='0'
                    right='0'
                    bottom='0'
                    margin='auto'
                    zIndex='100'
                    borderLeftRadius='5rem'
                    justifyContent='center'
                    alignItems='center'
                    fontSize='1.5rem'
                    color={isDarkMode ? 'appColor.400' : 'appColor.100'}
                    gap='2rem'
                    flexDir='column'
                    paddingRight='2rem'
                    as={motion.div}
                    initial={{
                        opacity: 0,
                        x: 20
                    }}
                    transition={{
                        type: 'tween',
                        duration: 1.4
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                >
                    {indicator.map((indicator, index) => {
                        return(
                            <Link
                                key={index}
                                w='2rem'
                                h='2rem'
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                borderRadius='50%'
                                href={indicator}
                            >
                                <Box
                                    cursor='pointer'
                                    h='.6rem'
                                    w='.6rem'
                                    borderRadius='50%'
                                    border='1px solid'
                                    borderColor={isDarkMode ? 'appColor.400' : 'appColor.100'}
                                    bg={index === pageInView ? isDarkMode ? 'appColor.400' : 'appColor.100' : ''}
                                >
                                </Box>
                            </Link>
                        )
                    })}
                </Flex>
            )}
        </>
    )
}
