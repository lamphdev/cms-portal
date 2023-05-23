import { Controller, useForm } from 'react-hook-form'
import { EMAIL_REGEX } from '../../utils/regex'
import { StyledButton, StyledInput } from './styles'
import { useTranslation } from 'react-i18next'

interface Props {
  email: string
  onResetPassword?: (value: any) => void
}

export function ResetScreen (props: Props) {
  const { t } = useTranslation()
  const { email, onResetPassword } = props
  const { control, handleSubmit } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      email: email,
      password: '',
      confirmPassword: ''
    }
  })

  const onFormSubmit = (value: any) => {
    if (onResetPassword) {
      onResetPassword(value)
    }
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
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
                disabled
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

      <div style={{ marginTop: '1rem' }}>
        <label htmlFor='' className='labelRequire'>
          Mật khẩu mới
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
                type='text'
                maxLength={100}
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

      <div style={{ marginTop: '1rem' }}>
        <label htmlFor='' className='labelRequire'>
          Nhập lại mật khẩu mới
        </label>
        <Controller
          control={control}
          name='confirmPassword'
          rules={{
            required: {
              value: true,
              message: 'validation.required'
            },
            validate: (field, form) => {
              if (field !== form.password) {
                return 'validation.rePasswordNotMatch'
              }
              return true
            }
          }}
          render={({ field, fieldState }) => (
            <section style={{ marginTop: '.5rem' }}>
              <StyledInput
                {...field}
                type='text'
                error={fieldState.invalid ? 'true' : 'false'}
                autoComplete='off'
                placeholder='Nhập email'
              />
              <p className='control-message'>
                {fieldState.error?.message &&
                  t(fieldState.error.message, {
                    field: field.name
                  })}
              </p>
            </section>
          )}
        />
      </div>

      <div>
        <StyledButton type='submit' style={{ marginTop: '2rem' }}>
          Đổi mật khẩu
        </StyledButton>
      </div>
    </form>
  )
}
