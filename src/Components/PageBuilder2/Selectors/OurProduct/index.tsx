import React, { useState } from 'react'
import styled from '@emotion/styled'
import OurProductHeader from '../OurProductHeader/OurProductHeader'
import OptionOurProductDetail from '../OptionOurProduct/OptionOurProductDetail'
import OurProductTitle from '../OurProductTitle/OurProductTitle'
import { Image } from 'antd'
import { ContentDisplay } from '../../config'

interface Props {
  data: ContentDisplay
}
const OurProduct = (props: Props) => {
  const { data } = props
  console.log(data)
  const [serviceIndex, setServiceIndex] = useState(0)

  return (
    <Div
      id='ourProduct'
      style={{
        backgroundImage: `url(${props.data.backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }}
    >
      <div className='title'>
        <div className='col-md-12 mark-title'>
          <Image src={data.icon} preview={false}></Image>
        </div>
        <div className='col-md-12'>
          <OurProductTitle title={data.title} subtitle={data.subtitle} />
        </div>
      </div>

      <div>
        <OurProductHeader
          contentDisplayList={data.contentDisplayDTOList || []}
          index={serviceIndex}
          setServiceIndex={setServiceIndex}
        />
      </div>

      <div className='body' style={{ margin: 'auto' }}>
        {(data.contentDisplayDTOList || [])[
          serviceIndex
        ]?.contentDisplayDTOList?.map(display => {
          return (
            <div
              className='column'
              style={{ background: '#ffffff', padding: '20px' }}
            >
              <OptionOurProductDetail
                src={display.image}
                title={display.title}
                contentDisplayDTOList={display.contentDisplayDTOList}
                button={'Chi tiet'}
                refUrl={display.refUrl}
              />
            </div>
          )
        })}
      </div>
    </Div>
  )
}

const Div = styled.div`
  background: #fff4f7;
  padding-bottom: 100px;
  .column {
    background: #fbfbfb;
    border-top: solid 3px #ef0032;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 20px;
    margin: 10px;
  }
  .title {
    padding-bottom: 15px;
    text-align: center;

    //position: absolute;
    .mark-title {
      color: #ef0032;
      align-items: flex-start;
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 25px;
      font-weight: bold;
      padding-top: 40px;
      margin-bottom: 20px;
    }
  }

  .header {
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    padding-top: 10px;
    white-space: nowrap;
    overflow: hidden;

    a {
      padding: 20px;
      color: #555555;
    }

    .sub-header:hover {
      color: #ef0032;
    }
    .sub-header:focus {
      color: #ef0032;
    }
    sub-header:active {
      color: #ef0032;
    }
  }

  .body {
    padding-top: 30px;
    padding-bottom: 50px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .column {
      background: #fbfbfb;
      border-top: solid 3px #ef0032;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      padding: 20px;
      margin: 10px;
      width: 414px;
    }
  }
`
export default OurProduct
