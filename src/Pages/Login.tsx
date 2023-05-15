import styled from '@emotion/styled'
import { HeaderLogo } from '../Components'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const PageWrapper = styled('div')(({ theme }: any) => ({
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

    // font-family: 'Inter';
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '120%',
    color: '#252929'
  },
  '.labelRequire': {
    // font-family: 'Inter';
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '120%',

    color: '#252929'
  },
  '.control': {
    minWidth: '350px'
  },
  '.control:focus': {
    outline: 'none'
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

export function LoginPage () {
  const [showPassword, setShowPassword] = useState(false)

  const login = () => {}
  return (
    <PageWrapper>
      <div className='loginFrame'>
        <div className='loginHeader'>
          <HeaderLogo className='border-none' />
        </div>
        <div className='contentWrap'>
          <h2 className='loginTitle'>Đăng nhập</h2>
          <form action='' autoComplete='off'>
            <div>
              <label htmlFor='' className='labelRequire'>
                Email đăng nhập
              </label>
              <p></p>
              <input
                type='text'
                autoComplete='off'
                className='control'
                placeholder='Nhập email'
              />
            </div>

            <div style={{ marginTop: '1rem' }}>
              <label htmlFor='' className='labelRequire'>
                Mật khẩu
              </label>
              <p></p>
              <section>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className='control'
                  placeholder='Nhập mật khẩu'
                />
              </section>
            </div>

            <div className='linkWrap'>
              <Link to='/forgot-password' className='forgotLink'>
                Quên mật khẩu
              </Link>
            </div>

            <button type='button' className='loginButton' onClick={login}>
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  )
}
