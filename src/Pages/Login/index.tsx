import { HeaderLogo } from '../../Components'
import { ReactNode, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  EyeFilled,
  EyeInvisibleFilled,
  LoadingOutlined
} from '@ant-design/icons'
import { Controller, useForm } from 'react-hook-form'
import { login } from '../../api/authApi'
import { useTranslation } from 'react-i18next'
import { ButtonLogin, PageWrapper, StyledInput } from './styles'

export function LoginPage () {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { control, handleSubmit } = useForm({
    mode: 'all',
    reValidateMode: 'onChange'
  })
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

              <Controller
                control={control}
                name='username'
                rules={{
                  required: {
                    value: true,
                    message: 'validation.required'
                  }
                }}
                render={({ field, fieldState }) => (
                  <section style={{ marginTop: '.5rem' }}>
                    <StyledInput
                      {...field}
                      type='text'
                      maxLength={100}
                      disabled={loading}
                      autoComplete='off'
                      className={fieldState.invalid ? 'control-error' : ''}
                      placeholder='Nhập email'
                    />
                    {fieldState.error?.message && (
                      <p className='control-message'>
                        {t(fieldState.error?.message, { field: field.name })}
                      </p>
                    )}
                  </section>
                )}
              />
            </div>

            <div style={{ marginTop: '1rem' }}>
              <label htmlFor='' className='labelRequire'>
                Mật khẩu
              </label>

              <Controller
                control={control}
                name='password'
                rules={{
                  required: {
                    value: true,
                    message: 'validation.required'
                  }
                }}
                render={({ field, fieldState }) => (
                  <section style={{ marginTop: '.5rem' }}>
                    <StyledInput
                      {...field}
                      suffix={passwordSuffix()}
                      disabled={loading}
                      maxLength={100}
                      autoComplete='off'
                      className={fieldState.invalid ? 'control-error' : ''}
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Nhập mật khẩu'
                    />
                    {fieldState.error?.message && (
                      <p className='control-message'>
                        {t(fieldState.error.message, { field: field.name })}
                      </p>
                    )}
                  </section>
                )}
              />
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
