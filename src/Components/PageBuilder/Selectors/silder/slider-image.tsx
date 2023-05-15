import styled from '@emotion/styled'
import { Carousel } from 'antd'
import { HTMLProps, useEffect, useState } from 'react'

const CarouselWrapper = styled(Carousel)`
  > .slick-dots {
    margin-bottom: 5px;
  }
  > .slick-dots.dotClass li button {
    width: 14px;
    height: 14px;
    border-radius: 100%;
  }
  > .slick-dots li.slick-active button {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: red;
  }
`
type SliderImageProps = {
  onChange?: (value: any) => void
}
export const SliderImage = ({ onChange }: SliderImageProps) => {
  const [images, setImages] = useState([1, 2, 3])
  const loadData = async () => {
    const ret_image = await fetch('/images/Viettel_logo.png')
    const res_image_json = await ret_image.json()
    return res_image_json.data
  }
  //   useEffect(() => {
  //     ;(async () => {
  //       const listImage = await loadData()
  //       setImages(listImage)
  //     })()
  //   }, [])
  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(images)
    }
  }, [images])
  return (
    <CarouselWrapper
      className='slider-image'
      dots={{
        className: 'dotClass'
      }}
    >
      {images && images?.length > 0
        ? images.map((image: any, index: number) => (
            <img
              style={{
                margin: 0,
                height: '260px',
                color: '#fff',
                lineHeight: '260px',
                textAlign: 'center',
                background: '#364d79'
              }}
              key={index}
              src={'/images/Viettel_logo.png'}
              width={226}
              height={260}
              alt={index + ''}
            />
          ))
        : null}
    </CarouselWrapper>
  )
}
