import { Box, Flex, HStack, IconButton, Link, Menu, MenuButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { GiHamburgerMenu } from 'react-icons/gi'
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

    const {isTablet} = AppState();

    const [active, setActive] = useState(0);

    const NavRoutes = [
        {id: '#home', label: 'Home'},
        {id: '#about', label: 'About'},
        {id: '#projects', label: 'Projects'},
        {id: '#contact', label: 'Contact'}
    ];

    return (
        <Flex
            pos='absolute'
            h='5rem'
            w='100%'
            top='0'
            padding='2rem'
            paddingInlineEnd={isTablet ? '10rem' : ''}
            zIndex='999'
            justifyContent='flex-end'
            gap={isTablet ? '2rem' : ''}
            fontWeight={isTablet ? 'semibold' : ''}

            as={motion.div}

            variants={container}
            initial='hidden'
            whileInView='show'
        >
            {isTablet ? (
                NavRoutes.map((route, index) => {
                    return(
                        <Link
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
            ) : (
                <Menu>
                    <MenuButton
                        as={IconButton}
                        bg='appColor.900'
                        color='appColor.100'
                        icon={<GiHamburgerMenu/>}
                    />
                </Menu>
            )}
        </Flex>
    )
}
