import SMEBannerCarouselDetail from './SMEBannerCarouselDetail'
import { Carousel } from 'antd'
import styled from '@emotion/styled'
import SMEBanner from '../SMEBanner/SMEBanner'
import { ContentDisplay, ContentDisplayType } from '../../config'

interface IProps {
  contentDisplayDTOList: ContentDisplay[]
  setBackground: any
}

const SMEBannerCarouselList = (props: IProps) => {
  const renderFeatureDetail = (data: ContentDisplay) => {
    if (data.type === ContentDisplayType.SME_BANNER) {
      return (
        <div
          style={{
            backgroundImage: `url(${data.backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
          }}
        >
          <SMEBanner data={data} />
        </div>
      )
    } else if (data.type === ContentDisplayType.SME_BANNER_PLATFORM) {
      return (
        <div
          style={{
            backgroundImage: `url(${data.backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
          }}
        >
          <SMEBannerCarouselDetail
            title={data.title}
            subTitle={data.subtitle}
            image={data.image}
            background={data.backgroundImage}
            contentDisplayDTOList={data?.contentDisplayDTOList || []}
          />
        </div>
      )
    }
  }

  return (
    <Div>
      <Carousel
        autoplay
        dots={{ className: 'nextSlide' }}
        dotPosition={'bottom'}
        style={{ width: '99.6%', height: '100%' }}
      >
        {props.contentDisplayDTOList.map((item, index) => {
          return <div>{renderFeatureDetail(item)}</div>
        })}
      </Carousel>
    </Div>
  )
}

const Div = styled.div`
  height: auto;
  .ant-carousel {
    width: 100%;
    height: 100%;
    .slick-dots {
      margin-left: 10px;
      margin-right: 0;
      bottom: 5%;
      li button {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: #ffffff;
      }
      li.slick-active button {
        width: 10px;
        height: 10px;
        border-radius: 100%;
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
  .nextSlide {
    button {
      background-color: #ffffff;
      height: 10px !important;
      width: 10px !important;

      border-radius: 90px !important;
    }
  }
`

export default SMEBannerCarouselList
