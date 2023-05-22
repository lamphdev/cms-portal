import React from 'react'
import styled from '@emotion/styled'
import icon from '../Consulation/assets/icon.png'
import { Button, Image } from 'antd'

interface IProps {
  image?: any
  title?: any
  subTitle?: any
}

const Consulation = (props: IProps) => {
  return (
    <Div>
      <div className='row bloc'>
        <div className='col-md-3 column1'>
          <Image src={consulation.image} preview={false} />
        </div>
        <div className='col-md-5 column2'>
          <Title title={consulation.title} subTitle={consulation.subTitle} />
        </div>
        <div className='col-md-4'>
          <Button type='primary'>Tư vấn cho tôi</Button>
        </div>
      </div>
    </Div>
  )
}

const Div = styled.div`
  margin-top: 0px;
  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  background: #ffffff;
  .bloc {
    display: flex;
    align-items: center;
    margin-left: 10%;
    margin-right: 10%;
    background-color: #ef0032;
    border-radius: 16px 16px 16px 0px;
    width: 80%;
    .column1 {
      margin-top: -3.5%;
    }
    .column2 {
      padding-top: 3%;
      .title {
        font-weight: 700;
        font-size: 24px;
        line-height: 26px;
        color: #ffffff;
      }
      .subTitle {
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        color: #ffffff;
      }
    }
    .ant-btn-primary {
      background: #ffffff;
      border-radius: 8px 8px 8px 0px;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
      color: #ef0032;
      border: 0;
      width: 197px;
      height: 56px;
      float: right;
    }
  }
`

const consulation = {
  image: icon,
  title: 'ĐĂNG KÝ NHẬN TƯ VẤN ',
  subTitle:
    'Tư vấn giải pháp dành cho doanh nghiệp bởi đội ngũ chuyên gia hàng đầu'
}

function Title (props: any) {
  return (
    <div>
      <p className='title'>{props.title}</p>
      <p className='subTitle'>{props.subTitle}</p>
    </div>
  )
}

export default Consulation
