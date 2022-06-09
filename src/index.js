import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css'

import { ChakraProvider } from '@chakra-ui/react';

import { GreenTheme } from './misc/theme';
import { AppProvider } from './provider/AppProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AppProvider>
    <ChakraProvider theme={ GreenTheme }>
      <App />
    </ChakraProvider>
  </AppProvider>
);