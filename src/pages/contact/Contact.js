import { Box, Button, Container, Flex, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState, useRef } from 'react'

import Lottie from 'react-lottie'
import animationData from '../../animatiions/contactAnimation.json'

import { AppState } from '../../provider/AppProvider'

import { AvatarHappy } from '../../assets/avatar/AvatarHappy'
import { motion } from 'framer-motion'

import emailjs from '@emailjs/browser'
import { useToast } from '@chakra-ui/react'

export const Contact = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const { isTablet, isDesktop, setHovered, setIsTyping } = AppState();

    const endX = window.innerWidth / 1.5
    const endY = window.innerHeight / 2
    const [rotation, setRotation] = useState();


    const mouseMoveEvent = e => {

        let radian = Math.atan2(e.clientX - endX, e.clientY - endY);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;

        setRotation(rotation);
    }

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveEvent);
    }, [])


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const sendEmail = () => {
        setLoading(true);

        var templateParams = {
            name,
            email,
            message
        };

        emailjs.send('service_v4yjrar', 'template_edpfeti', templateParams, 's4i9jk7PO-pMqAN4h')
        .then((result) => {
            console.log(result.text);
            setLoading(false);
            setName('');
            setEmail('');
            setMessage('');
            toast({
                title: 'Email sent.',
                description: "Thanks for messaging me.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <Flex
            id='contact'
            gap='10rem'
            justifyContent='center'
            flexDir='column'
            alignItems='start'
            paddingInline= {isDesktop ? '25rem' : isTablet ? '2.5rem' : '1.5rem'}
            bgGradient='linear-gradient(to top right, appColor.600, appColor.900, appColor.900);'
        >
            <Text
                marginTop='5rem'
                fontSize={isDesktop ? '2xl' : isTablet ? 'xl' : 'lg'}
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
                Are you interested in my works?
            </Text>

            <Flex
                width='100%'
                justifyContent='space-between'
                alignItems='center'
                gap='2rem'

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
                {isTablet && (
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

                )}

                <VStack
                    pos='relative'
                    borderRadius='1rem'
                    bg='appColor.900'
                    p={isDesktop ? '3rem 4rem' : isTablet ? '2rem 3rem' : '2rem 1.3rem'}
                    alignSelf='center'
                    align='start'
                    spacing='3rem'
                    boxShadow='2px 2px 20px #cdc9c3'
                    w={isTablet ? '30rem' : '100%' }

                >
                    <Flex
                        justifyContent='space-between'
                        width='100%'
                        alignItems='center'
                    >
                        <Box>
                            <Text
                                fontSize={isTablet ? '3xl' : 'lg'}
                                fontWeight='semibold'
                                alignSelf='center'
                                color='appColor.100'
                            >
                                Contact Me.
                            </Text>
                            <Text
                                fontWeight='medium'
                                fontSize='1rem'
                            >
                                Let's work together.
                            </Text>
                        </Box>

                        <AvatarHappy rotation={rotation} endX={endX} endY={endY}/>
                    </Flex>
                    <FormControl
                    >
                        <VStack spacing='1rem'>
                            <Input
                                onFocus={() => setIsTyping(true)}
                                onBlur={() => setIsTyping(false)}
                                borderBottom='1px solid #555555'
                                type='text'
                                placeholder='Name'
                                p='2px'
                                border='none'
                                borderRadius='0'
                                _focus={{
                                    outline:'none'
                                }}
                                name='name'

                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                            <Input
                                onFocus={() => setIsTyping(true)}
                                onBlur={() => setIsTyping(false)}
                                border='none'
                                borderBottom='1px solid #555555'
                                type='email'
                                placeholder='Email'
                                p='2px'
                                borderRadius='0'
                                _focus={{
                                    outline:'none'
                                }}
                                name='email'

                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                            <Textarea
                                onFocus={() => setIsTyping(true)}
                                onBlur={() => setIsTyping(false)}
                                placeholder='Your message'
                                borderBottom='1px solid #555555'
                                border='none'
                                h={isDesktop ? '8rem' : ''}
                                p='2px'
                                borderRadius='0'
                                resize='none'
                                _focus={{
                                    outline:'none'
                                }}
                                name='message'

                                onChange={e => setMessage(e.target.value)}
                                value={message}
                            />
                            <Button
                                as={motion.button}
                                alignSelf='end'
                                bg='appColor.100'
                                color='appColor.600'
                                p='1.5rem'
                                marginTop='2rem'

                                whileHover={{
                                    scale: 1.05
                                }}

                                _hover={{
                                    bg: 'appColor.100'
                                }}

                                onMouseOver={() => setHovered(true)}
                                onMouseOut={() => setHovered(false)}

                                onClick={sendEmail}
                                isLoading={loading}
                            >
                                Send message
                            </Button>
                        </VStack>
                        
                    </FormControl>
                </VStack>
            </Flex>
        </Flex>
    )
}
