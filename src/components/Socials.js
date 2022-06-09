import React from 'react'
import { HStack, IconButton, Link, Stack, VStack } from '@chakra-ui/react'

import { motion } from 'framer-motion'

import { AiFillGithub } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
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

    const { isTablet, isDesktop } = AppState();

    const iconList = [
        <AiFillGithub/>,
        <BsFacebook/>,
        <AiOutlineTwitter/>,
        <AiFillLinkedin/>,
        <AiFillInstagram/>
    ]

    return (
        <Stack
            direction={isTablet ? 'column' : 'row'}
            pos={isTablet ? 'fixed' : 'absolute'}
            bottom='0'
            left={isTablet ? '0' : '50%'}
            padding={isDesktop ? '5rem' : isTablet ? '2rem' : '2rem'}
            spacing='1.2rem'
            alignSelf='start'
            marginTop={isTablet ? '' : '3.5rem'}
            transform={isTablet ? '' : 'translate(-50%)'}
            
            as={motion.div}

            variants={container}
            initial='hidden'
            whileInView='show'

        >
            {iconList.map((icon, index) => {
                return(
                    <Link
                        variants={item}
                        key={index}
                        as={motion.div}
                        whileHover={{
                            scale: 1.1
                        }}
    
                        color='appColor.100'
                        fontSize='1.2rem'
                    >
                        {icon}
                    </Link>
                )
            })}
        </Stack>
    )
}
