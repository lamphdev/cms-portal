import { HeaderLogo } from '../../Components'
import { Link, useNavigate } from 'react-router-dom'
import { ForgotScreen } from './ForgotScreen'
import { StyledIconButton, StyledPage } from './styles'
import { useState } from 'react'
import { ResetScreen } from './ResetScreen'

export function ForgotPasswordPage () {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [forgotValiddated, setForgotValidated] = useState(false)

  const validateForgotOtp = (otp: string, email: string) => {
    console.log('received otp ', otp)
    setEmail(email)
    setForgotValidated(true)
  }

  const resetPassword = (formValue: any) => {
    console.log(formValue)
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
          {!forgotValiddated ? (
            <ForgotScreen onOtpValidated={validateForgotOtp} />
          ) : (
            <ResetScreen email={email} onResetPassword={resetPassword} />
          )}
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
