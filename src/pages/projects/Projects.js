import { Flex, HStack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { AppState } from '../../provider/AppProvider'

import  { AiFillFolder } from 'react-icons/ai'
import  { AiFillHtml5 } from 'react-icons/ai'
import  { DiCss3 } from 'react-icons/di'
import  { DiJavascript } from 'react-icons/di'
import { motion } from 'framer-motion'

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


export const Projects = () => {

    const { isTablet, isDesktop } = AppState();

    const projectList = [
        { project: '1' },
        { project: '2' },
        { project: '3' },
        { project: '4' },
    ]

    return (
        <Flex
            id='projects'
            gap='5rem'
            flexDir='column'
            alignItems={isTablet ? 'center' : 'start'}
            justifyContent='center'
            paddingInline= {isDesktop ? '25rem' : isTablet ? '2.5rem' : '1.5rem'}
            bgGradient='linear-gradient(to bottom right, appColor.600, appColor.900, appColor.900);'
        >
            <Text
                marginTop='5rem'
                fontSize={isTablet ? '2xl' : 'xl'}
                fontWeight='semibold'
                alignSelf='center'
                color='appColor.100'

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
            >
                Projects I've done.
            </Text>

            <Wrap 
                spacing='2rem' 
                justify='center'
                p={isTablet ? '2rem' :  ''}

                as={motion.div}

                variants={container}
                initial='hidden'
                whileInView='show'
            >
                {projectList.map((project, index) => {
                    return(
                        <WrapItem
                            as={motion.div}

                            variants={item}
                            whileHover={{
                                scale: 1.1
                            }}
                        >
                            <Flex
                                boxShadow='2px 2px 20px #cdc9c3'
                                height='15rem'
                                width='20rem'
                                bg='appColor.900'
                                p='2rem'
                                flexDir='column'
                            >   
                                <AiFillFolder 
                                    fontSize='2.5rem'
                                    color='#555555'
                                />
                                <Text
                                    marginTop='1rem'
                                    fontWeight='semibold'
                                    fontSize='lg'
                                    color='appColor.100'
                                >
                                    Project Name
                                </Text>
                                <Text
                                    fontWeight='medium'
                                    fontSize='sm'
                                    color='appColor.100'
                                >
                                    Lorem ipsum Lorem ipsum dolor sit amet. dolor, sit amet consectetur adipisicing elit. Autem, labore?
                                </Text>
                                <HStack
                                    spacing='1rem'
                                    color='appColor.100'
                                    marginTop='1rem'
                                    fontSize='1.2rem'
                                >
                                    <AiFillHtml5/>
                                    <DiCss3/>
                                    <DiJavascript/>
                                </HStack>
                            </Flex>
                        </WrapItem>
                    )
                })}
            </Wrap>
        </Flex>
    )
}
