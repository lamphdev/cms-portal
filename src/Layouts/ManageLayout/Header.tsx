import styled from '@emotion/styled'
import { HeaderLogo, UserActions } from '../../Components'

const StyledHeader = styled('header')(() => ({
  display: 'flex',
  height: '52px',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1rem',
  position: 'sticky'
}))

export default function Header () {
  return (
    <StyledHeader className='admin-header'>
      <HeaderLogo />
      <UserActions username='Username'/>
    </StyledHeader>
  )
}
