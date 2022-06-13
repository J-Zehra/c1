import { Avatar, Flex, HStack, Link, Switch } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AppState } from '../provider/AppProvider'
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

export const Nav = () => {

    // GET THE VARIABLES FROM THE PROVIDER
    const {
        isTablet,
        setIsHovered,  
        isDarkMode, 
        setIsDarkMode
    } = AppState();

    // INITIALIZE ROUTES TO MAP
    const NavRoutes = [
        {id: '#home', label: 'Home'},
        {id: '#about', label: 'About'},
        {id: '#projects', label: 'Projects'},
        {id: '#contact', label: 'Contact'}
    ];

    const [avatarUrl, setAvatarUrl] = useState();

    useEffect(() => {
        const fetchData = async() => {
            await fetch('https://api.github.com/users/gmhislop')
            .then((res) => res.json())
            .then(result => setAvatarUrl(result.avatar_url))
            .catch(error => console.log(error))
        }

        fetchData();
    }, [])

    return (
        <Flex
            pos='fixed'
            opacity='.8'
            h='5rem'
            w='100%'
            top='0'
            zIndex='999'
            justifyContent={isTablet ? 'space-around' : 'space-between'}
            alignItems='center'
            gap={isTablet ? '2rem' : ''}
            fontWeight={isTablet ? 'semibold' : ''}
            as={motion.div}
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
        >
            <Link
                href='#home'

                _focus={{
                    outline: 'none'
                }}
            >
                <Avatar 
                    cursor='pointer'
                    name='G H' 
                    size='md'
                    src={avatarUrl}

                />
            </Link>
            <HStack spacing='4.5rem'>
                {isTablet ? (
                    NavRoutes.map((route, index) => {
                        return(
                            <Link
                                onMouseOver={() => setIsHovered(true)}
                                onMouseOut={() => setIsHovered(false)}
                                color={isDarkMode ? 'appColor.400' : 'appColor.100'}
                                as={motion.a}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: -2
                                }}
                                key={index}
                                href={route.id}
                                _hover={{
                                    outline: 'none'
                                }}
                                _focus={{
                                    outline: 'none'
                                }}
                                variants={item}
                            >
                                {route.label}
                            </Link>
                        )
                    })
                ) : ''}
                    <Switch
                        size='lg'
                        color={isDarkMode ? '#cdc9c3' : '#555555'}
                        onMouseOver={() => setIsHovered(true)}
                        onMouseOut={() => setIsHovered(false)}
                        onChange={() => setIsDarkMode(!isDarkMode)}
                        colorScheme='gray'
                    />
            </HStack>
        </Flex>
    )
}
