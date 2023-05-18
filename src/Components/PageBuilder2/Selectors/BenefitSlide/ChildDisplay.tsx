/**
 *
 * Benefit
 * createdBy: DucNV
 * company:
 */
import React, { memo } from 'react'
import styled from '@emotion/styled'
import icon1 from './assets/icon1.png'

interface Props {
  display: any
}
const ChildDisplay = memo((props: Props) => {
  const { display } = props
  return (
    <>
      <Div>
        <Title>{display.title}</Title>
        <IconURL>
          <img src={icon1} />
        </IconURL>
        <Content>{display.content}</Content>
      </Div>
    </>
  )
})
export default ChildDisplay
const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 118px;
  width: 800px;
`

//css image
const IconURL = styled.div`
  padding-top: 4%;
  padding-bottom: 8%;
`
const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #ef0032;
`

const Content = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 165%;
  /* or 30px */

  display: flex;
  align-items: center;
`
const Subtitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  width: 360px;
  height: 46px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #787878;
`
