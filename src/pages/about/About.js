import { Avatar, Box, Button, Container, Flex, Spacer, Text, VStack} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { AboutHero } from '../../assets/AboutHero'
import { Socials } from '../../components/Socials'
import { AppState } from '../../provider/AppProvider'
import { HiDownload } from 'react-icons/hi'

import Lottie from 'react-lottie'
import animationData from '../../animatiions/aboutAnimation.json'

export const About = () => {

    const { isTablet, isDesktop } = AppState();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Flex
            id='about'
            gap='4rem'
            flexDir='column'
            alignItems={isTablet ? 'center' : 'start'}
            justifyContent='center'
            paddingInline= {isDesktop ? '25rem' : isTablet ? '2.5rem' : '1.5rem'}
            bgGradient='linear-gradient(to top right, appColor.600, appColor.900, appColor.900);'
        >
            <Text
                marginTop='2rem'
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
                Get to know me.
            </Text>

        
            <Box
                flexDir={isTablet ? 'row' : 'column'}
                display='flex'
                alignItems={isTablet ? 'center' : 'start'}
            >

                <Box
                    as={motion.div}

                    initial={{
                        scale: 1,
                    }}
                    whileHover={{
                        transition: {
                            type: 'tween',
                            duration: 2,
                            ease: 'easeInOut'
                        },
                        scale: 1.2,
                    }}
                >
                <Lottie 
                        options={defaultOptions}
                        width={isDesktop ? '35rem' : isTablet ? '20rem' : ''}
                        height={isDesktop ? '35rem' : isTablet ? '20rem' : ''}
                />
                </Box>


                <VStack
                        alignItems='end'
                    >
                        <Text
                            textAlign='end'
                            fontSize={isDesktop ? 'lg' : isTablet ? 'md' : 'sm'}
                            color='appColor.100'

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

                            whileHover={{
                                x: -3
                            }}
                        >
                            I am <b>Lorem Ipsum</b> 
                        </Text>
                        <Text
                            textAlign='end'
                            color='appColor.100'
                            fontSize={isDesktop ? '6xl' : isTablet ? '5xl' : '3xl'}
                            fontWeight='bold'

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

                            cursor='default'
                            whileHover={{
                                x: -3
                            }}
                        >
                            Lorem Ipsum.
                        </Text>
                        <Text
                            fontSize={isDesktop ? 'md' : isTablet ? 'sm' : 'sm'}
                            color='appColor.100'
                            paddingLeft={isTablet ? '180px' : ''}
                            textAlign='end'

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

                            whileHover={{
                                x: -3
                            }}
                        >
                            Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sint! elit. Earum, error.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. E\ elit. Perspiciatis iste excepturi iure est corrupti cumque voluptas fugiat minus ipsum sequi. 
                        </Text>
                        <Spacer/>
                        <Button
                            as={motion.div}

                            whileHover={{
                                scale: 1.1,
                            }}

                            _hover={{
                                bg:'#4a4a4a'
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
                            marginTop='1.2rem'
                            bg='appColor.100'
                            color='appColor.600'
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
