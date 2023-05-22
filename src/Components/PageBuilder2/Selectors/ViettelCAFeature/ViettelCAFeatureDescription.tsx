import React from 'react'
import styled from '@emotion/styled'
import { ContentDisplay } from '../../config'

interface IProps {
  subContent: ContentDisplay
}

const ViettelCAFeatureDescription = (props: IProps) => {
  return (
    <Div>
      <Title>{props.subContent.title}</Title>
      <div className='description'>
        {props.subContent?.contentDisplayDTOList?.map(display => {
          return (
            <>
              <p>{display.content}</p>
            </>
          )
        })}
      </div>
    </Div>
  )
}
const Div = styled.div`
  font-family: 'Inter';
  font-style: normal;
  max-width: 644px;
  min-width: 400px;
  .description {
    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
    }
  }
`
const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
  color: #000000;
  margin-bottom: 20px;
  //padding-top: 25%;
`

export default ViettelCAFeatureDescription
