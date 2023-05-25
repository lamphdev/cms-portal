import styled from '@emotion/styled'
import { Button } from '../../Components'
import { Input } from 'antd'

export const PageWrapper = styled('div')(({ theme }: any) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  '.loginFrame': {
    margin: 'auto'
  },
  '.loginHeader': {
    display: 'flex',
    justifyContent: 'center'
  },
  '.contentWrap': {
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
    borderRadius: theme.borderRadius,
    padding: '3rem',
    marginTop: '2rem'
  },
  '.loginTitle': {
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
    margin: 0,
    marginTop: '.5rem'
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
  }
}))

export const StyledInput = styled(Input)(() => ({
  fontFamily: 'Inter',
  minWidth: '350px',
  fontWeight: 400,
  fontSize: '16px',
  height: '44px',
  border: '1px solid #D0D2D3',
  borderRadius: '4px',
  paddingLeft: '12px',
  paddingRight: '12px',
  '&.control-error': {
    borderColor: 'red !important'
  },
  ':not(.control-error):hover': {
    border: '1px solid #D0D2D3',
    outline: 'none'
  },
  ':not(.control-error):active': {
    border: '1px solid #D0D2D3',
    outline: 'none'
  },
  ':not(.control-error):focus': {
    border: '1px solid #D0D2D3',
    outline: 'none'
  }
}))

export const ButtonLogin = styled(Button)(() => ({
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

  color: '#ffffff',
  ':disabled': {
    backgroundColor: 'gray'
  }
}))
