import styled from '@emotion/styled'
import { HeaderLogo } from '../../Components'

const StyledHeader = styled('header')(() => ({
  display: 'flex',
  height: '52px',
  alignItems: 'center',
  padding: '0 1rem',
  position: 'sticky'
}))

export default function Header () {
  return (
    <StyledHeader className='admin-header'>
      <HeaderLogo />
    </StyledHeader>
  )
}
