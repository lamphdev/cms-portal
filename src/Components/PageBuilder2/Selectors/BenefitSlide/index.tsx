/**
 *
 * Benefit
 * createdBy: DucNV
 * company:
 */
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Carousel, Image } from 'antd'
import React, { memo } from 'react'
import styled from '@emotion/styled'
import ChildDisplay from './ChildDisplay'
import { ContentDisplay } from '../../config'

interface Props {
  data: ContentDisplay
}
const BenefitSlideCarousel = memo((props: Props) => {
  const { data } = props

  return (
    <>
      <Div>
        <p
          className='align-self-center'
          style={{ color: 'red', fontSize: '19px' }}
        >
          <img src={data.icon} alt='' />
        </p>
        <Title className='align-self-center'>{data.title}</Title>
        <Subtitle className='align-self-center'>{data.subtitle}</Subtitle>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '50px'
          }}
        >
          <div className='lefSide'>
            <Carousel
              arrows={true}
              {...settings}
              className='carousel'
              autoplay
              dots={{ className: 'nextSlide' }}
              style={{ maxWidth: '700px', width: '100%' }}
            >
              {(data.contentDisplayDTOList || []).map(dispplay => {
                return <ChildDisplay display={dispplay}></ChildDisplay>
              })}
            </Carousel>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Image
              src={data.image}
              style={{ borderRadius: '16px', maxWidth: '578px' }}
              preview={false}
            />
          </div>
        </div>
      </Div>
    </>
  )
})

export default BenefitSlideCarousel
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 90px;
  padding-bottom: 90px;
  background: #ffffff;
  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .image {
    }
  }

  //CSS Row has Carousel and Image
  .nextSlide button {
    height: 16px !important;
    width: 16px !important;
    border-radius: 90px !important;
  }
  .lefSide {
    width: 678px;
    margin-right: 50px;
  }
  .carousel {
    flex-wrap: nowrap;
    .slick-arrow {
      //  margin-left: 0;
      //  margin-right: 0;
      //  bottom: 1%;
      //
      //margin-left: 20%;
      margin-top: 190px;
      background: #f5f5f5;
      opacity: 1;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      //height: 48px;
      //z-index: 99 !important;
      //width: 24px;
      color: #555555 !important;
      border: 1px solid #d0d0d0;
      position: absolute;
      bottom: -100px;
    }
    .slick-prev {
      //margin-top: 18%;
      margin-left: 150px;
      //position: absolute;
      margin-top: 190px;
      //bottom: 1%;
      //margin-left: -50 px;
      height: 55px !important;
      width: 55px !important;
      border-radius: 90px !important;
    }

    .slick-next {
      //margin-top: 18%;
      margin-top: 190px;
      margin-right: 350px;
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
      margin-left: -100px;
      margin-right: 0;
      bottom: 0%;
      li button {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: #555555;
        margin-top: 10px;
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
// const Line = styled.div`
//   position: relative;

//   /* Neutral/500 */

//   border: 1px solid #d0d0d0;
//   transform: rotate(90deg);
// `;
const Title = styled.div`
  white-space: nowrap;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
`
const Subtitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  width: 420px;
  height: 46px;
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 2%;
  color: #787878;
`
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
