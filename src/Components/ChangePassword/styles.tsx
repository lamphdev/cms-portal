import styled from '@emotion/styled'
import { Button, Input } from 'antd'

export const Form = styled('form')(() => ({
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

export const StyledInput = styled(Input)(() => ({
  height: '44px',
  border: '1px solid #D0D2D3',
  borderRadius: '4px',
  fontWeight: 400,
  fontSize: '16px',
  '&.control-error': {
    borderColor: 'red'
  },
  '&.control-error:hover': {
    borderColor: 'red'
  },
  '&:not(.control-error):hover': {
    border: '1px solid #D0D2D3'
  }
}))

export const FilledButton = styled(Button)(() => ({
  border: 'none',
  height: '40px',
  width: '140px',
  backgroundColor: '#EF0032',
  borderRadius: '5px',
  color: '#fff',
  ':hover': {
    color: '#fff',
    border: 'none'
  }
}))

export const OutlineButton = styled(Button)(() => ({
  border: '1px solid #EF0032',
  borderRadius: '5px',
  height: '40px',
  width: '140px',
  backgroundColor: 'transparent',
  color: '#EF0032',
  ':hover': {
    color: '#EF0032 !important',
    backgroundColor: 'transparent !important'
  }
}))
