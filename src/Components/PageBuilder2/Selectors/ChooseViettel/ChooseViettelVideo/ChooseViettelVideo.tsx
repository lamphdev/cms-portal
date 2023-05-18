import React from 'react'
import styled from '@emotion/styled'
import ReactPlayer from 'react-player'

interface IProps {
  url?: string
}

const ChooseViettelVideo = (props: IProps) => {
  return (
    <div className='row' style={{ marginTop: '50px' }}>
      <ReactPlayer
        url={props.url}
        playing={false}
        controls={true}
        className='react-player'
        height={'498px'}
        width={'600px'}
      />
    </div>
  )
}

const Div = styled.div``

function Video (props: any) {
  return <div className='video'></div>
}

export default ChooseViettelVideo
