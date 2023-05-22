import React from 'react'
import styled from '@emotion/styled'
import { ContentDisplay } from '../../config'

interface IProps {
  display: ContentDisplay
}

const OurProductDetailHeader = (props: IProps) => {
  const { display } = props
  return (
    <Div>
      <Description
        src={display.icon}
        title={display.title}
        subtitle={display.subtitle}
      />
    </Div>
  )
}

const Div = styled.div`
  margin-bottom: 10px;
  .description {
    display: flex;
  }
  .image {
    max-width: 80px;
    max-height: 80px;
  }
  .sub-description {
    font-family: 'Inter';
    font-style: normal;
    padding-left: 40px;
    p {
      padding: 0;
    }
    .title {
      font-weight: 700;
      font-size: 20px;
      color: #000000;
    }
    .describe {
      font-weight: 400;
      font-size: 16px;
      color: #555555;
    }
  }
`
function Description (props: any) {
  return (
    <div className='description'>
      <div className='image-parent'>
        <img className='image' src={props.src} />
      </div>
      <div className='sub-description'>
        <p className='title'>{props.title}</p>
        <p className='describe' style={{ maxWidth: '561px' }}>
          {props.subtitle}
        </p>
      </div>
    </div>
  )
}

export default OurProductDetailHeader
