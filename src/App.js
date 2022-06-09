import { Box } from '@chakra-ui/react'
import React from 'react'

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

export const App = () => {

  return (
    <Box
      position='relative'
    >
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </Box>
  )
}