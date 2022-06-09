import React from 'react'
import { Box, Button, Flex, Image, Spacer, Text, useMediaQuery, VStack } from '@chakra-ui/react'

import { HiOutlineMail } from 'react-icons/hi';
import { Socials } from '../../components/Socials';
import { Nav } from '../../components/Nav';

import { HomeHero } from '../../assets/HomeHero';
import { AppState } from '../../provider/AppProvider';

import { motion } from 'framer-motion';
import Lottie from 'react-lottie'
import animationData from '../../animatiions/homeAnimation.json'

export const Home = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    const { isTablet, isDesktop } = AppState();

    return (
        <Flex
            pos= 'relative'
            paddingInline= {isDesktop ? '25rem' : isTablet ? '2.5rem' : '1.5rem'}
            paddingBottom={isDesktop && isTablet ? '' : '2rem'}
            height= '100vh'
            justifyContent= 'center'
            alignItems= 'center'
            bgGradient= 'linear-gradient(to bottom left, appColor.600, appColor.900, appColor.900);'
            id='home'

        >
            <Flex
                flexDir={isTablet ? 'row-reverse' : 'column'}
                alignItems={isTablet ? 'center' : 'end'}
                justifyContent={isTablet ? 'space-between': ''}
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
                    alignItems='start'        
                >
                    <Text
                        textAlign='start'
                        fontSize={isDesktop ? 'lg' : isTablet ? 'md' : 'sm'}
                        color='appColor.100'
                        cursor='default'
                        
                        as={motion.div}
                        whileHover={{
                            x: 3
                        }}

                        initial={{
                            opacity: 0,
                            x: -30
                        }}
        
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: 'tween',
                                ease: 'easeInOut'
                            }
                        }}
                    >
                        I am <b>Lorem Ipsum</b> 
                    </Text>
                    <Text
                        textAlign='start'
                        color='appColor.100'
                        fontSize={isDesktop ? '6xl' : isTablet ? '5xl' : '3xl'}
                        fontWeight='bold'
                        cursor='default'

                        whileHover={{
                            x: 3
                        }}
                        as={motion.div}

                        initial={{
                            opacity: 0,
                            x: -30
                        }}
        
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: 'tween',
                                ease: 'easeInOut',
                                delay: 0.1
                            }
                        }}
                    >
                        Lorem Ipsum.
                    </Text>
                    <Text
                        fontSize={isDesktop ? 'md' : isTablet ? 'sm' : 'sm'}
                        color='appColor.100'
                        paddingRight={isTablet ? '180px' : ''}
                        cursor='default'

                        as={motion.div}
                        whileHover={{
                            x: 3
                        }}

                        initial={{
                            opacity: 0,
                            x: -30
                        }}
        
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: 'tween',
                                ease: 'easeInOut',
                                delay: 0.2
                            }
                        }}
                    >
                        Lorem ipsum dolor Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. E\ elit. Perspiciatis iste excepturi iure est corrupti cumque voluptas fugiat minus ipsum sequi. 
                    </Text>

                    <Spacer/>

                    <Button
                        as={motion.a}

                        whileHover={{
                            scale: 1.1,
                        }}

                        _hover={{
                            bg:'#4a4a4a'
                        }}

                        initial={{
                            opacity: 0,
                            x: -30
                        }}
        
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: 'tween',
                                ease: 'easeInOut'
                            }
                        }}
                        href='#contact'
                        marginTop='1.2rem'
                        bg='appColor.100'
                        color='appColor.600'
                        padding={isDesktop ? '1.8rem' : isTablet ? '1.4rem' : '1.5rem'}
                        fontSize={isDesktop ? 'lg' : isTablet ? 'md' : ''}
                        leftIcon={<HiOutlineMail/>}
                    >
                        Let's talk
                    </Button>
                </VStack>
                <Socials/>
            </Flex>
        </Flex>
    )
}
