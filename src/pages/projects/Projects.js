import React, { useEffect, useState } from 'react'
import { 
    Flex, 
    HStack, 
    Text, 
    VStack, 
    Wrap, 
    WrapItem 
} from '@chakra-ui/react'
import { AppState } from '../../provider/AppProvider'
import { useInView } from 'react-intersection-observer'
import  { AiFillFolder } from 'react-icons/ai'
import { motion } from 'framer-motion'

// VARIANTS TO MAKE A STAGGERED CHILDREN
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        }
    }
}

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

export const Projects = () => {

    // USE IN VIEW HOOK TO KEEP TRACK OF ON THE ELEMENT IN THE CURRENT VIEWPORT
    const { ref, inView} = useInView({ threshold: 0.8 })

    // GET THE VARIABLES FROM THE PROVIDER
    const { 
        isTablet,
        isDesktop, 
        setPageInView, 
        isDarkMode 
    } = AppState();

    // SAMPLE PROJECTS TO RENDER
    const [projectList, setProjectList] = useState([]);

    // SET THE CURRENT PAGE IN VIEW AS THIS PAGE WHENEVER THE IN VIEW VARIABLE IS TRUE
    useEffect(() => {
        if(inView){
            setPageInView(2);
        }
    }, [inView, setPageInView])

    useEffect(() => {
        const fetchData = async() => {
            await fetch('https://api.github.com/users/gmhislop/repos')
            .then((res) => res.json())
            .then(result => setProjectList(result))
            .catch(error => console.log(error))
        }

        fetchData();
    }, [])

    console.log(projectList);

    return (
        <Flex
            ref={ref}
            id='projects'
            gap='5rem'
            flexDir='column'
            alignItems={isTablet ? 'center' : 'start'}
            justifyContent='center'
            paddingInline= {isDesktop ? '25rem' : isTablet ? '2.5rem' : '1.5rem'}
            bgGradient= {isDarkMode ? '' : 'linear-gradient(to bottom right, appColor.600, appColor.900, appColor.900);'}
            bg={isDarkMode ? 'appColor.100': ''}
        >
            <Text
                marginTop='20rem'
                fontSize={isTablet ? '2xl' : 'xl'}
                fontWeight='bold'
                alignSelf='center'
                color={isDarkMode ? 'appColor.400' : 'appColor.100'}
                textAlign='center'
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
                My Projects.
                <Text 
                    marginTop='1rem'
                    fontSize={isTablet ? 'lg' : 'sm'}
                    fontWeight='medium'
                >
                    Take a look as some of the projects that I have accomplished.
                </Text>
            </Text>
            <Wrap 
                spacing='2rem' 
                justify='center'
                p={isTablet ? '2rem' :  ''}
                as={motion.div}
                variants={container}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
            >
                {projectList.map((project, index) => {
                    return(
                        <WrapItem
                            key={index}
                            as={motion.div}

                            variants={item}
                            whileHover={{
                                scale: 1.02
                            }}
                        >
                            <Flex
                                boxShadow={isDarkMode ? '3px 2px 20px #303030' : '2px 2px 20px #cdc9c3'}
                                height='15rem'
                                width='20rem'
                                bg={isDarkMode ? 'appColor.400' : 'appColor.900'}
                                p='2rem'
                                flexDir='column'
                                borderRadius='1rem'
                                justifyContent='space-between'
                            >   
                                <VStack align='stretch'>
                                    <AiFillFolder 
                                        fontSize='2.5rem'
                                        color='#555555'
                                    />
                                    <Text
                                        marginTop='1rem'
                                        fontWeight='semibold'
                                        fontSize='md'
                                        color='appColor.100'
                                    >
                                        {project.name}
                                    </Text>
                                    <Text
                                        fontWeight='medium'
                                        fontSize='.9rem'
                                        color='appColor.100'
                                    >
                                        {project.description}
                                    </Text>
                                </VStack>
                                <HStack
                                    spacing='1rem'
                                    color='appColor.100'
                                    marginTop='1rem'
                                    fontSize='1.2rem'
                                >
                                    <Text
                                        fontSize='.7rem'
                                    >
                                        {project.language}
                                    </Text>
                                </HStack>
                            </Flex>
                        </WrapItem>
                    )
                })}
            </Wrap>
        </Flex>
    )
}
