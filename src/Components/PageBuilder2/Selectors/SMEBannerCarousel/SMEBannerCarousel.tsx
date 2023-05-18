import React, { useState } from 'react'
import styled from '@emotion/styled'
import SMEBannerCarouselList from './SMEBannerCarouselList'
import { ContentDisplay } from '../../config'

interface IProps {
  data: ContentDisplay
}

const SMEBannerCarousel = (props: IProps) => {
  const [background, setBackground] = useState(null)
  return (
    <Div style={{ backgroundImage: `url(${background})` }}>
      <SMEBannerCarouselList
        contentDisplayDTOList={props.data?.contentDisplayDTOList || []}
        setBackground={setBackground}
      />
    </Div>
  )
}

const Div = styled.div``

export default SMEBannerCarousel
