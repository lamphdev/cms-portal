import { Controller, useForm } from 'react-hook-form'
import { EMAIL_REGEX } from '../../utils/regex'

import { StyledButton, StyledInput } from './styles'
import { useState } from 'react'
import React from 'react'
import { InputOTP } from '../../Components'
import { useCountDown } from '../../Hooks'

interface Props {
  onOtpValidated?: (otp: string, email: string) => void
}

export function ForgotScreen (props: Props) {
  const { onOtpValidated } = props
  const { control, handleSubmit } = useForm({
    mode: 'all',
    reValidateMode: 'onChange'
  })
  const otpCowndown = useCountDown(20)
  const [otpSended, setOtpSended] = useState(false)

  const sendOtp = async () => {
    setOtpSended(true)
    otpCowndown.start()
  }

  const nextScreen = async (data: any) => {
    if (onOtpValidated) {
      onOtpValidated(data.otp, data.email)
    }
  }

  return (
    <form action='' autoComplete='off'>
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
              message: 'email.required'
            },
            pattern: {
              value: new RegExp(EMAIL_REGEX),
              message: 'email.format'
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
              <p className='control-message'>{fieldState.error?.message}</p>
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
                  message: 'otp.required'
                },
                minLength: {
                  value: 6,
                  message: 'otp.invalidLength'
                }
              }}
              name='otp'
              render={({ field, fieldState }) => (
                <section style={{ marginTop: '.5rem' }}>
                  <InputOTP {...field} length={6} />
                  <p className='control-message'>{fieldState.error?.message}</p>
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
          <StyledButton
            type='button'
            onClick={handleSubmit(nextScreen)}
            className='loginButton'
          >
            Tiếp tục
          </StyledButton>
        </React.Fragment>
      ) : (
        <StyledButton
          type='button'
          style={{ marginTop: '2rem' }}
          onClick={handleSubmit(sendOtp)}
        >
          Gửi OTP
        </StyledButton>
      )}
    </form>
  )
}
