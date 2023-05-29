import styled from "@emotion/styled";

const z = 32;  /* control the zig-zag  */
const s = 360; /* control the size */
const g = 8;   /* control the gap */

export const ZigZagStyled = styled('div')(() => ({
    h1:{
        textAlign: 'center'
    },
    width: '100%',
    '.gallery': {
        margin: '0 auto',
        display: 'grid',
        gap: `${g}px`,
        width: `${2 * s + g}px`,
        gridAutoFlow: 'column',
        '>img': {
            width: 0,
            minWidth: `calc(100% + ${z / 2}px)`,
            height: s,
            objectFit: 'cover',
            WebkitMask: 'var(--mask)',
            mask: 'var(--mask)',
            cursor: 'pointer',
            transition: '.5s',
            ':hover': {
                width: s / 2,
            },
            ':first-of-type': {
                placeSelf: 'start',
                clipPath: `polygon(${2 * z}px 0,100% 0,100% 100%,0 100%)`,
                '--mask': `conic-gradient(from -135deg at right,#0000,#000 1deg 89deg,#0000 90deg) 
                    50%/100% calc(${2 * z}px) repeat-y`,
            },
            ':last-of-type': {
                placeSelf: 'end',
                clipPath: `polygon(0 0,100% 0,calc(100% - ${2 * z}px) 100%,0 100%)`,
                '--mask':
                    `conic-gradient(from 45deg at left ,#0000,#000 1deg 89deg,#0000 90deg) 
      50% calc(50% - ${z}px)/100% ${2 * z}px repeat-y`,
            }
        }
    },
}))