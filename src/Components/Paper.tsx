import styled from '@emotion/styled'
import { ReactNode } from 'react'

const StyledDiv = styled('div')(({ theme }: any) => ({
  padding: '1rem',
  backgroundColor: '#F1F4F6',
  borderRadius: theme.borderRadius
}))

export function Paper (props: { children?: ReactNode; className?: string }) {
  return <StyledDiv className={props.className}>{props.children}</StyledDiv>
}
