import React from 'react'
import styled from '@emotion/styled'

interface IProps {
  title?: string
  subtitle?: string
}

const OurProductTitle = (props: IProps) => {
  return (
    <div>
      <Div>
        <Title title={props.title} subtitle={props.subtitle} />
      </Div>
    </div>
  )
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .content-title {
    text-align: center;
    font-family: 'Inter';
    font-style: normal;

    .title {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 32px;
      line-height: 39px;
      margin-bottom: 0px;
    }
    .subtitle {
      width: 414px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 150%;

      color: #787878;
    }
  }
`

function Title (props: any) {
  return (
    <div className='content-title align-self-center'>
      <div className='title'>{props.title}</div>
      <div className='subtitle'>{props.subtitle}</div>
    </div>
  )
}

export default OurProductTitle
