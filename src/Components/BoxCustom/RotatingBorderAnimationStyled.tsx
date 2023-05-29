import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

export const DivFlex = styled('div')(() => ({
    padding: 10,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flexDirection: 'row',
}))

const animateTop = keyframes`
    25% {
        width: 100%;
        opacity: 1;
    }
    30% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`;
const animateBottom = keyframes`
    0%,
    50% {
        opacity: 0;
        width: 0;
    }

    75% {
        opacity: 1;
        width: 100%;
    }

    76%,
    100% {
        opacity: 0;
    }
`;

const animateRight = keyframes`
    0%,
    25% {
        opacity: 0;
        height: 0;
    }
    50% {
        opacity: 1;
        height: 100%;
    }
    55%,
    100% {
        height: 100%;
        opacity: 0;
    }
`;

const animateLeft = keyframes`
    0%,
    75% {
        opacity: 0;
        bottom: 0;
        height: 0;
    }

    100% {
        opacity: 1;
        height: 100%;
    }
`;

export const RotatingBorderAnimation = styled('div')(() => ({
    '*,::after,::berfore': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    position: 'relative',
    width: '300px',
    height: '300px',
    background: 'transparent',
    overflow: 'hidden',
    borderTop: '1px solid rgba(255, 49, 49, 0.5)',
    borderRight: '1px solid rgba(0, 255, 255, 0.5)',
    borderBottom: '1px solid rgba(57, 255, 20, 0.5)',
    borderLeft: '1px solid rgba(255, 255, 113, 0.5)',

    span: {
        position: 'absolute',
        borderRadius: '100vmax',
        '&.top': {
            top: 0,
            left: 0,
            width: 0,
            height: '5px',
            background: 'linear-gradient(90deg, transparent 50%, rgba(255, 49, 49, 0.5), rgb(255, 49, 49))',
            animation: `${animateTop} 3s ease-in-out infinite`,
        },
        '&.bottom': {
            right: 0,
            bottom: 0,
            height: 5,
            background: `linear-gradient(
              90deg,
              rgb(57, 255, 20),
              rgba(57, 255, 20, 0.5),
              transparent 50%
            )`,
            animation: `${animateBottom} 3s ease-in-out infinite`
        },
        '&.left': {
            left: 0,
            bottom: 0,
            width: 5,
            height: 0,
            background: `linear-gradient(
              180deg,
              rgb(255, 255, 113),
              rgba(255, 255, 113, 0.5),
              transparent 70%
            )`,
            animation: `${animateLeft} 3s ease-in-out infinite`
        },
        '&.right': {
            top: 0,
            right: 0,
            width: 5,
            height: 0,
            background: `linear-gradient(
              180deg,
              transparent 30%,
              rgba(0, 255, 255, 0.5),
              rgb(0, 255, 255)
            )`,
            animation: `${animateRight} 3s ease-in-out infinite`
        }

    },

}))