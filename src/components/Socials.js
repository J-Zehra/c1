import React from 'react'
import {Link, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaStackOverflow } from 'react-icons/fa'
import { AppState } from '../provider/AppProvider'

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

export const Socials = () => {

    // GET THE VARIABLES FROM THE PROVIDER
    const { 
        isTablet, 
        isDesktop, 
        isDarkMode 
    } = AppState();

    // INITIALIZE LIST OF SOCIAL ICONS AND LINKS
    const iconList = [
        { icons: <AiFillGithub/>, link: 'https://github.com/gmhislop'},
        { icons: <AiFillLinkedin/>, link: 'https://www.linkedin.com/in/giovanni-hislop' },
        { icons: <FaStackOverflow/>, link: 'https://stackoverflow.com/users/18814526/giovanni-hislop' },
        { icons: <AiOutlineTwitter/>, link: 'https://twitter.com/giovannihislop' },
    ]

    return (
        <Stack
            direction={isTablet ? 'column' : 'row'}
            pos={isTablet ? 'fixed' : 'absolute'}
            display='flex'
            justifyContent='center'
            alignItems={isDesktop ? 'center' : 'end'}
            bottom='0'
            margin='auto'
            h={isTablet? '100%' : ''}
            left={isTablet ? '0' : '50%'}
            paddingLeft={isTablet ? '2rem' : ''}
            spacing='1.8rem'
            alignSelf='start'
            marginTop={isTablet ? '' : '3.5rem'}
            transform={isTablet ? '' : 'translate(-50%)'}
            as={motion.div}
            variants={container}
            initial='hidden'
            whileInView='show'
        >
            {iconList.map((social, index) => {
                return(
                    <Link
                        variants={item}
                        key={index}
                        as={motion.a}
                        whileHover={{
                            scale: 1.1
                        }}
                        _focus={{
                            outline: 'none'
                        }}
                        href={social.link}
                        color={isDarkMode ? 'appColor.400' : 'appColor.100'}
                        fontSize='1.2rem'
                        isExternal
                    >
                        {social.icons}
                    </Link>
                )
            })}
        </Stack>
    )
}
