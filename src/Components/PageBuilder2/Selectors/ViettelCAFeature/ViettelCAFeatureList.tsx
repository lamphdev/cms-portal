import React from 'react'
import ViettelCAFeatureDetail from './ViettelCAFeatureDetail'
import { Image } from 'antd'
import ViettelCAFeatureDescription from './ViettelCAFeatureDescription'
import { ContentDisplay } from '../../config'

interface IProps {
  dataList: ContentDisplay[]
}

const ViettelCAFeatureList = (props: IProps) => {
  const renderDescriptionList = () => {
    if (props.dataList === null) {
      return null
    }

    return props.dataList.map((item, index) => {
      if (index % 2 === 0) {
        return renderFeatureDetail({
          leftItem: renderImage(item),
          rightItem: renderDescription(item)
        })
      } else {
        return renderFeatureDetail({
          leftItem: renderDescription(item),
          rightItem: renderImage(item)
        })
      }
    })
  }

  const renderFeatureDetail = (data: any) => {
    return (
      <ViettelCAFeatureDetail
        key={data.id}
        leftItem={data.leftItem}
        rightItem={data.rightItem}
      />
    )
  }

  const renderImage = (props: ContentDisplay) => {
    return (
      <Image
        src={props.image}
        style={{ borderRadius: '8px', maxWidth: 644 }}
        preview={false}
      />
    )
  }

  const renderDescription = (props: ContentDisplay) => {
    return <ViettelCAFeatureDescription subContent={props} />
  }

  return <>{renderDescriptionList()}</>
}

export default ViettelCAFeatureList
