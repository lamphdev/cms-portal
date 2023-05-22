import React from 'react'
import styled from '@emotion/styled'
import { ContentDisplay } from '../../config'

interface IProps {
  contentDisplayList: ContentDisplay[]
  index: number
  setServiceIndex: any
}

const OurProductHeader = (props: IProps) => {
  const setIndex = (index: number) => {
    props.setServiceIndex(index)
  }
  return (
    <Div>
      <div className='header align-self-center row'>
        {props.contentDisplayList.map((display, index) => {
          return (
            <a
              className='sub-header col-md-2'
              style={{ marginRight: '30px', textAlign: 'center' }}
              onClick={() => setIndex(index)}
            >
              {display.title}
            </a>
          )
        })}
      </div>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  padding-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  margin: auto;
  .header {
    width: 1300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  a {
    color: #555555;
  }
`

export default OurProductHeader
