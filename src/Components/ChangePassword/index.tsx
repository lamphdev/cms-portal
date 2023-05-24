import styled from '@emotion/styled'
import { InputProps, InputRef } from 'antd'
import { useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { FilledButton, OutlineButton, StyledInput } from './styles'

export function ChangePassword () {
  const { control, handleSubmit } = useForm({
    mode: 'all',
    reValidateMode: 'onChange'
  })

  const { t } = useTranslation()

  const submitForm = (value: any) => {
    console.log(value)
  }

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Controller
        control={control}
        name='oldPass'
        rules={{
          required: {
            value: true,
            message: 'validation.required'
          }
        }}
        render={({ field, fieldState }) => (
          <section>
            <label htmlFor=''>Mật khẩu cũ</label>
            <InputPass
              {...field}
              maxLength={100}
              className={fieldState.invalid ? 'control-error' : ''}
              placeholder='Nhập mật khẩu cũ'
              type='password'
            />
            <p className='error-message'>
              {t(fieldState.error?.message || '', { field: field.name })}
            </p>
          </section>
        )}
      />

      <Controller
        control={control}
        name='newPass'
        rules={{
          required: {
            value: true,
            message: 'validation.required'
          }
        }}
        render={({ field, fieldState }) => (
          <section style={{ marginTop: '1rem' }}>
            <label htmlFor=''>Mật khẩu mới</label>
            <InputPass
              {...field}
              maxLength={100}
              className={fieldState.invalid ? 'control-error' : ''}
              placeholder='Nhập mật khẩu mới'
              type='password'
            />
            <p className='error-message'>
              {t(fieldState.error?.message || '', { field: field.name })}
            </p>
          </section>
        )}
      />

      <Controller
        control={control}
        name='rePass'
        rules={{
          required: {
            value: true,
            message: 'validation.required'
          }
        }}
        render={({ field, fieldState }) => (
          <section style={{ marginTop: '1rem' }}>
            <label htmlFor=''>Nhập lại mật khẩu mới</label>
            <InputPass
              {...field}
              maxLength={100}
              className={fieldState.invalid ? 'control-error' : ''}
              placeholder='Nhập lại mật khẩu'
              type='password'
            />
            <p className='error-message'>
              {t(fieldState.error?.message || '', { field: field.name })}
            </p>
          </section>
        )}
      />

      <div className='actions'>
        <OutlineButton htmlType='button'>Huỷ</OutlineButton>
        <FilledButton htmlType='submit'>Xác nhận</FilledButton>
      </div>
    </Form>
  )
}

const Form = styled('form')(() => ({
  label: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '120%',
    color: '#252929'
  },
  'label:after': {
    content: '"*"',
    color: 'red',
    marginLeft: '.25rem'
  },
  '.error-message': {
    color: 'red'
  },
  '.actions': {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem'
  }
}))

type IInputProps = InputProps & React.RefAttributes<InputRef>
const InputPass = React.forwardRef<any, IInputProps>((props, ref) => {
  const [show, setShow] = useState(false)

  const Icon = useMemo(() => {
    return show ? EyeOutlined : EyeInvisibleOutlined
  }, [show])

  return (
    <StyledInput
      {...props}
      ref={ref}
      autoComplete='off'
      suffix={<Icon onClick={() => setShow(!show)} />}
      type={show ? 'text' : 'password'}
    />
  )
})
