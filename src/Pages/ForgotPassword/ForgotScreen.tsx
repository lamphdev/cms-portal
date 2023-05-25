import { Controller, useForm } from 'react-hook-form'
import { EMAIL_REGEX } from '../../utils/regex'

import { StyledButton, StyledInput } from './styles'
import { useEffect, useState } from 'react'
import React from 'react'
import { InputOTP } from '../../Components'
import { useCountDown } from '../../Hooks'
import { useTranslation } from 'react-i18next'

interface Props {
  onOtpValidated?: (otp: string, email: string) => void
}

export function ForgotScreen (props: Props) {
  const { onOtpValidated } = props
  const { t } = useTranslation()
  const { control, clearErrors, setFocus, handleSubmit } = useForm({
    mode: 'all',
    reValidateMode: 'onChange'
  })
  const otpCowndown = useCountDown()
  const [otpSended, setOtpSended] = useState(false)

  useEffect(() => {
    setFocus('email')
  }, [setFocus])

  const sendOtp = async () => {
    setOtpSended(true)
    setTimeout(() => {
      clearErrors('otp')
      setFocus('otp')
    }, 0)
    otpCowndown.start(20)
  }

  const nextScreen = async (data: any) => {
    if (onOtpValidated) {
      onOtpValidated(data.otp, data.email)
    }
  }

  const onSubmit = (formValue: any) => {
    if (!otpSended) {
      sendOtp()
    } else {
      nextScreen(formValue)
    }
  }

  return (
    <form action='' autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='' className='labelRequire'>
          Email đăng nhập
        </label>
        <Controller
          control={control}
          name='email'
          rules={{
            required: {
              value: true,
              message: 'validation.required'
            },
            pattern: {
              value: new RegExp(EMAIL_REGEX),
              message: 'validation.invalidFormat'
            }
          }}
          render={({ field, fieldState }) => (
            <section style={{ marginTop: '.5rem' }}>
              <StyledInput
                {...field}
                type='text'
                disabled={otpSended}
                error={fieldState.invalid ? 'true' : 'false'}
                autoComplete='off'
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

      {otpSended ? (
        <React.Fragment>
          <div className='mt-4'>
            <label htmlFor='' className='labelRequire'>
              Nhập mã OTP
            </label>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'validation.required'
                },
                minLength: {
                  value: 6,
                  message: ''
                }
              }}
              name='otp'
              render={({ field, fieldState }) => (
                <section style={{ marginTop: '.5rem' }}>
                  <InputOTP {...field} length={6} />
                  {fieldState.error?.message && (
                    <p className='control-message'>
                      {t(fieldState.error?.message, { field: field.name })}
                    </p>
                  )}
                </section>
              )}
            />
          </div>
          <div className='flex justify-center mt-2'>
            <p>
              Bạn chưa nhận được mã OTP?{' '}
              <span className='otpCounter'>
                Gửi lại sau ({otpCowndown.value}s)
              </span>
            </p>
          </div>
          <StyledButton type='submit' className='loginButton'>
            Tiếp tục
          </StyledButton>
        </React.Fragment>
      ) : (
        <StyledButton type='submit' style={{ marginTop: '2rem' }}>
          Gửi OTP
        </StyledButton>
      )}
    </form>
  )
}
