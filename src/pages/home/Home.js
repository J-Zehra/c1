import React, { useEffect, useState, useRef } from 'react'
import { 
    Box, 
    Button, 
    Flex, 
    Image, 
    Spacer, 
    Text, 
    VStack, 
    Wrap, 
    WrapItem 
} from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';
import { HiOutlineMail } from 'react-icons/hi';
import { Socials } from '../../components/Socials';
import { AppState } from '../../provider/AppProvider';
import { AvatarSmiling } from '../../assets/avatar/AvatarSmiling';
import { motion } from 'framer-motion';
import { mouseMoveEvent } from '../../misc/mouseMove';
import { MouseEffect } from '../../components/MouseEffect';

export const Home = () => {
    
    // USE IN VIEW HOOK TO KEEP TRACK OF ON THE ELEMENT IN THE CURRENT VIEWPORT
    const { ref, inView} = useInView({ threshold: 0.8 })
    
    // REF TO KEEP TRACK OG THE EMOJI'S CURRENT POSITION
    const posRef = useRef();
    
    // GET THE STATES FROM THE PROVIDER
    const { 
        isTablet, 
        isDesktop, 
        setPageInView,
        setHovered, 
        setIsHovered, 
        isDarkMode 
    } = AppState();
    
    // INITIALIZE A VARIABLE TO STORE THE NEEDED ROTATION OF THE EMOJI'S EYE BALL
    const [rotation, setRotation] = useState();

    // INITIALIZE AN ARRAY OF INDIVIDUAL LETTER TO ATTACH A HANDLER IN EACH ONE
    const tagline1 = ['M', 'a', 'k', 'e']
    const tagline2 = ['s', 'o', 'm', 'e', 't', 'h', 'i', 'n', 'g']
    const tagline3 = ['o', 'u', 't']
    const tagline4 = ['o', 'f']
    const tagline5 = ['n', 'o', 't', 'h', 'i', 'n', 'g', '.']

    // SET THE CURRENT PAGE IN VIEW AS THIS PAGE WHENEVER THE IN VIEW VARIABLE IS TRUE
    useEffect(() => {
        if(inView){
            setPageInView(0);
        }
    }, [inView])

    // KEEP TRACK OF MOUSE MOVE AND THE CURRENT POSITION
    useEffect(() => {
        document.addEventListener('mousemove', (e) => mouseMoveEvent(e, posRef, setRotation));
    }, [])

    return (
        <Flex
            ref={ref}
            pos= 'relative'
            paddingInline= {isDesktop ? '25rem' : isTablet ? '2.5rem' : '1.5rem'}
            paddingBottom={isDesktop && isTablet ? '' : '2rem'}
            height= '100vh'
            justifyContent= 'center'
            alignItems= 'center'
            bgGradient= {isDarkMode ? '' : 'linear-gradient(to bottom left, appColor.600, appColor.900, appColor.900);'}
            bg={isDarkMode ? 'appColor.100': ''}
            id='home'
            zIndex='99'
        >
            <Flex
                flexDir={isTablet ? 'row-reverse' : 'column'}
                alignItems={isTablet ? 'center' : 'end'}
                justifyContent={isTablet ? 'space-between': ''}
            >
                <Box
                    as={motion.div}
                    whileInView={{
                        transition: {
                            type: 'tween',
                            duration: 1.5
                        },
                        x: 0,
                        opacity: 1
                    }}
                    viewport={{ once: true }}
                    initial={{
                        opacity: 0,
                        x: 10
                    }}
                    ref={posRef}
                >
                    <AvatarSmiling rotation={rotation}/>
                </Box>

                <VStack
                    alignItems='start'   
                    spacing={isDesktop || isTablet? '.2rem' : ''}     
                >
                    <Text
                        textAlign='start'
                        fontSize={isDesktop ? 'lg' : isTablet ? 'md' : 'sm'}
                        color={isDarkMode ? 'appColor.400' : 'appColor.100'}
                        cursor='default'
                        fontWeight='medium'
                        paddingInline='1rem'
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
                                ease: 'easeInOut'
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        Software Developer. Graphic Designer.
                    </Text>
                    <Wrap
                        textAlign='start'
                        color={isDarkMode ? 'appColor.400' : 'appColor.100'}
                        fontSize={isDesktop ? '6xl' : isTablet ? '5xl' : '3xl'}
                        fontWeight='bold'
                        cursor='default'
                        lineHeight={isDesktop || isTablet ? '4.5rem' : '2.5rem'}
                        padding='1rem'
                        spacing='1rem'
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
                        viewport={{ once: true }}
                    >
                        <WrapItem>
                            {tagline1.map((letter, index) => {
                                return(
                                    <Text
                                        key={index}
                                        as={motion.div}
                                        fontSize={isTablet ? '4.5rem' : '2.5rem'}
                                        onMouseOver={() => setIsHovered(true)}
                                        onMouseOut={() => setIsHovered(false)}
                                        whileHover={{
                                            scaleX: [1, 1.3, 1.3, 1.1, 1.2, 1.1, 1.15, 1],
                                        }}
                                    >
                                        {letter} 
                                    </Text>
                                )
                            })}
                        </WrapItem>
                        <WrapItem>
                            {tagline2.map((letter, index) => {
                                return(
                                    <Text
                                        key={index}
                                        as={motion.div}
                                        fontSize={isTablet ? '4.5rem' : '2.5rem'}
                                        onMouseOver={() => setIsHovered(true)}
                                        onMouseOut={() => setIsHovered(false)}
                                        whileHover={{
                                            scaleX: [1, 1.5, 1.5, 1.1, 1.2, 1.1, 1.15, 1],
                                        }}
                                    >
                                        {letter} 
                                    </Text>
                                )
                            })}
                        </WrapItem>
                        <WrapItem>
                            {tagline3.map((letter, index) => {
                                return(
                                    <Text
                                        key={index}
                                        as={motion.div}
                                        fontSize={isTablet ? '4.5rem' : '2.5rem'}
                                        onMouseOver={() => setIsHovered(true)}
                                        onMouseOut={() => setIsHovered(false)}
                                        whileHover={{
                                            scaleX: [1, 1.5, 1.5, 1.1, 1.2, 1.1, 1.15, 1],
                                        }}
                                    >
                                        {letter} 
                                    </Text>
                                )
                            })}
                        </WrapItem>
                        <WrapItem>
                            {tagline4.map((letter, index) => {
                                return(
                                    <Text
                                        key={index}
                                        as={motion.div}
                                        fontSize={isTablet ? '4.5rem' : '2.5rem'}
                                        onMouseOver={() => setIsHovered(true)}
                                        onMouseOut={() => setIsHovered(false)}
                                        whileHover={{
                                            scaleX: [1, 1.5, 1.5, 1.1, 1.2, 1.1, 1.15, 1],
                                        }}
                                    >
                                        {letter} 
                                    </Text>
                                )
                            })}
                        </WrapItem>
                        <WrapItem>
                            {tagline5.map((letter, index) => {
                                return(
                                    <Text
                                        key={index}
                                        as={motion.div}
                                        fontSize={isTablet ? '4.5rem' : '2.5rem'}
                                        onMouseOver={() => setIsHovered(true)}
                                        onMouseOut={() => setIsHovered(false)}
                                        whileHover={{
                                            scaleX: [1, 1.5, 1.5, 1.1, 1.2, 1.1, 1.15, 1],
                                        }}
                                    >
                                        {letter} 
                                    </Text>
                                )
                            })}
                        </WrapItem>
                    </Wrap>
                    <Text
                        fontSize={isTablet ? 'lg' : isTablet ? 'sm' : 'sm'}
                        color={isDarkMode ? 'appColor.400' : 'appColor.100'}
                        paddingRight={isTablet ? '180px' : ''}
                        cursor='default'
                        paddingInline='1rem'
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
                                delay: 0.2
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        Programming allows me to think outside the box, be creative and impact the world in a positive way.
                    </Text>
                    <Spacer/>
                    <Box
                        padding='0'
                        paddingInline='1rem'
                        bg='red'
                        margin='0'
                        p='0'
                        h='0'
                    >
                        <Button
                            as={motion.a}
                            whileHover={{
                                scale: 1.1,
                            }}
                            _hover={{
                                bg:isDarkMode ? '#fbf7f0' : '#4a4a4a'
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
                            viewport={{ once: true }}
                            href='#contact'
                            marginTop='1.2rem'
                            bg={isDarkMode ? 'appColor.400' : 'appColor.100'}
                            color={isDarkMode ? 'appColor.100' : 'appColor.600'}
                            padding={isDesktop ? '1.8rem' : isTablet ? '1.4rem' : '1.5rem'}
                            fontSize={isDesktop ? 'lg' : isTablet ? 'md' : ''}
                            leftIcon={<HiOutlineMail/>}
                            onMouseOver={() => {
                                setHovered(true)
                                setIsHovered(true);
                            }}
                            onMouseOut={() => {
                                setHovered(false)
                                setIsHovered(false)
                            }}
                        >
                            Let's talk
                        </Button>
                    </Box>
                </VStack>
            </Flex>
            <Socials/>
            <MouseEffect/>
        </Flex>
    )
}
