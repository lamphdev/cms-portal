import styled from '@emotion/styled'
import { Button } from '../../Components'
import { Input } from 'antd'

export const StyledPage = styled('div')(({ theme }: any) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  '.forgotFrame': {
    margin: 'auto'
  },
  '.forgotHeader': {
    display: 'flex',
    justifyContent: 'center'
  },
  '.contentWrap': {
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
    borderRadius: theme.borderRadius,
    padding: '3rem',
    marginTop: '2rem'
  },
  '.forgotTitle': {
    margin: 0,
    height: '29px',
    marginBottom: '43px',
    textAlign: 'center',

    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '120%',
    color: '#252929'
  },
  '.labelRequire': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '120%',

    color: '#252929'
  },
  '.labelRequire:after': {
    content: '"*"',
    color: 'red',
    marginLeft: '.25rem'
  },
  '.control-message': {
    color: 'red',
    margin: 0
  },
  '.linkWrap': {
    display: 'flex',
    justifyContent: 'end',
    marginTop: '.5rem'
  },
  '.forgotLink': {
    textDecoration: 'underline',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '120%',
    color: '#1B8FC3'
  },
  '.loginButton': {
    marginTop: '1rem',
    width: '100%',
    padding: '10px',
    height: '54px',

    background: '#ef0032',
    border: 'none',
    borderRadius: '4px',

    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '120%',

    color: '#ffffff'
  },
  '.otpCounter': {
    color: theme.colors.primary,
    cursor: 'pointer',
    userSelect: 'none'
  }
}))

export const StyledIconButton = styled('button')`
  border: none;
  padding: 0.5rem 1rem;
  background-color: transparent;
  cursor: pointer;
`

export const StyledInput = styled(Input)<{ error?: 'true' | 'false' }>(
  ({ error }) => ({
    fontFamily: 'Inter',
    minWidth: '350px',
    fontWeight: 400,
    fontSize: '16px',
    height: '44px',
    border: error === 'true' ? '1px solid red' : '1px solid #D0D2D3',
    borderRadius: '4px',
    paddingLeft: '12px',
    paddingRight: '12px',
    ':hover': {
      border: error === 'true' ? '1px solid red' : '1px solid #D0D2D3',
      outline: 'none'
    },
    ':active': {
      border: error === 'true' ? '1px solid red' : '1px solid #D0D2D3',
      outline: 'none'
    },
    ':focus': {
      border: error === 'true' ? '1px solid red' : '1px solid #D0D2D3',
      outline: 'none'
    }
  })
)

export const StyledButton = styled(Button)(() => ({
  marginTop: '1rem',
  width: '100%',
  padding: '10px',
  height: '54px',

  background: '#ef0032',
  border: 'none',
  borderRadius: '4px',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '120%',

  color: '#ffffff'
}))
