import { Box } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import { AppState } from '../provider/AppProvider';

export const MouseEffect = () => {

    // INITIALIZE VARIABLES
    const { isHovered, isDarkMode } = AppState();
    const mainCursor = useRef(null);
    const secondaryCursor = useRef(null);

    // INITIALIZE REF FOR THE POSITIONS
    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX : 0,
        distanceY : 0,
        key: -1
    })

    // KEEP TRACK ON MOUSE MOVE
    useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event;
            const mouseX = clientX;
            const mouseY = clientY;

            positionRef.current.mouseX =
                mouseX - secondaryCursor.current.clientWidth / 2;
            positionRef.current.mouseY =
                mouseY - secondaryCursor.current.clientHeight / 2;
            mainCursor.current.style.transform = `translate3d(${mouseX -
                mainCursor.current.clientWidth / 2}px, ${mouseY -
                mainCursor.current.clientHeight / 2}px, 0)`;
        });

        return () => {};
    }, [])

    // MAKE THE CIRCLE FOLLOW
    useEffect(() => {
        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse);
            const {
                mouseX,
                mouseY,
                destinationX,
                destinationY,
                distanceX,
                distanceY,
            } = positionRef.current;

            if (!destinationX || !destinationY) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            } else {
                positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
                positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
                if (
                    Math.abs(positionRef.current.distanceX) +
                    Math.abs(positionRef.current.distanceY) <
                    0.1
                ) {
                    positionRef.current.destinationX = mouseX;
                    positionRef.current.destinationY = mouseY;
                } else {
                    positionRef.current.destinationX += distanceX;
                    positionRef.current.destinationY += distanceY;
                }
            }
                secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
        };
        
        followMouse();
    }, [])

    return (
        <div>
            <Box ref={mainCursor}
                top='0'
                left='0'
                h='1.5rem'
                w='1.5rem'
                bg={isDarkMode ? '#cdc9c3' : '#555555'}
                pos='absolute'
                borderRadius='50%'
                transition='all .2s ease'
                mixBlendMode={isHovered ? 'difference' : ''}
                pointerEvents='none'
            ></Box>
            <Box ref={secondaryCursor}
                top='0'
                left='0'
                h={isHovered ? '5rem' : '4rem'}
                w={isHovered ? '5rem' : '4rem'}
                border={isDarkMode ? '1px solid #cdc9c3' : '1px solid #555555'}
                pos='absolute'
                borderRadius='50%'
                transition='all .3s ease-out'
                mixBlendMode={isHovered ? 'difference' : ''}
                bg={isHovered ? isDarkMode ? 'white' : 'red' : ''}
                pointerEvents='none'
            ></Box>
        </div>
    )
}
