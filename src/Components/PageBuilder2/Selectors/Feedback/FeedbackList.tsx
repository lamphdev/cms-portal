import React, { useEffect, useState } from 'react'
import { Carousel, Image } from 'antd'
import styled from '@emotion/styled'
import FeedbackDetail from './FeedbackDetail'
import { ContentDisplay } from '../../config'

interface IProps {
  icon?: any
  //image?: any;
  title?: any
  subTitle?: any
  contentDisplayList: ContentDisplay[]
  image: any
}

const FeeadbackList = (props: IProps) => {
  const init: any = []
  const [contentList, setContentList] = useState(init)
  useEffect(() => {
    let initState: { contentDisplayList: ContentDisplay[] }[] = []
    let i = 0

    props.contentDisplayList.forEach((display: any, index: number) => {
      if (!initState[i]) {
        initState[i] = {
          contentDisplayList: []
        }
      }
      if (!initState[i].contentDisplayList) {
        initState[i].contentDisplayList = []
      }
      initState[i].contentDisplayList.push(display)
      i = Math.floor((index + 1) / 4)
    })
    setContentList(initState)
  }, [])
  const renderFeatureDetail = (data: any, index: number) => {
    return (
      <Div key={index}>
        <FeedbackDetail contentDisplayDTOList={data.contentDisplayList} />
      </Div>
    )
  }

  return (
    <Div>
      <Title icon={props.icon} title={props.title} subTitle={props.subTitle} />
      <div className='parent'>
        <div
          className='leftSide'
          style={{
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Image width={'100%'} src={props.image} preview={false} />
        </div>
        <div>
          <Carousel
            className='carousel'
            autoplay
            dotPosition={'bottom'}
            dots={{ className: 'nextSlide' }}
            style={{ width: '1040px' }}
          >
            {contentList.map((item: any, index: number) => {
              return renderFeatureDetail(item, index)
            })}
          </Carousel>
        </div>
      </div>
    </Div>
  )
}

const Div = styled.div`
  .parent {
    width: 100%;
    display: flex;
    flex-direction: space-between;
    justify-content: center;
    .leftSide {
      margin-left: 20px;
    }
    .carousel {
      .slick-dots {
        padding-left: 350px;
        width: 400px;
        li button {
          width: 10px;
          height: 10px;
          border-radius: 100%;
          background-color: #555555;
        }
        li.slick-active button {
          width: 25px !important;
          height: 15px;
          border-radius: 100%;
          background-color: #ef0032;
          color: #555555;
        }
        li.slick-active button:before {
          line-height: 10px;
          width: 10px;
          height: 10px;
        }
        li button:before {
          color: transparent;
          line-height: 10px;
          width: 10px;
          height: 10px;
        }
      }
    }
    .nextSlide button {
      height: 13px !important;
      width: 13px !important;
      border-radius: 90px !important;
      color: #555555;
    }
  }

  .title {
    margin-bottom: 3%;
    .mainTitle {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 1%;
    }
    .subTitle {
      font-weight: 400;
      font-size: 15px;
      line-height: 150%;
      color: #787878;
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
export default FeeadbackList
