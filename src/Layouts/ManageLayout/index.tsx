import { Outlet } from 'react-router-dom'
import Header from './Header'
import { LeftSidebar } from './left-sidebar'
import styled from '@emotion/styled'

const StyledLayout = styled('div')(() => ({
  width: '100%',
  height: '100vh'
}))

const StyledFlex = styled('div')(() => ({
  width: '100%',
  height: 'calc(100vh - 50px)',
  display: 'flex',
  flexDirection: 'row'
}))

const ContentWrapper = styled('main')(() => ({
  flexGrow: 1,
  padding: '1rem'
}))

export function ManageLayout () {
  return (
    <StyledLayout>
      <Header></Header>
      <StyledFlex>
        <LeftSidebar></LeftSidebar>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </StyledFlex>
    </StyledLayout>
  )
}
