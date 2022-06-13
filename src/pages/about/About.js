import React, { useEffect } from 'react'
import {Box, 
    Button, 
    Flex, 
    Spacer, 
    Text, 
    Tooltip, 
    VStack, 
    Wrap, 
    WrapItem
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AppState } from '../../provider/AppProvider'
import { useInView } from 'react-intersection-observer'
import { HiDownload } from 'react-icons/hi'
import { DiJavascript1 } from 'react-icons/di'
import { TbCSharp } from 'react-icons/tb'
import { GrReactjs } from 'react-icons/gr'
import { GrHtml5 } from 'react-icons/gr'
import { DiCss3Full } from 'react-icons/di'
import { GrNode } from 'react-icons/gr'
import { DiDotnet } from 'react-icons/di'
import { DiPhotoshop } from 'react-icons/di'
import { FaFigma } from 'react-icons/fa'

// VARIANTS TO MAKE A STAGGERED CHILDREN
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

export const About = () => {

    // USE IN VIEW HOOK TO KEEP TRACK OF ON THE ELEMENT IN THE CURRENT VIEWPORT
    const { ref, inView} = useInView({ threshold: 0.8 })
    
    // GET THE VARIABLES FROM THE PROVIDER
    const { 
        isTablet, 
        isDesktop, 
        setPageInView, 
        isDarkMode 
    } = AppState();

    // INITIALIZE A LIST OF THE SKILLS TO DISPLAY
    const stackList = [
        { icon: <DiJavascript1/>, label: 'Javascript', color: '#d1cc82'},
        { icon: <TbCSharp/>, label: 'C#', color: '#5b2994'},
        { icon: <GrReactjs/>, label: 'React JS', color: '#2b82ad'},
        { icon: <GrHtml5/>, label: 'HTML 5', color: '#ad642b'},
        { icon: <DiCss3Full/>, label: 'CSS 3', color: '#2b3dad'},
        { icon: <DiDotnet/>, label: '.NET', color: '#14248f'},
        { icon: <DiPhotoshop/>, label: 'Photoshop', color: '#14018f'},
        { icon: <FaFigma/>, label: 'Figma', color: '#77018f'},
        { icon: <GrNode/>, label: 'Node JS', color: '#018f4f'},
    ]

    // SET THE CURRENT PAGE IN VIEW AS THIS PAGE WHENEVER THE IN VIEW VARIABLE IS TRUE    
    useEffect(() => {
        if(inView){
            setPageInView(1);
        }
    }, [inView])

    return (
        <Flex
            ref={ref}
            id='about'
            gap='4rem'
            flexDir='column'
            alignItems='center'
            justifyContent='center'
            paddingInline= {isDesktop ? '20%' : isTablet ? '5%' : '1.5rem'}
            bgGradient= {isDarkMode ? '' : 'linear-gradient(to top right, appColor.600, appColor.900, appColor.900);'}
            bg={isDarkMode ? 'appColor.100': ''}
        >
            <Text
                marginTop='10rem'
                fontSize={isTablet ? '2xl' : 'xl'}
                fontWeight='bold'
                alignSelf='center'
                color={isDarkMode ? 'appColor.400' : 'appColor.100'}
                textAlign='center'
                marginBottom={isDesktop || isTablet ? '6rem' : ''}
                as={motion.div}
                initial={{
                    opacity: 0,
                    y: -30
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: 'tween',
                        ease: 'easeInOut'
                    }
                }}
                viewport={{ once: true }}
            >
                Get to know me.
                {isTablet && (
                    <Text 
                        marginTop='1rem'
                        fontSize={isTablet ? 'lg' : 'sm'}
                        fontWeight='medium'
                    >
                        The day you stop learning is the day you stop living.
                    </Text>
                )}
            </Text>
            <Box
                flexDir={isTablet ? 'row' : 'column-reverse'}
                display='flex'
                alignItems='center'
                justifyContent='center'
            >
                <Wrap 
                    spacing='1.2rem'
                    flex='1'
                    justify='center'
                    p='2rem'
                    marginTop={isTablet ? '' : '5rem'}
                    as={motion.div}
                    variants={container}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                >
                    {stackList.map((stack, index) => {
                        return(
                            <WrapItem
                                key={index}
                                marginTop={isDesktop || isTablet ? '' : '4rem'}
                                as={motion.div}
                                variants={item}
                                whileHover={{
                                    scale: 1.02
                                }}
                            >
                                <Tooltip 
                                    label={stack.label}
                                    hasArrow
                                    bg={isDarkMode ? 'appColor.600' : 'appColor.100'}
                                    color={isDarkMode ? 'appColor.100' : 'appColor.600'}
                                    placement='top'
                                    p='1rem 2rem'
                                    borderRadius='.4rem'
                                >
                                    <Flex
                                        h={isDesktop || isTablet ? '6rem' : '4rem'}
                                        w={isDesktop || isTablet ? '6rem' : '4rem'}
                                        bg={isDarkMode ? 'appColor.400' : 'appColor.900'}
                                        boxShadow={isDarkMode ? '3px 2px 20px #303030' : '2px 2px 20px #cdc9c3'}
                                        color='appColor.100'
                                        justifyContent='center'
                                        alignItems='center'
                                        borderRadius='.5rem'
                                        as={motion.div}
                                        whileHover={{
                                            backgroundColor:stack.color
                                        }}
                                    >
                                        <Box fontSize='1.5rem'>
                                            {stack.icon}
                                        </Box>
                                    </Flex>
                                </Tooltip>
                            </WrapItem>
                        )
                    })}
                </Wrap>
                <VStack
                        alignItems='end'
                        flex='1'
                    >
                        <Text
                            textAlign='end'
                            fontSize={isDesktop ? 'lg' : isTablet ? 'md' : 'sm'}
                            color={isDarkMode ? 'appColor.400' : 'appColor.100'}
                            as={motion.div}
                            initial={{
                                opacity: 0,
                                x: 30
                            }}
        
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    type: 'tween',
                                    ease: 'easeInOut'
                                }
                            }}
                            viewport={{ once: true }}
                            cursor='default'
                        >
                            Hi, my name is
                        </Text>
                        <Text
                            textAlign='end'
                            color={isDarkMode ? 'appColor.400' : 'appColor.100'}
                            fontSize={isDesktop ? '5xl' : isTablet ? '5xl' : '3xl'}
                            fontWeight='bold'
                            cursor='default'
                            as={motion.div}
                            initial={{
                                opacity: 0,
                                x: 30
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    type: 'tween',
                                    ease: 'easeInOut'
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            Giovanni Hislop
                        </Text>
                        <Text
                            fontSize={isDesktop ? 'md' : isTablet ? 'sm' : 'sm'}
                            color={isDarkMode ? 'appColor.400' : 'appColor.100'}
                            paddingLeft={isTablet ? '180px' : ''}
                            textAlign='end'
                            cursor='default'
                            as={motion.div}
                            initial={{
                                opacity: 0,
                                x: 30
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    type: 'tween',
                                    ease: 'easeInOut'
                                }
                            }}
                            viewport={{ once: true }}

                        >
                            When I discovered programming, I was immediately drawn to the artistic aspect.
                            In the past I have worked on projects related to the development and implementation of various e-commerce websites for companies ranging from start-ups to established multimillion-dollar companies. <br/>
                        </Text>
                        <Spacer/>
                        <Button
                            as={motion.div}
                            whileHover={{
                                scale: 1.1,
                            }}
                            _hover={{
                                bg:isDarkMode ? '#fbf7f0' : '#4a4a4a'
                            }}
                            initial={{
                                opacity: 0,
                                x: 30
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    type: 'tween',
                                    ease: 'easeInOut'
                                }
                            }}
                            viewport={{ once: true }}
                            marginTop='1.2rem'
                            bg={isDarkMode ? 'appColor.400' : 'appColor.100'}
                            color={isDarkMode ? 'appColor.100' : 'appColor.600'}
                            padding={isDesktop ? '1.8rem' : isTablet ? '1.4rem' : '1.5rem'}
                            fontSize={isDesktop ? 'lg' : isTablet ? 'md' : ''}
                            rightIcon={<HiDownload/>}
                        >
                            Resume
                        </Button>
                    </VStack>
            </Box>
        </Flex>
    )
}
