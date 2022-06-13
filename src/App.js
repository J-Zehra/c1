import React from 'react'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { Contact } from './pages/contact/Contact';
import { Projects } from './pages/projects/Projects';

import '@fontsource/dm-sans'
import '@fontsource/rubik'
import '@fontsource/montserrat'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/500.css'

import { Nav } from './components/Nav';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Footer } from './components/Footer';
import { Indicator } from './components/Indicator';
import { AppProvider } from './provider/AppProvider';
import { GreenTheme } from './misc/theme';

export const App = () => {

  return (
    <AppProvider>
      <ChakraProvider theme={ GreenTheme }>
        <Box position='relative'>
          <Indicator/>
          <Nav/>
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
        </Box>
      </ChakraProvider>
    </AppProvider>
  )
}