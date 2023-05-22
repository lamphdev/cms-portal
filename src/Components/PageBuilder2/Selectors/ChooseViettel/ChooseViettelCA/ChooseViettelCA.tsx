import React from 'react'
import styled from '@emotion/styled'
import { Image } from 'antd'
import { ContentDisplay } from '../../../config'

interface IProps {
  data: ContentDisplay
}

const ChooseViettelCA = (props: IProps) => {
  return (
    <Div>
      <Title>
        {' '}
        <p>
          <span className='part1'>{props.data.title} </span>
        </p>{' '}
      </Title>
      <div className='content-viettel-ca'>
        {(props.data.contentDisplayDTOList || []).map(display => {
          return (
            <div className='ant-col-md-8'>
              <Content content={display} />
            </div>
          )
        })}
      </div>
    </Div>
  )
}
const Title = styled.div`
  padding-top: 15px;
  font-weight: 700;
  font-size: 32px;
  line-height: 135%;
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0px;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  width: 100%;
  //height: 900px;
  font-family: 'Inter';
  font-style: normal;
  .content-CA {
    width: 418.67px;
    margin: 20px;
    .subTitle {
      font-weight: 700;
      font-size: 20px;
      line-height: 150%;
      color: #000000;
    }
    .subContent {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #555555;
    }
  }
  .content-viettel-ca {
    display: flex;
    flex-content: row;
    justify-content: center;
  }
`
function Content (props: any) {
  console.log(props)

  return (
    <div className='content-CA'>
      <Image src={props.content.icon} height={70} preview={false} />
      <p className='subTitle'>{props.content.title}</p>
      <p className='subContent'>{props.content.subtitle}</p>
    </div>
  )
}

export default ChooseViettelCA
