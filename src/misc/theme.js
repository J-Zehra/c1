import { extendTheme } from '@chakra-ui/react';

const colors = {
    appColor: {
        100: '#555555',
        400: '#cdc9c3',
        600: '#fbf7f0',
        900: '#d9e4dd',
    }
}

const fonts = {
    heading: 'Rubik',
    body: 'Montserrat'
}

export const GreenTheme = extendTheme({ colors , fonts});