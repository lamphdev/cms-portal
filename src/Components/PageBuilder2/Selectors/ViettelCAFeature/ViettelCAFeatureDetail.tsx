import React from 'react'
import styled from '@emotion/styled'

interface IProps {
  leftItem: any
  rightItem: any
}

const ViettelCAFeatureDetail = (props: IProps) => {
  return (
    <Div className='viettelCAFeatureDetail'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '50%'
        }}
      >
        {props.leftItem}
      </div>
      <div
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: '100px'
        }}
      >
        {props.rightItem}
      </div>
    </Div>
  )
}
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default ViettelCAFeatureDetail
