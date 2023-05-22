import React from 'react'
import styled from '@emotion/styled'

interface IProps {
  title?: string
}

const ChooseViettelTitle = (props: IProps) => {
  return (
    <div>
      <Div>
        <Title title={props.title} />
      </Div>
    </div>
  )
}

const Div = styled.div`
  .title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    .part1 {
      color: #111111;
    }
    .part2 {
      color: #ef0032;
    }
  }
`

function Title (props: any) {
  return (
    <div className='title'>
      <p>
        <span className='part1'>{props.title}</span>
      </p>
    </div>
  )
}

export default ChooseViettelTitle
