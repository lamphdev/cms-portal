import styled from '@emotion/styled'
import { Button, HeaderLogo } from '../Components'
import { ReactNode, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from 'antd'
import {
  EyeFilled,
  EyeInvisibleFilled,
  LoadingOutlined
} from '@ant-design/icons'
import { Controller, useForm } from 'react-hook-form'
import { login } from '../api/authApi'

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
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { control, handleSubmit } = useForm()
  const navigate = useNavigate()

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const passwordSuffix = (): ReactNode => {
    const Icon = showPassword ? EyeFilled : EyeInvisibleFilled
    return <Icon onClick={toggleShowPassword} />
  }

  const formSubmit = async (value: any) => {
    console.log(value)
    const { username, password } = value
    try {
      setLoading(true)
      await login(username, password)
      navigate('/manage')
    } catch (e) {
    } finally {
      setLoading(false)
    }
    // const sleep = (time: number) =>
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => resolve(null), time)
    //   })

    // setLoading(true)
    // sleep(3000).then(() => setLoading(false))
  }

  return (
    <PageWrapper>
      <div className='loginFrame'>
        <div className='loginHeader'>
          <HeaderLogo className='border-none' />
        </div>
        <div className='contentWrap'>
          <h2 className='loginTitle'>Đăng nhập</h2>
          <form autoComplete='off' onSubmit={handleSubmit(formSubmit)}>
            <div>
              <label htmlFor='' className='labelRequire'>
                Email đăng nhập
              </label>
              <section style={{ marginTop: '.5rem' }}>
                <Controller
                  control={control}
                  name='username'
                  render={({ field }) => (
                    <StyledInput
                      {...field}
                      type='text'
                      disabled={loading}
                      autoComplete='off'
                      placeholder='Nhập email'
                    />
                  )}
                />
              </section>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <label htmlFor='' className='labelRequire'>
                Mật khẩu
              </label>
              <section style={{ marginTop: '.5rem' }}>
                <Controller
                  control={control}
                  name='password'
                  render={({ field }) => (
                    <StyledInput
                      {...field}
                      suffix={passwordSuffix()}
                      disabled={loading}
                      autoComplete='off'
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Nhập mật khẩu'
                    />
                  )}
                />
              </section>
            </div>

            <div className='linkWrap'>
              <Link to='/forgot-password' className='forgotLink'>
                Quên mật khẩu
              </Link>
            </div>

            <ButtonLogin
              type='submit'
              disabled={loading}
              className='loginButton'
              onClick={formSubmit}
            >
              {loading && <LoadingOutlined style={{ marginRight: '.5rem' }} />}
              Đăng nhập
            </ButtonLogin>
          </form>
        </div>
      </div>
    </PageWrapper>
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

const ButtonLogin = styled(Button)(() => ({
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
