import React, { useState } from 'react'
import styled from '@emotion/styled'
import NewsList from './NewsList'
import { Button } from 'antd'
import { ContentDisplay } from '../../config'

interface IProps {
  data: ContentDisplay
}

const NewsVer2 = (props: IProps) => {
  const { data } = props
  const initState: ContentDisplay[] = [] as ContentDisplay[]
  const getAll = () => {
    const newDisplay = initState as ContentDisplay[]
    ;(data.contentDisplayDTOList || []).forEach((display: any) => {
      display.contentDisplayDTOList.forEach((displayDTO: any) => {
        newDisplay.push(displayDTO)
      })
    })
    return newDisplay
  }
  const [contentList, setContentList] = useState(getAll())

  const handleClick = (index: number) => {
    if (index >= 0) {
      setContentList(
        (data.contentDisplayDTOList || [])[index]?.contentDisplayDTOList || []
      )
    } else {
      const newDisplay: ContentDisplay[] = [] as any[]
      ;(data.contentDisplayDTOList || []).forEach((display: any) => {
        display.contentDisplayDTOList.forEach((displayDTO: any) => {
          newDisplay.push(displayDTO)
        })
      })
      const init: any[] = []

      setContentList(init)
      setContentList(newDisplay)
    }
  }

  return (
    <Div>
      <Title
        title={data.title}
        contentDisplayDTOList={data.contentDisplayDTOList || []}
        handleClick={handleClick}
      />
      <NewsList dataList={contentList} />
    </Div>
  )
}

const Div = styled.div`
  width: 100%;
  background: #f5f5f5;
  padding-bottom: 1%;

  .title {
    font-family: 'Inter';
    font-style: normal;
    .mainTitle {
      font-weight: 700;
      font-size: 32px;
      line-height: 39px;
      color: #000000;
      margin-bottom: 2%;
    }

    .ant-btn-primary {
      background: #f5f5f5;
      border-bottom: 1px solid #000000;
      margin-right: -1px;
      border-right: 1px solid #f5f5f5;
      border-left: 1px solid #f5f5f5;
      border-top: 1px solid #f5f5f5;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: #000000;
    }
    .ant-btn-primary:hover {
      color: #ee0033;
      border-bottom: 1px solid #ee0033;
    }
  }
`

function Title (props: {
  handleClick: (arg0: any) => void
  title: any
  contentDisplayDTOList: any[]
}) {
  const changeIndex = (index: number) => {
    props.handleClick(index)
  }
  return (
    <div className='title' style={{ textAlign: 'center', paddingTop: '3%' }}>
      <p className='mainTitle'>{props.title} </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        {props.contentDisplayDTOList.map((display, index) => {
          return (
            <>
              {index === 0 ? (
                <Button
                  type='primary'
                  key={display.id}
                  onClick={() => changeIndex(-1)}
                >
                  {'Tất cả'}
                </Button>
              ) : (
                ''
              )}
              <Button
                type='primary'
                key={display.id}
                onClick={() => changeIndex(index)}
              >
                {display.title}
              </Button>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default NewsVer2
