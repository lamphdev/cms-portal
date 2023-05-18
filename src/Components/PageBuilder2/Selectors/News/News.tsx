import React from 'react'
import styled from '@emotion/styled'
import { Image } from 'antd'
import NewsList from './NewsList'
import { ContentDisplay } from '../../config'

interface IProps {
  data: ContentDisplay
}

const News = (props: IProps) => {
  const { data } = props
  return (
    <Div>
      <Title icon={data.icon} title={data.title} subTitle={data.subtitle} />
      <NewsList dataList={data.contentDisplayDTOList || []} />
    </Div>
  )
}

const Div = styled.div`
  width: 100%;
  background: #f5f5f5;
  padding-bottom: 50px;
  .title {
    font-family: 'Inter';
    font-style: normal;

    .mainTitle {
      font-weight: 900;
      font-size: 32px;
      line-height: 39px;
      font-family: 'Inter';
      font-style: normal;
    }
    .subTitle {
      font-weight: 400;
      font-size: 15px;
      line-height: 150%;
      color: #787878;
      margin-top: -1%;
      margin-bottom: 3%;
    }
  }
`

function Title (props: any) {
  return (
    <div className='title' style={{ textAlign: 'center', paddingTop: '3%' }}>
      <Image src={props.icon} preview={false} />
      <p className='mainTitle'>
        <span className='part1'>{props.title}</span>
      </p>
      <p className='subTitle'>{props.subTitle}</p>
    </div>
  )
}

export default News
