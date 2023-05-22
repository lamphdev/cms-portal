import styled from '@emotion/styled'
import { Button, HeaderLogo, InputOTP } from '../Components'
import { Link, useNavigate } from 'react-router-dom'
import { useCountDown } from '../Hooks'
import { Input } from 'antd'
import { useState } from 'react'
import React from 'react'

const StyledPage = styled('div')(({ theme }: any) => ({
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
    // font-family: 'Inter';
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
  '.control': {
    minWidth: '350px',
    height: '44px',
    border: '1px solid #D0D2D3',
    borderRadius: '4px',
    paddingLeft: '12px',
    paddingRight: '12px'
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
  },
  '.otpCounter': {
    color: theme.colors.primary,
    cursor: 'pointer',
    userSelect: 'none'
  }
}))

const StyledIconButton = styled('button')`
  border: none;
  padding: 0.5rem 1rem;
  background-color: transparent;
  cursor: pointer;
`

export function ForgotPasswordPage () {
  const navigate = useNavigate()
  const countdown = useCountDown(10)
  const [otpSended, setOtpSended] = useState(false)

  const sendOtp = () => {
    console.log('lsfjk  ')
    setOtpSended(true)
    countdown.start()
  }

  return (
    <StyledPage>
      <div className='forgotFrame'>
        <div className='forgotHeader'>
          <HeaderLogo className='border-none' />
        </div>
        <div className='contentWrap'>
          <StyledIconButton onClick={() => navigate(-1)}>
            <img src='/icons/left-arrow.svg' alt='' />
          </StyledIconButton>

          <h2 className='forgotTitle'>Quên mật khẩu</h2>
          <form action='' autoComplete='off'>
            <div>
              <label htmlFor='' className='labelRequire'>
                Email đăng nhập
              </label>
              {JSON.stringify(otpSended)}
              <p></p>
              <StyledInput
                type='text'
                autoComplete='off'
                className='control'
                placeholder='Nhập email'
              />
            </div>

            {otpSended ? (
              <React.Fragment>
                <div className='mt-4'>
                  <label htmlFor='' className='labelRequire'>
                    Nhập mã OTP
                  </label>
                  <p></p>
                  <section>
                    {/* <StyledInput className='control' placeholder='Nhập mật khẩu' /> */}
                    <InputOTP length={6} />
                  </section>
                </div>
                <div className='flex justify-center mt-2'>
                  <p>
                    Bạn chưa nhận được mã OTP?{' '}
                    <span className='otpCounter'>
                      Gửi lại sau ({countdown.value}s)
                    </span>
                  </p>
                </div>
                <button type='button' onClick={sendOtp} className='loginButton'>
                  Tiếp tục
                </button>
              </React.Fragment>
            ) : (
              <StyledButton
                type='button'
                style={{ marginTop: '2rem' }}
                onClick={sendOtp}
              >
                Gửi OTP
              </StyledButton>
            )}
          </form>
        </div>

        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          Đã có tài khoản?{' '}
          <Link to='/auth/login' className='otpCounter'>
            Đăng nhập ngay
          </Link>
        </p>
      </div>
    </StyledPage>
  )
}

const StyledInput = styled(Input)(() => ({
  fontFamily: 'Inter',
  minWidth: '350px',
  fontWeight: 400,
  fontSize: '16px',
  height: '44px',
  border: '1px solid #D0D2D3',
  borderRadius: '4px',
  paddingLeft: '12px',
  paddingRight: '12px',
  ':hover': {
    border: '1px solid #D0D2D3',
    outline: 'none'
  },
  ':active': {
    border: '1px solid #D0D2D3',
    outline: 'none'
  },
  ':focus': {
    border: '1px solid #D0D2D3',
    outline: 'none'
  }
}))

const StyledButton = styled(Button)(() => ({
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
