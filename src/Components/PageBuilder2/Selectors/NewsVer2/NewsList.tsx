import React from 'react'
import { Carousel, Image } from 'antd'
import styled from '@emotion/styled'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

interface IProps {
  dataList: any
}

const NewsList = (props: IProps) => {
  const renderFeatureDetail = (data: any) => {
    return (
      <Div style={{ textAlign: 'center' }}>
        <NewsDetail
          image={data.image}
          type={data.title}
          date={data.createAt}
          title={data.subtitle}
        />
      </Div>
    )
  }

  return (
    <Div style={{ textAlign: 'center' }}>
      <Carousel
        autoplay
        className='carousel'
        dotPosition={'bottom'}
        dots={{ className: 'nextSlide' }}
        slidesToShow={props.dataList.length >= 3 ? 3 : props.dataList.length}
      >
        {props.dataList.map((item: any, index: number) => {
          return renderFeatureDetail(item)
        })}
      </Carousel>
    </Div>
  )
}

const Div = styled.div`
  //justify-content: center;
  //text-align: center;
  
  margin-top:30px;
  margin-bottom:30px;


  .newsDetail {
    textAlign: center,
    font-family: 'Inter';
    font-style: normal;

    width:367px;
    .subTitle {
      .part1 {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #ee0033;
      }

      .part2 {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #898383;
      }
    }

    .mainTitle {
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      color: #000000;
    }
  }

  .nextSlide button {
    height: 13px !important;
    width: 13px !important;
    border-radius: 90px !important;
  }
  .carousel {
    text-align:center;
    display:flex;
    justify-content:center;
    .slick-arrow {
      background: #f5f5f5;
      opacity: 0.4;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      z-index: 99 !important;
      width: 24px;
      color: #555555 !important;
      border: 1px solid #d0d0d0;
    }
    .slick-prev {
      //left: 0;
      margin-right: 5%;
      height: 55px !important;
      width: 55px !important;
      border-radius: 90px !important;
    }

    .slick-next {
      margin-right: -3%;
      height: 55px !important;
      width: 55px !important;
      border-radius: 90px !important;
    }
    .slick-prev::before {
      content: '';
    }
    .slick-next::before {
      content: '';
    }
    .slick-dots {
      margin-left: 0;
      margin-right: 0;
      bottom: 1%;
      li button {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: #d0d0d0;
      }
      li.slick-active button {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: #ffffff;
        border: 1px solid #ef0032;
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
`

function NewsDetail (props: any) {
  return (
    <div className='newsDetail'>
      <Image src={props.image} preview={false} width={'100%'} />
      <p className='subTitle'>
        <span className='part1'>{props.type}</span>
        <span> </span>
        <span className='part2'>{props.date}</span>
      </p>
      <p className='mainTitle'>{props.title}</p>
    </div>
  )
}

function SampleNextArrow (props: any) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <RightOutlined />
    </div>
  )
}

function SamplePrevArrow (props: any) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <LeftOutlined />
    </div>
  )
}
const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}

export default NewsList
