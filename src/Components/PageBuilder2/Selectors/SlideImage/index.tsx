/**
 *
 * LandingPage
 *
 */
import * as React from 'react'
import styled from '@emotion/styled'
import { ContentDisplay } from '../../config'

interface Props {
  data: ContentDisplay
}
export function SlideImage (props: Props) {
  const { data } = props
  return (
    <Div>
      <img
        src={data.backgroundImage}
        alt=''
        style={{ height: '400px ', width: '100%' }}
      />
    </Div>
  )
}

const Div = styled.div`
  width: 100%;

  background: #ffffff;
`
