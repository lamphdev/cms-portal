import styled from '@emotion/styled'
import { ReactNode } from 'react'

type ButtonType = 'fill' | 'outline'

interface Props {
  className?: string
  children?: string | ReactNode[]
  variant?: ButtonType
}

export function Button (props: Props) {
  const { children, variant, className } = props

  return (
    <StyledButton variant={variant} className={className}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled('button')<{ variant?: ButtonType }>(
  ({ theme, variant }: any) => ({
    backgroundColor:
      variant === 'outline' ? 'transparent' : theme.colors.primary,
    color: variant === 'outline' ? theme.colors.primary : '#fff',
    border: variant === 'outline' ? `1px solid ${theme.colors.primary}` : '0',
    borderRadius: '5px',
    padding: '.5rem 1rem',
    boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.1)',
    backgroundPosition: 'center',
    transition: 'background .8s',
    cursor: 'pointer',
    ':hover': {
      background: `${
        variant === 'outline' ? '#fff' : theme.colors.primary
      } radial-gradient(circle, transparent 1%, ${
        variant === 'outline' ? '#fff' : theme.colors.primary
      } 1%) center/15000%`
    },
    ':active': {
      backgroundColor: 'gray',
      backgroundSize: '100%',
      transition: 'background 0s'
    }
  })
)
