import styled from '@emotion/styled'
import React, { useMemo, useState } from 'react'

interface Props {
  length: number
}

export const InputOTP = React.forwardRef<any, Props>((props, ref) => {
  const { length } = props
  const [value, setValue] = useState('')

  const onKeyDown = (e: any) => {
    e.preventDefault()
    const { key, keyCode } = e
    if (key === 'Backspace' || keyCode === 8) {
      setValue(value.substring(0, value.length - 1))
      return
    }

    if (isNaN(key)) {
      return
    }

    if (value.length >= length) {
      return
    }
    setValue(value + key)
  }

  const display = useMemo(() => {
    return Array.from(Array(length).keys())
      .map((key, idx) => {
        if (value.at(idx) !== null && value.at(idx) !== undefined) {
          return value.at(idx)
        }
        return '-'
      })
      .join('  ')
  }, [value, length])

  return (
    <Wrappper>
      <input
        ref={ref}
        type='text'
        value={display}
        onChange={() => {}}
        onKeyDown={onKeyDown}
      />
    </Wrappper>
  )
})

const Wrappper = styled('span')(() => ({
  fontFamily: 'Inter',
  minWidth: '350px',
  fontWeight: 400,
  fontSize: '16px',
  height: '44px',
  border: '1px solid #D0D2D3',
  borderRadius: '4px',
  paddingLeft: '12px',
  paddingRight: '12px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
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
  },
  input: {
    border: 'none',
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '16px'
  },
  'input:hover, input:active, input:focus': {
    outline: 'none'
  }
}))
