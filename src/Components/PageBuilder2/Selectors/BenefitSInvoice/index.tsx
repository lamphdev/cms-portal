import { Image } from 'antd'
import React, { memo } from 'react'
import styled from '@emotion/styled'
import ChildDisplay from './ChildDisplay'
import { ContentDisplay } from '../../config'

interface IProps {
  data: ContentDisplay
}
const BenefitSInvoice = memo((props: IProps) => {
  const { data } = props
  return (
    <>
      <div
        style={{
          background: '#ffffff',
          justifyContent: 'center'
        }}
      >
        <Div className=''>
          <Border>
            <Image
              className='img'
              style={{ margin: '40px', width: '352.47px' }}
              src={data.image}
            ></Image>
            <BorderContent className='align-self-center'>
              {data.content}
            </BorderContent>
          </Border>
          <Content>
            <Title>{data.title}</Title>
            {(data.contentDisplayDTOList || []).map(display => {
              return <ChildDisplay title={display.title}></ChildDisplay>
            })}
            <End />
          </Content>
        </Div>
      </div>
    </>
  )
})
export default BenefitSInvoice
const End = styled.div`
  display: flex;
  border-style: dashed none none none;
  border-width: 2px;
  border-color: rgba(236, 27, 46, 0.4);
`
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 90px;
`
const BorderContent = styled.div`
  font-family: 'Google Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: -0.02em;
  color: #5c5c5c;
  margin: 43px;
`
const Border = styled.div`
  width: 488px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0px 14px 40px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  text-align: center;
  .img {
  }
`
const Content = styled.div`
  left: 0px;
  top: 0px;
  margin-left: 120px;
  font-family: 'Inter';
  letter-spacing: -0.03em;

  color: #000000;
  .child:hover {
    color: #ef0032;
  }
`
const Title = styled.div`
  width: 486px;
  height: 98px;
  margin-bottom: 30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 125%;
  /* or 50px */

  letter-spacing: -0.03em;

  color: #000000;
`
