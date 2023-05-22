import React from 'react'
import styled from '@emotion/styled'
import FeedbackContentDetail from './FeedbackContentDetail'

interface IProps {
  contentDisplayDTOList: any
}

const FeedbackContent = (props: IProps) => {
  const renderContent = (data: any) => {
    return (
      <FeedbackContentDetail
        image={data.image}
        icon={data.icon}
        content={data.content}
        title={data.title}
        subtitle={data.subtitle}
      />
    )
  }
  return (
    <Div>
      {props.contentDisplayDTOList.map((item: any, index: number) => {
        return <div key={item.id}>{renderContent(item)}</div>
      })}
    </Div>
  )
}

const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`

export default FeedbackContent
