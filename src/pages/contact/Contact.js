import React, { useEffect, useState } from 'react'
import { 
    Box, 
    Button,
    Flex, 
    FormControl, 
    Input, 
    Text, 
    Textarea, 
    VStack, 
    useToast 
} from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { AppState } from '../../provider/AppProvider'
import { AvatarHappy } from '../../assets/avatar/AvatarHappy'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export const Contact = () => {

    // USE IN VIEW HOOK TO KEEP TRACK OF ON THE ELEMENT IN THE CURRENT VIEWPORT
    const { ref, inView} = useInView({ threshold: 0.8 })
    
    // GET THE VARIABLES FROM THE PROVIDER
    const { 
        isTablet, 
        isDesktop, 
        setHovered, 
        setIsTyping, 
        setPageInView, 
        isDarkMode 
    } = AppState();

    // SET THE CURRENT PAGE IN VIEW AS THIS PAGE WHENEVER THE IN VIEW VARIABLE IS TRUE    
    useEffect(() => {
        if(inView){
            setPageInView(3);
        }
    }, [inView, setPageInView])

    // INITIALIZE VARIABLES RELATED TO THE MOUSE MOVEMENT
    const endX = window.innerWidth / 1.5
    const endY = window.innerHeight / 2
    const [rotation, setRotation] = useState();

    // HANDLE MOUSE MOVEMENT
    const mouseMoveEvent = e => {
        let radian = Math.atan2(e.clientX - endX, e.clientY - endY);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        setRotation(rotation);
    }

    // KEEP TRACK OF MOUSE MOVE AND THE CURRENT POSITION
    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveEvent);
    })

    // VARIABLES FOR THE CONTACT
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    // HANDLE SEND EMAIL
    const sendEmail = () => {
        if(!name || !email || !message){
            toast({
                title: 'Message not sent.',
                description: "Please fill all the fields",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
            return;
        }
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
            ref={ref}
            id='contact'
            gap='10rem'
            justifyContent='center'
            flexDir='column'
            alignItems='start'
            paddingInline= {isDesktop ? '25rem' : isTablet ? '2.5rem' : '1.5rem'}
            bgGradient= {isDarkMode ? '' : 'linear-gradient(to top right, appColor.600, appColor.900, appColor.900);'}
            bg={isDarkMode ? 'appColor.100': ''}
        >
            <Text
                marginTop='5rem'
                fontSize={isDesktop ? '2xl' : isTablet ? 'xl' : 'lg'}
                fontWeight='semibold'
                alignSelf='center'
                color={isDarkMode ? 'appColor.400' : 'appColor.100'}
                as={motion.div}
                textAlign='center'
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
                Are you interested in my works?
                {isTablet && (
                    <Text 
                        marginTop='1rem'
                        fontSize={isTablet ? 'lg' : 'sm'}
                        fontWeight='medium'
                    >
                        I'm open to collaborating on Blockchain and Mobile app development.
                    </Text>
                )}
            </Text>
            <Flex
                width='100%'
                justifyContent='center'
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
                viewport={{ once: true }}
            >
                <VStack
                    pos='relative'
                    borderRadius='1rem'
                    bg={isDarkMode ? 'appColor.400' : 'appColor.900'}
                    p={isDesktop ? '3rem 4rem' : isTablet ? '2rem 3rem' : '2rem 1.3rem'}
                    alignSelf='center'
                    align='start'
                    spacing='3rem'
                    boxShadow={isDarkMode ? '3px 2px 20px #303030' : '2px 2px 20px #cdc9c3'}
                    w={isTablet ? '35rem' : '100%' }
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
                        <AvatarHappy rotation={rotation}/>
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
                                _hover={{
                                    outline: 'none'
                                }}
                                _placeholder={{
                                    color: isDarkMode ? 'appColor.100' : ''
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
                                _placeholder={{
                                    color: isDarkMode ? 'appColor.100' : ''
                                }}
                                _hover={{
                                    outline: 'none'
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
                                _hover={{
                                    outline: 'none'
                                }}
                                _placeholder={{
                                    color: isDarkMode ? 'appColor.100' : ''
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
