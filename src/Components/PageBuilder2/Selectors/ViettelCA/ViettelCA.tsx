import React, { useContext } from 'react'
import styled from '@emotion/styled'
import ReactPlayer from 'react-player'
import { ContentDisplay } from '../../config'
import { pageBuilderContext } from '../..'

interface IProps {
  data: ContentDisplay
}

export const ViettelCA = (props: IProps) => {
  const { data } = props
  const { updateProps } = useContext(pageBuilderContext)
  return (
    <Div>
      <div className='title'>
        <Title
          contentEditable
          onBlur={e => {
            const text = (e.target as HTMLElement).innerText
            if (data.id) {
              updateProps(data.id, { title: text })
            }
          }}
          suppressContentEditableWarning={true}
        >
          {data.title}
        </Title>
      </div>
      <div className='subTitle'>
        <SubTitle>
          <p
            contentEditable
            suppressContentEditableWarning={true}
            onBlur={e => {
              const text = e.currentTarget.innerText
              if (data.id) {
                updateProps(data.id, { content: text })
              }
            }}
          >
            {data.content}
          </p>
        </SubTitle>
      </div>
      <div className='content1'>
        <Content image={data.image} />
      </div>
    </Div>
  )
}
const Title = styled.div`
  padding-top: 30px;
  justify-content: center;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #202020;
`
const Div = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #ffffff;
  font-family: 'Inter';
  font-style: normal;
  .title {
    .part1 {
      color: #ef0032;
    }
    .part2 {
      color: #202020;
    }
  }
  .subTitle {
    justify-content: center;
    margin-top: 30px;
    max-width: 1041px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #000000;
  }

  .content1 {
    padding-top: 15px;
    justify-items: center;
    padding-bottom: 20px;
    .player-wrapper {
      position: relative;
      border-radius: 5px;
    }
    .react-player {
      top: 0;
      left: 0;
      border-radius: 16px !important;
      overflow: hidden;
    }
  }
`
// function SubTitle (props: any) {
//   return (
//     <div>
//       <p>{props.subTitle}</p>
//     </div>
//   )
// }

const SubTitle = styled('div')(() => ({}))

function Content (props: any) {
  return (
    <ReactPlayer
      className='react-player'
      width='684px'
      height='400px'
      url={props.image}
      playing={false}
      controls={true}
    />
  )
}
