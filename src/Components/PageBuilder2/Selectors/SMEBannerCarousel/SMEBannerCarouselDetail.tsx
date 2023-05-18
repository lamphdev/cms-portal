import React from 'react'
import { Button } from 'antd'
import styled from '@emotion/styled'
import { ContentDisplay } from '../../config'

interface IProps {
  image?: any
  title?: any
  subTitle?: any
  background?: any
  contentDisplayDTOList: ContentDisplay[]
}

const SMEBannerCarouselDetail = (props: IProps) => {
  return (
    <Div>
      <div className='rightSide'>
        <Title title={props.title} subTitle={props.subTitle} />
        <div className='' style={{ maxWidth: '693.33px', width: '100%' }}>
          {props.contentDisplayDTOList.map((display, _index) => {
            return (
              <Button className='button' key={display.id} type='primary'>
                {display.title}
              </Button>
            )
          })}
        </div>
      </div>
      <div className='col-md-2'></div>
    </Div>
  )
}
const Div = styled.div`
  height: 457px;
  font-family: 'Inter', serif;
  font-style: normal;
  padding-top: 5%;
  padding-bottom: 5%;

  .rightSide {
    display: flex;
    flex-direction: column;
    justify-items: left;
    margin-left: 45%;
    .title {
      width: 561px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 50px;
      color: #ffffff;
    }
    .subTitle {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
      width: 720px;
    }
    .button {
      background: #ffffff;
      border-radius: 12px 12px 12px 0px;
      box-shadow: 0px 10px 20px rgba(177, 186, 201, 0.15);
      width: 154.67px;
      height: 47px;
      margin-right: 20px;

      //text
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #ee0033;
      margin-top: 5%;
      display: inline-block;
    }
  }
`

function Title (props: any) {
  return (
    <div className=''>
      <p className='title'>{props.title}</p>
      <p className='subTitle'>{props.subTitle}</p>
    </div>
  )
}

export default SMEBannerCarouselDetail
